import React from 'react'
import PageWrapper from '../../../Global/PageWrapper/PageWrapper'
import ProjectAnnotationAsideLeft from './AsideLeft/ProjectAnnotationAsideLeft'
import ProjectAnnotationAsideRight from './AsideRight/ProjectAnnotationAsideRight'
import ProjectAnnotationHeader from './Header/ProjectAnnotationHeader'
import MainContentSection from './Main/MainContentSection'
import ProjectAnnotationNavBar from './NavBar/ProjectAnnotationNavBar'

const ProjectAnnotationIndex = () => {
  return (
    <PageWrapper>
      <div className='h-24 z-10 bg-backgroundColor  fixed top-0 inset-x-0'>
      <ProjectAnnotationHeader />
      <ProjectAnnotationNavBar />
      </div>

      {/* Dashboard aside-left and main section */}
      <div className="flex space-x-8 px-12 pt-[140px]">
        {/* Aside left */}
        <div className="min-h-screen w-48">
          {/* <DashboardAsideLeft /> */}
          <ProjectAnnotationAsideLeft />
        </div>

        {/* Main section aside right */}
        <div className="flex-1 flex space-x-8">
          <MainContentSection />
          <ProjectAnnotationAsideRight />
        </div>
      </div>
    </PageWrapper>
  )
}

export default ProjectAnnotationIndex