import {
  IRequestError,
  IRequestSucess,
  IServerRequestError,
  IServerRequestSuccess,
} from "./api-request.interface";

//
export const errorTransformer = (
  data: IServerRequestError & { statusCode: number }
): IRequestError => {
  return {
    message: data.message,
    statusCode: data.statusCode,
    timeStamp: new Date().toISOString(),
    status: false,
    data: data.data,
  };
};

//
export const successTransformer = <T>(
  data: IServerRequestSuccess & { statusCode: number }
): IRequestSucess<T> => {
  return {
    message: data.message ?? "Request successful",
    statusCode: data.statusCode,
    timeStamp: new Date().toISOString(),
    status: true,
    data: data.data,
  };
};
