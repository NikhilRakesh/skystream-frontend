
import Button from './Button'

function Cta() {

  
  return (
    <div className='w-full glass-gradiant justify-between lg:items-center gap-6 px-10 py-4 md:py-6 lg:px-40 md:px-20   flex flex-col lg:flex-row'>
    <div className='heading '>
      <div>
        <h2 className='text-[25px] md:w-[80%] lg:w-[100%] md:text-[40px] lg:text-[42px] text-white'>Exclusive 10% Off Your Streaming Service</h2>
      </div>
      <div className='text-gray lg:w-[60%] text-[16px]'>
        <p>Enjoy a limited-time offer! Get 10% off when you choose Sky Streaming Technology for seamless, high-quality broadcasting. Elevate your streaming experience today!</p>
      </div>
    </div>
      <Button  />
  </div>
  
  )
}

export default Cta
