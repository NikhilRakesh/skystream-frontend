import { useEffect, useState } from "react";
import CircleChart from "./CircleChart";
import Gauage from "./Gauage";
import axiosInstance from "../../../Axios";
import { Skeleton } from "@chakra-ui/react";
import { useSnapshot } from "valtio";
import state from "../../store";

function Meter() {
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);
  const snap = useSnapshot(state);

  useEffect(() => {
      axiosInstance
        .get("/stats/system")
        .then((res) => {
          setStats(res.data.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);

  return (
    <div className=" h-72 md:w-[790px]  rounded-xl bg-white py-5 px-5 gap-5 flex flex-col ">
      <div className="flex justify-around">
        {loading ? (
          <>
            <Skeleton className="w-32 h-24" />
            <Skeleton className="w-32 h-24" />
            <Skeleton className="w-32 h-24" />
          </>
        ) : (
          <>
            {snap.userData.superAdmin && (
              <>
                <div className="flex items-center flex-col gap-3">
                  <Gauage percent={stats.cpuUsage} />
                  <h6 className="mt-7 text-sm font-thin">CPU Load</h6>
                </div>
                <div className="flex items-center flex-col gap-3">
                  <Gauage percent={stats.diskWrite} />
                  <h6 className="mt-7 text-sm">Disk Read</h6>
                </div>
                <div className="flex items-center flex-col gap-3">
                  <Gauage percent={(stats.diskWrite / stats.cpuCount) * 100} />
                  <h6 className="mt-7 text-sm">Disk Write</h6>
                </div>
              </>
            )}
          </>
        )}
      </div>
      <div className="w-full justify-around flex">
        {loading ? (
          <>
            <Skeleton className="w-32 h-24" />
            <Skeleton className="w-32 h-24" />
            <Skeleton className="w-32 h-24" />
          </>
        ) : (
          <>
            <div className="flex flex-col items-center">
              <CircleChart value={stats?.inBandwidth} />
              <h6 className="mt-3">In Bandwidth</h6>
            </div>
            <div className="flex flex-col items-center">
              <CircleChart value={stats?.outBandwidth} />
              <h6 className="mt-3">Out Bandwidth</h6>
            </div>
            <div className="flex flex-col items-center">
              <CircleChart value={stats?.memoryUsage} />
              <h6 className="mt-3">Memory Usage</h6>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Meter;
