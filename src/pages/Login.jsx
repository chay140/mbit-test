import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    const fakeUser = { name: 'potato1' };
    login(fakeUser);
    navigate('/profile');
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1>로그인</h1>
        <form className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-md">
          <input
            type="text"
            name="id"
            placeholder="아이디"
            required=""
          />
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            required=""
          />
          <button
            type="submit"
            className="w-full"
            onClick={handleLogin}
          >
            로그인
          </button>
        </form>
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
