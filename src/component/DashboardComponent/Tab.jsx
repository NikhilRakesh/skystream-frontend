import React from 'react'
import Dash from '../../icons/Dash';
import Inbox from '../../icons/Inbox';
import Settings from '../../icons/Settings';
import Users from '../../icons/Users';
import Channel from '../../icons/Channel';
import Live from '../../icons/live';
import { useNavigate } from 'react-router-dom';
import { useSnapshot } from 'valtio';
import state from '../../store';

function Tab({name,value,handleClick}) {
 
  const component = name === 'Dashboard' ? <Dash/> : name === 'Inbox' ? <Inbox/> : name === 'Settings' ? <Settings/>: name === 'Users' ? <Users/>: name === 'Channel' ? <Channel/> : <Live/>
     
  return (
    <div
      className={`underline-offset-4 cursor-pointer hover:scale-105 transform flex mt-6 pl-3 w-full  py-1 gap-3 justify-start lg:pl-6 `}
      onClick={() => handleClick(value)}
    >
      <div className="icon text-white text-3xl">{component}</div>
      <div
        className={`text-white text-base ${
          state.currentTab == value ? "underline font-semibold " : ""
        }`}
      >
        <h1>{name}</h1>
      </div>
    </div>
  );
}

export default Tab;
