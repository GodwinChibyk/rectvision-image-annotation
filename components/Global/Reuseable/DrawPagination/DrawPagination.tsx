import { ChevronDownIcon } from '@heroicons/react/outline'
import React from 'react'

const DrawPagination = () => {
  return (
    <div className=" flex justify-end items-center mt-3 mb-2">
    <div className="flex items-center">
      <button className="mr-4">
        <ChevronDownIcon className="w-6 h-6 transform rotate-90 text-textColorLight" />
      </button>
      <span className="text-textColorLight/80">1</span>
      <span className="mx-4 text-textColorLight/80">/</span>
      <span className='text-textColor'>1</span>
      <button className="ml-4">
        <ChevronDownIcon className="w-6 h-6 transform -rotate-90 text-textColorLight" />
      </button>
    </div>
    <p className="ml-4 text-textColorLight">100%</p>
  </div>
  )
}

export default DrawPagination