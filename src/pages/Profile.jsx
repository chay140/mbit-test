import { useState } from 'react';
import { updateProfile } from '../api/auth';
import { useNavigate } from 'react-router-dom';

const Profile = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState(user?.nickname || '');

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // db 변경한 것
      const data = await updateProfile({ nickname }, user.accessToken);
      if (data.success) {
        // 프론트엔드 변경
        setUser({ ...user, nickname, avatar: data.avatar });
        navigate("/");
      }
    } catch (error) {}
  };
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1>프로필 수정</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              닉네임
            </label>
            <input type="text" />
          </div>
          <button type="submit" className="w-full py-3">
            프로필 업데이트
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
