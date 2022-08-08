import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";
interface IConnectForm {
  children: ReactNode | any
}
export const ConnectForm = ({ children }: IConnectForm) => {
  const methods = useFormContext();
  return children({ ...methods });
};
