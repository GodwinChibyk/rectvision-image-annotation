import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import React, { Fragment } from 'react'
import ChartBox from './ChartBox/ChartBox'

interface IAnnotationStatsProps {
    className: string
}

const AnnotationStatistics:React.FC<IAnnotationStatsProps> = ({className}) => {
  return (
    <div className={`rounded-2xl bg-whiteColor px-6 py-5 h-[500px] ${className}`}>
        <span className='px-4 py-1 w-48 bg-grayColorLight/30 rounded-full text-textSmall font-light tracking-wider'>
        Model/01/12/2021
        </span>

        <div className='flex items-center justify-between mt-5'>
            <h2 className='text-textNormal text-textColor font-medium tracking-wide'>Annotation Statistics</h2>
            <Menu as="div" className='relative'>
         <div>
         <Menu.Button className="flex items-center ml-2 border px-5 rounded-lg py-2">
            <span className="text-textColor text-textXSmall capitalize tracking-wider">{`your statistics`}</span>
            <ChevronDownIcon className="w-5 h-5 text-gray-600  ml-1" />
          </Menu.Button>
         </div>
         <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
            <Menu.Items className='absolute w-44 z-10 shadow-sm right-0 origin-top-right rounded-xl mt-2 py-2 border  bg-whiteColor'>
              <Menu.Item>
                  <button 
                  className='w-full flex items-center space-x-2 px-5 py-3 hover:bg-grayColorLight/30 group'>
                <span className='text-textSmall text-textColor capitalize tracking-wider group-hover:text-primaryColor'>your statistics</span>
                  </button>
              </Menu.Item>
              <Menu.Item>
                  <button 
                  
                  className='w-full flex items-center space-x-2 px-5 py-3 hover:bg-grayColorLight/30 group'>
                <span className='text-textSmall text-textColor capitalize tracking-wider group-hover:text-primaryColor'>project statistics</span>
                  </button>
              </Menu.Item>
            </Menu.Items>
        </Transition>
          </Menu>
        </div>

        <div className='mt-5'>
            <ChartBox />
        </div>
    </div>
  )
}

export default AnnotationStatistics