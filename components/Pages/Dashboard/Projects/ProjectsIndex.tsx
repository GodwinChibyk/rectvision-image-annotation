import React from 'react'
import DashboardMainWrapper from '../../../Global/PageWrapper/DashboardMainWrapper'
import GetStartedLayout from '../../../Layouts/GetStartedLayout/GetStartedLayout'
import AllProjectsSection from './AllProjectsSection/AllProjectsSection'

const ProjectsIndex = () => {
  return (
    <DashboardMainWrapper>
        <div className='w-full'>
        <h3 className='text-textMedium capitalize text-textColor/70 font-semibold tracking-wider mb-6'>projects</h3>
        <GetStartedLayout />
        </div>
        <AllProjectsSection isProject={false} />

        {/* <SingleProjectDetail /> */}
    </DashboardMainWrapper>
  )
}

export default ProjectsIndex