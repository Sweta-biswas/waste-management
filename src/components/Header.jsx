import React from 'react';
import bellIcon from '../assets/fire.png';
import profileIcon from '../assets/notification.png';

function Header() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center shadow-md p-4 mb-4">
      <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-0">Bandra East, Mumbai</h2>
      <div className="flex items-center">
        <button className="mr-4">
          <img src={profileIcon} alt="Notifications" className="w-6 h-6" />
        </button>
        <img src={bellIcon} alt="Profile" className="w-8 h-8 rounded-full" />
        <span className="ml-2">5</span>
      </div>
    </div>
  );
}

export default Header;
