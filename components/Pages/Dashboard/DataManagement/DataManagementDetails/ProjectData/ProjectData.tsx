import React from "react";
import RedProgressBar from "../../../../../Global/Reuseable/RedProgressBar";


interface IProjectDataProps {
  className?: string;
}

const ProjectData: React.FC<IProjectDataProps> = ({ className }) => {
  return (
    <div
      className={`rounded-2xl bg-whiteColor px-6 py-5 h-96 ${className}`}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-textNormal text-textColor font-medium tracking-wide">
          Project data
        </h2>
        <button 
        className=" px-2 py-0.5 bg-grayColorLight/40 text-center text-textColor text-textSmall tracking-wide rounded-xl">
            Edit</button>
      </div>

      <div className="flex justify-between mt-10 pb-4 border-b border-grayColor">
        <div>
            <p className="text-textSmall font-light text-textColorLight tracking-wider">Timeline</p>
            <p className="text-textNormal font-medium text-textColor leading-7">2 weeks</p>
        </div>
        <div>
            <p className="text-textSmall font-light text-textColorLight tracking-wider">Created on:</p>
            <p className="text-textNormal font-medium text-textColor leading-7">November 21, 2021</p>
        </div>
        <div>
            <p className="text-textSmall font-light text-textColorLight tracking-wider">Images</p>
            <p className="text-textNormal font-medium text-textColor leading-7">16</p>
        </div>
      </div>

        <div className="mt-14">
            <div className="flex items-center justify-between">
                <p className="text-textNormal text-textColorLight/70 tracking-wider font-medium capitalize">progress</p>
                <p className="text-textNormal text-textColorLight/70 tracking-wide font-medium capitalize">70%</p>
            </div>
            <div className="mt-3 w-full">
            <RedProgressBar status="success" percent={70}  />
            </div>
        </div>

    </div>
  );
};

export default ProjectData;
