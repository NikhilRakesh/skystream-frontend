import React from 'react'

function Circle({component, title, des}) {
  return (
    <div className='text-white py-10 flex flex-col justify-center items-center'>
    <div className='flex  box-gradiant w-20 h-20  md:w-24 md:h-24 rounded-full items-center justify-center'>
      <div className='flex'>{component}</div>
    </div>
    <h3 className='text-[24px] mt-1 '>{title}</h3>
    <p className='text-[16px] text-gray'>{des}</p>
    </div>
  )
}

export default Circle
