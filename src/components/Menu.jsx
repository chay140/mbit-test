import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Menu = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    // 알림 필요할 듯
  };

  return (
    <div className="space-x-4">
      {user ? (
        <>
          <Link className="link" to="/profile">
            프로필
          </Link>
          <Link className="link" to="/testpage">
            테스트
          </Link>
          <Link className="link" to="/testresult">
            결과 보기
          </Link>
          <button onClick={handleLogout}>로그아웃</button>
        </>
      ) : (
        <button onClick={() => navigate('/login')}>로그인</button>
      )}
    </div>
  );
};

export default Menu;
