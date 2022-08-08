import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/outline'
import React from 'react'



const DrawBoxInfo = ({}) => {

  return (
    <div className="absolute flex space-x-2" >
    {/* <div>
      <div className="w-20 h-20 border-4 border-redColor relative"></div>
      <span className="inline-block pt-0.5 px-1 tracking-wide text-whiteColor font-semibold bg-redColor">
        Car
      </span>
    </div> */}
    <div className="px-3 py-3 rounded-2xl bg-grayColor">
      <p className="capitalize text-sm font-semibold text-textColorLight">
        label 1
      </p>
      <ul className="text-lg capitalize tracking-wide font-semibold text-textColorDark my-3">
        <li>
          car <span>|</span>
        </li>
      </ul>
      <div className="px-6 py-2 flex justify-between items-center rounded-2xl bg-whiteColor w-40">
        <button>
          <CheckCircleIcon className="h-5 w-5 text-greenColor text-green-600" />
        </button>
        <button>
          <XCircleIcon className="h-5 w-5 text-textColorLight/80 hover:text-redColor" />
        </button>
      </div>
    </div>
  </div>
  )
}

export default DrawBoxInfo