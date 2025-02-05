import { MdKeyboardArrowRight } from "react-icons/md";
import LivenowTab from "./LivenowTab";
import { Skeleton } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce"; // To debounce live data updates

function Livenow({ color, name, time, live, loading }) {
  const [liveStreams, setLiveStreams] = useState([]);
  const [timeoutReached, setTimeoutReached] = useState(false);
  const [debouncedLive] = useDebounce(live, 300); // Debouncing live prop with a 300ms delay

  const checkStreamStatus = async (streamKey) => {
    try {
      const streamUrl = `https://live.skystream.in${streamKey}.flv`;
      const response = await fetch(streamUrl, { method: "HEAD" });

      return response.status === 200;
    } catch (error) {
      console.error("Error checking stream status:", error);
      return false;
    }
  };

  const checkStreamStatusWithCache = async (streamKey) => {
    const cachedStatus = localStorage.getItem(streamKey);

    if (cachedStatus) {
      const { status, timestamp } = JSON.parse(cachedStatus);
      const currentTime = Date.now();

      // Check if cache is within 5 minutes
      if (currentTime - timestamp < 300000) {
        return status;
      }
    }

    const status = await checkStreamStatus(streamKey);
    localStorage.setItem(streamKey, JSON.stringify({ status, timestamp: Date.now() }));
    return status;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeoutReached(true); // Stop skeleton loader after 5 seconds
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const getLiveStreams = async () => {
      if (debouncedLive && debouncedLive.length > 0) {
        const liveStatuses = await Promise.allSettled(
          debouncedLive.map(async (item) => {
            const isLive = await checkStreamStatusWithCache(item.streamKey);
            return { ...item, isLive };
          })
        );

        const filteredStreams = liveStatuses
          .filter(result => result.status === "fulfilled")
          .map(result => result.value)
          .filter((item) => item.isLive);

        setLiveStreams(filteredStreams);
      }
    };

    getLiveStreams();
  }, [debouncedLive]);

  return (
    <div className="bg-white rounded-xl md:w-[481px] w-full h-72 relative">
      <div className="Headding px-10 py-4 rounded-xl bg-light flex border-b-2 items-center justify-between h-fit">
        <div className="flex gap-5 items-center">
          <div className="circle rounded-full w-[30px] h-[30px] bg-red"></div>
          <h1 className="text-xl font-bold">Live Now</h1>
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
          {loading || timeoutReached ? (
            <div className="h-16 w-full flex shadow-lg justify-between items-center px-10">
              <Skeleton height="20px" width="20px" />
              <Skeleton height="20px" width="20px" />
            </div>
          ) : (
            liveStreams?.map((item, index) => (
              <LivenowTab key={index} {...item} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Livenow;
