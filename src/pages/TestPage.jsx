import React, { useState } from 'react';
import TestForm from '../components/TestForm';
import { calculateMBTI, mbtiDescriptions } from '../utils/mbtiCalculator';
import { useAuth } from '../context/AuthContext';
import { createTestResult } from '../api/testResults';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const TestPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [result, setResult] = useState(null);

  const handleTestSubmit = async (answers) => {
    const mbtiResult = calculateMBTI(answers);
    setResult(mbtiResult);
    try {
      const resultData = {
        userId: user.userId,
        nickname: user.nickname,
        avatar: user.avatar,
        mbti: mbtiResult,
        visibility: true,
        date: new Date().toLocaleString('ko-KR'),
      };

      const data = await createTestResult(resultData);
    } catch (error) {
      // TODO change UI
      toast.error("테스트 결과가 저장되지 못했습니다");
    }
  };

  const handleNavigateToResults = () => {
    navigate('/testresult');
  };

  return (
    <div className="w-9/12 mx-auto flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8 mb-8">
      <div className="rounded-lg p-8 overflow-y-auto ">
        {!result ? (
          <>
            <h1>MBTI 테스트</h1>
            <TestForm onSubmit={handleTestSubmit} />
          </>
        ) : (
          <>
            <h1>테스트 결과: {result}</h1>
            <p className="text-lg text-gray-700 mb-6">
              {mbtiDescriptions[result] ||
                '해당 성격 유형에 대한 설명이 없습니다.'}
            </p>
            <button onClick={handleNavigateToResults} className="w-full">
              결과 페이지로 이동하기
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TestPage;
