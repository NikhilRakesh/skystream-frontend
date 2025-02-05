import  { useState } from 'react'
import {PiUsersFourDuotone} from 'react-icons/pi'
import { useSnapshot } from 'valtio'
import state from '../../store'
function User() {
  const snap = useSnapshot(state)
  const [userdata,setUserdata] = useState()

  

//   useEffect(()=>{

//     axiosInstance.get('/users')
//     .then((res)=>
//      setUserdata(res.data)).then((res)=> state.refreshData = !snap.refreshData)
//     .catch((err)=>console.log(err))
 
// },[snap.refreshData])


  return (
    <div className='w-[481px] bg-white rounded-xl'>
      <div className='w-full shadow-md h-16 border-b-[1px] px-10 flex gap-2 items-center'>
        <PiUsersFourDuotone className='text-blue bg-re w-6 h-6'/>
       <h1 className='text-xl font-bold'>
       Users
       </h1>
      </div>
      <div className='px-16 py-4 '>
        <div className='flex  justify-between text-gray font-semibold'>
         <h1>Name</h1>
         <h1>Expiry Date</h1>
        </div>
      {/* {userdata.map((item, index) => (
            <UserListDash key={index} {...item} />
          ))} */}
      </div>
    </div>
  )
}

export default User
