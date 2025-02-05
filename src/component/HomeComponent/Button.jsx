import state from '../../store'

function Button() {
  

  return (
    <div className=''>
        <button  className='bg-[#CF088C] text-white px-6 lg:w-56 py-4 rounded-full text-sm' onClick={()=>state.showContact = true} >Get 3 days free trial now.</button>
   
    </div>
  )
}

export default Button
