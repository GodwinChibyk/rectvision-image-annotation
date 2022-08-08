import { ArrowLeftIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import React from 'react'

interface IGoPreviousPageProps {
    currentPage: string
    previousPage: string
}
const GoPreviousPageLayout:React.FC<IGoPreviousPageProps> = ({currentPage,previousPage}) => {
    const route = useRouter()
  return (
    <div className='flex items-center'>
                <button 
                onClick={()=>route.back()}
                className='px-3 py-2 flex items-center space-x-2 justify-center font-light 
                text-textNormal text-textColorLight/80 rounded-full bg-grayColorLight/40 hover:text-primaryColor'>
                    <ArrowLeftIcon className='h-4 w-6' />
                    <span className='capitalize tracking-wide'>{previousPage}</span>
                </button>
            <span className='mx-2 text-textColorLight/50 font-semibold text-textSmall
             '>/</span>
            <p className='text-textColor capitalize font-light
             text-textNormal px-2 py-0.5 bg-grayColorLight/50 rounded-2xl'>{currentPage}</p>
        </div>
  )
}

export default GoPreviousPageLayout