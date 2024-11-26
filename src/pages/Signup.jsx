import AuthForm from "../components/AuthForm";

const Signup = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1>회원가입</h1>
        <AuthForm type="signup" />
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
