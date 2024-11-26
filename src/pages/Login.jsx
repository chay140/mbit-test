import AuthForm from "../components/AuthForm";

const Login = () => {

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1>로그인</h1>
        <AuthForm mode="login" />
        <div className="mt-4">
          <p className="text-gray-600">
            계정이 없으신가요?{' '}
            <a className="text-blue hover:underline" href="/signup">
              회원가입
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
