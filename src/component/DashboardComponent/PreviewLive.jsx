import { IoCloseCircleOutline } from "react-icons/io5";
import { AiFillPlayCircle } from "react-icons/ai";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";

function  PreviewLive({
  View,
  Live,
  handleClose,
  streamKey,
  name,
  playerType = "premium",
}) {
  const [playerReady, setPlayerReady] = useState(false);

  const getPlayerConfig = () => {
    switch (playerType) {
      case "premium":
        return {
          width: "100%",
          height: "100%",
          playing: true,
          controls: true,
          light: false,
          volume: 0.8,
          config: {
            file: {
              attributes: {
                autoPlay: true,
              },
            },
          },
          additionalStyles: "",
        };
      case "professional":
        return {
          width: "90%",
          height: "75%",
          playing: true,
          controls: true,
          light: false,
          volume: 0.6,
          config: {
            file: {
              attributes: {
                autoplay: true,
              },
            },
          },
          additionalStyles: "border-2 border-blue-500 shadow-md",
        };
      case "standard":
      default:
        return {
          width: "80%",
          height: "60%",
          playing: true,
          controls: true,
          light: true,
          volume: 0.5,
          config: {
            file: {
              attributes: {
                autoplay: true,
              },
            },
          },
          additionalStyles: "border-1 border-gray-500 shadow-sm",
        };
    }
  };

  const {
    width,
    height,
    playing,
    controls,
    light,
    volume,
    additionalStyles,
    config,
  } = getPlayerConfig();

  useEffect(() => {
    setPlayerReady(true);
  }, []);

  return (
    <div className="fixed inset-0 left-0 bottom-0 top-0 right-0 h-screen w-full justify-center flex items-center z-10 ">
      <div
        className={`w-full  h-fit rounded-xl bg-black shadow-xl ${
          Live ? "z-10" : "-z-10"
        } ${additionalStyles}`}
        style={{ maxWidth: "900px", borderRadius: "10px" }}
      >
        <div className="h-[60px] flex justify-between items-center w-full px-5 ">
          <div className="flex items-center gap-2 ">
            <AiFillPlayCircle className="text-gray  mt-[1px]" />
            <h1 className="text-sm text-gray ">
              Preview
            </h1>
          </div>
          <div>
            <p className="text-white font-semibold font-ubuntu text-2xl">{name}</p>
          </div>
          <div
            className="hover:text-red-600 text-3xl"
            onClick={() => handleClose(false)}
          >
            <IoCloseCircleOutline className="cursor-pointer text-gray" />
          </div>
        </div>

        <div className="w-full h-full flex items-center justify-center ">
          <ReactPlayer
            url={`https://live.skystream.in${streamKey}.flv`}
            width={width}
            height={height}
            playing={true}
            controls={controls}
            volume={volume}
            light={light}
            config={config}
            onError={(err) => console.error("Player error:", err)}
          />
        </div>
      </div>
    </div>
  );
}

export default PreviewLive;
