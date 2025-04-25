import { createBrowserRouter } from "react-router-dom";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import UserProfile from "./pages/user/UserProfile";
import {
  PortectedRoute,
  PortectedRouteHome,
} from "./components/ProtectedRoute";
import ResetPasswordEmail from "./pages/auth/ResetPasswordEmail";
import UpdatePassword from "./pages/auth/UpdatePassword";
import Upload from "./pages/user/Upload";
import AllVideos from "./pages/AllVideos";
import Home from "./pages/Home";
import SingleVideoPage from "./pages/SingleVideoPage";
import MyVideos from "./pages/user/MyVideos";
import UpdateVideo from "./pages/user/UpdateVideo";
import Dashboard from "./pages/user/Dashboard";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/video/:id", element: <SingleVideoPage /> },
  { path: "/sign-up", element: <PortectedRoute element={<SignUp />} /> },
  { path: "/sign-in", element: <PortectedRoute element={<SignIn />} /> },
  {
    path: "/user/profile",
    element: <PortectedRouteHome element={<UserProfile />} />,
  },
  {
    path: "/user/dashboard",
    element: <PortectedRouteHome element={<Dashboard />} />,
  },
  {
    path: "/user/edit/my-videos",
    element: <PortectedRouteHome element={<MyVideos />} />,
  },
  {
    path: "/user/edit/my-video",
    element: <PortectedRouteHome element={<UpdateVideo />} />,
  },
  {
    path: "/user/upload-video",
    element: <PortectedRouteHome element={<Upload />} />,
  },
  { path: "/all-videos", element: <AllVideos /> },
  {
    path: "/reset-password",
    element: <PortectedRoute element={<ResetPasswordEmail />} />,
  },
  {
    path: "/reset-password/:token",
    element: <PortectedRoute element={<UpdatePassword />} />,
  },
]);
