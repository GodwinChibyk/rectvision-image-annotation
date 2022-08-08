import _ from "lodash";
import React from "react";
import BaseInput from "./BaseInput/BaseInput";
import { ConnectForm } from "./ConnectForm";
/**
 *
 * @return {JSX.Element}
 */
function HookInput({ label, className = "", name, ...props }: Record<string, any>) {
  return (
    <ConnectForm>
      {({ register, formState, getValues }: Record<string, any>) => {
        const error = _.result(formState, `errors[${name}]`);
        return (
          <BaseInput
            error={error}
            register={{ ...register(name) }}
            label={label}
            className={className}
            formState={formState}
            defaultValue={getValues(name)}
            {...props}
          />
        );
      }}
    </ConnectForm>
  );
}

export default HookInput;
