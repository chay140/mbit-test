import axiosInstance from './axiosInstance';

export const register = async (userData) => {
  const response = await axiosInstance.post(`/register`, userData);
  return response.data;
};

export const login = async (userData) => {
  const { id, password } = userData;
  const response = await axiosInstance.post(`/login?expiresIn=10h`, {
    id,
    password,
  });
  return response.data;
};

export const getUserProfile = async () => {
  const response = await axiosInstance.get(`/user`);
  return response.data;
};

export const updateProfile = async (formData) => {
  const response = await axiosInstance.patch(`/profile`, formData);
  return response.data;
};
