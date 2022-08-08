import { Switch } from "@headlessui/react";
import React, { useEffect, useState } from "react";
/**
 *
 * @return {JSX.Element}
 */
function BaseCheckBox({
  label = "",
  error,
  formState,
  checked = false,
  disabled,
  setValue,
  name,
  value,
  checkedValue,
}: any) {
  const [enabled, setEnabled] = useState(checked);
  // it
  useEffect(() => {
    /**
     *
     * ================== this useeffect has to be here to make this work
     */
    if (!value) {
      // setTimeout(() => {
      setEnabled(false);
      setValue(name, false);
      // }, 500);
    }
  }, [value]);

  /**
   *
   * ================== this useeffect has to be here to make this work
   */
  useEffect(() => {
    // setTimeout(() => {
    setEnabled(checked);
    setValue(name, checked ? checkedValue ?? checked : checked);
    // }, 500);
  }, [checked]);

  useEffect(() => {}, []);

  return (
    <div className="my-4 flex items-center">
      <label className="mr-2 flex items-center text-base text-gray-500">
        {label}
      </label>
      <Switch
        disabled={disabled}
        checked={enabled}
        onChange={(value: any) => {
          setEnabled(value);
          setValue(name, value ? checkedValue ?? value : value);
        }}
        className={`${enabled ? "bg-[#0075A2]" : "bg-[#0075A2]/60"}
 relative flex inline-flex h-[20px] w-[45px] flex-shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200  ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-6" : "translate-x-1"}
            pointer-events-none inline-block h-[12px] w-[12px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
      {error && (
        <p className="b-0 ml-2 text-sm font-medium text-red-600">
          {error?.message}
        </p>
      )}
    </div>
  );
}

export default React.memo(BaseCheckBox, (prevProps, nextProps) => {
  return (
    prevProps.formState.isDirty === nextProps.formState.isDirty &&
    prevProps.error?.message === nextProps.error?.message &&
    prevProps.checked === nextProps.checked &&
    prevProps.value === nextProps.value
  );
});
