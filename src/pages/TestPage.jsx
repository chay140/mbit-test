import React, { useState } from 'react';
import TestForm from '../components/TestForm';
import { calculateMBTI, mbtiDescriptions } from '../utils/mbtiCalculator';
import { createTestResult } from '../api/testResults';
import { useNavigate } from 'react-router-dom';

const TestPage = ({ user }) => {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);

  const handleTestSubmit = async (answers) => {
    const mbtiResult = calculateMBTI(answers);
    /* Test 결과는 mbtiResult 라는 변수에 저장이 됩니다. 이 데이터를 어떻게 API 를 이용해 처리 할 지 고민해주세요. */
  };

  const handleNavigateToResults = () => {
    navigate('/results');
  };

  return (
    <div className="w-11/12 flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8">
      <div className="rounded-lg p-8 max-w-lg w-full h-full overflow-y-auto">
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
