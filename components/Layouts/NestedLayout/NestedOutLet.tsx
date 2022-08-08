import { useNestedOutLet } from "./NestedLayoutProvider";
/**
 *
 * @return {JSX.Element}
 */
function NestedOutLet() {
  const { outlet } = useNestedOutLet();
  return <>{outlet}</>;
}

export default NestedOutLet;
