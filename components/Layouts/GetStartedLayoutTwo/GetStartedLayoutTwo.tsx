import React from 'react'
import BriefCaseOutlineIcon from '../../Global/SVGIcons/BriefCaseOutlineIcon'
import { ButtonOutline } from '../../StyledComponents/ButtonOutline'

const GetStartedLayoutTwo = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <div className='my-8'>
            <BriefCaseOutlineIcon className='h-20 w-20' />
            </div>
                <p className='text-textSmall text-textColor font-light'>
                You do not have a project yet!
                </p>
                <div className='mt-6'>
                <ButtonOutline>
                    get started
                </ButtonOutline>
                </div>
    </div>
  )
}

export default GetStartedLayoutTwo