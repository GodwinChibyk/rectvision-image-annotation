import React from "react";
import BaseOption from "./BaseSelect/BaseOption";

interface IHookOption {
  data: {label:string, value:string}
  selected: boolean
}

/**
 *
 * @return {JSX.Element}
 */
function HookOption({ data = { label: "", value: "" }, selected = false }:IHookOption) {
  return <BaseOption data={data} selected={selected} />;
}

export default HookOption;
