import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.tsx';
import './index.css';

// Create a simple NotFound component for unmatched routes
function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

// Define your router with a fallback route
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/*<Route path="dashboard" element={<Dashboard />} />*/}
      {/* ... other routes */}
      {/* Fallback route for 404 errors */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
