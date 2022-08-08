import { ArrowLeftIcon, PlusIcon } from "@heroicons/react/solid";
import { useAtom } from "jotai";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { PrimaryButton } from "../../../../../StyledComponents/PrimaryButton";
import RangeSelect from "../../../RangeSelect";
import PrimaryProgressBar from "../../../RangeSelect";
import { createProjectDataAtom } from "../store/atomStores";

interface ISecondFormFieldsProps {
  previousForm: () => void;
  handleFormSubmit: (e:any)=> void
}

const SecondFormFields: React.FC<ISecondFormFieldsProps> = ({
  handleFormSubmit,
  previousForm,
}) => {
  const [imageFlipping, setImageFlipping] = useState<boolean>(true);
  const [grayScalling, setGrayScalling] = useState<boolean>(true);
  const [createProjectData, setCreateProjectData] = useAtom(
    createProjectDataAtom
  );
  const [zoomAngle, setZoomAngle] = useState<number>(0)
  const [brightnessValue, setBrightnessValue] = useState<number>(0)

useEffect(()=> {
  setCreateProjectData((oldData) => {
    const projectData = { ...oldData };
    projectData.gray_scaling = grayScalling;
    return projectData;
  });
},[grayScalling])

useEffect(()=>{
  setCreateProjectData((oldData) => {
    const projectData = { ...oldData };
    projectData.brightness = brightnessValue;
    return projectData;
  });
},[brightnessValue])

useEffect(()=>{
  setCreateProjectData((oldData) => {
    const projectData = { ...oldData };
    projectData.zoom_angle = zoomAngle;
    return projectData;
  });
},[zoomAngle])

  return (
    <div>
      <div className="flex items-center">
        <button
          type="button"
          onClick={previousForm}
          className="px-3 py-2 flex items-center space-x-2 justify-center font-light 
                text-textNormal text-textColorLight/80 rounded-full bg-grayColorLight/40 hover:text-primaryColor"
        >
          <ArrowLeftIcon className="h-4 w-6" />
          <span className="capitalize tracking-wide">Image Upload</span>
        </button>
        <span
          className="mx-2 text-textColorLight/50 font-semibold text-textSmall
             "
        >
          /
        </span>
        <p
          className="text-textColor capitalize font-light
             text-textNormal px-2 py-0.5 bg-grayColorLight/50 rounded-2xl"
        >
          Augmentation Choice
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-textColor text-textNormal capitalize font-medium tracking-wide">
          image flipping
        </h3>
        <p className="text-textSmall text-textColorLight mt-2">
          Add horizontal or vertical flips to help your model be insensitive to
          subject orientation.
        </p>
        <div className="px-5 py-4 mt-2 rounded-2xl bg-grayColorLight/40 flex space-x-4 divide-x-2 divide-grayColorDark/70">
          <div className="flex flex-col justify-between w-4/12">
            <label
              htmlFor="image_flipping"
              className="flex items-center justify-between capitalize text-textSmall"
            >
              horizontal
              <input
                type="radio"
                value="Horizontal"
                name="image_flipping"
                className="h-5 w-5 ml-3"
                checked={imageFlipping}
                onChange={(e) => {
                  setCreateProjectData((oldData) => {
                    const projectData = { ...oldData };
                    projectData.image_flipping = e.target.value;
                    return projectData;
                  });
                  setImageFlipping(true);
                }}
              />
            </label>

            <label
              htmlFor="image_flipping"
              className="flex items-center justify-between capitalize text-textSmall"
            >
              vertical
              <input
                type="radio"
                value="Vertical"
                name="image_flipping"
                className="h-5 w-5 ml-3"
                checked={!imageFlipping}
                onChange={(e) => {
                  setCreateProjectData((oldData) => {
                    const projectData = { ...oldData };
                    projectData.image_flipping = e.target.value;
                    return projectData;
                  });
                  setImageFlipping(false);
                }}
              />
            </label>
          </div>

          <div className="w-8/12">
            <div className="relative w-[200px] h-[70px] rounded-3xl overflow-hidden ml-5">
              <Image
                src="/images/car.jpg"
                alt="image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Image rotation section */}
      <div className="mt-6">
        <h3 className="text-textColor text-textNormal capitalize font-medium tracking-wide">
          Image Rotation
        </h3>
        <p className="text-textSmall text-textColorLight mt-2">
          Rotate your image by specifying the degree
        </p>
        <div className="px-5 py-4 mt-2 rounded-2xl bg-grayColorLight/40 flex items-center space-x-4 divide-x-2 divide-grayColorDark/70">
          <div className="w-4/12">
            <input
              type="number"
              name="image_rotation"
              className=" p-3 rounded-xl w-full 
                bg-grayColorLight/40 mr-3 focus:ring-1
                 focus:ring-primaryColorLight outline-none placeholder:text-textColor "
              placeholder="0"
              onChange={(e) => {
                if (Number(e.target.value) > 360 || Number(e.target.value) < -360) {
                  e.target.value = "0";
                  setCreateProjectData((oldData) => {
                    const projectData = { ...oldData };
                    projectData.image_rotation = e.target.value;
                    return projectData;
                  });
                } else {
                  setCreateProjectData((oldData) => {
                    const projectData = { ...oldData };
                    projectData.image_rotation = e.target.value;
                    return projectData;
                  });
                }
              }}
            />
          </div>

          <div className="9/12">
            <div className="relative w-[200px] h-[70px] rounded-3xl overflow-hidden ml-5">
              <Image
                src="/images/car.jpg"
                alt="image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Grey scalling section */}
      <div className="mt-6">
        <h3 className="text-textColor text-textNormal capitalize font-medium tracking-wide">
          Gray Scalling
        </h3>
        <p className="text-textSmall text-textColorLight mt-2">
          Add Grayscalling
        </p>
        <div className="px-5 py-4 mt-2 rounded-2xl bg-grayColorLight/40 flex space-x-4 divide-x-2 divide-grayColorDark/70">
          <div className="flex flex-col justify-between w-4/12">
            <label
              htmlFor="gray_scalling"
              className="flex items-center justify-between capitalize text-textXSmall tracking-wider"
            >
              Add Grayscalling
              <input
                type="radio"
                name="gray_scalling"
                className="h-5 w-5 ml-3 "
                checked={grayScalling}
                onChange={() => setGrayScalling(true)}
              />
            </label>

            <label
              htmlFor="gray_scalling"
              className="flex items-center justify-between capitalize text-textXSmall tracking-wide"
            >
              Remove Grayscalling
              <input
                type="radio"
                name="gray_scalling"
                className="h-5 w-5 ml-3"
                checked={!grayScalling}
                onChange={() => setGrayScalling(false)}
              />
            </label>
          </div>

          <div className="w-8/12">
            <div className="relative w-[200px] h-[70px] rounded-3xl overflow-hidden ml-5">
              <Image
                src="/images/car.jpg"
                alt="image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Zoom Angle section */}
      <div className="mt-6">
        <h3 className="text-textColor text-textNormal capitalize font-medium tracking-wide">
          Zoom Angle
        </h3>
        <div className="px-5 py-4 mt-2 rounded-2xl bg-grayColorLight/40">
          <p className="text-textSmall text-textColorLight mt-2">
            Add horizontal or vertical flips to help your model be insensitive
            to subject orientation.
          </p>
          <div className="flex items-center justify-between mt-2 text-textColorLight/70 font-medium">
            <span>0</span>
            <span>({zoomAngle}) of 1</span>
          </div>
          <div className="w-full relative mt-1">
            <RangeSelect 
            defaultValue={0} 
            max={1}
            min={0}
            step={0.01}
            value={zoomAngle}
            onChange={(values)=> {
              setZoomAngle(values)
            }}
            />
          </div>
        </div>
      </div>

      {/* Zoom Angle section */}
      <div className="mt-6">
        <h3 className="text-textColor text-textNormal capitalize font-medium tracking-wide">
          Brightness
        </h3>
        <div className="px-5 py-4 mt-2 rounded-2xl bg-grayColorLight/40">
          <p className="text-textSmall text-textColorLight mt-2">
            Add horizontal or vertical flips to help your model be insensitive
            to subject orientation.
          </p>
          <div className="flex items-center justify-between mt-2 text-textColorLight/70 font-medium">
            <span>0</span>
            <span>({brightnessValue}) of 10</span>
          </div>
          <div className="w-full relative mt-1">
            <RangeSelect 
            defaultValue={0} 
            max={10}
            min={0}
            step={1}
            value={brightnessValue}
            onChange={(values)=> {
              setBrightnessValue(values)
            }}
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex">
        <PrimaryButton $fullWidth={true} onClick={handleFormSubmit}>
          <span className="text-whiteColor font-medium text-textNormal py-2">
            Create Project
          </span>
          <div className="w-4 h-4 rounded-md flex items-center justify-center border ml-2">
            <PlusIcon />
          </div>
        </PrimaryButton>
      </div>
    </div>
  );
};

export default SecondFormFields;
