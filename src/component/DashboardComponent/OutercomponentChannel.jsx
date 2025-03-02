import { useEffect, useState } from "react";
import ChannelTab from "./ChannelTab";
import axiosInstance from "../../../Axios";
import { useSnapshot } from "valtio";
import state from "../../store";
import SkelitonList from "./SkelitonList";
import CreateChannel from "./CreateChannel";
import Swal from "sweetalert2";
import CreateDomain from "./CreateDomain";
import DomainValidation from "./DomainValidation";

function OutercomponentChannel() {
  const [createdomain, setCreatedomain] = useState(false);
  const [domain, setDomain] = useState("");
  const [channel, setChannel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [createChannel, setCreateChannel] = useState(false);
  const [domainerror, setDomainerror] = useState({});
  const [userPermision, setUserPermison] = useState({});
  const [searchQuery, setSearchQuery] = useState(""); // New state for search query
  const snap = useSnapshot(state);


  const handleChange = (e) => {
    setDomain(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update search query
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let error = DomainValidation(domain);
    setDomainerror(error);
    console.log("Error: ", error);

    if (Object.keys(error).length == 0) {
      axiosInstance
        .post(`/domain/${snap.userId}`, { domain })
        .then((res) => {
          Swal.fire({
            title: "Success",
            text: "Domain Created Successfully",
            icon: "success",
          });
          setCreatedomain(false);
        })
        .catch((err) => {
          console.log("Error: ", err);
          if (err.response.status === 401) {
            Swal.fire(
              "Not Authorized",
              "You are not authorized to Create Domain.",
              "error"
            );
          }
        });
    } else {
      console.log("Validation Error: ", domainerror);
    }
  };

  const handlePermission = () => {
    axiosInstance
      .get(`/users/get-permission/${snap?.userData?._id}`)
      .then((res) => {
        setUserPermison(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };



  useEffect(() => {
    handlePermission();
    axiosInstance
      .get(`/channel/${snap?.userData?._id}`)   
      .then((res) => {
        setChannel(res.data);
      })
      .then(() => setLoading(false))
      .catch((err) => {
        if (err.response.status === 401) {
          Swal.fire({
            title: "Not Authorized",
            text: "You are not authorized to perform this action.",
            icon: "error",
          });
        }
        console.log(err);
      });
      
  }, [snap.refreshData, snap.userId]);


  const filteredChannels = channel?.data?.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-light">
      <div className="w-full flex justify-center items-center  ">
        <input
          type="text"
          className=" p-2 border rounded-md shadow-lg text-sm w-6/12 border-blue outline-none"
          placeholder="Search Channels..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="Heading w-full flex bg-light py-5 items-center font-bold border-[1px]">
        <div className="md:w-2/12 md:flex text-xs md:text-base justify-center">
          <h1>Channel Name</h1>
        </div>
        <div className="md:flex text-xs md:text-base md:w-2/12 justify-center">
          <h1>Status</h1>
        </div>
        <div className="md:flex text-xs md:text-base md:w-4/12 justify-center ">
          <h1>Stream Keys</h1>
        </div>
        <div className="md:flex text-xs md:text-base md:w-1/12 justify-center ">
          <h1>Block</h1>
        </div>
        <div className="md:flex text-xs md:text-base md:w-1/12 justify-center ">
          <h1>Delete</h1>
        </div>

        <div
          className="cursor-pointer"
          onClick={() => {
            userPermision.createChannel
              ? setCreateChannel(!createChannel)
              : Swal.fire(
                  "Not Authorized",
                  "You are not authorized to Create Channel.",
                  "error"
                );
          }}
        >
          <button className="bg-blue text-white px-3 py-3 text-xs rounded-md hover:scale-105 transform transition-all">
            Create Channel
          </button>
        </div>
        {createChannel ? (
          <CreateChannel
            value={createChannel}
            handleClose={() => setCreateChannel(false)}
          />
        ) : null}
        {createdomain ? (
          <CreateDomain
            value={createdomain}
            handleClose={() => setCreatedomain(false)}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            {...domainerror}
          />
        ) : null}
      </div>

      <div className="">
        {loading ? (
          <div>
            <SkelitonList />
            <SkelitonList />
            <SkelitonList />
            <SkelitonList />
            <SkelitonList />
            <SkelitonList />
            <SkelitonList />
            <SkelitonList />
          </div>
        ) : (
          filteredChannels?.map((item, index) => (
            <ChannelTab key={index} {...item}  />
          ))
        )}
      </div>
    </div>
  );
}

export default OutercomponentChannel;
