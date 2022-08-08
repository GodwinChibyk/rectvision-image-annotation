
import React from 'react'
import DashboardMainWrapper from '../../../Global/PageWrapper/DashboardMainWrapper'
import SingleProjectCard from '../../../Global/Reuseable/Cards/SingleProjectCard'

const DataManagementIndex = () => {
  return (
    <DashboardMainWrapper>
        <div className="flex items-center pb-4 border-b shadow-sm">
        <h3 className="text-textLarge capitalize text-textColor font-semibold tracking-wider">
          dataset
        </h3>
        <span className='py-2 px-4 text-textNormal rounded-full flex justify-center items-center bg-grayColor ml-3 text-primaryColor font-semibold'>
            2
        </span>
      </div>

      <div className='mt-12 flex flex-wrap'>
        <SingleProjectCard link='/dashboard/data-management/data-details' />
        <SingleProjectCard isBadge={true} link='/dashboard/data-management/data-details' />
      </div>
    </DashboardMainWrapper>
  )
}

export default DataManagementIndex