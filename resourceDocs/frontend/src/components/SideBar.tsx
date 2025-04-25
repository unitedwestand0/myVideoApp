import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { AppDispatch } from "../reducers/store";
import {
  FaBars,
  FaCog,
  FaHome,
  FaTimes,
  FaUpload,
  FaUser,
  FaVideo,
} from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { fetchUserDetails, logOutUser } from "../reducers/auth/authReducer";

const SideBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    dispatch(fetchUserDetails());
  }, []);
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 w-64 h-screen bg-black text-white lg:bg-bgOne lg:text-textOne shadow-lg transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <div className="p-4  text-2xl font-semibold border-b border-gray-300 hidden md:block">
          My Video Hub
        </div>
        <nav className="mt-10 md:mt-7">
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/"
                className="flex items-center p-3 hover:bg-bgTwo hover:text-gray-900 rounded-md"
                onClick={toggleSidebar}
              >
                <FaHome size={20} className="mr-3" />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/user/dashboard"
                className="flex items-center p-3 hover:bg-bgTwo hover:text-gray-900 rounded-md"
                onClick={toggleSidebar}
              >
                <FaUser className="mr-3" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/user/upload-video"
                className="flex items-center p-3 hover:bg-bgTwo hover:text-gray-900 rounded-md"
                onClick={toggleSidebar}
              >
                <FaUpload className="mr-3" />
                <span>Upload Video</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/user/edit/my-videos"
                className="flex items-center p-3 hover:bg-bgTwo hover:text-gray-900 rounded-md"
                onClick={toggleSidebar}
              >
                <FaVideo className="mr-3" />
                <span>My Videos</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/user/profile"
                className="flex items-center p-3 hover:bg-bgTwo hover:text-gray-900 rounded-md"
                onClick={toggleSidebar}
              >
                <FaCog className="mr-3" />
                <span>User profile</span>
              </NavLink>
            </li>
            <li>
              <div
                className="flex items-center p-3 hover:bg-bgTwo hover:text-gray-900 rounded-md cursor-pointer"
                onClick={() => dispatch(logOutUser(navigate))}
              >
                <IoIosLogOut size={20} className="mr-3" />
                <span>Log out</span>
              </div>
            </li>
          </ul>
        </nav>
      </div>

      {/* Top Navbar */}
      <div className="fixed top-0 left-0 right-0 bg-black lg:hidden text-white h-12 flex items-center px-4 shadow-md z-50">
        {/* Toggle Button for Mobile */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden text-white text-2xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navbar Content */}
        <div className=" w-full flex items-center justify-center ">
          <NavLink to="/" className="text-lg font-semibold ">
            My Video Hub
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SideBar;
