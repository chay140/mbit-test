import axios from 'axios';
import api from './api';

export const register = async (userData) => {
  const response = await api.post(`/register`, userData);
  return response.data;
};

export const login = async (userData) => {
  const { id, password } = userData;
  const response = await api.post(`/login?expiresIn=10h`, { id, password });
  return response.data;
};

export const getUserProfile = async (accessToken) => {
  const response = await api.get(`/user`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

export const updateProfile = async (formData, accessToken) => {
  await api.patch(`/profile`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};
