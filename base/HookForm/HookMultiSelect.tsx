import _ from "lodash";
import React from "react";
import { Controller } from "react-hook-form";
import BaseMultiSelect from "./BaseMultiSelect/BaseMultiSelect";
import { ConnectForm } from "./ConnectForm";
/**
 *
 * @return {JSX.Element}
 */
interface IHookMultiSelect {
  label: string;
  options: any[];
  className: string;
  name: string;
  defaultOptions: any[];
  placeholder: string;
}
function HookMultiSelect({
  label,
  options,
  className = "",
  name,
  defaultOptions = [],
  placeholder = "",
}: IHookMultiSelect) {
  return (
    <ConnectForm>
      {({ control, getValues }: Record<string, any>) => (
        <Controller
          render={({ field: { onChange }, formState }) => {
            const error = _.result(formState, `errors[${name}]`);
            return (
              <BaseMultiSelect
                error={error}
                label={label}
                className={className}
                formState={formState}
                onSelect={onChange}
                options={options}
                name={name}
                defaultOptions={defaultOptions}
                defaultValue={getValues(name)}
                placeholder={placeholder}
              />
            );
          }}
          defaultValue={defaultOptions.map(({ value }) => value)}
          control={control}
          name={name}
        />
      )}
    </ConnectForm>
  );
}

export default HookMultiSelect;
// (prevProps, nextProps) => {
//   return !nextProps.reset;
// };
