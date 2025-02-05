
import { useSnapshot } from 'valtio'
import state from '../../store'
import Migration from '../../../src/assets/images/migration.png'

function Section3() {
  const snap = useSnapshot(state)
  return (
    <div className='px-10 py-4 md:py-6 lg:px-40 md:px-20 '>
       <h2 className='pt-16 lg:pt-40 text-[24px] md:text-[40px] text-white text-center'>RTMP Server with Load Balancing:</h2>
      <p className='text-[14px] md:text-[18px] text-gray text-center lg:px-44'>Experience the power of load-balanced RTMP servers that distribute traffic efficiently, guaranteeing optimal performance for your streaming needs.</p>
     {/*  */}
      <div className='flex lg:flex-row flex-col relative items-center'>

        <div className='justify-center items-center text-center lg:text-left Title py-24 md:py-52 z-10 lg:w-full'>
        <h2 className='text-[20px] md:text-[26px] text-white'>
        Hassle Free Streaming
        </h2>
        <p className='text-gray text-[14px] lg:w-[70%] pt-2'>
        Experience hassle-free streaming with Sky Streaming Technology. Our cutting-edge technology ensures uninterrupted, low-latency broadcasting, so you can focus on delivering content without worries.
        </p>
        <div>
          <button onClick={()=>state.showContact = true} className='box-gradiant bg-opacity-100 text-white px-6 py-2 rounded-3xl mt-6'>Contact Sales</button>
        </div>
        </div>
        {
           <div className='lg:w-[75%] top-0 lg:relative  lg:py-40 flex justify-center z-0 '>
           <> {snap.deviceType==="Desktop" ? <img src={Migration}/> :''}  </> 
           </div> 
        }
       

      </div>


    </div>
  )
}

export default Section3;
