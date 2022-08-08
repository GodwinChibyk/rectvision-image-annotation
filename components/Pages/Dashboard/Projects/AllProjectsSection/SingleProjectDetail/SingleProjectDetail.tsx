import { ArrowLeftIcon } from '@heroicons/react/solid'
import React from 'react'
import TabSection from './TabSection/TabSection'
import { useRouter } from 'next/router'
import GoPreviousPageLayout from '../../../../../Layouts/GoPreviousPageLayout/GoPreviousPageLayout'

const SingleProjectDetail = () => {

  return (
    <div>
        <GoPreviousPageLayout currentPage='test projects' previousPage='projects' />

        <TabSection />
    </div>
  )
}

export default SingleProjectDetail