import React from "react";

function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      <div className="md:flex items-center">
        <img
          className="h-24 w-24 rounded-full mx-auto md:mx-0 md:mr-6 object-cover border-2 border-indigo-500"
          src="https://via.placeholder.com/150"
          alt="User"
        />
        <div className="text-center md:text-left">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">John Doe</h1>
          <p className="text-sm text-indigo-600 mt-1">Developer at Example Co.</p>
          <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm">
            Loves to write code and explore new technologies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
