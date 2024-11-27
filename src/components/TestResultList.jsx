import React from 'react';
import { useEffect, useState } from 'react';
import { getTestResults } from '../api/testResults';
import { useAuth } from '../context/AuthContext';
import TestResultItem from './TestResultItem';

const TestResultList = () => {
  const { user : currentUser } = useAuth();
  const [testResults, setTestResults] = useState([]);

  const handleUpdate = async () => {
    const newData = await getTestResults();
    setTestResults(newData);
  }

  // 데이터 받아오기
  useEffect(() => {
    const fetchResults = async () => {
      try {
        const data = await getTestResults();
        setTestResults(data);
      } catch (error) {
        // TODO
        alert(error);
      }
		};
		
		fetchResults();
  }, [testResults]);

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
          <TestResultItem key={item.id} item={item} handleUpdate={handleUpdate} />
        ))}
    </div>
  );
};

export default TestResultList;
