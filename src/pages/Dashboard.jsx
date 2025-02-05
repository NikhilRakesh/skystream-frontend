import Sidebar from "../component/DashboardComponent/Sidebar";
import Right from "../component/DashboardComponent/Right";
import { useEffect, useState } from "react";
import axiosInstance from "../../Axios";
import { useSnapshot } from "valtio";
import state from "../store";
import { CloseButton } from "@chakra-ui/react";

function Dashboard() {
  const snap = useSnapshot(state);
  const [message, setMessage] = useState(true);

  // useEffect(() => {
  //   setInterval(() => {
  //     axiosInstance
  //       .post("/auth/refresh-token", {}, { withCredentials: true })
  //       .catch((err) => console.log(err));
  //   }, 10000);
  // }, []);

  return (
    <div className="flex  ">
      {snap.userData.message.block && (
        <div className=" w-screen h-screen absolute z-50  flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg h-96 w-96 justify-center items-center flex flex-col gap-5">
            <h1 className="text-xl">The admin has Blocked You</h1>
            <h1>Message</h1>
            <h1 className="font-bold">{snap.userData.message.data}</h1>
          </div>
        </div>
      )}
      {message && snap.userData.message.data && (
        <div className="w-screen h-screen absolute z-50 flex justify-center items-center">
          <div className="bg-white relative rounded-lg shadow-lg h-96 w-96 justify-center items-center flex flex-col gap-5">
            <CloseButton
              onClick={() => setMessage(false)}
              className="absolute right-10 top-10"
            />
            <h1 className="text-xl">The admin Has Send You a message</h1>
            <h1>Message</h1>
            <h1 className="font-bold">{snap.userData.message.data}</h1>
          </div>
        </div>
      )}
      <div className="">
        <Sidebar />
      </div>
      <div className="w-full flex  justify-end ">
        <Right />
      </div>
    </div>
  );
}

export default Dashboard;
