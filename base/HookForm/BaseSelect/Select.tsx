import { Listbox, Transition } from "@headlessui/react";
import { SelectorIcon } from "@heroicons/react/solid";
import React, {
  Children,
  Fragment,
  isValidElement,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";

interface ISelect {
  children: any;
  defaultOption: Record<string, any>;
}

/**
 *
 * @return {JSX.Element}
 */
function Select({ children, defaultOption = { title: "" } }: ISelect) {
  const [selected, setSelected] = useState(defaultOption);

  const memoizedCallback = useCallback(() => {
    Children.forEach(
      children,
      (element: { props: { selected: boolean; data: { title: string } } }) => {
        if (!isValidElement(element)) return;
        const { selected: isSelected, data } = element.props;
        if (isSelected) {
          setSelected(data);
        }
      }
    );
  }, [defaultOption.title]);

  useEffect(() => {
    memoizedCallback();
  }, []);
  return (
    <div className=" w-full">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative z-10 mt-1">
          <Listbox.Button className="s relative w-full cursor-default rounded-md border bg-white py-3 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected.title}</span>
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
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {children}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export default React.memo(Select, (prevProps, nextProps) => {
  return prevProps.defaultOption.title === nextProps.defaultOption.title;
});
