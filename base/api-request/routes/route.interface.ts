export interface IUserRegisterResponse {
  message: string;
  data: IUserRegisterResponseData;
}

export interface IUserRegisterResponseData {
  firstName: string;
  email: string;
  gooleLink: string;
}

export interface ILoginResponse {

    id: string;
    first_name:string;
    last_name: string;
    email: string;
    token: string;
    account_type: string;

}

export interface IPlan {
  _id: string;
  name: string;
  description: string;
  plan_code: string;
  plan_type: string;
  features: string[];
  amount: string;
  interval: string;
  currency: string;
  created_at: Date;
  updated_at: Date;
  discount: number;
  __v: number;
}
