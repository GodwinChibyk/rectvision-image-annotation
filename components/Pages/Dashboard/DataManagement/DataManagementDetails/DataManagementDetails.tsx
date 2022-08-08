import React from 'react'
import FileTransferIcon from '../../../../Global/SVGIcons/FileTransferIcon'
import GoPreviousPageLayout from '../../../../Layouts/GoPreviousPageLayout/GoPreviousPageLayout'
import AnnotationStatistics from './AnnotationStatistics/AnnotationStatistics'
import ProjectData from './ProjectData/ProjectData'

const DataManagementDetails = () => {
  return (
    <div className='w-full min-h-screen bg-backgroundColor pt-8'>
        <div className='ml-6 flex items-center justify-between'>
        <GoPreviousPageLayout currentPage='test projects' previousPage='data management' />
            <button 
            className='w-40 py-1.5 rounded-xl px-2 flex items-center 
            justify-center space-x-2 bg-grayColorLight/60 group hover:border border-grayColor'>
                <FileTransferIcon className='fill-textColorLight group-hover:fill-primaryColor' />
                <span className='text-textNormal text-textColor group-hover:text-primaryColor tracking-wide capitalize'>
                    export
                </span>
            </button>
        </div>
        <div className='flex space-x-8 mt-8'>
            <AnnotationStatistics className='w-7/12' />
            <ProjectData className='w-5/12 h-96' />
        </div>


    </div>
  )
}

export default DataManagementDetails