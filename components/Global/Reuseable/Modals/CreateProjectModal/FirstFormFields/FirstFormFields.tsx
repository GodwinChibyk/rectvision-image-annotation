import { CloudUploadIcon, PlusIcon, SortAscendingIcon, UploadIcon } from "@heroicons/react/solid";
import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { PrimaryButton } from "../../../../../StyledComponents/PrimaryButton";
import { createProjectDataAtom } from "../store/atomStores";
import FileUpload from "./Inputs/FileUpload";
import MultiSelectInput from "./Inputs/MultiSelectInput";
import SingleSelectInput from "./Inputs/SingleSelectInput";

interface IFirstFormFieldsProps {
  nextForm: ()=> void
}

const FirstFormFields:React.FC<IFirstFormFieldsProps> = ({nextForm}) => {

// Annotation choice
const annotationOptions = [
  { value: 'object_detetion', label: ' Object Detection' },
  { value: 'semantic_segmentation', label: 'Semantic Segmentation' },
  { value: 'instance_segmentation', label: ' Instance Segmentation' }
]

// Annotation choice
const projectTimelineOptions = () => {

  const ONE_WEEK_IN_HOURS = 168;
  const TWO_WEEKS_IN_HOURS = 336;
  const ONE_MONTH_IN_HOURS = 744;

  return [
    { value: formatDate(ONE_WEEK_IN_HOURS), label: ' 1 week' },
    { value: formatDate(TWO_WEEKS_IN_HOURS), label: '2 weeks' },
    { value: formatDate(ONE_MONTH_IN_HOURS), label: ' 1 month' }
  ]
}

const formatDate = (hours: number) => {
  const date = new Date();
  date.setHours(hours);
  return date.toISOString().split("T")[0];
}



 const [createProjectData,setCreateProjectData] = useAtom(createProjectDataAtom)
 const [augumentData, setAugumentData] = useState<boolean>(true)


//  useEffect(()=>{
//   console.log(createProjectData)
//  },[createProjectData])

useEffect(()=>{
  setCreateProjectData((oldData)=> {
    const projectData = {...oldData}
    projectData.is_augument_data = augumentData
    return projectData
  })
},[augumentData])


  return (
    <div>
      <div className="flex flex-col mb-5">
      <label htmlFor="project_name" 
      className="text-textNormal text-textColor tracking-wide mb-2 capitalize">
        project name
        </label>
      <input
        type="text"
        name="project_name"
        placeholder="Give your project a title"
        className="bg-grayColorLight/40 rounded-xl px-4 py-3 text-textSmall shadow-sm focus:outline-none 
        focus:border-primaryColorLight 
        focus:ring-primaryColorLight 
        focus:ring-1 text-textColorLight 
        placeholder:tracking-wide placeholder:text-textColorLight/80"
        onChange={(e)=>{
          setCreateProjectData((oldData)=> {
            const projectData = {...oldData}
            projectData.name = e.target.value
            return projectData
          })
        }}  
      />
      </div>

      <div className="flex flex-col mb-5">
      <label htmlFor="annotation_choice" 
      className="text-textNormal text-textColor tracking-wide mb-2 capitalize">
        Annotation choice
        </label>
        <SingleSelectInput options={annotationOptions} onchange={(value)=>{
          setCreateProjectData((oldData)=> {
            const projectData = {...oldData}
            projectData.annotation_choice = value?.value
            return projectData
          })
        }} />
      </div>

      <div className="flex flex-col mb-5">
      <label htmlFor="annotation_choice" 
      className="text-textNormal text-textColor tracking-wide mb-2 capitalize">
       Labels
        </label>
          <MultiSelectInput />
      </div>

      <div className="flex flex-col mb-5">
      <label htmlFor="annotation_choice" 
      className="text-textNormal text-textColor tracking-wide mb-2 capitalize">
        Set Project Timeline
        </label>
        <SingleSelectInput options={projectTimelineOptions()} onchange={(value)=>{
        
          setCreateProjectData((oldData)=> {
            const projectData = {...oldData}
            projectData.project_days_timeline = value?.value
            return projectData
          })
        }} />
       
      </div>

    {/*START: uploading of file section */}
      <FileUpload />
    {/*END: uploading of file section */}


      <div className="flex flex-col">
      <p 
      className="text-textNormal text-textColor tracking-wide mb-2 capitalize">
       Augment Data
        </p>
        <p className="text-textSmall text-textColorLight/90 mb-2">
        Create examples for your model to learn from by generating augmented versions of each image in your training set. 
        </p>
        
        <div className="mt-2 flex space-x-5" >
            <label htmlFor="augment_data" className="flex items-center capitalize text-textNormal" >
            yes
        <input 
        type='radio' 
        value='yes'
        name="augment_data" 
        className="h-6 w-6 ml-3 "
        checked ={augumentData}
        onChange={()=>{
          setAugumentData(true)
        }}
        />
            </label>

            <label htmlFor="augment_data" className="flex items-center capitalize text-textNormal" >
            no
        <input 
        type='radio' 
        name="augment_data" 
        className="h-6 w-6 ml-3"
        checked={!augumentData}
        onChange={()=>{
          setAugumentData(false)
        }}
        />
            </label>
        </div>
      </div>

      <div className="mt-6 flex">
        <PrimaryButton $fullWidth={true} 
        onClick={nextForm} 
        type="button"
        >
            <span className="text-whiteColor font-medium text-textNormal py-2">Next </span>
            <div className="w-4 h-4 rounded-md flex items-center justify-center border ml-2">
                <PlusIcon />
            </div>
        </PrimaryButton>

      </div>
    </div>
  );
};

export default FirstFormFields;
