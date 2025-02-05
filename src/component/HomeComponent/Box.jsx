import React from 'react'

function Box({component, title, des}) {
  return (
    <div className='px-8 rounded-xl py-6 box-gradiant md:w-[22rem] relative text-white'>
      <div className=' rounded-full flex justify-center items-center blue-gradiant p-2.5 absolute top-[-40px] left-8' >
        {component}
        </div>
      <div>
      {title}
      </div>
      <div className='text-gray'>
      {des}
      </div>
    </div>
  )
}

export default Box
