import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
  const { user } = useAuth();

  // 유저인 경우
  if (user) {
    return <Outlet />;
  }

  // 유저가 아닌 경우
  return <Navigate to="/login" replace />;
}

export default ProtectedRoute;
