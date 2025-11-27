import React from "react";

function UserProfile() {
  return (
  <div className="user-profile bg-gray-100 sm:p-4 md:p-8 max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      <div className="md:flex items-center">
        <img
          className="rounded-full w-24 h-24 md:w-36 md:h-36 mx-auto md:mx-0 md:mr-6 object-cover border-2 border-indigo-500"
          src="https://via.placeholder.com/150"
          alt="User"
        />
        <div className="text-center md:text-left">
          <h1 className="text-base sm:text-lg md:text-xl text-blue-800 font-semibold my-4">John Doe</h1>
          <p className="text-sm md:text-base text-indigo-600 mt-1">Developer at Example Co.</p>
          <p className="mt-3 text-gray-600 text-sm md:text-base">
            Loves to write code and explore new technologies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
