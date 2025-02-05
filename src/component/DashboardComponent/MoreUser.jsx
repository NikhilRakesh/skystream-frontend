/* eslint-disable react/prop-types */
import { AiOutlinePlayCircle } from "react-icons/ai";
import { Switch } from "@chakra-ui/react";
import { HiOutlineMail } from "react-icons/hi";
import state from "../../store";
import { useSnapshot } from "valtio";
import axiosInstance from "../../../Axios";

// ! handlePermission has to be done

function MoreUser({ show,handleChange,value, handleView, view, ...item  }) {
  
  const snap = useSnapshot(state);
  
  const handeleDelete =()=>{

    axiosInstance.get(`/message/delete-message/${snap.userId}/${item._id}`).then((res)=>{

      state.refreshData = !snap.refreshData
    }).catch((err)=>console.log(err))
  }

  return (
    <div>
      <div
        className={`flex px-5 py-10 justify-between ${
          show ? "z-0" : "-z-10"
        } border-b-2`}
      >
       
        <div className="createUser flex flex-col items-center gap-2 cursor-pointer">
          <label htmlFor="createUser">Create User</label>

          <Switch
            id="createUser"
            name="addUser"
            isChecked={value.addUser ? true : false}
            onChange={handleChange}
          />
        </div>
        <div className="DeleteUser flex flex-col items-center gap-2 cursor-pointer">
          <label htmlFor="DeleteUser">Delete User</label>
          <Switch
            id="DeleteUser"
            name="deleteUser"
            isChecked={value.deleteUser ? true : false}
            onChange={handleChange}
          />
        </div>
        <div className="createChanel flex flex-col items-center gap-2 cursor-pointer">
          <label htmlFor="createChannel">Create Channel</label>
          <Switch
            id="createChannel"
            name="createChannel"
            isChecked={value.createChannel ? true : false}
            onChange={handleChange}
          />
        </div>
        
        <div className="DeleteChanel flex flex-col items-center gap-2 cursor-pointer">
          <label htmlFor="DeleteChannel">Delete Channel</label>
          <Switch
            id="DeleteChannel"
            name="deleteChannel"
            isChecked={value.deleteChannel ? true : false}
            onChange={handleChange}
          />
        </div>
        <div className="ChanelLimit flex flex-col items-center gap-2 cursor-pointer">
          <label htmlFor="channelLimit">Channel Limit</label>
          <select
            onChange={handleChange}
            name="channelLimit"
            id="channelLimit"
            className="w-24 h-10 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            value={item.channelLimit}
          >
            {Array.from({ length: 100 }, (_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
        <div className="SendMessage flex flex-col items-center gap-2 cursor-pointer ">
          <label>Send Message</label>
          <div
            className="text-2xl"
            onClick={() => {
              handleView(!view);
            }}
          >
            <HiOutlineMail />
          </div>
        </div>
        <div>
          {item.message.data && (
            <button
              onClick={() => handeleDelete()}
              className="px-2 py-2 bg-red rounded-lg text-white"
            >
              Delete Message
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MoreUser;
