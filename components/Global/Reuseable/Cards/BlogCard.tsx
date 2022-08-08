import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface IBlogCardProps {
    title: string
    imageUrl: string
    readTime: number
}

const BlogCard:React.FC<IBlogCardProps> = ({title, imageUrl, readTime}) => {
  return (
    <>
    <Link href='#' >
        <a>
        <div className='rounded-2xl h-44 relative overflow-hidden'>
            <div className='absolute inset-0 rounded-2xl bg-black/20 z-10'></div>
            <Image 
            src={imageUrl}
            alt='blog image'
            layout='fill'
            objectFit='cover'
            objectPosition='center'
             />

            <div className='px-3 py-1 text-center bg-redColor rounded-full absolute top-4 right-6 z-20'>
                <p className='text-whiteColor text-textSmall font-medium'>{readTime} min</p>
            </div>

            <div className='absolute inset-x-0 w-5/6 mx-auto bottom-4 z-20  px-4 py-2 bg-black/70 rounded-2xl'>
                <h3 className='text-textNormal text-whiteColor font-semibold tracking-wide'>
                {title}
                </h3>
            </div>
        </div>
        </a>
    </Link>
    </>
   
  )
}

export default BlogCard