import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import {FaQuestion} from "react-icons/fa"
import DashboardLogo from "../../assets/images/DashboardLogo.png";
import Tab from "./Tab";
import Inbox from "../../icons/Inbox";
import Users from "../../icons/Users";
import Channel from "../../icons/Channel";
import Live from "../../icons/live";
import Settings from "../../icons/Settings";
import state from "../../store";
import { useSnapshot } from "valtio";
import Dash from "../../icons/Dash";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const snap = useSnapshot(state);
  
  const obj = [
    { Component: <Dash />, name: "Dashboard", value: "dashboard" },
    { Component: <Inbox />, name: "Inbox",value: "inbox" },
    { conponent: <Users />, name: "Users",value: "user" },
    { component: <Channel />, name: "Channel",value: "channel" },
    { component: <Live />, name: "Live",value: "lives" },
    { componet: <Settings />, name: "Domain",value: "domain" },
  ];

  const newObj = [
    { Component: <Dash />, name: "Dashboard", value: "dashboard" },
    { conponent: <Users />, name: "Users", value: "user" },
    { component: <Channel />, name: "Channel", value: "channel" },
    { component: <Live />, name: "Live", value: "lives" },
  ];

  const handleNavigate =(value,name)=>{
      navigate(`/${value}`)
      state.currentTab = value
      
  }
  
  return (
    <div className="fixed md:w-2/12 w-full  z-10 md:flex flex-col  items-center   background-gradiant md:h-[90px] lg:min-h-screen ">
      <div className=" flex items-center justify-between w-full z-50 px-10 py-2 lg:py-0 lg:min-w-[200px]">
        <div
          className="logo w-6 z-50 pt-3 cursor-pointer"
          onClick={() => handleNavigate("dashboard")}
        >
          <img src={DashboardLogo} />
        </div>
        {snap.deviceType !== "Mobile" && (
          <div className="text-white pt-7 font-medium text-md cursor-pointer">
            <h1 onClick={() => handleNavigate("dashboard")}>Sky Stream</h1>
          </div>
        )}

        {snap.deviceType !== "Desktop" && (
          <div className="z-10 cursor-pointer">
            <RxHamburgerMenu
              className="text-white text-5xl mt-4"
              onClick={() => setActive(!active)}
            />
          </div>
        )}
      </div>

      <div
        className={`${
          snap.deviceType !== "Desktop" ? "background-gradiant" : ""
        } lg:translate-y-0 lg:w-full  lg:relative absolute w-screen py-9 lg:py-3 opacity-100 px-4 lg:px-0  left-0 top-0  transition-all ease-in-out duration-700 ${
          active ? "translate-y-16" : "translate-y-[-400px] "
        }`}
      >
        {snap.userData.superAdmin
          ? obj.map((item, index) => (
              <Tab key={index} {...item} handleClick={handleNavigate} />
            ))
          : newObj.map((item, index) => (
              <Tab key={index} {...item} handleClick={handleNavigate} />
            ))}
      </div>
      <div className="helpcenter bg-[#1B2B65] px-3 absolute flex-col flex items-center bottom-20  rounded-lg pt-10 pb-5">
        <div className="h-12 w-12 rounded-full glassG absolute -top-6 flex items-center justify-center">
          <div className="bg-blue items-center justify-center text-white flex rounded-full w-9 h-9">
            <FaQuestion />
          </div>
        </div>
        <div className="flex flex-col  ">
          <h1 className="text-white text-sm font-medium">
            Need Help With Dash?
          </h1>
          <a
            href="wa.link/89kd43"
            target="_blank"
            className="bg-blue cursor-pointer hover:scale-105 transition-all hover:bg-[liteblue] rounded-md flex items-center justify-center font-semibold py-2 text-white"
          >
            Go to help center
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
