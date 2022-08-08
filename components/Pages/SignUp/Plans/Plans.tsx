import { SetStateAction, useAtom } from "jotai";
import Link from "next/link";
import React from "react";
import { IPlan } from "../../../../base";
import { accountTypeData } from "../../../../base/Data/AccountTypeData/AccountTypeData";
import SelectPlanBox from "../../../Global/Reuseable/SelectPlanBox";
import { PrimaryButton } from "../../../StyledComponents/PrimaryButton";
import { selectedPlanIdAtom } from "../store/atomsStore";

interface IAccountType {
  continueSignUp: () => void;
  allPlans: any
}

const Plans: React.FC<IAccountType> = ({ continueSignUp, allPlans }) => {
  const [selectedPlanId, setSelectedPlanId] = useAtom<
    string,
    SetStateAction<string>,
    void
  >(selectedPlanIdAtom);
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-textLarge text-textColor/90">
          Choose an account type
        </h3>
        <Link href="#">
          <a className="text-textNormal text-primaryColorLight tracking-wide">
            View plan details
          </a>
        </Link>
      </div>

      {allPlans.map((plan:IPlan) => (
        <SelectPlanBox
          key={plan._id}
          planName={plan.name}
          amountPerMonth={(Number(plan.amount) / 12).toFixed(2)}
          amount={plan.amount}
          discount={plan.discount}
          isFree={plan.plan_type.toLocaleLowerCase() == "free" ? true : false }
          onChange={() => {
            setSelectedPlanId(plan._id);
          }}
          checked={selectedPlanId == plan._id ? true : false}
        />
      ))}

      <div className="flex">
        <PrimaryButton $fullWidth={true} onClick={continueSignUp}>
          <span className="text-textSmall tracking-wide font-medium ml-2 py-1">
            Continue
          </span>
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Plans;
