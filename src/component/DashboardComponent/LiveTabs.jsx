import { useEffect, useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import PreviewLive from "./PreviewLive";
import dateFormat from "dateformat";
import axios from "axios";

function LiveTabs(item) {
  const [preview, setPreview] = useState(false);
  const [inBandwidth, setInBandwidth] = useState(0);
  const [outBandwidth, setOutBandwidth] = useState(0);

  const generateRandomBandwidth = () => {
    const min = 1000;
    const max = 5000;
    const randomBandwidth = Math.floor(Math.random() * (max - min + 1)) + min;
    setInBandwidth(randomBandwidth);
  };

  const generateRandomOutBandwidth = () => {
    const min = 1000;
    const max = 5000;
    const randomOutBandwidth =
      Math.floor(Math.random() * (max - min + 1)) + min;
    setOutBandwidth(randomOutBandwidth);
  };
 
 
  useEffect(() => {
    const interval = setInterval(() => {
      generateRandomBandwidth();
      generateRandomOutBandwidth();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <div className="flex  items-center w-full h-10 border-b-4 py-10 bg-white  ">
        <div className="name w-2/12 ">{item.name}</div>
        <div className="w-3/12 ">{dateFormat(item.startTime)}</div>
        <div className="w-2/12 flex justify-center">
        {item.Live ? (
            <h1 className="text-red">Live</h1>
          ) : (
            <h1 className="text-gray">Live</h1>
          )}
        </div>
        <div className=" w-2/12  flex justify-center">{inBandwidth}</div>
        <div className=" w-2/12  flex justify-center">{outBandwidth}</div>
        <div
          className="flex items-center w-2/12 justify-center"
          onClick={() => setPreview(!preview)}
        >
          <h1>Preview</h1>
          <AiFillPlayCircle className="text-blue text-xl" />
        </div>
      </div>
      {preview ? (
        <div className="flex items-center just">
          <PreviewLive
            View={preview}
            streamKey={item.streamKey}
            handleClose={setPreview}
            name={item.name}
          />
        </div>
      ) : null}
    </div>
  );
}

export default LiveTabs;
