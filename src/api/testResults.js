import testAxiosInstance from './testAxiosInstance';

// 테스트 결과 받아오기
export const getTestResults = async () => {
  const response = await testAxiosInstance.get();
  return response.data;
};

// 테스트 결과 생성
export const createTestResult = async (resultData) => {
  const response = await testAxiosInstance.post("/", resultData);
  return response.data;
};

// 테스트 결과 삭제
export const deleteTestResult = async (id) => {
  const response = await testAxiosInstance.delete(`/${id}`);
  return response.data;
};

// 테스트 공개여부 변환
export const updateTestResultVisibility = async (id, visibility) => {
  const response = await testAxiosInstance.patch(`/${id}`, {
    visibility,
  });
  return response.data;
};
