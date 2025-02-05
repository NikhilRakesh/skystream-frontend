import { Checkbox } from '@chakra-ui/react'
import React from 'react'


function RadioButton({...item}) {
  return (
<div className='flex  items-center justify-center gap-2'>
  <Checkbox id={item.name} className='outline outline-[1px] w-3 h-3' />
  <label htmlFor={item.name} >{item.name}</label>
</div>
  
  )
}

export default RadioButton
