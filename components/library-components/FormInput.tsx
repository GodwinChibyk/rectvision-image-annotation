import React, { useState } from "react";
import ClosedEyeIcon from "../Global/SVGIcons/ClosedEyeIcon";
import MessageIcon from "../Global/SVGIcons/MessageIcon";
import OpenEyeIcon from "../Global/SVGIcons/OpenEyeIcon";
import { StyledInput } from "../StyledComponents/StyledInput";

function FormInput({ 
  register, 
  error, 
  className, 
  label, 
  children, 
  inputIcon,
  type,
  isNoIcon,
  isPasswordInput,
  setInputType,
  ...props 
}: any) {

  return (
    <>
      <label className="relative block">
        {/* main input icon */}
        {!isNoIcon && (
          <span className="absolute inset-y-0 left-0 z-10 flex items-center pl-3">
          {inputIcon}
          </span>
        )}

        {/* show/hide password icon */}
          {isPasswordInput && (
            <span className="absolute inset-y-0 right-0 z-10 flex items-center pr-3">
              <span
              onClick={setInputType}
              >
              {(type == 'password') ?  <ClosedEyeIcon /> : <OpenEyeIcon className="h-6 w-6 text-grayColorDark" />}
              </span>
            </span>
          )}
        <StyledInput {...register} type={type} {...props} $isNoIcon={isNoIcon} />
        {error && (
          <span className="absolute -top-4 tracking-wide m-0 block text-xs font-normal leading-none text-redColor">
            {error.message}
          </span>
        )}
      </label>
    </>
  );
}

export default FormInput;
