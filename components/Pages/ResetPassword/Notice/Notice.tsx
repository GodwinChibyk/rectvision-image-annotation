import { ArrowLeftIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import React from 'react'
import { PrimaryButton } from '../../../StyledComponents/PrimaryButton'

const Notice = () => {
  return (
    <div className="w-[600px]">
        <h2 className="text-textColor/80 font-medium text-h4 mb-5">
        Password reset successful
        </h2>
        
        <div className="flex">
          <PrimaryButton $fullWidth={true} $as = 'a' href="/auth/signin" >
            <span className="text-whiteColor py-1 tracking-wide">
              Continue
            </span>
          </PrimaryButton>
        </div>
        <div className="flex items-center justify-between mt-4">
          <Link href="/auth/signin">
            <a className="text-textColor group flex items-center font-medium text-textSmall">
              <div className="flex items-center justify-center px-1 py-0.5 border border-grayColorDark rounded-md ">
                <ArrowLeftIcon className="w-4 h-4 group-hover:text-primaryColorLight" />
              </div>
              <span className="ml-1 group-hover:text-primaryColorLight"> Back to Login</span>
            </a>
          </Link>
        </div>
      </div>
  )
}

export default Notice