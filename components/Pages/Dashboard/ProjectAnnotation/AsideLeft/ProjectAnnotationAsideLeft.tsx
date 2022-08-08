import { SearchIcon } from '@heroicons/react/solid'
import React from 'react'
import BoundingIcon from '../../../../Global/SVGIcons/BoundingIcon'
import FolderArrowDown from '../../../../Global/SVGIcons/FolderArrowDown'
import MessageIcon from '../../../../Global/SVGIcons/MessageIcon'
import SendIconThird from '../../../../Global/SVGIcons/SendIconThird'
import { AlternateButton } from '../../../../StyledComponents/AlternateButton'

const ProjectAnnotationAsideLeft = () => {
  return (
    <div className='h-screen fixed flex flex-col justify-between  w-48 pb-40'>
        <div className='h-[530px] bg-whiteColor px-6 flex flex-col justify-center items-center rounded-2xl'>
            <AlternateButton className="w-full mb-5 py-2 px-1"  >
                <SendIconThird className='mb-0.5 h-5 w-5 text-textColorLight group-hover:text-textColorDark' />
                <span className='text-textColorLight capitalize tracking-wider'>select</span>
            </AlternateButton>
            <AlternateButton className="w-full mb-5 py-2 px-1"  >
                <SearchIcon className='mb-0.5 h-5 w-5 text-textColorLight group-hover:text-textColorDark' />
                <span className='text-textColorLight capitalize tracking-wider'>zoom</span>
            </AlternateButton>
            <AlternateButton className="w-full mb-5 py-2 px-1" $active={true} >
                <BoundingIcon className='mb-0.5 h-7 w-7 text-gray-400 group-hover:text-gray-500 ' />
                <span className='text-textColorLight capitalize tracking-wider'>bounding box</span>
            </AlternateButton>
            {/* <AlternateButton className="w-full mb-5 py-2 px-1"  >
                <PolygonIcon className='mb-0.5 h-8 w-8 fill-textColorLight group-hover:fill-textColorDark ' />
                <span className='text-textColorLight capitalize tracking-wider'>polygon</span>
            </AlternateButton> */}
            
        </div>

        <div className=' bg-whiteColor p-2 flex flex-col justify-center items-between rounded-2xl mt-5'>
            <AlternateButton className="w-full mb-10 py-2 px-1"  >
                <FolderArrowDown className=' h-16 w-16 text-primaryColor group-hover:text-primaryColorHover' />
                <span className='text-primaryColor text-lg -mt-1 font-bold capitalize tracking-wider'>save</span>
            </AlternateButton>
            <AlternateButton className="w-full py-2 px-1" $active={true} >
                <MessageIcon className='mb-0.5 h-8 w-8 fill-primaryColor group-hover:text-textColorDark' />
                <span className='text-primaryColor capitalize'>chat with a team member</span>
            </AlternateButton>
            
            
        </div>
        
    </div>
  )
}

export default ProjectAnnotationAsideLeft