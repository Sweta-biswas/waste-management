import React from 'react';
import Header from './Header';
import Banner from './Banner';
import RecentItems from './RecentItems';

function MainContent() {
  return (
    <div className="flex-1 p-4 sm:p-8 bg-green-50">
      <Header />
      <Banner />
      <RecentItems />
    </div>
  );
}

export default MainContent;
