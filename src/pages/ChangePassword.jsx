/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import Loginimg1 from "../../src/assets/images/Loginimg1.png";
import Loginimg2 from "../../src/assets/images/Loginimg2.png";
import axiosInstance from "../../Axios";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
  
    axiosInstance
      .post("/users/reset-password", { password })
      .then((res) => {
        navigate("/login");
        
      })
      .catch((err) => console.log(err));
  };


//   const handleError = () => {
//     if (password.length <= 0) {
//       setError("Please fill the password");
//     }
//     if (password !== newPassword) {
//       setError("! New password and Confirm password not match");
//     } else {
//       setError("");
//     }
//   };

  return (
    <div className="overflow-hidden relative min-h-screen background-gradiant flex justify-center items-center ">
      <div className="absolute md:top-[-10rem] top-[-20rem] right-[-10rem]  w-[35rem]">
        <img src={Loginimg1} />
      </div>
      <div className="absolute md:bottom-[-10rem] md:left-[-10rem]  md:w-[30rem] bottom-[-20rem] left-[-10rem]">
        <img src={Loginimg2} />
      </div>
      <div className="body w-96 h-fit justify-center flex flex-col gap-10 items-center ">
        <div className="text-white">
          <h1 className="text-4xl font-ubuntu ">Change Password</h1>
        </div>

        <div className="w-full flex justify-center">
          <div className="input flex gap-3  ">
            <div className="flex flex-col gap-3 ">
              <label className="text-slate-300 md:px-1">New Password :</label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                //   handleError();
                }}
                className="bg-transparent border w-64 text-white px-4 border-slate-500 rounded-xl py-1"
                type="password"
              />
              <label className="text-slate-300 md:px-1">
                Confirm Password :
              </label>
              <input
                onChange={(e) => {
                  setNewPassword(e.target.value);
                //   handleError();
                }}
                className="bg-transparent border w-64 text-white px-4 border-slate-500 rounded-xl py-1"
                type="text"
              />
              {error.length !== 0 && (
                <small className="text-red">{error}</small>
              )}
              <div className="flex forgott-gradiant items-center justify-center h-10 mt-8 rounded-3xl hover:scale-95 transition-all ease-out ">
                <button
                  onClick={handleSubmit}
                  className="px-4  items-center text-white"
                >
                  Change Password
                </button>
              </div>
              <div className="button flex "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
