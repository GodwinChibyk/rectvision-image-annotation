import React, {
  Children,
  isValidElement,
  useCallback,
  useContext,
  useEffect,
} from "react";
import { RadioContext } from "./context/RadioContex";
/**
 *
 * @return {JSX.Element}
 */
function BaseRadioBox({ children, name, formState, error, setValue, value }: any) {
  const { setCheckedValue } = useContext(RadioContext);

  useEffect(() => {
    if (!value) {
      setCheckedValue(value);
    }
  }, [value]);

  const memoizedChildren = useCallback(() => {
    return Children.map(
      children,
      (element: {
        props: {
          title: string;
          onClick: (param: any) => any;
          setValue: (param: any) => any;
          checked: boolean;
          name: string;
          value: string | null | number;
        };
      }) => {
        if (!isValidElement(element)) {
          return element;
        }

        return React.cloneElement(element, {
          name,
          checked:
            (value && element.props.value === value) || element.props.checked,
          setValue,
        });
      }
    );
  }, [value]);

  return (
    <div className="relative pt-6">
      {error && (
        <p className="b-0 absolute top-0 ml-2 text-sm font-medium text-red-600">
          {error?.message}
        </p>
      )}
      {memoizedChildren()}
    </div>
  );
}

export default React.memo(BaseRadioBox, (prevProps, nextProps) => {
  return (
    prevProps.formState.isDirty === nextProps.formState.isDirty &&
    prevProps.error?.message === nextProps.error?.message &&
    prevProps.value === nextProps.value
  );
});
