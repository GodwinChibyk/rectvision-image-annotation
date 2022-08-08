import { ChevronDownIcon } from '@heroicons/react/solid'
import React from 'react'
import BriefCaseOutlineIcon from '../../../../Global/SVGIcons/BriefCaseOutlineIcon'
import GetStartedLayoutTwo from '../../../../Layouts/GetStartedLayoutTwo/GetStartedLayoutTwo'
import { ButtonOutline } from '../../../../StyledComponents/ButtonOutline'

const AllProjectSection = () => {
  return (
    <div className='mt-12'>
        <div className='flex items-center justify-between pb-3 border-b shadow-sm'>
        <h3 className='text-textMedium capitalize text-textColor/70 font-semibold tracking-wider'>projects</h3>
        <div>
            <div className='px-2 py-1 rounded-xl bg-grayColorLight/10 flex items-center'>
                <span  className='text-textColorLight/80 text-textNormal mr-2 font-semibold'>Show:</span>
                <button className='flex items-center text-textNormal text-textColor font-medium'>
                    All projects
                    <ChevronDownIcon className="w-5 h-5 text-textColor/80  ml-1" />
                </button>
            </div>
        </div>
        </div>

            <GetStartedLayoutTwo />
    </div>
  )
}

export default AllProjectSection