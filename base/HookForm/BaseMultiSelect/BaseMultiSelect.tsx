import React, { useEffect, useState } from "react";
import { default as ReactSelect, MultiValue } from "react-select";


interface IBaseMultiSelect{
  options: readonly any[],
  label: string
  error: any
  className: string
  onSelect: (value:any)=>void
  defaultOptions: string[],
  formState: any
  defaultValue: string[],
  placeholder: string
  name: string
}

/**
 *
 * @return {JSX.Element}
 */
function BaseMultiSelect({
  options = [],
  label,
  error,
  className,
  onSelect,
  defaultOptions = [],
  formState,
  defaultValue = [],
  placeholder,
  name,
}: IBaseMultiSelect) {
  const [value, setValue] = useState<any>();
  useEffect(() => {
    if (!defaultValue || defaultValue.length === 0) {
      setValue(null);
    } else {
      const values = options.filter((option:any) =>
        defaultValue.includes(option.value)
      );
      handleChange(values);
    }
  }, [defaultValue]);

  const handleChange = (value: any) => {
    setValue(value);
  };
  return (
    <div className="w-full">
      <label
        className={`mb-3 flex items-center text-base text-gray-500 ${className}`}
      >
        {label}
      </label>
      {error && (
        <p className=" absolute z-0 text-sm font-medium text-red-600">
          {error?.message}
        </p>
      )}
      <div className="relative mt-1">
        <ReactSelect
          placeholder={placeholder}
          className={`s relative mt-8 w-full cursor-default rounded-md border bg-white text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm ${className} ${
            error ? "border-red-600" : "border-gray-300/50"
          }`}
          options={options}
          isMulti={true}
          onChange={(
            selectValues: any
          ) => {
            const values = selectValues.map(({ value }: any) => value);
            onSelect(values);
            handleChange(selectValues.length === 0 ? null : selectValues);
          }}
          value={value}
          defaultValue={defaultOptions}
          name={name}
        />
      </div>
    </div>
  );
}

export default React.memo(BaseMultiSelect, (prevProps, nextProps) => {
  return (
    prevProps.formState.isDirty === nextProps.formState.isDirty &&
    prevProps.error?.message === nextProps.error?.message &&
    prevProps.defaultValue === nextProps.defaultValue
  );
});
