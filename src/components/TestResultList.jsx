import React from 'react';
import { useEffect, useState } from 'react';
import { getTestResults } from '../api/testResults';
import { useAuth } from '../context/AuthContext';
import TestResultItem from './TestResultItem';
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';

const TestResultList = () => {
  const { user: currentUser } = useAuth();

  const {
    data: testResults = [],
    error,
    isPending,
  } = useQuery({
    queryKey: ['testResults'],
    queryFn: getTestResults,
  });

  if (isPending) {
    return <div className="space-y-4">다른 테스트 결과 로딩 중...</div>;
  }

  if (error) {
    return (
      <div className="space-y-4">테스트 결과 fetch error : {error.message}</div>
    );
  }

  return (
    <div className="space-y-4">
      {testResults
        .filter((result) => {
          if (result.userId === currentUser.userId) {
            return true;
          }

          if (result.visibility) {
            return true;
          }
        })
        .map((item) => (
          <TestResultItem
            key={item.id}
            item={item}
          />
        ))}
    </div>
  );
};

export default TestResultList;
