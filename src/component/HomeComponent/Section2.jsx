import React from 'react'
import Box from './Box'
import Internetspeed from '../../icons/Internetspeed'
import Cloud from '../../icons/Cloud'
import Secure from '../../icons/Secure'

function Section2() {
    const obj = [
        {component:<Internetspeed/>,title:"Unmatched Expertise:",des:"With over a decade of pioneering experience in broadcasting, we deliver seamless content distribution expertise to reach your audience effortlessly."},
        {component:<Cloud/>,title:"Low Latency Streaming:",des:"We provide cutting-edge RTMP servers for streaming with minimal latency, ensuring your viewers enjoy a lag-free experience."
        },
        {
            component:<Secure/>,title:"High Bandwidth Reliability:",des:"Our high-bandwidth infrastructure guarantees uninterrupted streaming, even during peak usage, so your audience never misses a moment."
        }
    ]
  return (

       <div className='px-10 lg:px-40 md:px-20 '>
      <h2 className='pt-16 lg:pt-40 text-[24px] md:text-[40px] text-white text-center'>Why Choose Skystream.in ?</h2>
      <p className='text-[14px] md:text-[18px] text-gray text-center lg:px-44'>We're committed to providing uninterrupted streaming with low latency and high bandwidth, ensuring your viewers enjoy a seamless experience.</p>

      <div className='flex flex-col gap-16 lg:flex-row md:justify-between md:items-center lg:justify-between py-20'>
        {obj.map((item,index)=>(
            <Box key={index} {...item}/>
        )) }
      </div>
      </div>


  )
}

export default Section2
