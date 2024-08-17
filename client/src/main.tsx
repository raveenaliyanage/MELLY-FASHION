import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './index.css';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import NotFoundPage from './pages/NotFoundPage'; // Import the NotFoundPage component
import axios from 'axios';

axios.defaults.baseURL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : '/'


// Define your router with a fallback route
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<HomePage />} />
      <Route path="product/:slug" element={<ProductPage />} />
      {/* Add other routes here */}
      {/* <Route path="dashboard" element={<Dashboard />} /> */}
      <Route path="*" element={<NotFoundPage />} />
      {/* Catch-all route for undefined paths */}
      
    </Route>
  )
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
  <RouterProvider router={router} />
  </HelmetProvider>
  </StrictMode>
);
