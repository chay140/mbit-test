import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Menu = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogout = () => {
    console.log("handleLogOut 마저 만들기")
  }

  return (
    <div className="mr-5 space-x-4">
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
