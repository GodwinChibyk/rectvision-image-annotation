import { BriefcaseIcon, ChartSquareBarIcon, CogIcon, PlayIcon, QuestionMarkCircleIcon, SunIcon, ViewGridIcon } from '@heroicons/react/solid'
import Link from 'next/link'

import React from 'react'
import DashboardAsideLeftLink from '../../../Global/Reuseable/DashboardAsideLeftLink'


const DashboardAsideLeft = () => {
  return (
    <div className=' h-screen mt-6 w-80  fixed'>
       <div className='flex flex-col h-full justify-between pb-32'>
       <div>
        <DashboardAsideLeftLink title='overview' link='/dashboard' icon={ViewGridIcon} />
        <DashboardAsideLeftLink title='projects' link='/dashboard/projects' icon={BriefcaseIcon} />
        {/* <DashboardAsideLeftLink title='demo' link='/dashboard/demo' icon={SunIcon} /> */}
        {/* <DashboardAsideLeftLink title='play ground' link='/dashboard/playground' icon={PlayIcon} /> */}
        <DashboardAsideLeftLink title='data management' link='/dashboard/data-management' icon={ChartSquareBarIcon} />
        <DashboardAsideLeftLink title='settings' link='/dashboard/settings' icon={CogIcon} />
        </div>

        <div className='bg-whiteColor rounded-xl px-4 py-8'>
          <div className='h-10 w-10 rounded-2xl  bg-activeGray flex justify-center mb-2 items-center'>
            <QuestionMarkCircleIcon className='text-primaryColor w-7 h-7' />
          </div>
          <h4 className='text-textColor font-semibold text-textNormal '>Need help?</h4>
          <p className='text-textColor text-textSmall font-light tracking-wide'>Please check our docs</p>
          <Link href="#" >
            <a className='text-textColor w-full rounded-lg py-1 flex 
            justify-center items-center  mt-2 border border-textColorLight'>
              Documentation
            </a>
          </Link>
        </div>
       </div>
    </div>
  )
}

export default DashboardAsideLeft