import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";


interface ISingleProjectProps {
  isBadge?: boolean
  link: string
}

const SingleProjectCard:React.FC<ISingleProjectProps> = ({isBadge, link}) => {
  return (
    <>
    <Link href={link}>
        <a>
        <div className="bg-grayColorLight rounded-3xl w-52 mr-6 mb-6 relative">
      <div className="h-40 w-full relative overflow-hidden rounded-3xl">
      <div className='absolute inset-0 rounded-3xl bg-black/20 z-10'></div>
        <Image
          src="/images/road.png"
          alt="single project image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="absolute inset-0 z-20 my-auto px-4 flex justify-between items-center">
            <ChevronLeftIcon className="w-6 h-6 text-whiteColor" />
            <ChevronRightIcon className="w-6 h-6 text-whiteColor"  />
        </div>
      </div>
      <h2 className="text-primaryColor text-textNormal font-semibold 
      tracking-wide text-center py-4 capitalize">
        test project
      </h2>

        {isBadge && (
          <div className="absolute -top-4 z-20 -right-4 h-14 w-14 rounded-full flex items-center justify-center bg-redColor">
          <span className="text-whiteColor font-semibold text-textNormal">
                30%
          </span>
        </div>
        )}
    </div>
        </a>
    </Link>
    </>
    
  );
};

export default SingleProjectCard;
