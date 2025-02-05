/* eslint-disable react/prop-types */
import { useState } from "react";

function InboxTab({ name, email, contact, message, _id, onCheckboxChange }) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    onCheckboxChange(_id, !checked); // Pass _id and checkbox state to parent
  }

  return (
    <div className="border-b-2 border border-b-gray shadow-lg  w-full justify-between bg-white rounded-lg px-10  items-center py-3">
      <div className="flex md:flex-row flex-col md:gap-0 gap-2 justify-between">
        <div className="name md:flex gap-5 md:items-center  font-semibold  w-12/4">
          <div className="flex justify-end">
            <input
              type="checkbox"
              className="w-5 h-5 "
              checked={checked}
              onChange={handleChange}
            />
          </div>
          <h1 className="truncate font-bold">Name: <span className="text-sm font-light">{name}</span></h1>
        </div>
        <div className="email font-bold w-12/4">
          <h1>Email: <span className="text-sm font-light">{email}</span></h1>
        </div>
        <div className="phone font-bold  w-12/4">
          <h1>Number: <span className="text-sm font-light">{contact}</span></h1>
        </div>
      </div>

      <div className="message py-5">
        <p className="font-ubuntu">{message}</p>
      </div>
    </div>
  );
}

export default InboxTab;
