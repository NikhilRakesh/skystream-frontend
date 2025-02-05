import { useState } from "react";
import Loginimg1 from "../../src/assets/images/Loginimg1.png";
import Loginimg2 from "../../src/assets/images/Loginimg2.png";
import design from "../../src/assets/images/design.mp4";
import axiosInstance from "../../Axios";
import { useNavigate } from "react-router-dom";
import "./input.css";
import state from "../store";
import LoginValidation from "./LoginValidation";
import Swal from "sweetalert2";

function Login() {
  const [formError, setFormError] = useState({});
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.email || !user.password) {
      return alert("Please fill all the fields");
    }
    axiosInstance
      .post("/users/verify-login/", user)
      .then((res) => {
        if (res.data.message === "Login successful") {
          const userData = res.data.data;
          localStorage.setItem("user", JSON.stringify(userData));
          localStorage.setItem("user_id", res.data.data._id);
          state.userData = res.data.data;
          navigate("/dashboard");
        } else {
          alert("Invalid Credentials");
        }
      })
      .catch((err) => console.log("error:", err));
  };

  return (
    <div className="overflow-hidden relative min-h-screen background-gradiant flex justify-center items-center ">
      {/* <div className="absolute md:top-[-10rem]  top-[-20rem] right-[-10rem]  w-[35rem]">
        <img src={Loginimg1} />
      </div>
      <div className="absolute md:bottom-[-10rem] md:left-[-10rem]  md:w-[30rem] bottom-[-20rem] left-[-10rem]">
        <img src={Loginimg2} />
      </div> */}
      <div className="absolute blur-sm opacity-75">
        <video src={design} autoPlay loop muted></video>
      </div>

      <div className="z-10 body w-96 h-fit justify-center flex flex-col gap-10 items-center ">
        <div className="text-white">
          <h1 className="text-4xl font-ubuntu ">Sky Stream</h1>
        </div>
        <div className="flex flex-col gap-16">
          <div className=" flex flex-col gap-6">
            <div className="form__group field ">
              <input
                type="email"
                className="form__field invalid:border-red-500 "
                placeholder="Name"
                id="email"
                required
                onChange={handleChange}
              />
              <label htmlFor="name" className="form__label">
                Username
              </label>
              {formError.email && (
                <small className="text-red">{formError.email}</small>
              )}
            </div>

            <div className="form__group field ">
              <input
                type="password"
                className="form__field invalid:border-red-500 "
                id="password"
                placeholder="Name"
                required
                onChange={handleChange}
              />
              <label htmlFor="name" className="form__label">
                Password
              </label>
              {formError.password && (
                <small className="text-red">{formError.password}</small>
              )}
            </div>
            <div
              onClick={(e) => {
                e.preventDefault();
                navigate("/forgot-password");
              }}
              className="text-slate-400 cursor-pointer text-sm flex justify-end hover:underline hover:text-white "
            >
              <h1>Forget Password?</h1>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="hover:cursor-pointer w-[22.5rem] flex items-center justify-center h-fit py-2 bg-violet rounded-md hover:scale-105 transition-all ease-in-out text-white text-lg"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
