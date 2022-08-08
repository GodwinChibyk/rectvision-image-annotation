import React from "react";
import FormInput from "../../../components/library-components/FormInput";
/**
 *
 * @return {JSX.Element}
 */
function BaseInput({
  label = "",
  error,
  register,
  className,
  formState,
  type,
  ...props
}: any) {
  return (
    <div className="relative w-full">
      <FormInput
        className={className}
        label={label}
        error={error}
        register={register}
        type={type}
        {...props}
      />
    </div>
  );
}

export default React.memo(BaseInput, (prevProps, nextProps) => {
  return (
    prevProps.formState.isDirty === nextProps.formState.isDirty &&
    prevProps.type === nextProps.type &&
    prevProps.error?.message === nextProps.error?.message
  );
});
