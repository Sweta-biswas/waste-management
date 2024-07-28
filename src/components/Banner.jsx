import React from 'react';
import wasteManagementImage from '../assets/img1.png';

function Banner() {
  return (
    <div className="bg-yellow-200 p-6 mb-6 flex flex-col lg:flex-row items-center lg:items-start">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center w-full">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-0 lg:mr-4">Waste Management</h2>
        <img 
          src={wasteManagementImage} 
          alt="Waste Management" 
          className="w-full lg:w-1/3 h-auto object-cover lg:object-contain"
        />
      </div>
      <div className="flex justify-center mt-4 lg:mt-0 w-full">
        <span className="w-2 h-2 bg-gray-400 rounded-full mx-1"></span>
        <span className="w-2 h-2 bg-gray-400 rounded-full mx-1"></span>
        <span className="w-2 h-2 bg-custom-yellow rounded-full mx-1"></span>
        <span className="w-2 h-2 bg-gray-400 rounded-full mx-1"></span>
      </div>
    </div>
  );
}

export default Banner;
