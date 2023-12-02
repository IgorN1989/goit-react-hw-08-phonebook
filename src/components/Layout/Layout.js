import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from 'components/AppBar/AppBar';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <div
      style={{
        minWidth: 320,
        maxWidth: 960,
        margin: '0 auto',
        padding: '0 16px',
        outline: '10px solid red',
      }}
    >
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};
