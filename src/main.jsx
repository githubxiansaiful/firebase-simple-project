import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainRoot from './components/MainRoot';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthoProvider from './autho_provider/AuthoProvider';
import Orders from './pages/Orders';
import PrivateRoute from './components/PrivateRoute';
import PrivateRouteProfile from './components/PrivateRouteProfile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/profile',
        element: <PrivateRouteProfile><Profile></Profile></PrivateRouteProfile>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/orders',
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthoProvider>
      <RouterProvider router={router} />
    </AuthoProvider>
  </React.StrictMode>,
)
