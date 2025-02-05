import React from 'react';

function Name() {
  return (
    <div className="m-10">
      <div className="relative w-64">
        <input
          type="text"
          className="w-full border-b-2 border-gray-300 focus:border-green-500 p-2 outline-none"
          required
        />
        <label className="absolute top-0 left-0 w-full text-gray-300 transition-all cursor-text">
          Label Text
        </label>
      </div>
    </div>
  );
}

export default Name;
