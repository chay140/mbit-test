import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="h-full bg-ivory flex flex-col">
      <Header />
      <main className="container mx-auto pt-10">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
