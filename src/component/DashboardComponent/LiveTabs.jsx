import { useEffect, useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import PreviewLive from "./PreviewLive";
import dateFormat from "dateformat";

function LiveTabs({ bandWidthData, ...item }) {
  const [preview, setPreview] = useState(false);
 
  const matchingData = bandWidthData.find(data => data.id === item.client_id);


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
        <div className=" w-2/12  flex justify-center">{matchingData?.kbps.recv_30s}</div>
        <div className=" w-2/12  flex justify-center">{matchingData?.kbps.send_30s}</div>
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
