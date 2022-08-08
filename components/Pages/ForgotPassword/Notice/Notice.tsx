import { ArrowLeftIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import React from 'react'
import { PrimaryButton } from '../../../StyledComponents/PrimaryButton'

interface INoticeProps {
  emailDetail: string
  resendEmail: any
}

const Notice:React.FC<INoticeProps> = ({emailDetail, resendEmail}) => {
  return (
    <div className="w-[600px]">
        <h2 className="text-textColor/80 font-medium text-h4 mb-5">
          Check your email
        </h2>
        <p className="text-textMedium text-textColor/90 mb-6 tracking-wide  ">
        We sent a password reset link to {emailDetail}
        </p>
        <div className="flex">
          <PrimaryButton $fullWidth={true} $as = 'a' href="#" >
            <span className="text-whiteColor py-1 tracking-wide">
              Open email app
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

          <div className='flex items-center'>
            <p className="text-textColor font-medium text-textSmall">
            Didn’t receive email?
            </p>
            <button 
            type='submit'
            onClick={resendEmail}
            className="text-primaryColorLight flex items-center font-medium text-textSmall">
              <span className="ml-1"> click to resend</span>
            </button>
          </div>
        </div>
      </div>
  )
}

export default Notice