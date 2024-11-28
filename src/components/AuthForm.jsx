import React, { useState } from 'react';

// 회원가입 및 로그인
const AuthForm = ({ mode, onSubmit }) => {
  const [formData, setFormData] = useState({
    id: '',
    password: '',
    nickname: '',
  });

  // 입력값
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 제출
  // 로그인에서 불렸으면 login
  // 회원가입창에서는 signup으로 요청 보내짐
  const handleSubmit = (e) => {
    e.preventDefault();
    // 데이터 전달만
    onSubmit(formData);
  };
  return (
    <form
      className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="id"
        value={formData.id}
        onChange={handleChange}
        placeholder="아이디"
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="비밀번호"
        required=""
      />
      {mode === 'signup' && (
        <input
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          placeholder="닉네임"
          required
        />
      )}
      <button type="submit" className="w-full">
        {mode === 'login' ? `로그인` : `회원가입`}
      </button>
    </form>
  );
};

export default AuthForm;
