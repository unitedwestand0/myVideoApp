import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from './router';
//import Layout from "./components/Layout";
//import SignUp from "./pages/auth/SignUp";
import './index.css';

const App : React.FC = () => {
  return(
   <>
   <RouterProvider router={router} />
   </>
  )
}

export default App;
