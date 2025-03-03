/* eslint-disable no-unused-vars */
import state from "../../store";
import Dropdown from "./Dropdown";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../Axios";
import { useSnapshot } from "valtio";

function DashboardHeader() {
  const value = state.currentTab;
  const navigate = useNavigate();
  const snap = useSnapshot(state);
  const logout = () => {
    axiosInstance
      .post("/auth/logout", {})
      .then((res) => {
        console.log("response");
        localStorage.removeItem("user");
        localStorage.removeItem("user_id");
        state.userData = null;
        state.userId = null;
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-between py-6 px-14 items-center ">
      <div className="text-2xl font-bold ">
        <h1>
          {value == "dashboard"
            ? "Dashboard"
            : value === "inbox"
            ? "Inbox"
            : value === "user"
            ? "Users"
            : value === "channel"
            ? "Channel"
            : value === "live"
            ? "Live"
            : value === "settings"
            ? "Settings"
            : "Dashboard"}
        </h1>
      </div>
      <div className="left flex items-center gap-6">
        {/* <div className="text-xl bg-gry rounded-full w-9 h-9 justify-center items-center flex">
          <BiBell />
        </div> */}
        <div className="account flex items-center gap-5">
          <div className="font-bold">{snap.userData.name}</div>
          <div>
            <Dropdown handleLogout={logout} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
