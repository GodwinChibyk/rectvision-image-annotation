import { ArrowLeftIcon } from '@heroicons/react/solid'
import { useAtom } from 'jotai'
import Link from 'next/link'
import React from 'react'
import Notice from './Notice/Notice'
import ResetPasswordForm from './ResetPasswordForm/ResetPasswordForm'
import { isRequestSuccess } from './ResetPasswordForm/store/AtomsStore'

const ResetPassword = () => {
  const [resetPasswordSuccess] = useAtom(isRequestSuccess)

  return (
    <>
{!resetPasswordSuccess && (
  <div className="w-[600px]">
  <h2 className="text-textColor/80 font-medium text-h4 mb-6">
    Set new password
  </h2>
  
  <ResetPasswordForm />
  <div className="flex items-center mt-4">
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
)}
      {resetPasswordSuccess && <Notice /> }
    </>
  )
}

export default ResetPassword