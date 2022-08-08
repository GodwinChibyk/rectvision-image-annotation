import { XIcon } from "@heroicons/react/solid";
import { useAtom } from "jotai";
import React, { useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import FirstFormFields from "./FirstFormFields/FirstFormFields";
import SecondFormFields from "./FirstFormFields/SecondFormFields";
import { createProjectDataAtom, creatProjectErrorMessageAtom } from "./store/atomStores";

interface ICreateProjectModalProps {
  closeModal: () => void;
  handleFormSubmit: (e:any) => void
}

const CreateProjectModal: React.FC<ICreateProjectModalProps> = ({
  closeModal,
  handleFormSubmit
}) => {
  const [toggleForm, setToggleForm] = useState<boolean>(true);
  const [createdProjectData] = useAtom(createProjectDataAtom);

  const [errorMessage, setErrorMessage] = useAtom(creatProjectErrorMessageAtom);

  return (
    <>
      <ErrorMessage error={errorMessage} />
      <div className="fixed inset-0 overflow-y-scroll  py-8 z-40 bg-textColor/30 flex justify-center hideScrollBar ">
        <div className="w-[650px] ">
          <div className="flex items-center justify-end">
            <button
              onClick={closeModal}
              className="w-10 h-10 rounded-xl bg-whiteColor flex justify-center items-center 
            text-center text-h5 text-textColorLight hover:text-redColor/70"
            >
              <XIcon className="w-5 h-5" />
            </button>
          </div>
          <div className="mt-4 rounded-3xl w-full bg-whiteColor px-8 py-6">
            <form action="" className="w-full h-full">
              <div className={`${toggleForm ? "block" : "hidden"}`}>
                <FirstFormFields
                  nextForm={() => {
                    const {
                      files,
                      labels,
                      name,
                      annotation_choice,
                      project_days_timeline,
                    } = createdProjectData;

                    if(
                      // files.length <= 0 ||
                    labels.length <= 0 ||
                    name == "" ||
                    project_days_timeline == "" ||
                    annotation_choice == "") {
                      setErrorMessage(true)
                    }else{
                      setToggleForm(false)
                      setErrorMessage(false)
                    }
                  }}
                />
              </div>
              <div className={`${!toggleForm ? "block" : "hidden"}`}>
                <SecondFormFields
                  previousForm={() => {
                    setToggleForm(true)
                    setErrorMessage(false)
                  }}
                  handleFormSubmit={handleFormSubmit}
                />
              </div>
            </form>
          </div>
          <div className="h-10 w-full"></div>
        </div>
      </div>
    </>
  );
};

export default CreateProjectModal;
