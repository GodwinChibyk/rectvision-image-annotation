import React, { useContext, useEffect } from "react";
import HookCircleIcon from "../icons/HookCircleIcon";
import { RadioContext } from "./context/RadioContex";

/**
 *
 * @return {JSX.Element}
 */
function RadioBoxOption({
  children,
  className = "",
  checked = false,
  value,
  ...props
}: any) {
  const { checkedValue, setCheckedValue } = useContext(RadioContext);
  useEffect(() => {
    if (checked) {
      props.setValue(props.name, value);
      setCheckedValue(value);
    }
  }, [checked]);

  return (
    <div
      onClick={() => {
        setCheckedValue(value);
        props.setValue(props.name, value);
      }}
      className="my-1"
    >
      {checkedValue && checkedValue === value ? (
        <div className={`${className}  flex items-center`}>
          <div
            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0075a2] text-white shadow`}
          >
            <span>
              <HookCircleIcon />
            </span>
          </div>
          {children}
        </div>
      ) : (
        <div className={`${className}  flex items-center`}>
          <div
            className={`notChecked flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0075a2]/60 text-white shadow`}
          ></div>
          {children}
        </div>
      )}
    </div>
  );
}

export default RadioBoxOption;
