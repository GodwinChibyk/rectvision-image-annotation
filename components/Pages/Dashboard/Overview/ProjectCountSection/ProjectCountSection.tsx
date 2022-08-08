import { BriefcaseIcon } from '@heroicons/react/outline'
import React from 'react'
import BriefCaseOutlineIcon from '../../../../Global/SVGIcons/BriefCaseOutlineIcon'
import DottedCheckIcon from '../../../../Global/SVGIcons/DottedCheckIcon'



const ProjectCountSection = () => {
  return (
    <div className='w-full grid grid-cols-2 gap-x-8 mt-10'>
        <div className=''>
            <h3 className='text-textMedium capitalize text-textColor/70 font-semibold tracking-wider mb-6'>projects</h3>
            <div className='rounded-3xl bg-grayColorLight/30 px-7 py-5 flex items-center space-x-8'>
                <div className='h-28 w-28 rounded-full flex justify-center items-center border border-primaryColor'>
                    <BriefCaseOutlineIcon className='h-10 w-10' />
                </div>  
                <div>
                    <p className='text-h4 font-semibold text-textColor'>
                        0
                    </p>
                    <p className='mt-5 text-textColor/80 text-textSmall font-medium tracking-wide'>+0% more this month</p>
                </div> 
            </div>
        </div>

        <div className=''>
            <h3 className='text-textMedium capitalize text-textColor/70 font-semibold tracking-wider mb-6'> current projects</h3>
            <div className='rounded-3xl bg-grayColorLight/30 px-7 py-5 flex items-center space-x-8'>
                <div className='h-28 w-28 rounded-full flex justify-center items-center border border-primaryColor'>
                    <DottedCheckIcon className='h-10 w-10' />
                </div>  
                <div>
                    <p className='text-h4 font-semibold text-textColor'>
                        0
                        <span className='text-textMedium font-light text-textColorLight ml-2'>/0</span>
                    </p>
                    <p className='mt-5 text-textColor/80 text-textSmall font-medium tracking-wide'>You completed 0% of your current project</p>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default ProjectCountSection