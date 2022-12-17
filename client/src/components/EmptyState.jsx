import React from 'react';

const EmptyState = () => {
  return (
    <div className="empty-state bg-gray-200 flex flex-col justify-center py-8 border" style={{height: '50vh'}}>
      <h1 className="mx-auto text-xl pb-2 font-bold uppercase">No charity to display</h1>
      <p className="mx-auto text-xl">
        Sorry, there is nothing here to see at this time. Please head head to Explore and save your favorite charities!
      </p>
    </div>
  );
};

export default EmptyState;
