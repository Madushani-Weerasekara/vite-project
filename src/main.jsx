import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BlogPage from './pages/BlogPage.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Login from './pages/Login.jsx';

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

    {
      path: "/aboutus",
      element: <AboutUs/>
    },

    {
      path: "/login",
      element: <Login/>
    },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Use RouterProvider to manage routing */}
    <RouterProvider router={router} />
  </StrictMode>,
);
