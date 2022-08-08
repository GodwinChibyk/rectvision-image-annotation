import { DevTool } from "@hookform/devtools";
import React, { ReactNode, useEffect, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";
// type InitialDataType<T> = {
//   [P in keyof T]: T[P];
// };

interface IHookFormContainer {
  validator: any;
  handleSubmit: (params: any) => any;
  className?: string;
  initialData?: {};
  children: ReactNode;
  reset?: false;
  names?: [];
  update?: boolean;
}

/**
 *
 * @return {JSX.Element}
 */
function HookFormContainer({
  validator,
  handleSubmit: submitHandler,
  className = "",
  initialData = {},
  children,
  reset: resetForm = false,
  names = [],
  update = false,
}: IHookFormContainer) {
  const methods = useForm({
    resolver: validator,
  });
  useEffect(() => {}, [update]);
  const { handleSubmit, control, setValue, formState } = methods;
  const changedObj = useMemo(() => initialData, [update]);
  useEffect(() => {
    for (const [key, value] of Object.entries(changedObj)) {
      setValue(key, value);
    }
  }, [changedObj]);

  useEffect(() => {
    if (resetForm) {
      for (const [key] of Object.entries(formState.dirtyFields)) {
        setValue(key, undefined);
      }
      names.forEach((name) => {
        setValue<any>(name, undefined);
      });
    }
  }, [resetForm]);

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(submitHandler)} className={className}>
          {children}
        </form>
      </FormProvider>

      {/* load this in development only */}
      {/* <div className="absolute right-0 top-0">
        <DevTool control={control} />
      </div> */}
    </>
  );
}

export default HookFormContainer;
