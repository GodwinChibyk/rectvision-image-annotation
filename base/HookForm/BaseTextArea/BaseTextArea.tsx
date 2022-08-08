import React from "react";

interface IBaseTextArea {
  defaultValue: string[];
  className: string;
  register: any;
  error: any;
  label: string;
  name: string;
  watch: any;
  formState: any;
  placeholder: string;
}

/**
 *
 * @return {JSX.Element}
 */
function BaseTextArea({
  defaultValue,
  className,
  register,
  error,
  label,
  name,
  watch,
  formState,
  placeholder = "",
  ...props
}: IBaseTextArea) {
  return (
    <div className=" mt-8">
      <label className="mb-4 flex items-center text-base text-gray-600">
        {label}
      </label>

      <div className="relative">
        {error && (
          <p className=" absolute -top-5 z-0 text-sm font-medium text-red-600 first-letter:capitalize">
            {error?.message}
          </p>
        )}
        <textarea
          {...register}
          placeholder={placeholder}
          form="usrform"
          defaultValue={defaultValue}
          className={` h-[200px] w-full border border-gray-300/50 p-4 focus:outline  focus:outline-gray-300/50  ${className} ${
            error ? "border-red-600" : "border-gray-300/50"
          }`}
          {...props}
        />
      </div>
    </div>
  );
}

export default React.memo(BaseTextArea, (prevProps, nextProps) => {
  return (
    prevProps.formState.isDirty === nextProps.formState.isDirty &&
    prevProps.error?.message === nextProps.error?.message
  );
});
