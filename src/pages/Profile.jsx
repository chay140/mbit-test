import { useEffect, useState } from 'react';
import { getUserProfile, updateProfile } from '../api/auth';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

const Profile = () => {
  const { user, setUser } = useAuth();
  const [nickname, setNickname] = useState(user?.nickname || '');

  // 프로필 정보 가져오기 (처음에만)
  useEffect(() => {
    const fetchProfile = async () => {
      if (!user?.accessToken) {   // 엑세스 토큰이 없음
        return;
      }

      try {
        const data = await getUserProfile(user.accessToken);
        if (data.success) {
          setNickname(data.nickname);
        }
      } catch (error) {
        toast.error("프로필 정보 가져오기에 실패하였습니다");
      }
    };
    fetchProfile();
  }, [user]);

  // input value 위한 핸들러
  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  // nickname 바꾸기
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // db 변경한 것
      const data = await updateProfile({ nickname }, user.accessToken);
      if (data.success) {
        // 프론트엔드 변경
        setUser({ ...user, nickname, avatar: data.avatar });
        toast.success("닉네임이 업데이트 되었습니다");
      }
    } catch (error) {
      console.log(`fetchProfile error\n${error}`)
      toast.error("업데이트 실패");
    }
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
            <input
              type="text"
              value={nickname}
              onChange={handleNicknameChange}
            />
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
