import React from 'react'
import bannerimg from '../../../src/assets/images/banner-img.png'

function Banner() {
  return (
    <div className='lg:px-40 md:px-20 px-10 relative flex w-full py-16 md:py-32 lg:h-[80vh]'>
      <div className='lg:w-[50%] w-full h-full flex flex-col justify-center items-start z-10'>
      <h3 className='text-[35px] lg:w-full md:w-[34rem] text-white font-sans md:text-[56px]'>
      Unlimited Streaming. 
      No Interruptions. 
      </h3>
      <div className='des'>
        <p className='text-gray text-[18px] md:text-[24px] leading-8 md:leading-10'>One stop platform solution for rtmp streaming service with low latency servers customized for each and every user needs and requirements.</p>

      </div>
      </div>

      <div className='lg:w-[50%] w-full absolute top-0 lg:relative flex h-full justify-center items-center z-0' >
        <img src={bannerimg} className='object-contain w-full h-full' />
      </div>
    </div>
  )
}

export default Banner
