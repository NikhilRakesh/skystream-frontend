import React from "react";
import state from "../store";
import { useSnapshot } from "valtio";

function Live() {
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
        stroke="#51CBFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 9l-3.044 4.566a1 1 0 01-1.727-.107l-.458-.918a1 1 0 00-1.727-.107L7 17"
      ></path>
      <rect
        width="18"
        height="18"
        x="3"
        y="3"
        stroke="#CCD2E3"
        strokeWidth="2"
        rx="2"
      ></rect>
    </svg>
  );
}

export default Live;