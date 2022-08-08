import { SetStateAction, useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import toast, {  Renderable, ValueOrFunction } from "react-hot-toast";

import {
  AUTH_ROUTES,
  IUserRegisterResponseData,
  makeRequest,
  UserAccountType,
  useYupValidationResolver,
  IRequestSucess,
  IRequestError,
  useGetRequest,
  PLAN_ROUTES,
  IPlan,
} from "../../../base";
import { usePostRequest } from "../../../base/api-request/queries/usePostRequest";
import HookFormContainer from "../../../base/HookForm/HookFormContainer";
import HookInput from "../../../base/HookForm/HookInput";
import SelectPlanBox from "../../Global/Reuseable/SelectPlanBox";
import MessageIcon from "../../Global/SVGIcons/MessageIcon";
import PadLockIcon from "../../Global/SVGIcons/PadLockIcon";
import UserIcon from "../../Global/SVGIcons/UserIcon";
import AuthLayout from "../../Layouts/AuthLayout/AuthLayout";
import { PrimaryButton } from "../../StyledComponents/PrimaryButton";
import AlternativeLinks from "./AlternativeLinks/AlternativeLinks";
import { signupValidationSchema } from "./signupValidator";
import { selectedPlanIdAtom } from "./store/atomsStore";
import Plans from "./Plans/Plans";
import CustomPrimaryButton from "../../Global/Reuseable/CustomPrimaryButton";
import { useRouter } from "next/router";


const SignUp = () => {
  const [showPlan, setShowPlan] = useState<boolean>(false);
  const [selectedPlanId] = useAtom<string>(selectedPlanIdAtom);
  const [selectedPlan, setselectedPlan] = useState< IPlan>();

  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(true);
  const [allPlans, setAllPlans] = useState<IPlan[]>()

  const { data: plans } = useGetRequest<IPlan[]>({
    path: PLAN_ROUTES.ALL,
    load: false,
  });

  const { post, data, isLoading, error } =
    usePostRequest<IUserRegisterResponseData>({ path: AUTH_ROUTES.SIGN_UP });

  useEffect(() => {
    if (plans) {
      setAllPlans(plans.data)
      // console.log(plans.data)

    }
  }, [plans]);

  useEffect(() => {
    if (data) {
      data.data;
    }
  }, [data]);

  // useEffect(() => {
  //   console.log("error", error);
  // }, [error]);

  useEffect(() => {
    // check if there is selected plan id
    if (selectedPlanId) {
      const plan:any = allPlans?.find(
        (p) => p._id === selectedPlanId
      );
      setselectedPlan(plan);
    }else {
      const plan:any = allPlans?.find(
        (p) => p.plan_type.toLocaleLowerCase() === "free"
      );
      setselectedPlan(plan);
    }
  }, [selectedPlanId,allPlans]);

  const validator = useYupValidationResolver(signupValidationSchema);
  const route = useRouter()

  const promiseToaster = (
    resolver: any,
    msgs?: {
      loading?: Renderable;
      success?: ValueOrFunction<Renderable, unknown>;
      errorP?: ValueOrFunction<Renderable, any>;
    }
  ) => {
    const msgsBox = msgs ?? {
      success: undefined,
      errorP: undefined,
      loading: undefined,
    };
    const { success, errorP, loading = "Loading..." } = msgsBox;

    return toast.promise(resolver, {
      loading: loading,
      success: (dataS: any) => {
        return (success as string) ?? dataS.message;
      },
      error: (err: IRequestError) => {
        return (errorP as string) ?? err?.data.email;
      },
    });
  };

  const handleUserSignup = async (formData: any) => {
    // Todo:
    formData.account_type = UserAccountType.OWNER;
    formData.plan_id = selectedPlanId;
    const signUpResponse = await promiseToaster(post(formData,  {
      onSuccess: (responseData) => {
        setTimeout(() => {
          route.push("/auth/signin")
        }, 3000);
      }
    })) ;
  };

  return (
    <AuthLayout>
      <div className="w-[600px]">
        {!showPlan && (
          <div>
            <h3 className="text-textLarge mb-8 text-textColor/90">
              Create an account
            </h3>
            <HookFormContainer
              validator={validator}
              handleSubmit={handleUserSignup}
            >
              {selectedPlan && (
                <SelectPlanBox
                key={selectedPlan._id}
                planName={selectedPlan.name}
                amountPerMonth={(Number(selectedPlan.amount) / 12).toFixed(2)}
                amount={selectedPlan.amount}
                discount={selectedPlan.discount}
                isFree={selectedPlan.plan_type.toLocaleLowerCase() == "free" ? true : false }
                  showPlans={() => setShowPlan(true)}
                  checked={true}
                  readOnly={true}
                  choosePlan={true}
                />
              )}

              <HookInput
                name="firstName"
                placeholder="First name"
                inputIcon={<UserIcon />}
              />
              <HookInput
                name="lastName"
                placeholder="Last name"
                inputIcon={<UserIcon />}
              />
              <HookInput
                name="email"
                placeholder="Work email"
                inputIcon={<MessageIcon />}
              />
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
                title="sign up"
                isFullWidth={true}
                isLoading={isLoading}
                type="submit"
                 />
              </div>
            </HookFormContainer>

            {/*this section contains terms and conditions, privacy police, sign up with google, and Sigin */}
            <AlternativeLinks />
          </div>
        )}

        {showPlan && <Plans continueSignUp={() => setShowPlan(false)} allPlans={allPlans} />}
      </div>
    </AuthLayout>
  );
};

export default SignUp;


