import { useEffect, useState } from "react";
import InboxTab from "./InboxTab";
import { RiDeleteBin5Line } from "react-icons/ri";
import axiosInstance from "../../../Axios";
import InboxTabLoading from "./InboxTabLoading";
import { useSnapshot } from "valtio";
import state from "../../store";

function OutercomponentInbox() {
  const snap = useSnapshot(state);
  const [inbox, setInbox] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [refresh, setRefresh] = useState(true);

  const [selectedIds, setSelectedIds] = useState([]);

  const handleCheckboxChange = (inboxId, isChecked) => {
    if (isChecked) {
      setSelectedIds([...selectedIds, inboxId]);
    } else {
      setSelectedIds(selectedIds.filter((id) => id !== inboxId));
    }
  };

  const handleDelete = (e) => {
    console.log("clicked", selectedIds);

    e.preventDefault();
    axiosInstance
      .delete(`/message/delete-message`, {
        data: { ids: selectedIds, sendId: snap.userId },
      })
      .then((res) => {
        setRefresh((prevState) => !prevState);
        console.log("Message(s) deleted successfully:", res.data);
        state.refreshData = res.data;
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      axiosInstance
        .get("message/contact")
        .then((res) => {
          setInbox(res.data.data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }, 500);
  }, [refresh]);

  return (
    <div className=" px-5 py-8 flex flex-col gap-2">
      <div className="justify-end flex ">
        <div
          onClick={handleDelete}
          className="cursor-pointer hover:scale-95 transition-all gap-1 button h-12 w-24 rounded-xl bg-blue flex justify-center items-center text-white font-semibold"
        >
          <RiDeleteBin5Line />
          <h1>Delete</h1>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        {isLoading ? (
          <>
            <InboxTabLoading />
            <InboxTabLoading />
            <InboxTabLoading />
            <InboxTabLoading />
            <InboxTabLoading />
            <InboxTabLoading />
          </>
        ) : (
          inbox?.map((item, index) => (
            <InboxTab
              onCheckboxChange={handleCheckboxChange}
              {...item}
              key={index}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default OutercomponentInbox;
