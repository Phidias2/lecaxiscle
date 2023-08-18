import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './Pages/Login.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Pages/Dashboard.jsx'
import './style.css'
import './boostrap-icon.css'
import './login.css'
import DashboardCoupon from './Pages/DashboardCoupon.jsx';
import Coupon from './Pages/Coupon.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    // element: <Accueil />
  },
  {
    path: "/login",
    element: <Login />
  },
  // {
  //   path: "/register",
  //   element: <Register />
  // },
  {
    path: "/admin/dashboard",
    element: <Dashboard />
  },
  {
    path: "/admin/dashboard/coupon",
    element: <DashboardCoupon />
  },
  {
    path: "/admin/coupon/create",
    element: <Coupon />
  },
  {
    path: "/admin/coupon/edit",
    element: <DashboardCoupon />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
