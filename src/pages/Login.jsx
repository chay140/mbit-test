import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { login } from '../api/auth';
import {useAuth} from '../context/AuthContext'

const Login = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      const data = await login(formData);
      if (data.success) {
        setUser(data);
        navigate('/');
      }
    } catch (error) {
      console.log('error =>', error);
      alert('로그인에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1>로그인</h1>
        <AuthForm mode="login" onSubmit={handleLogin} />
        <div className="mt-4">
          <p className="text-gray-600">
            계정이 없으신가요?{' '}
            <Link className="text-blue hover:underline" to="/signup">
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
