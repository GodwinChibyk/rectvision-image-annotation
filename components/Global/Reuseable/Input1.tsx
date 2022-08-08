import React, { ReactNode } from 'react'
import { StyledInput } from '../../StyledComponents/StyledInput'
import { IInputProps } from './interface'



const Input1:React.FC<IInputProps> = ({children, placeholder, type}) => {
  return (
    <label className="relative block">
  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
    {children}
  </span>
  <StyledInput placeholder={placeholder} type={type}/>
</label>
  )
}

export default Input1