import { useState } from "react";
import { MutateOptions, useMutation } from "react-query";
import { useUserStore } from "../../../components/Pages/globalStore/zustandStore";
import { HttpMethod } from "../api-request.enum";
import { IRequestError, IRequestSucess } from "../api-request.interface";
import { makeRequest } from "../make-request";

export const usePostRequest = <TResponse>({
  path,
  formData = false,
}: {
  path: string;
  formData?: boolean;
}) => {
  const [resetForm, setResetForm] = useState<boolean>(false);
  // get token from global storage
  const {setUserToken, userToken} = useUserStore(
    (state) => ({
      userToken: state.userToken,
      setUserToken: state.setUserToken,
    })
  )
  // register post mutation
  const mutation = useMutation<IRequestSucess<TResponse>, IRequestError>(
    (postData: any) =>
      new Promise<IRequestSucess<TResponse>>(async (res, rej) => {
        setResetForm(false);
        const postResponse = await makeRequest<TResponse>({
          path: path,
          body: postData,
          method: HttpMethod.POST,
          bearerToken: userToken,
          formData,
        });

        if (postResponse?.status) {
          setResetForm(true);
          // scroll to top after success
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });

          if(postResponse.data.token) {
            // add token to global storage
            setUserToken(postResponse.data.token)
          }

          res(postResponse as IRequestSucess<TResponse>);
        } else {
          // scroll to top after error
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });

          

          rej(postResponse);
        }
      })
  );
  const post = async (
    postData: any,
    options?:
      | MutateOptions<IRequestSucess<TResponse>, IRequestError, void, unknown>
      | undefined
  ): Promise<IRequestSucess<TResponse>> => {
    return mutation.mutateAsync(postData, options);
  };

  return { post, ...mutation, resetForm };
};
