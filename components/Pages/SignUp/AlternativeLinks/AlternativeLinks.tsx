import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { PrimaryButtonOutline } from '../../../StyledComponents/PrimaryButtonOutline'

const AlternativeLinks = () => {
  return (
    <>
        <div className='flex items-center mt-4'>
          <div className='flex'>
            <p className='text-textColor text-textSmall tracking-wide'>By signing up you&apos;re agreeing to our</p>
            <Link href="#" >
            <a className='text-primaryColorLight text-textSmall ml-1'>
              terms and conditions
            </a>
          </Link>
          </div>
          <span className='text-textColor text-textSmall mx-1'>and</span>
          <Link href="#" >
            <a className='text-primaryColorLight text-textSmall'>
              privacy police.
            </a>
          </Link>
        </div>

        <div className='mt-4 w-full flex'>
            <PrimaryButtonOutline $fullWidth={true}>
                <div className='h-7 w-7 relative'>
                    <Image 
                    src="/images/Google.png"
                    alt="google icon"
                    layout='fill'
                    objectFit='contain'
                    objectPosition='center'
                     />
                </div>
                <span className='text-textSmall tracking-wide font-medium ml-2'>Sign up with Google</span>
            </PrimaryButtonOutline>
        </div>

        <div className='flex items-center mt-4'>
          <div className='flex'>
            <p className='text-textColor text-textSmall'>Already Registered?</p>
            <Link href="/auth/signin" >
            <a className='text-primaryColorLight text-textSmall ml-1'>
              Sign in
            </a>
          </Link>
          </div>
         
        </div>
    </>
  )
}

export default AlternativeLinks