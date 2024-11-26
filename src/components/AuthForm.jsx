import React, { useState } from 'react';

const AuthForm = ({ mode, onSubmit }) => {
  // 무엇을 formData 에 넣어야 할까요?
  const [formData, setFormData] = useState({
    id: '',
    password: '',
    nickname: '',
  });

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// 데이터 전달만
		onSubmit(formData);
	};
  return (
    <form className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
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
