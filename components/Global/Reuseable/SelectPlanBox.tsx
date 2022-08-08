import React, { useState } from "react";

interface IPlanBox {
  planName: string;
  amount?: number | string;
  amountPerMonth?: number | string;
  savePercent?: number;
  isFree: boolean;
  choosePlan?: boolean;
  discount:number;
  checked?: boolean;
  readOnly?: boolean;
  showPlans?: () => void;
  onChange?: () => void;
}

const SelectPlanBox: React.FC<IPlanBox> = ({
  planName,
  amount,
  amountPerMonth,
  savePercent,
  isFree,
  choosePlan,
  showPlans,
  onChange,
  checked,
  readOnly,
  discount
}) => {
  return (
    <label className="relative block rounded-2xl border border-grayColorDark p-3 mb-7">
      <div className="flex items-center justify-between">
        <h4 className="text-textNormal font-semibold text-textColor/90">
          {planName}
        </h4>
        <input
          onChange={onChange}
          checked={checked}
          name="plan"
          type="radio"
          readOnly={readOnly}
          className="w-5 h-5 rounded-full bg-gray-500 border broder-grayColorDark "
        />
      </div>
      <div className="flex items-center justify-between mt-3">
        {!isFree && (
          <p className="text-textSmall text-textColor/90">
            {`$${amountPerMonth}/month charged annualy`}
          </p>
        )}
        {isFree && (
          <p className="text-textSmall text-textColor/90">Free for life</p>
        )}
        {!isFree && (
          <p className="text-redColor text-textSmall font-semibold">{`$${amount}`}</p>
        )}
      </div>
      <div className="flex items-center justify-between mt-3">
        <div>
          {choosePlan && (
            <button
              onClick={showPlans}
              className="text-textSmall tracking-wide text-redColor underline"
            >
              Choose plan
            </button>
          )}
        </div>
        {(discount > 0) && (
          <p className="text-textColorLight text-textXSmall font-medium tracking-wide">
            {`save ${discount}%`}
          </p>
        )}
      </div>
    </label>
  );
};

export default SelectPlanBox;
