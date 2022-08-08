import { DocumentDuplicateIcon, FolderIcon } from '@heroicons/react/outline'
import React from 'react'

const ProjectAnnotationAsideRight = () => {
  return (
    <div  className='bg-whiteColor min-h-full w-72 rounded-2xl px-4 py-6'>
        <div className=' text-center flex flex-col justify-start items-center h-1/2'>
            <div className='flex items-center justify-center w-16 h-16 rounded-full mb-2 bg-gray-100'>
                <FolderIcon className='w-8 h-8 text-gray-400' />
            </div>
            <p className='text-lg text-textColorLight font-semibold'>No Labels yet</p>
            <p className='text-textColorLight text-base font-light'>Click the bounding box tool to create to a label</p>
        </div>

        {/* <div className='h-1/2'>
            <div className='bg-grayColorLight/50 px-2 pb-4 rounded-2xl'>
                <div className='flex justify-end'>
                    <DocumentDuplicateIcon className='h-4 w-4 text-textColorLight mt-2' />
                </div>
                <p className='text-textColorLight text-sm leading-8'>
                    Lorem ipsum dolor,<br/> sit amet consectetur<br/> adipisicing elit. Facilis <br/>quos hic amet <br/>saepe, cumque at?
            </p>
            </div>
            <div className='bg-grayColorLight/50 p-2 rounded-2xl mt-4'>
                <div className='mb-3'>
                    <p className='flex justify-between capitalize mb-1'>bus <span className='text-textColorLight'>2</span></p>
                    <div className='w-full bg-redColor rounded-full p-1'></div>
                </div>
                <div>
                <p className='flex justify-between capitalize mb-1'>bus <span className='text-textColorLight'>2</span></p>
                    <div className='w-full bg-greenColor rounded-full p-1'></div>
                </div>
                <button className='flex justify-center items-center rounded-lg py-1 
                px-4 mt-4 capitalize font-medium text-textColorDark w-full bg-grayColorLight hover:bg-grayColorDark/80'>
                    view statistics
                </button>
            </div>
        </div> */}
    </div>
  )
}

export default ProjectAnnotationAsideRight