import { createContext } from "react";
export interface IRContex {
  checkedValue: number | string | null;
  setCheckedValue: (value: string | number) => any;
}
export const RadioContext = createContext<IRContex>({
  checkedValue: null,
  setCheckedValue: (value) => {},
});
