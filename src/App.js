import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="flex bg-gray-900 h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <MainContent />
      </div>
    </div>
  );
}

export default App;
