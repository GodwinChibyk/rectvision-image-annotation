import { Listbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/solid";
import React from "react";

interface IBaseOption {
  data: {label:string, value:string}
  selected: boolean
}

/**
 *
 * @return {JSX.Element}
 */
function BaseOption({ data = { label: "", value: "" }, selected = false }:IBaseOption) {
  return (
    <Listbox.Option
      className={({ active }) =>
        `relative cursor-default select-none py-2 pl-10 pr-4 ${
          active ? "bg-amber-100 text-amber-900" : "text-gray-900"
        }`
      }
      value={data}
    >
      {({ selected: isSelected }) => (
        <>
          <span
            className={`block truncate ${
              isSelected ? "font-medium" : "font-normal"
            }`}
          >
            {data.label}
          </span>
          {isSelected ? (
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
              <CheckIcon className="h-5 w-5" aria-hidden="true" />
            </span>
          ) : null}
        </>
      )}
    </Listbox.Option>
  );
}

export default BaseOption;
