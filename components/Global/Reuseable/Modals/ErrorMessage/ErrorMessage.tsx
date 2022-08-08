import React from 'react'

interface IErrorMessage {
    error: boolean
}

const ErrorMessage:React.FC<IErrorMessage> = ({error}) => {
  return (
    <div
        className={` ${
          error ? "flex fixed inset-x-0 top-0 z-50  items-center justify-center w-full" : "hidden"
        }`}
      >
        <p className="text-center text-whiteColor font-medium text-textNormal py-2 bg-redColor px-3">
          All input field is required, one or more input field is not provided
        </p>
      </div>
  )
}

export default ErrorMessage