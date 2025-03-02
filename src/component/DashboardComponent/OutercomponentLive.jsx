import LiveTabs from "./LiveTabs";
import { useEffect, useState } from "react";
import axiosInstance from "../../../Axios";
import SkelitonList from "./SkelitonList";
import { useSnapshot } from "valtio";
import state from "../../store";

function OutercomponentLive() {
  const snap = useSnapshot(state);

  const [live, setLive] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get(`/stats/live-now/${snap?.userData?._id}`)
      .then((res) => {
        setLoading(false);
        if (res.data.length === 0) {
          return setLive([]);
        }

        setLive(res.data);
      })
      .catch((err) => console.log(err));
  }, [snap.userId]);

  return (
    <>
      <div className="bg-gray relative">
        <div className="w-full px-24 py-5 bg-white ">
          <div className="header flex justify-between  font-bold border-b-2 pb-10">
            <div className="name  flex  w-1/12 ">
              <p>NAME</p>
            </div>
            <div className="name  justify-center flex   w-3/12 ">
              <p className="">Start Time</p>
            </div>
            <div className="name  justify-center flex   w-2/12 ">
              Stream status
            </div>
            <div className="name  flex  justify-center   w-2/12 ">
              In Bandwidth
            </div>
            <div className="name  flex  justify-center  w-2/12 ">
              Out Bandwidth
            </div>
            <div className="name  flex  justify-center  w-2/12 ">
              Stream Preview
            </div>
            <div></div>
            <div></div>
          </div>
          <div className="tabs flex flex-col gap-2 ">
            {loading ? (
              <SkelitonList />
            ) : live && Array.isArray(live) && live.length === 0 ? (
              <div>No one is live</div>
            ) : (
              live?.map((item, index) => <LiveTabs key={index} {...item} />)
            )}
          </div>
        </div>
      </div>
      {}
    </>
  );
}

export default OutercomponentLive;
