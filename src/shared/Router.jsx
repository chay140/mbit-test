import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Profile from '../pages/Profile';
import TestPage from '../pages/TestPage';
import TestResult from '../pages/TestResult';
import ProtectedRoute from './ProtectedRoute';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* <Route element={<ProtectedRoute />}> */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/testpage" element={<TestPage />} />
        <Route path="/testresult" element={<TestResult />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
