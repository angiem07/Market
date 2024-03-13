import ReactDOM from "react-dom/client";
import React, { Suspense, lazy } from 'react'; 
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

// Lazy load components
const App = lazy(() => import("./App.jsx"));
const Home = lazy(() => import("./pages/Home.jsx"));
const Detail = lazy(() => import("./pages/Detail"));
const NoMatch = lazy(() => import("./pages/NoMatch"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Signup = lazy(() => import("./pages/Signup"));
const Success = lazy(() => import("./pages/Success"));
const OrderHistory = lazy(() => import("./pages/OrderHistory"));
const Profile = lazy(() => import("./pages/Profile"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const CartPage = lazy(() => import('./pages/CartPage'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    error: <NoMatch />,
    children: [
      // Redirect from the index route to "/login" by default
      {
        index: true,
        element: isAuthenticated() ? (
          <Navigate to="/home" replace />
        ) : (
          <Navigate to="/login" replace />
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/orderHistory",
        element: <OrderHistory />,
      },
      {
        path: "/products/:id",
        element: <Detail />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
      {
        path: "/home",
        element: isAuthenticated() ? (
          <Home />
        ) : (
          <Navigate to="/login" replace />
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={<div>Loading...</div>}> {/* Add a fallback */}
    <RouterProvider router={router} />
  </Suspense>
);

function isAuthenticated() {
  const token = localStorage.getItem("id_token");
  return !!token;
}