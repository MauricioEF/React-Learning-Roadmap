import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import router from './router.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<h1>Loading...</h1>}>
      <RouterProvider router={router}/>
    </Suspense>
  </StrictMode>
);
