import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  AUTH_ROUTES,
  ILoginResponse,
  IRequestError,
  IUserRegisterResponse,
  IUserRegisterResponseData,
  usePostRequest,
  useYupValidationResolver,
} from "../../../base";
import HookFormContainer from "../../../base/HookForm/HookFormContainer";
import HookInput from "../../../base/HookForm/HookInput";
import toast, { Toaster, Renderable, ValueOrFunction } from "react-hot-toast";

import MessageIcon from "../../Global/SVGIcons/MessageIcon";
import PadLockIcon from "../../Global/SVGIcons/PadLockIcon";
import { PrimaryButton } from "../../StyledComponents/PrimaryButton";
import { siginValidationSchema } from "./singinValidator";
import { useRouter } from "next/router";
import cookie from "cookiejs";

const SignIn = () => {
  const validator = useYupValidationResolver(siginValidationSchema);

  const [inputType, setInputType] = useState<boolean>(true);
  const { push } = useRouter();

  const { post, data, isLoading, error } = usePostRequest<ILoginResponse>({
    path: AUTH_ROUTES.SIGN_IN
  });

  // useEffect(() => {
  //   if (data) {
  //     data.data;
  //   }
  // }, [data]);

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

  const handleUserSignin = async (formData: any) => {
    const signInResponse = await promiseToaster(
      post(formData, {
        onSuccess: (response) => {
          cookie.set("authToken", response.data.token, {
            expires: 1,
            sameSite: "Strict",
          });
          // console.log(response.data);
          setTimeout(() => {
            push("/dashboard");
          }, 2000);
        },
      })
    );
  };

  return (
    <>
      <HookFormContainer validator={validator} handleSubmit={handleUserSignin}>
        <HookInput
          name="email"
          placeholder="Work email"
          inputIcon={<MessageIcon />}
        />
        <HookInput
          name="password"
          placeholder="Password"
          inputIcon={<PadLockIcon />}
          type={inputType ? "password" : "text"}
          isPasswordInput={true}
          setInputType={() => {
            setInputType(!inputType);
            // console.log(inputType);
          }}
        />
        <div className="flex">
          <PrimaryButton type="submit" $fullWidth={true}>
            <span className="text-whiteColor py-1 tracking-wide ">sign in</span>
          </PrimaryButton>
        </div>
      </HookFormContainer>
    </>
  );
};

export default SignIn;
