import { IRequestError } from '../api-request/api-request.interface';
import toast, { Renderable, ValueOrFunction } from "react-hot-toast";
import { IRequestSucess } from "../api-request";

export const promiseToaster = <T>(
  resolver: Promise<IRequestSucess<T>>,
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
    success: (data) => {
      return (success as string) ?? data.message;
    },
    error: (err: IRequestError) => {
      return (error as string) ?? err?.message;
    },
  });
};
