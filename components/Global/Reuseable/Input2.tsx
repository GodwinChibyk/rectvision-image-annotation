import React from 'react'
import { StyledInput } from '../../StyledComponents/StyledInput'
import { IInputProps } from './interface'

const Input2:React.FC<IInputProps> = ({icon1,icon2, placeholder, type}) => {
  return (
    <label className="relative block">
    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
      {icon1}
    </span>
    <span className="absolute inset-y-0 right-0 flex items-center pr-3">
      {icon2}
    </span>
    <StyledInput placeholder={placeholder} type={type}/>
  </label>
  )
}

export default Input2