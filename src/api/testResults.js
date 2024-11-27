import testAxiosInstance from './testAxiosInstance';

export const getTestResults = async () => {
  const response = await testAxiosInstance.get();
  return response.data;
};

export const createTestResult = async (resultData) => {
  const response = await testAxiosInstance.post("/", resultData);
  return response.data;
};

export const deleteTestResult = async (id) => {
  const response = await testAxiosInstance.delete(`/${id}`);
  return response.data;
};

export const updateTestResultVisibility = async (id, visibility) => {
  const response = await testAxiosInstance.patch(`/${id}`, {
    visibility,
  });
  return response.data;
};
