import { MdKeyboardArrowRight } from "react-icons/md";
import LivenowTab from "./LivenowTab";
import { Skeleton } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce"; // To debounce live data updates

function Livenow({ color, name, time, live, loading }) {
  

  return (
    <div className="bg-white rounded-xl md:w-[481px] w-full h-72 relative">
      <div className="Headding px-10 py-4 rounded-xl bg-light flex border-b-2 items-center justify-between h-fit">
        <div className="flex gap-5 items-center">
          <div className="circle rounded-full w-[30px] h-[30px] bg-red"></div>
          <h1 className="text-xl font-bold">
            {" "}
            {live.length} Channels Live Now
          </h1>
        </div>
        <div>
          <MdKeyboardArrowRight className="text-2xl text-blue mt-[5px] cursor-pointer" />
        </div>
      </div>

      <div className="body p-5 overflow-y-scroll h-52 overflow-hidden cursor-move border">
        <div className="flex text-gray font-bold items-center justify-between">
          <h1>Channel Name</h1>
          <h1>Start Time</h1>
        </div>
        <div>
          {loading ? (
            <div className="h-16 w-full flex shadow-lg justify-between items-center px-10">
              <Skeleton height="20px" width="20px" />
              <Skeleton height="20px" width="20px" />
            </div>
          ) : (
            live?.map((item, index) => <LivenowTab key={index} {...item} />)
          )}
        </div>
      </div>
    </div>
  );
}

export default Livenow;
