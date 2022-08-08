import {
  CloudUploadIcon,
  FolderRemoveIcon,
  XCircleIcon,
} from "@heroicons/react/solid";
import React, { useEffect, useRef, useState } from "react";
import DropBoxIcon from "../../../../../SVGIcons/DropBoxIcon";
import GoogleDriveIcon from "../../../../../SVGIcons/GoogleDriveIcon";
import HyperLinkIcon from "../../../../../SVGIcons/HyperLinkIcon";
import { FileDrop } from "react-file-drop";
import { useAtom } from "jotai";
import { createProjectDataAtom } from "../../store/atomStores";

const FileUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);
  const [onFrameDragEnter, setOnFrameDragEnter] = useState<boolean>(false);
  const [onFileDrop, setOnFileDrop] = useState<boolean>(false);

  const [createProjectFiles, setCreateProjectFiles] = useAtom(createProjectDataAtom)

  const fileUpload = useRef<HTMLInputElement>(null);

  // trigger select file onClik of a button
  const selectFile = () => fileUpload?.current?.click();

  const handleSelectedFiles = () => {
    const selectedFiles = { ...fileUpload.current?.files };
    const allSelectedFiles = { ...selectedFiles };
    setUploadedFiles((old) => {
      return [...old, ...Object.values(allSelectedFiles)];
    });
    setOnFileDrop(true);
  };

  useEffect(()=>{
    setCreateProjectFiles((oldData)=> {
      const projectData = {...oldData}
      projectData.files = uploadedFiles
      return projectData
    })
  },[uploadedFiles])

  return (
    <>
      <div className="flex flex-col mb-5">
        <label
          htmlFor="annotation_choice"
          className="text-textNormal text-textColor tracking-wide mb-2 capitalize"
        >
          Upload File
        </label>
        <p className="text-textSmall text-textColorLight/90 mb-2">
          Upload image/video using any of these format
        </p>
        <div
          className={`bg-grayColorLight/40 rounded-xl px-4 py-4 text-textSmall shadow-sm ${
            onFileDrop ? "block" : "flex flex-col justify-between"
          }`}
        >
          {/* Drag and drop file section */}
          <div className=" w-full h-[160px]">
            <>
              {onFileDrop && (
                <div className="overflow-y-scroll h-full hideScrollBar">
                  {uploadedFiles.map((file, index) => {
                    const fileUrl = URL.createObjectURL(file);
                    // console.log(fileUrl)
                    return (
                      <p
                        key={index}
                        className="mb-2 text-textColorLight/70 pl-2 font-medium text-textSmall tracking- flex items-center"
                      >
                        <span className="text-textColorLight font-semibold mr-2">
                          {index + 1}.
                        </span>
                        {file.name}
                        <span
                          onClick={() => {
                            const fileIndex = uploadedFiles.indexOf(file);
                            if (fileIndex > -1) {
                              const fileArrs = uploadedFiles.filter((_, i) => i !== fileIndex);
                              setUploadedFiles(fileArrs);
                            }
                            if(uploadedFiles.length <= 1) {
                              setOnFrameDragEnter(false);
                              setOnFileDrop(false);
                            }
                          }}
                          className="ml-3"
                        >
                          <XCircleIcon className="h-4 w-4 text-textColorLight/60 hover:text-redColor/70" />
                        </span>
                      </p>
                    );
                  })}
                </div>
              )}
            </>
            <FileDrop
              onFrameDragEnter={() => {
                setOnFrameDragEnter(true);
                setOnFileDrop(false);
              }}
              onFrameDragLeave={() => setOnFrameDragEnter(false)}
              //   onFrameDrop={(event) => console.log('onFrameDrop', event)}
              //   onDragOver={(event) => console.log('onDragOver', event)}
              onDragLeave={() => setOnFrameDragEnter(false)}
              onDrop={(files: any) => {
                const dropedfiles = { ...files };
                const allDropedFiles = { ...dropedfiles };
                setUploadedFiles((old) => {
                  return [...old, ...Object.values(allDropedFiles)];
                });
                setOnFileDrop(true);
              }}
            >
              {!onFrameDragEnter && !onFileDrop && (
                <div className="flex flex-col items-center mt-2">
                  <CloudUploadIcon className="h-10 w-10 text-textColorLight/60" />
                  <p className="text-textNormal text-textColorLight/50 tracking-wide leading-6">
                    Drag n Drop here
                  </p>
                  <p className="text-textNormal text-textColorLight/50 tracking-wide">
                    Or
                  </p>
                  <p className="text-textNormal text-textColorLight/50 tracking-wide">
                    Select a format
                  </p>
                </div>
              )}
              {onFrameDragEnter && !onFileDrop && (
                <p className="text-primaryColorLight text-textNormal tracking-wide">
                  Drop your file here
                </p>
              )}
              <input
                type="file"
                ref={fileUpload}
                name='files'
                multiple
                className="hidden"
                onChange={handleSelectedFiles}
              />
            </FileDrop>
          </div>

          {/* File upload buttons section */}
          <div className="flex items-center justify-between space-x-2 flex-wrap mt-4">
            <button
              type="button"
              disabled
              className="px-2 py-2 bg-whiteColor flex items-center justify-center space-x-2 rounded-2xl tracking-wide group"
            >
              <GoogleDriveIcon className="text-textColorLight w-6 h-6" />
              <span className="text-textSmall text-textColorLight group-hover:text-primaryColorLight">
                Google Drive
              </span>
            </button>
            <button
              type="button"
              onClick={selectFile}
              className="px-2 py-2 bg-whiteColor flex items-center justify-center space-x-2 rounded-2xl tracking-wide group"
            >
              <FolderRemoveIcon className="text-primaryColor w-6 h-6" />
              <span className="text-textSmall text-primaryColor group-hover:text-primaryColorLight">
                File / Folder
              </span>
            </button>
            <button
              type="button"
              disabled
              className="px-2 py-2 bg-whiteColor flex items-center justify-center space-x-2 rounded-2xl tracking-wide group"
            >
              <DropBoxIcon className="text-textColorLight w-6 h-6" />
              <span className="text-textSmall text-textColorLight group-hover:text-primaryColorLight">
                Dropbox
              </span>
            </button>
            <button
              type="button"
              disabled
              className="px-2 py-2 bg-whiteColor flex items-center justify-center space-x-2 rounded-2xl tracking-wide group"
            >
              <HyperLinkIcon className="text-textColorLight w-6 h-6" />
              <span className="text-textSmall text-textColorLight group-hover:text-primaryColorLight">
                Paste link
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FileUpload;
