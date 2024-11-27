import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

const Menu = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.info("로그아웃 되었습니다.")
    logout();
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
