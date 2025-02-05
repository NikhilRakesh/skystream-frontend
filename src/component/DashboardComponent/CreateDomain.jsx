import React from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5';

const CreateDomain = ({value,handleClose,handleSubmit,handleChange,...domainerror}) => {
  


  return (
    <div className="fixed inset-0 left-auto right-auto h-screen w-[90%]  justify-center flex items-center z-10 ">
    <div
      className={`w-[300px] pb-3 h-fit rounded-md border-gray border-[1px]  bg-slate-100  ${
        value ? "z-10" : "-z-10"
      }`}
    >
      <div className="h-[60px] flex justify-between items-center w-full px-10 border-b-[1px] ">
        <div className='flex items-center gap-2'>
        <h1 className=" text-black text-lg font-semibold">Create Domain</h1>
        </div>
        <div
          className="hover:text-red text-3xl text-black"
          onClick={() => {
            handleClose(false);
          }}
        >
          <IoCloseCircleOutline className='cursor-pointer'/>
        </div>
      </div>
      <div className='px-10 py-6'>
      <div className='  rounded-lg text-black flex justify-center items-center'>
        <div className='flex flex-col gap-3 '>
            <label htmlFor='domain' className='text-sm' >Domain Name</label>
            <input id='domain' type='text' onChange={handleChange} className='outline outline-gray rounded-lg outline-[1px] px-1 py-2 w-36 '/>
            {domainerror.domain && <p className='text-red text-sm px-1'>{domainerror.domain}</p>}
        </div>
      
      </div>
      <div className='pt-8 flex justify-center'>
        <button type='submit' className='hover:scale-105 transition-all bg-blue rounded-lg text-white px-5 py-2' onClick={handleSubmit}>Create Domain</button>
        </div>
      </div>
     
        
       
     
      
    </div>
  </div>
  )
}

export default CreateDomain
