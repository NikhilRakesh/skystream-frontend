import React from 'react'
import Circle from './Circle'
import Client from '../../icons/Client'
import Maximum from '../../icons/Maximum'
import Server from '../../icons/Server'
import Support from '../../icons/Support'
import Tire from '../../icons/Tire'


function Section1() {
    const obj = [
        { component: <Client />, title: '5000+', des: 'Happy Clients' },
        { component: <Maximum />, title: 'Maximum', des: 'Uptime' },
        { component: <Server />, title: '20+', des: 'Server Locations' },
        { component: <Support />, title: '24/7', des: 'Live Support' },
        { component: <Tire />, title: 'Tire 3', des: 'Certified Data Center' },
      ];
  return (

    <div className='px-10 pt-20 lg:px-40 md:px-20'>
      <h2 className=' pt-16 lg:pt-40 text-[24px] md:text-[40px] text-white text-center'>What will you get 
      if you join us ?</h2>
      <p className=' text-[13px] md:text-[18px] text-gray text-center'>Get the best streaming service at the price 
      you can afford</p>
      <div className='py-6 lg:pt-20 flex justify-center gap-10 gap-y-0 md:flex-row flex-wrap md:justify-center md:gap-20 md:gap-y-0 lg:justify-between'>     
       {obj.map((item, index) => (
        <Circle key={index} {...item} />
      ))}
      </div>

    </div>
  )
}

export default Section1
