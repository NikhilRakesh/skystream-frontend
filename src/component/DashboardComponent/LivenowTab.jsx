/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import dateFormat from "dateformat";

function LivenowTab({ ...item }) {
  const [liveTime, setLiveTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      let date = item.startTime;
      let detNow = new Date();
      setLiveTime(detNow - date);
    }, 1000);
  }, []);

  return (
    <div>
      <div className="py-4 pr-2 flex justify-between text-sm overflow-hidden">
        <div className="flex gap-2 items-center">
          <div
            className={`rounded-full w-[10px] h-[10px] bg-red mt-[2px]`}
          ></div>
          <h1 className=" font-bold">{item.name}</h1>
        </div>

        <h1 className=" font-bold">
          {" "}
          {dateFormat(item.startTime, "dd-mm-yy,H:MM:ss")}
        </h1>
      </div>
    </div>
  );
}

export default LivenowTab;
