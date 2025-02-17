import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.jsx'
import './index.css'
import{
  createBrowserRouter,
  RouterProvider,

} from 'react-router-dom';


const router = createBrowserRouter([
  {
  path: "/",
  element: <App />
  },
]);


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
