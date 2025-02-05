/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import axiosInstance from "../../../Axios";
import { useSnapshot } from "valtio";
import state from "../../store";

import ChannelValidation from "./ChannelValidation";
import Swal from "sweetalert2";

const CreateChannel = ({ value, handleClose }) => {
  const [domaindata, setDomainData] = useState([]);
  const [channelerror, setChannelerror] = useState({});

  const snap = useSnapshot(state);

  useEffect(() => {
    axiosInstance
      .get(`/domain/${snap?.userData?._id}`)
      .then((res) => {
        setDomainData(res.data.domain);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    domain: "",
    streamKey: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
   
    setFormData({ ...formData, [id]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let error = ChannelValidation(formData);
    setChannelerror(error);
    if (Object.keys(error).length == 0) {
      axiosInstance
        .post(`/channel/${state.userData._id}`, formData)
        .then((res) => {
          Swal.fire("Created!", "Your Channel has been Created.", "success");
          state.refreshData = !snap.refreshData;
          handleClose(false);
        })
        .catch((err) => {
          console.log("Erorr :", err);
          if (err.response.status === 401) {
            Swal.fire(
              "Not Authorized",
              "You are not authorized to Create Channel.",
              "error"
            );
          }
        });
    } 
  };


  return (
    <div className="fixed inset-0 left-auto right-auto h-screen w-[90%]  justify-center flex items-center z-10 ">
      <div
        className={`w-[650px] pb-3 h-fit rounded-md border-gray border-[1px]  bg-slate-100  ${
          value ? "z-10" : "-z-10"
        }`}
      >
        <div className="h-[60px] flex justify-between items-center w-full px-10 border-b-[1px] ">
          <div className="flex items-center gap-2">
            <h1 className=" text-black text-lg font-semibold">
              Create Channel
            </h1>
          </div>
          <div
            className="hover:text-red text-3xl text-black"
            onClick={() => {
              handleClose(false);
            }}
          >
            <IoCloseCircleOutline className="cursor-pointer" />
          </div>
        </div>
        <div className="px-10 py-6">
          <form onChange={handleChange} onSubmit={handleSubmit}>
            <div className="  rounded-lg text-black flex justify-between">
              <div className="flex flex-col gap-3 ">
                <label htmlFor="name" className="text-sm">
                  Channel Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="outline outline-gray rounded-lg outline-[1px] px-1 py-2 w-36 "
                />
                {channelerror.name && (
                  <p className="text-red text-sm px-1">{channelerror.name}</p>
                )}
              </div>
              <div className="flex flex-col gap-3 ">
                <label htmlFor="domain" className="text-sm">
                  Domain
                </label>
                <select
                  onChange={handleChange}
                  type="text"
                  name="domain"
                  id="domain"
                  className=" rounded-md outline px-2 flex items-center outline-gray outline-1 h-8 w-36"
                >
                  <option value="">Select Domain</option>
                  {domaindata?.map((item, index) => (
                    <option key={index} value={item.domain}>
                      {item.domain}
                    </option>
                  ))}
                </select>
                {channelerror.domain && (
                  <p className="text-red text-sm px-1">{channelerror.domain}</p>
                )}
              </div>
              <div className="flex flex-col gap-3 ">
                <label htmlFor="streamKey" className="text-sm">
                  Stream Key
                </label>
                <input
                  id="streamKey"
                  type="text"
                  className="outline outline-gray rounded-lg outline-[1px] px-1 py-2 w-36 "
                />
                {channelerror.streamKey && (
                  <p className="text-red text-sm px-1">
                    {channelerror.streamKey}
                  </p>
                )}
              </div>
            </div>
            <div className="pt-8 flex justify-end">
              <button
                type="submit"
                className="hover:scale-105 transition-all bg-blue rounded-lg text-white px-3 py-2"
              >
                Create Channel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateChannel;
