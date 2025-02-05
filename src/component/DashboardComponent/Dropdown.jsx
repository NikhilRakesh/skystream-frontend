/* eslint-disable react/prop-types */
import { PiSignOutBold } from 'react-icons/pi'
import "./Dropdown.css"

const   Dropdown = ({ handleLogout }) => {
  return (
    <label className="popup z-50">
      <input type="checkbox" />
      <div className="burger" tabIndex={0}>
        <span />
        <span />
        <span />
      </div>
      <nav className="popup-window">
        <legend>Actions</legend>
        <ul>
          <hr />
          <li>
            <button onClick={handleLogout}>
              <PiSignOutBold className="text-red" />
              <span>Sign Out</span>
            </button>
          </li>
        </ul>
      </nav>
    </label>
  );
};

export default Dropdown
