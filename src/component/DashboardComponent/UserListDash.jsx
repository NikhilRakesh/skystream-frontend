import React from 'react'

const UserListDash = ({...item}) => {

  return (
    <div>
    <div className='py-4 pr-2 flex justify-between text-sm overflow-hidden'>
      <div className='flex gap-2 items-center'>
      <div className={`rounded-full w-[10px] h-[10px] bg-${item.color} mt-[2px]`}></div>
      <h1 className=' font-bold max-w-[200px]'>{item.name} </h1>
      </div>
    
      <h1 className=' font-bold'>{item.date}</h1>
    </div>
</div>
  )
}

export default UserListDash
  