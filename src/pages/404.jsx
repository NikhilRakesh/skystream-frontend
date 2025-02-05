import { useNavigate } from "react-router-dom";
import Loginimg1 from "../../src/assets/images/Loginimg1.png";
import Loginimg2 from "../../src/assets/images/Loginimg2.png";

const PageNotFound = () => {

    const navigate = useNavigate()

  return (
    <div className="absolute top-0 right-0 min-w-[100vw] z-50 opacity-100">
      <div className="overflow-hidden relative min-h-screen background-gradiant flex justify-center items-center ">
        <div className="absolute md:top-[-10rem] top-[-20rem] right-[-10rem]  w-[35rem]">
          <img src={Loginimg1} />
        </div>
        <div className="absolute md:bottom-[-10rem] md:left-[-10rem]  md:w-[30rem] bottom-[-20rem] left-[-10rem]">
          <img src={Loginimg2} />
        </div>

        <div className="body w-96 text-white h-fit justify-center flex flex-col items-center ">
          <h1 className="text-9xl">404</h1>
          <h6 className="text-2xl">Page not Found!</h6>
          <button
            className="px-2 py-2 mt-5 underline underline-offset-4 hover:scale-105 transform cursor-pointer"
            onClick={() => navigate("/dashboard")}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
