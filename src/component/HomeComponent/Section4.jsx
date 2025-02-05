/* eslint-disable react/no-unescaped-entities */
import Circle from './Circle'
import Avatar from '../../icons/Avatar';
import Tick from '../../icons/Tick';
import Www from '../../icons/Www';
import Line from '../../icons/Dot';
function Section4() {
    const obj = [
        { component: <Avatar />, des: 'Join now' },
        { component: <Tick />, des: 'Start Streaming'},
        { component: <Www />, des: 'Push your content' }
      ];
  return (
    <div className='px-1 py-4 md:py-6 lg:px-40 md:px-20 '>
    
      <div className=''>
      <h2 className=' text-[24px] md:text-[40px] text-white text-center'>Start Streaming Today!</h2>
      <p className='text-[14px] md:text-[18px]  text-gray text-center lg:px-44'>Join Sky Streaming Technology today and elevate your broadcasting experience to new heights. Together, we'll shape the future of entertainment.</p>
    </div>
    <div className='lg:px-10 lg:pt-20  flex lg:flex-row flex-col lg:justify-between lg:items-center gap-22 lg:gap-0 '>
        {
            obj.map((item,index)=>(
              <>
                <Circle key={item.des} {...item}/>   
                     {index == 0 ? <div key={index} className='lg:pb-16 lg:ml-2 py-20 lg:py-0 lg:rotate-0 rotate-90'> <Line  /></div> : index ==1 ? <div className='lg:rotate-180 -rotate-90'><Line   /></div> :'' }
             </>
            ))  
        }
    </div>

    </div>
  )
}

export default Section4
