import { useState } from "react";
import { MutateOptions, useQuery } from "react-query";
import { useUserStore } from "../../../components/Pages/globalStore/zustandStore";
import { IRequestError, IRequestSucess } from "../api-request.interface";
import { makeRequest } from "../make-request";

export const useGetRequest = <TResponse>({
  path,
  load = false,
}: {
  path: string;
  load?: boolean;
}) => {
  const [requestPath, updatePath] = useState<string>(path);

  const [options, setOptions] = useState<any>();
  // get token from global storage
  const {userToken} = useUserStore(
    (state) => ({
      userToken: state.userToken,
    })
  )

  const query = useQuery<any, any, IRequestSucess<TResponse>>(
    [requestPath, {}],
    () =>
      new Promise<IRequestSucess<TResponse> | IRequestError>(
        async (res, rej) => {
          setTimeout(async () => {
            const postResponse = await makeRequest<TResponse>({
              path: requestPath,
              bearerToken: userToken,
            });
            if (postResponse?.status) {
              res(postResponse as IRequestSucess<TResponse>);
            } else {
              rej(postResponse);
            }
          }, 200);
        }
      ),
    {
      enabled: load,
      ...options,
    }
  );


  const updatedPathAsync = async (link: string) => {
    return updatePath(link);
  };

  const setOptionsAsync = async (fetchOptions: any) => {
    return setOptions(fetchOptions);
  };

  // 
  const get = async (
    link: string,
    fetchOptions?: MutateOptions<
      IRequestSucess<TResponse | undefined>,
      IRequestError,
      void,
      unknown
    >
  ): Promise<IRequestSucess<TResponse> | undefined> => {
    await updatedPathAsync(link);
    await setOptionsAsync(fetchOptions);

    const getQuery = await query.refetch<TResponse>({
      queryKey: [link, {}],
    });
    return getQuery.data;
  };

  // 
  const getQueryString = (pageQuery: Record<string, string>) => {
    alert("Dont use getQuerystring");
    const link = Object.keys(pageQuery).reduce(
      (prevLink: string, currentKey: string) => {
        if (prevLink.includes("?")) {
          prevLink = `${prevLink}&${currentKey}=${pageQuery[currentKey]}`;
        } else {
          prevLink = `${prevLink}?${currentKey}=${pageQuery[currentKey]}`;
        }

        return prevLink;
      },
      requestPath
    );

    return get(link);
  };

  return { ...query, updatePath, get, getQueryString };
};
