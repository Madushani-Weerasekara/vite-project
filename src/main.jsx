import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import BlogPage from './pages/BlogPage.jsx';

// Set up routing using createBrowserRouter
const router = createBrowserRouter([
  {
  path: "/",
  element: <App />
  },

  {
    path: "/blog",
    element: <BlogPage/>
    },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Use RouterProvider to manage routing */}
    <RouterProvider router={router} />
  </StrictMode>,
);
