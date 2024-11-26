const Signup = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1>회원가입</h1>
        <form className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-md">
          <input type="text" name="id" placeholder="아이디" required />
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            required
          />
          <input type="text" name="nickname" placeholder="닉네임" required />
          <button type="submit" className="w-full">
            회원가입
          </button>
        </form>
        <div className="mt-4">
          <p className="text-gray-600">
            이미 계정이 있으신가요?{' '}
            <a className="text-blue hover:underline" href="/login">
              로그인
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
