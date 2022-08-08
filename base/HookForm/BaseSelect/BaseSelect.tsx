import { Listbox, Transition } from "@headlessui/react";
import { SelectorIcon } from "@heroicons/react/solid";
import React, {
  Children,
  Fragment,
  isValidElement,
  useCallback,
  useEffect,
  useState,
} from "react";

interface IBaseSelect {
  children:any;
  defaultOption: any;
  label: string;
  error: any;
  className: string;
  onSelect: (param: any) => void;
  value: any;
  formState: any;
  placeHolderClassName: string;
}

/**
 *
 * @return {JSX.Element}
 */
function BaseSelect({
  children,
  defaultOption = { label: "", value: 0 },
  label,
  error,
  className,
  onSelect,
  value,
  formState,
  placeHolderClassName = "",
}: IBaseSelect) {
  const [selected, setSelected] = useState(defaultOption);

  const memoizedCallback = useCallback(() => {
    Children.forEach(
      children,
      (element: {
        props: { selected: boolean; data: { label: string; value: number } };
      }) => {
        if (!isValidElement(element)) return;
        const { selected: isSelected, data } = element.props;
        if (isSelected) {
          onSelect(data.value);
          setSelected(data);
        }
      }
    );
  }, [defaultOption.label]);

  useEffect(() => {
    if (!value) {
      setSelected({ label: defaultOption.label, value: null });
    }
  }, [value]);

  useEffect(() => {
    memoizedCallback();
  }, []);
  return (
    <div className=" w-full">
      <label
        className={` flex items-center text-base text-gray-500 ${className}`}
      >
        {label}
      </label>
      {error && (
        <p className=" absolute z-0 text-sm font-medium text-red-600">
          {error?.message}
        </p>
      )}
      <Listbox
        value={selected}
        onChange={(e: any) => {
          onSelect(e.value);
          setSelected(e);
        }}
      >
        <div className="relative z-20 mt-1">
          <Listbox.Button
            className={`s relative mt-5 w-full cursor-default rounded-md border bg-white py-3 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm ${className} ${
              error ? "border-red-600" : "border-gray-300/50"
            }`}
          >
            <span className={`block truncate ${placeHolderClassName}`}>
              {selected.label}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 pt-1 pb-2 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {children}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export default React.memo(BaseSelect, (prevProps, nextProps) => {
  return (
    prevProps.formState.isDirty === nextProps.formState.isDirty &&
    prevProps.defaultOption.label === nextProps.defaultOption.label &&
    prevProps.error?.message === nextProps.error?.message &&
    prevProps.value === nextProps.value &&
    prevProps.placeHolderClassName === nextProps.placeHolderClassName
  );
});
