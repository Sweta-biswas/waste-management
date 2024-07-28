import React from 'react';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';

function RecentItems() {
  const items = [
    { id: 1, image: img2 },
    { id: 2, image: img3 },
    { id: 3, image: img4 },
    { id: 4, image: img5 },
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Most recent</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md w-full h-60"> {/* Increased height */}
            <img src={item.image} alt={`Recent item ${item.id}`} className="w-full h-full object-cover" /> {/* Ensuring the image covers the container */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentItems;
