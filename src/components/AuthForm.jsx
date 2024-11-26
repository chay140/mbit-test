import React from 'react';

const AuthForm = ({type}) => {
  return (
    <form className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-md">
      <input type="text" name="id" placeholder="아이디" required="" />
      <input
        type="password"
        name="password"
        placeholder="비밀번호"
        required=""
      />
      {type === 'signup' && (
        <input type="text" name="nickname" placeholder="닉네임" required />
      )}
      <button type="submit" className="w-full">
        {type === 'login' ? `로그인` : `회원가입`}
      </button>
    </form>
  );
};

export default AuthForm;
