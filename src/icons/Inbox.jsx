import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";

function Inbox() {
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
        d="M4 12a8 8 0 018-8v0a8 8 0 018 8v5.09c0 .848 0 1.27-.126 1.609a2 2 0 01-1.175 1.175C18.36 20 17.937 20 17.09 20H12a8 8 0 01-8-8v0z"
      ></path>
      <path
        stroke="#51CBFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 11h6"
      ></path>
      <path
        stroke="#CCD2E3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 15h3"
      ></path>
    </svg>
  );
}

export default Inbox;