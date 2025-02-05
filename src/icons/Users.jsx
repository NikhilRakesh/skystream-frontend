import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";

function Users() {
  const snap= useSnapshot(state)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
     fill="none"
      viewBox="0 0 24 24"
    >
      <path
       
        stroke="#CCD2E3"
        strokeWidth="2"
        d="M17.796 20.706c-.342-1.063-1.096-2.003-2.143-2.673C14.605 17.363 13.32 17 12 17c-1.32 0-2.605.363-3.653 1.033-1.047.67-1.8 1.61-2.143 2.673"
      ></path>
      <circle
      
        cx="12"
        cy="10"
        r="3"
        stroke="#51CBFF"
        strokeLinecap="round"
        strokeWidth="2"
      ></circle>
      <rect
      
        width="18"
        height="18"
        x="3"
        y="3"
        stroke="#CCD2E3"
        strokeWidth="2"
        rx="3"
      ></rect>
    </svg>
  );
}

export default Users;