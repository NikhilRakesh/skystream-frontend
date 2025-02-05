import { useEffect, useState } from "react";
import Loginimg1 from "../../src/assets/images/Loginimg1.png";
import Loginimg2 from "../../src/assets/images/Loginimg2.png";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import axiosInstance from "../../Axios";
import { useNavigate } from "react-router-dom";

const ForgottPassword = () => {
  const [otpinput, setOtpinput] = useState(false);
  const [email, setemail] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    axiosInstance
      .post("/users/forget-password", { email })
      .then((res) => {
        
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {

    if (otp.length >= 6) {
    
      axiosInstance
        .post("/users/verify-otp", { token: otp })
        .then((res) => {
         
          navigate("/change-password");
        })
        .catch((err) => console.log(err));
          setOtp("");
    }
  }, [otp]);

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
          <h1 className="text-4xl font-ubuntu ">Sky Stream</h1>
        </div>

        <div className="w-full flex justify-center">
          <div className="input flex gap-3  ">
            <div className="flex flex-col gap-3 ">
              <label className="text-slate-300 md:px-1">Email :</label>
              <input
                className="bg-transparent border w-64 text-white px-4 border-slate-500 rounded-xl py-1"
                type="text"
                onChange={(e) => setemail(e.target.value)}
              />
              <div className="button flex "></div>
            </div>
            <div className="flex forgott-gradiant items-center justify-center h-10 mt-8 rounded-3xl hover:scale-95 transition-all ease-out ">
              <button
                className="px-4  items-center text-white"
                onClick={() => {
                  setOtpinput(true);
                  handleSubmit();
                }}
              >
                {email ? (
                  <div className="flex gap-2 items-center justify-center">
                    <h1>Back</h1>
                    <MdOutlineKeyboardBackspace className="mt-1" />{" "}
                  </div>
                ) : (
                  <div className="flex gap-1 items-center justify-center">
                    <h1>Submit</h1>
                    <IoIosArrowRoundForward className="mt-1 text-lg font-bold" />{" "}
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>

        {otpinput ? (
          <div className="text-white">
            <input
              type="text"
              value={otp}
              className="bg-transparent border rounded-xl px-2 w-32 py-1 "
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ForgottPassword;
