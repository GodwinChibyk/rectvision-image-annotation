import { BriefcaseIcon } from "@heroicons/react/solid";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import React, { useState } from "react";
import toast, { Renderable, ValueOrFunction } from "react-hot-toast";
import { AUTH_ROUTES, IRequestError, usePostRequest } from "../../../base";
import { PROJECT_ROUTES } from "../../../base/api-request/routes/project-routes";
import { createProjectDefaultData } from "../../../base/Data/CreateProjectDefaultData/createProjectDefaultData";
import CreateProjectModal from "../../Global/Reuseable/Modals/CreateProjectModal/CreateProjectModal";
import {
  createProjectDataAtom,
  creatProjectErrorMessageAtom,
} from "../../Global/Reuseable/Modals/CreateProjectModal/store/atomStores";
import { useProjectStore } from "../../Pages/globalStore/zustandStore";
import { ButtonOutline } from "../../StyledComponents/ButtonOutline";

interface IGetStartedLayoutProps {
  openModal: () => void;
}

const GetStartedLayout = () => {
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [createdProjectData, setCreateProjectData] = useAtom(
    createProjectDataAtom
  );
  const [errorMessage, setErrorMessage] = useAtom(creatProjectErrorMessageAtom);

  const {push} = useRouter()
  const {setProject} = useProjectStore((state)=> ({
    setProject: state.setProject
  }))

  const { post, data, isLoading, error } = usePostRequest<any>({
    path: PROJECT_ROUTES.CREATE_PROJECT,
    formData: true,
  });

  const promiseToaster = (
    resolver: any,
    msgs?: {
      loading?: Renderable;
      success?: ValueOrFunction<Renderable, unknown>;
      error?: ValueOrFunction<Renderable, any>;
    }
  ) => {
    const msgsBox = msgs ?? {
      success: undefined,
      error: undefined,
      loading: undefined,
    };
    const { success, error, loading = "Loading..." } = msgsBox;

    return toast.promise(resolver, {
      loading: loading,
      success: (dataS: any) => {
        return (success as string) ?? dataS.message;
      },
      error: (err: IRequestError) => {
        return (error as string) ?? err?.message;
      },
    });
  };

  const submitFormData = () => {
    const { labels } = createdProjectData;
    const formatedLabels = labels.reduce((initvalue: string, label: any) => {
      return label.value + ',' +initvalue;
    }, "");
    createdProjectData.labels = formatedLabels
     promiseToaster(
      post(createdProjectData, {
        onSuccess: (response) => {
          // console.log(createdProjectData);
          setProject(response.data.project)
          setTimeout(() => {
            setToggleModal(!toggleModal)
            push(`/project-annotation/${response.data.project.id}`)
          }, 2000);
        },
      })
    );
  };

  return (
    <>
      <div className="px-3 py-2 bg-grayColorLight/10 flex space-x-2 rounded-lg">
        <div className="h-8 w-8 rounded-full flex justify-center items-center bg-whiteColor/80">
          <BriefcaseIcon className="h-5 w-5 text-textColor" />
        </div>

        <div>
          <h4 className="text-textNormal text-textColor font-medium mb-2">
            Add a new Project
          </h4>
          <p className="text-textSmall text-textColor font-light tracking-wide">
            Upload images/videos, annotate and export
          </p>
          <div className="mt-2">
            <ButtonOutline onClick={() => setToggleModal(true)}>
              get started
            </ButtonOutline>
          </div>
        </div>
      </div>

      {/* create project form modal */}
      {toggleModal && (
        <CreateProjectModal
          closeModal={() => {
            setToggleModal(!toggleModal);
            setErrorMessage(false);
            setCreateProjectData(createProjectDefaultData);
          }}
          handleFormSubmit={(e) => {
            e.preventDefault();
            const { image_rotation, zoom_angle, brightness } =
              createdProjectData;
            if (
              image_rotation == "0" ||
              zoom_angle == 0 ||
              brightness == 0 ||
              image_rotation == ""
            ) {
              setErrorMessage(true);
            } else {
              submitFormData();
              setErrorMessage(false);
            setCreateProjectData(createProjectDefaultData);
            }
          }}
        />
      )}
    </>
  );
};

export default GetStartedLayout;
