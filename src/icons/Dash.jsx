import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";

function Dash() {
  const snap= useSnapshot(state)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="24"
      fill="none"
      viewBox="0 0 27 24"
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M3.928 3.879c-.879.878-.879 2.293-.879 5.121v6c0 2.828 0 4.243.879 5.121C4.807 21 6.22 21 9.049 21h9.312c2.828 0 4.242 0 5.121-.879.879-.878.879-2.293.879-5.121V9c0-2.828 0-4.243-.879-5.121C22.603 3 21.189 3 18.361 3H9.049c-2.828 0-4.242 0-5.121.879zM17.968 8a1 1 0 011 1v8a1 1 0 11-2 0V9a1 1 0 011-1zm-7.525 3a1 1 0 10-2 0v6a1 1 0 102 0v-6zm4.262 2a1 1 0 10-2 0v4a1 1 0 102 0v-4z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Dash;