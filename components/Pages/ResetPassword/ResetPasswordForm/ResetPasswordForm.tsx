import { useAtom } from "jotai";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import toast, { Renderable, ValueOrFunction } from "react-hot-toast";
import { AUTH_ROUTES, IRequestError, usePatchRequest, usePostRequest, useYupValidationResolver } from "../../../../base";
import HookFormContainer from "../../../../base/HookForm/HookFormContainer";
import HookInput from "../../../../base/HookForm/HookInput";
import CustomPrimaryButton from "../../../Global/Reuseable/CustomPrimaryButton";
import PadLockIcon from "../../../Global/SVGIcons/PadLockIcon";
import { resetPasswordValidationSchema } from "./FormValidator";
import { isRequestSuccess } from "./store/AtomsStore";

const ResetPasswordForm = () => {
 
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(true);
  const [,setResetPasswordSuccess] = useAtom(isRequestSuccess)

  const validator = useYupValidationResolver(resetPasswordValidationSchema);

  const { query,  } = useRouter();
  // useEffect(() => {
  //   console.log(query)
  // }, [query])

  const { patch, data, isLoading, error } =
    usePatchRequest({ path: AUTH_ROUTES.RESET_PASSWORD(`${query.token}`) });

  const promiseToaster = (
    resolver: any,
    msgs?: {
      loading?: Renderable;
      success?: ValueOrFunction<Renderable, unknown>;
      error?: ValueOrFunction<Renderable, any>;
    }
  ) => {
    const msgsBox = msgs ?? {
      success: undefined,
      error: undefined,
      loading: undefined,
    };
    const { success, error, loading = "Loading..." } = msgsBox;

    return toast.promise(resolver, {
      loading: loading,
      success: (dataS: any) => {
        return (success as string) ?? dataS.message;
      },
      error: (err: IRequestError) => {
        return (error as string) ?? err?.data.email;
      },
    });
  };

  const handleResetPassword = async (formData: any) => {
    formData.token = query.token;

    const signInResponse = await promiseToaster(patch(formData, {
      onSuccess: (responseData) => {
        setResetPasswordSuccess(true)
      }
    })) ;
    
  };
  return (
    <HookFormContainer validator={validator} handleSubmit={handleResetPassword}>
      <HookInput
        name="password"
        placeholder="Password"
        inputIcon={<PadLockIcon />}
        type={showPassword ? "password" : "text"}
        isPasswordInput={true}
        setInputType={() => {
          setShowPassword(!showPassword);
        }}
      />
      <p className="text-textColor/80 text-textSmall mb-6">
        Must be at least 8 characters
      </p>
      <HookInput
        name="confirmPassword"
        placeholder="Confirm password"
        inputIcon={<PadLockIcon />}
        type={showConfirmPassword ? "password" : "text"}
        isPasswordInput={true}
        setInputType={() => {
          setShowConfirmPassword(!showConfirmPassword);
        }}
      />

      <div className="flex">
        <CustomPrimaryButton 
        title="Reset password"
        isFullWidth={true}
        type='submit'
        isLoading={isLoading}
         />
      </div>
    </HookFormContainer>
  );
};

export default ResetPasswordForm;
