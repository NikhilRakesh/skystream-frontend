/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import UserTab from "./UserTab";
import axiosInstance from "../../../Axios";
import SkelitonList from "./SkelitonList";
import CreateUser from "./CreateUser";
import { useSnapshot } from "valtio";
import state from "../../store";
import CreateUserValidation from "./CreateUserValidation";
import Swal from "sweetalert2";

function OutercomponentUser() {
  const snap = useSnapshot(state);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [createuser, setCreateuser] = useState(false);
  const [resopnes, setResponse] = useState([]);
  const [error, setError] = useState({});
  const [userPermision, setUserPermison] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    domain: "",
    color: "",
    limit: "",
    expiryDate: "",
    addUser: true,
    deleteUser: false,
    createChannel: false,
    deleteChannel: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handlePermission = () => {
    axiosInstance
      .get(`users/get-permission/${snap?.userData?._id}`)
      .then((res) => {
        setUserPermison(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let error = CreateUserValidation(formData);
    setError(error);
    if (Object.keys(error).length == 0) {
      console.log("insde condition", snap.userId);
      axiosInstance
        .post(`/users/${snap.userId}/create-user/`, formData)
        .then((res) => {
          state.refreshData = !snap.refreshData;
          setResponse(true);
          setCreateuser(false);
          Swal.fire("Created!", "Your Channel has been Created.", "success");
        })
        .catch((err) => {
          if (err.response.status === 401) {
            Swal.fire(
              "Not Authorized",
              "You are not authorized to Create User.",
              "error"
            );
          }
          if (err.response.status === 409) {
            Swal.fire("User Already Exist", "error");
          }
          console.log("errorssss :", err);
        });
    } else {
      console.log("Validation Error: ", error);
    }
  };

  useEffect(() => {
    handlePermission();
    axiosInstance
      .get(`/users/${snap.userId}`)
      .then((res) => {
        setData(res.data);
      })
      .then((res) => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [snap.refreshData]);

  return (
    <div className="bg-gray relative">
      <div
        className="flex justify-around  items-center border-b-2 border-gray
     text-blue font-bold bg-white md:px-5"
      >
        <div className="name flex items-center md:text-base text-xs  md:w-2/12 ">
          NAME
        </div>
        <div className="status flex justify-center md:text-base text-xs md:w-1/12  ">
          STATUS
        </div>
        <div className="expiryDate flex justify-center md:text-base text-xs md:w-3/12 ">
          CREATED DATE
        </div>

        <div className="expiryDate flex justify-center md:text-base text-xs md:w-3/12 ">
          EXPIRY DATE
        </div>
        <div className="expiryDate flex justify-center items-center md:text-base text-xs md:w-1/12 ">
          DELETE
        </div>
        <div className=" md:text-base text-xs md:w-2/12  flex justify-end ">
          <div
            className=" cursor-pointer hover:scale-105 transform ease-in-out w-fit h-fit bg-blue px-2 py-1 rounded-lg text-white"
            onClick={() => {
              userPermision.addUser
                ? setCreateuser(!createuser)
                : Swal.fire(
                    "Not Authorized",
                    "You are not authorized to Create User.",
                    "error"
                  );
            }}
          >
            Create User
          </div>
        </div>
      </div>
      <div>
        {createuser ? (
          <CreateUser
            {...error}
            value={createuser}
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleClose={setCreateuser}
          />
        ) : null}
      </div>
      <div>
        {loading ? (
          <div>
            <SkelitonList />
            <SkelitonList />
            <SkelitonList />
            <SkelitonList />
            <SkelitonList />
            <SkelitonList />{" "}
          </div>
        ) : (
          data?.user?.map((item, index) => <UserTab key={index} {...item} />)
        )}
      </div>
    </div>
  );
}
export default OutercomponentUser;
