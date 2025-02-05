/* eslint-disable no-unused-vars */
import { Checkbox } from "@chakra-ui/react";
import { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { VscSend } from "react-icons/vsc";
import axiosInstance from "../../../Axios";
import Swal from "sweetalert2";
import MessageValidation from "./MessageValidation";

// eslint-disable-next-line react/prop-types
function Message({ view, handleClose,...item }) {
  const [error,setError] = useState({})
  const [formData, setFormData] = useState({
    to:item._id,
      subject:"",
      message:"",
      block:false
  });

  const handleChange = (e)=>{

    const {name,value,type,checked} = e.target
    const newValue = type === 'checkbox' ? checked : value
    setFormData({ ...formData, [name]: newValue })
    }

  const handleSubmit = (e)=>{
    e.preventDefault()
    let error = MessageValidation(formData)
    setError(error)
    if(Object.keys(error).length == 0){
      axiosInstance.post(`/message/send-message/${item._id}`,formData).then((res)=>{
  
        handleClose(false)
      
        Swal.fire({
          title: "Message Sent",
          text: "Your message has been sent successfully.",
          icon: "success",
          showConfirmButton: false,
          timer: 2000, // Close after 2 seconds
        });
          
      }).catch(err=>{console.log("error: ",err)
  
    })
    }
    else{
      console.log("Validation Error: ",error);
    }
    
  }


  return (
    <div className="fixed inset-0 left-auto right-auto h-screen w-[90%]  justify-center flex items-center z-10 ">
      <div
        className={`w-[650px] pb-3 h-fit rounded-md border-black border-[1px]  bg-white  ${
          view ? "z-10" : "-z-10"
        }`}
      >
        <div className="h-[60px] flex justify-between items-center w-full px-10 border-b-[1px] border-b-black">
          <h1 className="font-semibold">Send Message</h1>
          <div
            className="hover:text-red text-2xl cursor-pointer"
            onClick={() => {
              handleClose(false);
     
            }}
          >
            <IoCloseCircleOutline />
          </div>
        </div>
        <form onChange={handleChange} onSubmit={handleSubmit} >
          <div className="body flex px-10 py-5 gap-7 flex-wrap w-full items-center">
         
            <div className="body px-10 py-4 border-black w-full gap-4 flex flex-wrap h-fit border-[1px]">
              <div className="flex py-4 h-10 items-center w-full  border-gray gap-5">
                <label htmlFor="subject" className="text-sm">Subject:</label>
                <input
                  type="text" name="subject" 
                  className="h-10 w-full px-2  bg-transparent border-2 focus:outline-none "
                />
                
              </div>
              {error.subject && <p className='text-red text-sm px-[70px]'>{error.subject}</p>}
              <div className="h-full w-full flex gap-2">
                <label htmlFor="message" className="text-sm ">Message:</label>
                <textarea 
                  type="text"
                  name="message"
                  className="px-2 bg-transparent w-full border-2 focus:outline-none h-24"
                  placeholder="Type your message here..."
                ></textarea>
                
              </div>
              {error.message && <p className='text-red text-sm px-[70px]'>{error.message}</p>}
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Checkbox type="checkbox" name="block" 
              colorScheme="blue"
              className="ml-10 outline outline-[1px]"
            />
            <label className="text-red font-semibold">Block this User</label>
          </div>
          <div className="flex justify-end px-9 ">
            <button className="bg-blue rounded-xl hover:scale-105 transform cursor-pointer  px-4 py-2 flex items-center text-white w-fit h-fit gap-x-2">
              <h1>Sumbit</h1>
              <VscSend className="" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Message;
