import React from "react";
import { dehydrate } from "react-query";
import { makeRequest, PLAN_ROUTES, queryClient } from "../../../base";
import SignUp from "../../../components/Pages/SignUp/SignUp";

const signup = () => {
  return (
    <>
      <SignUp />
    </>
  );
};

export default signup;

export async function getServerSideProps() {
  const requestPath = PLAN_ROUTES.ALL;
  await queryClient.prefetchQuery([requestPath, {}], () =>
    makeRequest({ path: requestPath })
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    }, // will be passed to the page component as props
  };
}
