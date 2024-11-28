import React from 'react';
import { useAuth } from '../context/AuthContext';
import { mbtiDescriptions } from '../utils/mbtiCalculator';
import {
  deleteTestResult,
  updateTestResultVisibility,
} from '../api/testResults';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const TestResultItem = ({ item }) => {
  const { user: currentUser } = useAuth();
  const queryClient = useQueryClient();

  // useMutation
  // 비공개/공개 토글, 결과 삭제
  const { mutate: visibilityMutation } = useMutation({
    mutationFn: ({id, visibility}) => updateTestResultVisibility(id, visibility),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['testResults'] }),
  });

  const { mutate: deleteMutation } = useMutation({
    mutationFn: deleteTestResult,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['testResults'] }),
  });

  const handleVisibility = async () => {
    visibilityMutation({ id: item.id, visibility: !item.visibility });
    const infoText = item.visibility ? '비공개' : '공개';
    toast.info(`${infoText}로 전환하였습니다`)
  };

  const handleDeleteItem = async () => {
    deleteMutation(item.id);
    toast.warn("결과가 삭제 되었습니다")
  };

  return (
    <div className="p-6 bg-blue rounded-lg shadow-lg text-white">
      <div className="flex justify-between items-center border-b border-gray-700 pb-3 mb-3">
        <h4 className="text-2xl font-semibold">{item.nickname}</h4>
        <p className="text-sm text-ivory">{item.date}</p>
      </div>
      <p className="text-3xl font-bold text-yellow-300 mb-4">{item.mbti}</p>
      <p className="text-base text-white mb-4">{mbtiDescriptions[item.mbti]}</p>
      {currentUser.userId === item.userId && (
        <div className="flex justify-end space-x-4">
          <button
            className="bg-blue-500 py-2 px-4 rounded-lg text-sm hover:bg-blue-600 transition"
            onClick={handleVisibility}
          >
            {item.visibility ? '비공개 전환' : '공개 전환'}
          </button>
          <button
            className="bg-red-500 py-2 px-4 rounded-lg text-sm hover:bg-red-300 transition"
            onClick={handleDeleteItem}
          >
            삭제
          </button>
        </div>
      )}
    </div>
  );
};

export default TestResultItem;
