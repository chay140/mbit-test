import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { register } from '../api/auth';

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = async (formData) => {
    try {
      const data = await register(formData);  // {message : "회원가입", success : true}
      if (data.success) {
        navigate('/login');
      }
    } catch (error) {
      console.log("error =>", error)
      alert('회원가입에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1>회원가입</h1>
        <AuthForm mode="signup" onSubmit={handleSignup} />
        <div className="mt-4">
          <p className="text-gray-600">
            이미 계정이 있으신가요?{' '}
            <Link className="text-blue hover:underline" to="/login">
              로그인
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
