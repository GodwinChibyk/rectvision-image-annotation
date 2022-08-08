import { MutateOptions, useMutation } from "react-query";
import { useUserStore } from "../../../components/Pages/globalStore/zustandStore";
import { HttpMethod } from "../api-request.enum";
import { IRequestError, IRequestSucess } from "../api-request.interface";
import { makeRequest } from "../make-request";

export const usePatchRequest = <TResponse>({ path }: any) => {
  const { userToken} = useUserStore(
    (state) => ({
      userToken: state.userToken,
    })
  )
  // register post mutation
  const mutation = useMutation<IRequestSucess<TResponse>, IRequestError>(
    (postData: any) =>
      new Promise<IRequestSucess<TResponse>>(async (res, rej) => {
        const postResponse = await makeRequest<TResponse>({
          path: path,
          body: postData,
          method: HttpMethod.PATCH,
          bearerToken: userToken
        });

        if (postResponse?.status) {
          res(postResponse as IRequestSucess<TResponse>);
        } else {
          rej(postResponse);
        }
      })
  );
  const patch = async (
    patchtData: any,
    options?: MutateOptions<IRequestSucess<TResponse>>
  ): Promise<IRequestSucess<TResponse>> => {
    return mutation.mutateAsync(patchtData, options);
  };

  return { patch, ...mutation };
};
