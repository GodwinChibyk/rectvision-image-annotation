import _ from "lodash";
import React from "react";
import BaseTextArea from "./BaseTextArea/BaseTextArea";
import { ConnectForm } from "./ConnectForm";


interface IHookTextArea {
  label: string
  name: string
  placeholder: string
  className : string 
}
/**
 *
 * @return {JSX.Element}
 */
function HookTextArea({ label, name, placeholder, className = "", ...props }:IHookTextArea) {
  return (
    <ConnectForm>
      {({ register, formState, getValues, watch, setValue }:Record<string, any>) => {
        const error = _.result(formState, `errors[${name}]`);
        return (
          <BaseTextArea
            name={name}
            watch={watch}
            error={error}
            register={{ ...register(name) }}
            label={label}
            className={className} 
            formState={formState}
            defaultValue={getValues(name)}
            placeholder ={placeholder}
            {...props}
          />
        );
      }}
    </ConnectForm>
  );
}

export default HookTextArea;
