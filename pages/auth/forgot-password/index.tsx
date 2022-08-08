import { ArrowLeftIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import React from 'react'
import AuthLayout from '../../../components/Layouts/AuthLayout/AuthLayout'
import ForgotPassword from '../../../components/Pages/ForgotPassword/ForgotPassword'

const ForgotPasswordPage = () => {
  return (
    <>
    <AuthLayout>
     
        <ForgotPassword />
        
    </AuthLayout>
    </>
  )
}

export default ForgotPasswordPage