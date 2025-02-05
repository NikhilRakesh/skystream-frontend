import { useEffect, useRef, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FiCopy } from "react-icons/fi";
import axiosInstance from "../../../Axios";
import state from "../../store";
import { useSnapshot } from "valtio";
import { confirmAlert } from "react-confirm-alert";
import PushValidation from "./PushValidation";

// eslint-disable-next-line react/prop-types
function StreamLink({ handleClose, view, ...item }) {
  const [copiedStates, setCopiedStates] = useState(Array(5).fill(false));
  const [copied, setCopied] = useState(100);
  const [error, setError] = useState({});
  const [edge, setEdge] = useState({
    edge: "",
  });
  const [edgeData, setEdgeData] = useState([]);

  const snap = useSnapshot(state);

  const ref = useRef();
  let newTabIndex;

  const copyToClipboard = async (value, tabIndex) => {
    let updatedCopiedStates = [...copiedStates];
    updatedCopiedStates[newTabIndex] = false;
    setCopiedStates(updatedCopiedStates);
    setCopied(100);
    navigator.clipboard
      .writeText(value)
      .then(() => {
        updatedCopiedStates[tabIndex] = true;
        newTabIndex = tabIndex;
        setCopiedStates(updatedCopiedStates);
        setCopied(tabIndex);
        setTimeout(() => {
          updatedCopiedStates[tabIndex] = false;
          setCopied(100);
        }, 3000);
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  };

  const handlePush = async () => {
    let error = PushValidation(edge);
    setError(error);
    if (Object.keys(error).length == 0) {
      axiosInstance
        .post(`push/${snap.userId}/${item._id}`, edge)
        .then((res) => {
          state.refreshData = !snap.refreshData;
        });
    } else {
      console.log("Validation Error: ", error);
    }
  };

  const handleChenge = (e) => {
    const { name, value } = e.target;
    setEdge({ ...edge, [name]: value });
  };

  const deleteEdge = (value) => {
    axiosInstance.get(`push/delete/${value}`).then((res) => {
      state.refreshData = !snap.refreshData;
    });
  };

  useEffect(() => {
    const getEdge = async () => {
      await axiosInstance.get(`push/${item._id}`).then((res) => {
        setEdgeData(res.data.data);
      });
    };

    getEdge();
  }, [snap.refreshData]);

  return (
    <div className="fixed inset-0 left-auto right-auto h-screen w-[80%]  justify-center flex items-center z-10 ">
      <div
        className={`w-[650px] overflow-y-auto pb-3 h-[30rem] rounded-lg border-gray border-[1px]  bg-slate-200  ${
          view ? "z-10" : "-z-10"
        }`}
      >
        <div className="h-[60px] flex justify-between items-center w-full px-10 border-b-[1px] ">
          <div className="flex items-center gap-2">
            <h1 className=" text-black text-lg font-semibold">Stream Links</h1>
          </div>
          <div
            className="hover:text-red text-3xl  text-black"
            onClick={() => {
              handleClose(false);
            }}
          >
            <IoCloseCircleOutline className="cursor-pointer" />
          </div>
        </div>

        <div className="w-full h-full py-10 px-10 flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            {[
              `rtmp://skystream.in${item.streamKey}`,
              `https://skystream.in${item.streamKey}`,
              `ws://skystream.in${item.streamKey}.flv`,
              `https://skystream.in${item.streamKey}/index.m3u8`,
              `https://skystream.in${item.streamKey}/index.mpd`,
              `srt://live.skystream.in?streamid=${item.streamKey.replace(/^\/+/, '')}`,
            ].map((value, index) => (
              <div key={index} className="relative">
                <input
                  type="text"
                  className="outline cursor-pointer w-full outline-1 outline-gray py-2 px-4 pr-10"
                  value={value}
                  ref={ref[index]}
                  readOnly
                  onClick={() => copyToClipboard(value, index)}
                />
                <button
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 focus:outline-none"
                  onClick={() => copyToClipboard(value, index)}
                >
                  <FiCopy />
                </button>
                {copiedStates[index] && copied == index && (
                  <div className="text-green-500 text-sm mt-1">
                    Copied to clipboard!
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {/* <div className="flex justify-between">
              <input
                type="text"
                name="edge"
                className="w-[25rem] py-1 px-2 rounded-md focus:outline-none"
                onChange={handleChenge}
                value={edge.edge}
              />

              <button
                onClick={handlePush}
                className="px-8 py-2 text-white bg-blue w-fit rounded-lg"
              >
                Push
              </button>
            </div> */}
            {/* <small className="text-[10px]">
              please add the edge link + stream key
              {error.edge && <p className="text-red">Please add edge link</p>}
            </small> */}

            {edgeData?.map((item, index) => (
              <>
                <div className="flex justify-between" key={index}>
                  <input
                    type="text"
                    name="edge"
                    className="w-[25rem] py-1 px-2 rounded-md focus:outline-none"
                    value={item.edge}
                    readOnly
                  />
                  <button
                    onClick={() => deleteEdge(item._id)}
                    className="px-8 py-2 text-white bg-red w-fit rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StreamLink;
