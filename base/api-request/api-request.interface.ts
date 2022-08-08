import { HttpMethod } from "./api-request.enum";

export interface IMakeRequest {
  path: string;
  body?: BodyInit | null | undefined;
  method?: HttpMethod;
  bearerToken?: string;
  formData?: boolean;
}
export interface IRequestError {
  statusCode: number;
  message: string;
  timeStamp: string;
  status: boolean;
  data?: any
}

export interface IRequestSucess <T> {
  statusCode: number;
  message: string;
  timeStamp: string;
  status: boolean;
  data: T
}


export interface IServerRequestSuccess {
  status?: boolean;
  data: any;
  message?: string;
}

export interface IServerRequestError {
  status?: boolean;
  code?: number;
  success?: boolean;
  message: string;
  error?: Record<string, any>;
  data?: Record<string, any>;
}
