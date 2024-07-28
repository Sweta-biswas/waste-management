import React, { useState } from 'react';
import { FaTachometerAlt, FaCalendarAlt, FaBook, FaUser, FaQuestionCircle, FaSignOutAlt, FaBars } from 'react-icons/fa'; // Importing icons
import logoImage from '../assets/image.png';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="block sm:hidden p-2 text-green-600"
        onClick={toggleSidebar}
      >
        <FaBars className="text-2xl" />
      </button>
      <div
        className={`fixed sm:relative top-0 left-0 h-full bg-green-100 p-4 flex flex-col transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out sm:translate-x-0 w-64`}
      >
        <div className="flex items-center mb-8">
          <img src={logoImage} alt="WasteWise Logo" className="w-12 h-12 mr-2" />
          <h1 className="text-2xl font-bold text-green-600">WasteWise</h1>
        </div>
        <nav className="flex-1">
          <ul>
            <li className="mb-2 bg-purple-200 rounded-full mt-4 p-2 flex items-center">
              <FaTachometerAlt className="mr-2" /> Dashboard
            </li>
            <li className="mb-2 rounded-full mt-4 p-2 flex items-center">
              <FaCalendarAlt className="mr-2" /> Scheduling
            </li>
            <li className="mb-2 rounded-full mt-4 p-2 flex items-center">
              <FaBook className="mr-2" /> Education Resources
            </li>
            <li className="mb-2 rounded-full mt-4 p-2 flex items-center">
              <FaUser className="mr-2" /> Profile
            </li>
          </ul>
        </nav>
        <div>
          <ul>
            <li className="mb-2 flex items-center p-2">
              <FaQuestionCircle className="mr-2" /> Support
            </li>
            <li className="flex items-center p-2">
              <FaSignOutAlt className="mr-2" /> Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
