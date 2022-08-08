import Image from 'next/image'
import React from 'react'

interface IProjectCard {
  imageUrl: string
}

const ProjectCard:React.FC<IProjectCard> = ({imageUrl}) => {
  return (
    <div className='w-24 h-24 rounded-2xl relative overflow-hidden mr-4 mb-5'>
      <div className='absolute inset-0 rounded-2xl bg-black/20 z-10'></div>
      <Image 
      src={imageUrl}
      alt='project image'
      layout='fill'
      objectFit='fill'
      objectPosition='center'
       />
       <div className='h-4 w-4 border border-green-500 absolute right-6 bottom-5 z-20'></div>
       <div className='h-4 w-4 border border-redColor absolute  top-4 left-2 z-20'></div>
    </div>
  )
}

export default ProjectCard