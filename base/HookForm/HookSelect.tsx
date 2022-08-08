import _ from "lodash";
import React, { ReactNode } from "react";
import { Controller } from "react-hook-form";
import BaseSelect from "./BaseSelect/BaseSelect";
import { ConnectForm } from "./ConnectForm";



interface IHookSelect {
  defaultOption: string[]
  children: ReactNode
  label:string
  name: string
  className: string
  placeHolderClassName : string,
}
/**
 *
 * @return {JSX.Element}
 */
function HookSelect({
  defaultOption,
  children,
  label,
  name,
  className = "",
  placeHolderClassName = "",
}:IHookSelect) {
  return (
    <ConnectForm>
      {({ control, getValues }:Record<string,any>) => {
        return (
          <Controller
            render={({ field: { onChange }, formState }) => {
              const error = _.result(formState, `errors[${name}]`);

              return (
                <BaseSelect
                  error={error}
                  defaultOption={defaultOption}
                  label={label}
                  className={className}
                  onSelect={onChange}
                  formState={formState}
                  value={getValues(name)}
                  placeHolderClassName={placeHolderClassName}
                >
                  {children}
                </BaseSelect>
              );
            }}
            control={control}
            name={name}
          />
        );
      }}
    </ConnectForm>
  );
}

export default HookSelect;
