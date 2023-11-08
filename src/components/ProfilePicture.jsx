import React from "react";
import { HiOutlineCamera } from "react-icons/hi";

const ProfilePicture = () => {
  return (
    <div className="w-full flex items-center gap-x-4">
      <div className="relative w-20 h-20 rounded-full outline outline-offset-2 outline-1 lutline-primary overflow-hidden">
        <div className="w-full h-full bg-blue-50/50 flex justify-center items-center">
          <label
            htmlFor="profilePicture"
            className="cursor-pointer absolute inset-0 rounded-full bg-transparent"
          >
            <HiOutlineCamera className="w-7 h-auto text-primary" />
          </label>
        </div>
        <input type="file" className="sr-only" id="profilePicture" />
      </div>
      {/* ------------------------------- */}
      <button
        type="button"
        className="border border-red-500 rounded-lg px-4 py-2 text-red-500"
      >
        Delete
      </button>
    </div>
  );
};

export default ProfilePicture;
