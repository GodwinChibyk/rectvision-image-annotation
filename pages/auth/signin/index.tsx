import Link from "next/link";
import React from "react";
import CreateProjectModal from "../../../components/Global/Reuseable/Modals/CreateProjectModal/CreateProjectModal";
import AuthLayout from "../../../components/Layouts/AuthLayout/AuthLayout";
import SignIn from "../../../components/Pages/SignIn/SignIn";


const signin = () => {
  return (
    <AuthLayout>
      <div className="w-[600px]">
        <h2 className="text-textColor/80 font-medium text-h4 mb-6">
          Welcome back
        </h2>
        <SignIn />
        <div className="flex items-center justify-between mt-4">
          <div className="flex">
            <p className="text-textColor text-textSmall">Not Registered?</p>
            <Link href="/auth/signup">
              <a className="text-primaryColorLight text-textSmall ml-1">
                Sign up
              </a>
            </Link>
          </div>
          <Link href="/auth/forgot-password">
            <a className="text-primaryColorLight text-textSmall">
              Forgot password?
            </a>
          </Link>
        </div>
      </div>


    </AuthLayout>
  );
};

export default signin;
