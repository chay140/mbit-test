import axiosInstance from './axiosInstance';

// 회원가입
export const register = async (userData) => {
  const response = await axiosInstance.post(`/register`, userData);
  return response.data;
};

// 로그인
export const login = async (userData) => {
  const { id, password } = userData;
  const response = await axiosInstance.post(`/login?expiresIn=10h`, {
    id,
    password,
  });
  return response.data;
};

// 유저 프로필 불러오기
export const getUserProfile = async () => {
  const response = await axiosInstance.get(`/user`);
  return response.data;
};

// 유저 프로필 변경
export const updateProfile = async (formData) => {
  const response = await axiosInstance.patch(`/profile`, formData);
  return response.data;
};
