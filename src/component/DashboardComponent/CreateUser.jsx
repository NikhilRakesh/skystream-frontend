/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import axiosInstance from "../../../Axios";
import state from "../../store";
import { useSnapshot } from "valtio";

function CreateUser({
  value,
  handleClose,
  handleChange,
  handleSubmit,
  formData,
  ...error
}) {
  const [domain, setDomain] = useState([]);
  const snap = useSnapshot(state);

  useEffect(() => {
    axiosInstance
      .get(`/domain/${snap.userData._id}`)
      .then((res) => setDomain(res.data.domain))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="fixed inset-0 left-auto right-auto h-screen w-[90%]  justify-center flex items-center z-10 ">
      <div
        className={`w-[45rem] pb-3  rounded-3xl  border-2 border-gray bg-slate-100 h-fit ${
          value ? "z-10" : "-z-10"
        }`}
      >
        <div className="h-[60px] flex justify-end items-center w-full px-10 border-b-[1px]">
          <div
            className="hover:text-red text-3xl"
            onClick={() => {
              handleClose(false);
            }}
          >
            <IoCloseCircleOutline className="cursor-pointer" />
          </div>
        </div>
        <div className="justify-center flex w-full px-16 flex-col">
          <form>
            <div className=" justify-center py-6 flex gap-10">
              <div className=" gap-1 flex flex-col ">
                <label htmlFor="name">Name</label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="name"
                  name="name"
                  className="rounded-md outline px-2 flex items-center outline-gray outline-1 h-8 w-36"
                />
                {error.name && (
                  <p className="text-red text-sm px-1">{error.name}</p>
                )}
              </div>
              <div className=" gap-1 flex flex-col ">
                <label>Email</label>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  className="rounded-md outline px-2 flex items-center outline-gray outline-1 h-8 w-36"
                />
                {error.email && (
                  <p className="text-red text-sm px-1">{error.email}</p>
                )}
              </div>
              <div className=" gap-1 flex flex-col ">
                <label>Password</label>
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  className="rounded-md outline px-2 flex items-center outline-gray outline-1 h-8 w-36"
                />
                {error.password && (
                  <p className="text-red text-sm px-1">{error.password}</p>
                )}
              </div>
            </div>

            <div className="flex gap-10 justify-center">
              <div className=" gap-1 flex flex-col ">
                <label>Domain</label>
                <select
                  onChange={handleChange}
                  type="text"
                  name="domain"
                  className=" rounded-md outline px-2 flex items-center outline-gray outline-1 h-8 w-36"
                >
                  <option>Select Domain</option>
                  {domain?.map((item, index) => (
                    <option key={index} value={item.domain}>
                      {item.domain}
                    </option>
                  ))}
                </select>
                {error.domain && (
                  <p className="text-red text-sm px-1">{error.domain}</p>
                )}
              </div>
              <div className="flex gap-7">
                <div className=" gap-1 flex flex-col ">
                  <label className="">Color</label>
                  <input
                    onChange={handleChange}
                    type="color"
                    name="color"
                    className="cursor-pointer rounded-md outline px-2 flex items-center outline-gray outline-1 h-8 w-10"
                  />
                </div>

                <div className=" gap-1 flex flex-col items-center">
                  <label>Channellimit</label>
                  <select
                    onChange={handleChange}
                    name="limit"
                    className="w-24 h-10 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                    value={
                      formData.limit
                        ? formData.limit
                        : snap.userData.channelLimit
                    }
                  >
                    {Array.from(
                      {
                        length: snap.userData.superAdmin
                          ? 100
                          : snap.userData.channelLimit,
                      },
                      (_, index) => (
                        <option key={index} value={index + 1}>
                          {index + 1}
                        </option>
                      )
                    )}
                  </select>
                  {error.limit && (
                    <p className="text-red text-sm px-1">{error.limit}</p>
                  )}
                </div>
                <div className=" gap-1 flex flex-col ">
                  <label>Expiry Date</label>
                  <input
                    onChange={handleChange}
                    type="date"
                    name="expiryDate"
                    className="cursor-pointer rounded-md outline px-2 flex items-center outline-gray outline-1 h-8 w-36"
                  />
                  {error.expiryDate && (
                    <p className="text-red text-sm px-1">{error.expiryDate}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-12 text-xl text-blue font-semibold">
              <h1>Permissions</h1>
            </div>

            <div className="flex justify-between items-center py-10">
              <div className="flex  items-center justify-center gap-2">
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="addUser"
                  id="addUser"
                  className="w-5 h-5 text-blue-600 rounded-md focus:ring-2 focus:ring-blue-400"
                />

                <label htmlFor="">Create User</label>
              </div>
              <div className="flex  items-center justify-center gap-2">
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="deleteUser"
                  id="deleteUser"
                  className="w-5 h-5 text-blue-600 rounded-md focus:ring-2 focus:ring-blue-400"
                />
                <label htmlFor="">Delete User</label>
              </div>
              <div className="flex  items-center justify-center gap-2">
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="createChannel"
                  id="createChannel"
                  className="w-5 h-5 text-blue-600 rounded-md focus:ring-2 focus:ring-blue-400"
                />
                <label htmlFor="">Create Channel</label>
              </div>
              <div className="flex  items-center justify-center gap-2">
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="deleteChannel"
                  id="deleteChannel"
                  className="w-5 h-5 text-blue-600 rounded-md focus:ring-2 focus:ring-blue-400"
                />
                <label htmlFor="">Delete Channel</label>
              </div>
            </div>

            <div className="px- py-3 justify-end flex">
              <div
                className="cursor-pointer w-fit h-fit px-3 py-1 hover:scale-105 transform text-white bg-blue rounded-md"
                onClick={handleSubmit}
              >
                <h1>Create User</h1>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateUser;
