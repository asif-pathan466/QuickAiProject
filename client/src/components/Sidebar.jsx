import { useClerk, useUser } from '@clerk/clerk-react';
import React from 'react';

const Sidebar = ({ sidebar, setSidebar }) => {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();

  return (
    <div
      className={`w-60 bg-white border-r border-gray-200 flex flex-col
      justify-between items-center max-sm:absolute top-14 bottom-0
      transition-all duration-300 ease-in-out
      ${sidebar ? 'translate-x-0' : 'max-sm:-translate-x-full'}`}
    >
      <div className="my-7 w-full">
        {user && (
          <>
            <img
              src={user.imageUrl}
              alt="User Avatar"
              className="w-12 h-12 rounded-full mx-auto"
            />
            <h1 className="mt-1 text-center text-sm font-medium">
              {user.fullName}
            </h1>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
