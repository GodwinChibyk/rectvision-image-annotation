import React from 'react'
import { LoaderIcon } from 'react-hot-toast'
import { PrimaryButton } from '../../StyledComponents/PrimaryButton'

interface IButtonProps {
  title: string,
  onClick?: ()=>void
  type?: string
  isLoading?: boolean
  isFullWidth?: boolean
}

const CustomPrimaryButton:React.FC<IButtonProps> = ({title, onClick, type, isLoading, isFullWidth}) => {
  return (
    <>
        <PrimaryButton $fullWidth={isFullWidth} type={type} onClick={onClick} >
                  <span className="text-whiteColor py-1 tracking-wide">
                    {title}
                  </span>
                  {isLoading &&
          <LoaderIcon className={"ml-2 h-10 w-10"}/>
         }
                </PrimaryButton>
    </>
  )
}

export default CustomPrimaryButton