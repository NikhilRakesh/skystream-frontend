/* eslint-disable react/prop-types */
import { AiFillPlayCircle } from 'react-icons/ai'
import flvjs from "flv.js";
import { useEffect, useState } from 'react';
import axiosInstance from '../../../Axios';
import { useSnapshot } from 'valtio';
import state from '../../store';

function Preview() {
  const [live,setLive] = useState([])
  const snap= useSnapshot(state)

    useEffect(() => {
      axiosInstance
        .get(`/stats/live-now/${snap.userId}`)
        .then((res) => {
          if (res.data.data.length === 0) {
            return setLive([]);
          }

          setLive(res.data.data);
        })
        .catch((err) => console.log(err));
      if (flvjs.isSupported()) {
        const videoElement = document.getElementById("videoElement");
        const flvPlayer = flvjs.createPlayer({
          type: "flv",
          url: `https://live.skystream.in${live[0]?.streamKey}.flv`,
        });
        flvPlayer.attachMediaElement(videoElement);
        flvPlayer.load();
        flvPlayer.play();
      }
    }, []);
    
  return (
    <div className="bg-white w-[790px] h-72 rounded-xl ">
      <div className="w-full h-16 border-b-[1px] shadow-md flex items-center px-10 gap-3">
        <AiFillPlayCircle className="text-blue text-2xl mt-[1px]" />
        <h1 className="font-semibold">Preview</h1>
      </div>
      <video
        className="w-full h-full"
        controls
        id="videoElement"
        autoPlay
      ></video>
    </div>
  );
}   

export default Preview
