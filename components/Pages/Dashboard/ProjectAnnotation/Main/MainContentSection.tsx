import { XIcon } from '@heroicons/react/solid'
import React, { useEffect, useState } from 'react'
import { DUMMY_IMAGES } from '../../../../../base/Data/DummyImageData/DummyImageData'
import DrawPagination from '../../../../Global/Reuseable/DrawPagination/DrawPagination'
import DataAnnotation from '../../../../library-components/AnnotationContainer/AnnotationContainer'
import { useProjectStore } from '../../../globalStore/zustandStore'

const MainContentSection = () => {
  
  const {project} = useProjectStore((state) => ({
    project: state.project,
  }))
  
  const [imageUrl, setImageUrl] = useState(`${project.annotations? project?.annotations[0]?.url: null}`);

useEffect(()=>{
  console.log(project)
},[project])


  return (
    <div className="bg-whiteColor min-h-full flex-1 rounded-2xl px-10 pt-8 pb-5">
    <div className="h-3/4 2xl:h-4/5 w-full border relative">
      <DataAnnotation imageSrc={imageUrl} />

        {/* <DrawBoxInfo /> */}
    </div>

    <div className="h-1/5">
      <DrawPagination />

      <div className="grid grid-cols-6 gap-x-5">
        {project.annotations?.map((annotationFile) => (
          <div
            onClick={() => setImageUrl(annotationFile.url)}
            key={annotationFile.id}
            className=" relative rounded-2xl overflow-hidden h-20 2xl:h-28 bg-cover"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={annotationFile.url}
              alt="car1"
              // objectFit="cover"
              // objectPosition="center"
              // layout="fill"
              className='z-0 h-full w-full'
            />
            <button className="absolute top-2 right-2 w-5 h-5 2xl:h-6 2xl:w-6 rounded-md 
            border-2 group border-whiteColor flex justify-center items-center">
              <XIcon className="text-whiteColor w-4 h-4 group-hover:text-redColor" />
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default MainContentSection