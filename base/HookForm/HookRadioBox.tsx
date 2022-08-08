import _ from "lodash";
import React, { ReactNode, useState } from "react";
import { Controller } from "react-hook-form";
import { ConnectForm } from "./ConnectForm";
import BaseRadioBox from "./BaseRadioBox/BaseRadioBox";
import { RadioContext } from "./BaseRadioBox/context/RadioContex";

/**
 *
 * @return {JSX.Element}
 */
function HookRadioBox({ children, name }:{children:ReactNode, name:string}) {
  const [checkedValue, setCheckedValue] = useState<string | number | null>(null);

  return (
    <RadioContext.Provider value ={{ setCheckedValue, checkedValue }}>
      <ConnectForm>
        {({ control, setValue, getValues }: Record<string,any>) => {
          return (
            <Controller
              render={({ formState }) => {
                const error = _.result(formState, `errors[${name}]`);
                return (
                  <BaseRadioBox
                    formState={formState}
                    setValue={setValue}
                    error={error}
                    name={name}
                    value={getValues(name)}
                  >
                    {children}
                  </BaseRadioBox>
                );
              }}
              name={name}
              control={control}
            />
          );
        }}
      </ConnectForm>
    </RadioContext.Provider>
  );
}

export default HookRadioBox;
