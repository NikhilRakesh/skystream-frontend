/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { AiTwotoneMinusCircle } from "react-icons/ai";
import { MdOutlineExpandMore } from "react-icons/md";
import dateFormat from "dateformat";
import MoreUser from "./MoreUser";
import Message from "./Message";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import axiosInstance from "../../../Axios";
import state from "../../store";
import { useSnapshot } from "valtio";
import { IoCloseCircleOutline } from "react-icons/io5";

function UserTab({ ...item }) {
  const [show, setShow] = useState(false);
  const [view, setView] = useState(false);
  const [userDetailsMenu, setUserDetailsMenu] = useState(false);

  const snap = useSnapshot(state);

  const [permissions, setPermissions] = useState({
    addUser: item.addUser,
    deleteUser: item.deleteUser,
    createChannel: item.createChannel,
    deleteChannel: item.deleteChannel,
    channelLimit: item.channelLimit,
  });

  const handlePermission = () => {
    axiosInstance
      .post(`users/user-permission/${item._id}`, permissions) // Assuming the backend endpoint is 'updateUserPermission'
      .then((res) => {
        state.refreshData = !snap.refreshData;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const newValue = type === "checkbox" ? checked : value;
    setPermissions({ ...permissions, [name]: newValue });
  };

  useEffect(() => {
    handlePermission();
  }, [permissions]);

  const handleDelete = () => {
    Swal.fire({
      title: "Delete User",
      text: "Are you sure you want to delete this User?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance
          .get(`users/delete/${snap.userId}/${item._id}`)
          .then((res) => {
            state.refreshData = !snap.refreshData;
            Swal.fire("Deleted!", "Your User has been deleted.", "success");
          })
          .catch((err) => {
            console.log(err);
            if (err.response.status === 401) {
              Swal.fire(
                "Not Authorized",
                "You are not authorized to delete.",
                "error"
              );
            }
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your User is safe :)", "info");
      }
    });
  };

  return (
    <div className="bg-white ">
      <div
        className={`fixed inset-0 left-auto  right-auto h-screen w-[90%] justify-center flex items-center z-10 ${
          userDetailsMenu ? "block" : "hidden"
        }`}
      >
        <div
          className={`w-96 pb-3 py-10 px-5 h-fit  rounded-md border-black border-[1px] z-20   bg-white relative  `}
        >
          <div
            className="hover:text-red text-2xl absolute right-5 top-5  cursor-pointer"
            onClick={() => {
              setUserDetailsMenu(false);
            }}
          >
            <IoCloseCircleOutline />
          </div>

          <div className="flex flex-col gap-5">
            <div className="W-24 flex gap-3">
              <h1 className="font-extrabold">NAME :</h1>
              <h1>{item.name}</h1>
            </div>
            <div className="W-24 flex gap-3">
              <h1 className="font-extrabold">Email :</h1>
              <h1>{item.email}</h1>
            </div>
            <div className="W-24 flex gap-3">
              <h1 className="font-extrabold">Password :</h1>
              <h1>{item.password}</h1>
            </div>
            <div className="W-24 flex gap-3">
              <h1 className="font-extrabold">Color :</h1>
              <AiTwotoneMinusCircle
                className="min-w-[15px] max-w-[15px]"
                color={item.color}
              />
            </div>
            <div className="W-24 flex gap-3">
              <h1 className="font-extrabold">domain :</h1>
              <h1>{item.domain}</h1>
            </div>
            <div className="W-24 flex gap-3">
              <h1 className="font-extrabold">Channel Limit :</h1>
              <h1>{item.channelLimit}</h1>
            </div>
            <div className="W-24 flex gap-3">
              <h1 className="font-extrabold">Created Date :</h1>
              <h1> {dateFormat(item.createdAt, "dd-mm-yy")}</h1>
            </div>
            <div className="W-24 flex gap-3">
              <h1 className="font-extrabold">Expiry Date :</h1>
              <h1> {dateFormat(item.expiryDate, "dd-mm-yy")}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex py-4 md:px-5 border-b-[0.5px] items-center  border-gray ">
        <div
          className="Name gap-3 md:flex items-center cursor-pointer md:w-2/12  "
          onClick={() => setUserDetailsMenu(true)}
        >
          <AiTwotoneMinusCircle
            className="md:min-w-[15px] max-w-[15px]"
            color={item.color}
          />
          <h1 className="text-sm font-medium cursor-pointer ">{item.name}</h1>
        </div>
        <div className="Live text-red md:w-1/12  text-sm">
          {item.status ? "Live" : "Offline"}
        </div>
        <div className="CreatedDate text-sm w-3/12 flex justify-center">
          {dateFormat(item.createdAt, "dd-mm-yy")}
        </div>

        <div className="ExpiryDate text-sm w-3/12 flex justify-center">
          {dateFormat(item.createdAt, "dd-mm-yy")}
        </div>
        <div className="w-1/12  flex justify-center">
          <button
            onClick={handleDelete}
            className="px-2 py-2 bg-red text-white rounded-md"
          >
            <MdDelete />
          </button>
        </div>
        <div
          className="text-3xl text-blue w-2/12 pl-5 flex justify-center"
          onClick={() => setShow(!show)}
        >
          <MdOutlineExpandMore />
        </div>
      </div>
      <div className="flex justify-center items-center">
        {view ? <Message view={view} handleClose={setView} {...item} /> : null}
      </div>
      {show ? (
        <div className="flex flex-col transition-all ease-in-out duration-1000">
          <MoreUser
            handleChange={handleChange}
            handleView={setView}
            handlePermission={handlePermission}
            view={view}
            show={show}
            value={permissions}
            {...item}
          />
        </div>
      ) : null}
    </div>
  );
}

export default UserTab;
