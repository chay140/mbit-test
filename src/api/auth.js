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

export const getUserProfile = async (accessToken) => {
  const response = await axiosInstance.get(`/user`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

export const updateProfile = async (formData, accessToken) => {
  await axiosInstance.patch(`/profile`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};
