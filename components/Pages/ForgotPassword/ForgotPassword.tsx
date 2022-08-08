import { ArrowLeftIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast, { Renderable, ValueOrFunction } from "react-hot-toast";
import { AUTH_ROUTES, IRequestError, usePostRequest } from "../../../base";

import ForgotPasswordForm from "./ForgotPasswordForm/ForgotPasswordForm";
import Notice from "./Notice/Notice";

const ForgotPassword = () => {
  const [requestResponse, setRequestResponse] = useState<boolean>(false);
  const [userEmailDetail, setUserEmailDetail] = useState<string>("");

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
        return (error as string) ?? err?.message;
      },
    });
  };

  const { post, data, isLoading, error } = usePostRequest({
    path: AUTH_ROUTES.FORGOT_PASSWORD,
  });

  const handleResetPassword = async (formData: Record<string, any>) => {
    const signInResponse = await promiseToaster(
      post(formData, {
        onSuccess: (responseData) => {
          setRequestResponse(true);
          setUserEmailDetail(formData.email);
          // console.log(formData.email);
        },
      })
    );
    // console.log(signInResponse.data);
  };

  return (
    <>
      {!requestResponse && (
        <div className="w-[600px]">
          <h2 className="text-textColor/80 font-medium text-h4 mb-5">
            Reset password
          </h2>
          <p className="text-textMedium text-textColor/90 mb-6 tracking-wide  ">
            No worries, we’ll send you reset instructions
          </p>
          <ForgotPasswordForm
            isLoading={isLoading}
            handleResetPassword={handleResetPassword}
          />
          <div className="flex items-center mt-4">
            <Link href="/auth/signin">
              <a className="text-textColor group flex items-center font-medium text-textSmall">
                <div className="flex items-center justify-center px-1 py-0.5 border border-grayColorDark rounded-md ">
                  <ArrowLeftIcon className="w-4 h-4 group-hover:text-primaryColorLight" />
                </div>
                <span className="ml-1 group-hover:text-primaryColorLight">
                  {" "}
                  Back to Login
                </span>
              </a>
            </Link>
          </div>
        </div>
      )}

      {requestResponse && (
        <Notice
          emailDetail={userEmailDetail}
          resendEmail={() => handleResetPassword({ email: userEmailDetail })}
        />
      )}
    </>
  );
};

export default ForgotPassword;
