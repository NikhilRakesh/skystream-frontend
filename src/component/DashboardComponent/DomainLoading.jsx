import { Skeleton } from '@chakra-ui/react'
import React from 'react'

const DomainLoading = () => {
  return (
    <div className="h-16 py-5 w-full flex shadow-lg justify-between items-center px-20 ">
     
    <Skeleton height="20px" width="150px" />
    <Skeleton height="20px" width="100px" />
    <Skeleton height="20px" width="100px" />
    
  </div>
  )
}

export default DomainLoading
