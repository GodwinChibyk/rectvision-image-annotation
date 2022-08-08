import React from 'react'
import AllProject from './TabViews/AllProject'
import { Tab } from '@headlessui/react'
import AnnotatedProjects from './TabViews/AnnotatedProjects'
import UnAnnotatedProjects from './TabViews/UnAnnotatedProjects'

function classNames(...classes:string[]) {
    return classes.filter(Boolean).join(' ')
  }

const TabSection = () => {
  return (
    <>
        <div className='mt-12'>
            <Tab.Group>
            <Tab.List className='flex items-center space-x-3 border-b border-grayColor'>

                <Tab className={({selected}:any) => 
                classNames('px-5 py-1.5 flex justify-center items-center',
                'text-textNormal text-textColor  tracking-wider rounded-3xl', 
                selected ? 'bg-primaryColor font-medium text-whiteColor ':'font-light')}>
                    All <span className='ml-1'>(35)</span>
                </Tab>
                <Tab className={({selected}:any) => 
                classNames('px-5 py-1.5 flex justify-center items-center',
                'text-textNormal text-textColor  tracking-wider rounded-3xl', 
                selected ? 'bg-primaryColor font-medium text-whiteColor ':'font-light')}>
                    Annotated <span className='ml-1'>(10)</span>
                </Tab>

                <Tab className={({selected}:any) => 
                classNames('px-5 py-1.5 flex justify-center items-center',
                'text-textNormal text-textColor  tracking-wider rounded-3xl', 
                selected ? 'bg-primaryColor font-medium text-whiteColor ':'font-light')}>
                    Unannotated <span className='ml-1'>(25)</span>
                </Tab>
                
            </Tab.List>

            <Tab.Panels className='mt-6'>
                <Tab.Panel>
                <AllProject />
                </Tab.Panel>
                <Tab.Panel>
                <AnnotatedProjects />
                </Tab.Panel>
                <Tab.Panel>
                <UnAnnotatedProjects />
                </Tab.Panel>
            </Tab.Panels>
            </Tab.Group>
        </div>
    </>
  )
}

export default TabSection