import _ from "lodash";
import React from "react";
import { Controller } from "react-hook-form";
import BaseCheckBox from "./BaseCheckBox/BaseCheckBox";
import { ConnectForm } from "./ConnectForm";
type CheckBox = {
  value?: boolean | string | number;
  checked?: boolean;
  name: string;
  label: string;
  disabled?: boolean;
};
/**
 *
 * @return {JSX.Element}
 */
function HookCheckBox({
  checked = false,
  name,
  label,
  disabled = false,
  value,
}: CheckBox) {
  return (
    <ConnectForm>
      {({ control, getValues, setValue }:any) => (
        <Controller
          render={({ field: { onChange }, formState }) => {
            // i
            const error = _.result(formState, `errors[${name}]`);
            return (
              <BaseCheckBox
                formState={formState}
                error={error}
                // onCheck={onChange}
                checked={checked === true ? checked : getValues(name)}
                label={label}
                disabled={disabled}
                setValue={setValue}
                value={
                  getValues(name) === undefined ? getValues(name) : checked
                }
                checkedValue={value === false ? getValues(name) : value}
                name={name}
              />
            );
          }}
          name={name}
          control={control}
        />
      )}
    </ConnectForm>
  );
}

export default HookCheckBox;
