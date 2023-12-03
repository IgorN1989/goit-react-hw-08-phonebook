import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from 'components/AppBar/AppBar';
import { LinearProgress } from '@mui/material';

// ================================================================

export const Layout = () => {
  return (
    <div
      style={{
        minWidth: 320,
        maxWidth: 960,
        margin: '0 auto',
        padding: '0 16px',
      }}
    >
      <AppBar />
      <Suspense
        fallback={
          <LinearProgress
            sx={{ height: '8px', position: 'fixed', top: 48, left: 0 }}
          />
        }
      >
        <Outlet />
      </Suspense>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};
