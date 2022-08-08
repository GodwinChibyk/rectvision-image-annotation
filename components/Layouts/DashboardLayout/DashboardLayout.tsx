import React, { ReactNode } from "react";
import PageWrapper from "../../Global/PageWrapper/PageWrapper";
import DashboardAsideLeft from "./DashboardAsideLeft/DashboardAsideLeft";
import DashboardHeader from "./DashboardHeader/DashboardHeader";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <PageWrapper>
      <div className="pb-4 mb-1.5 h-16">
        <DashboardHeader />
      </div>

      {/* Dashboard aside-left and main section */}
      <div className="flex space-x-5 px-12 mt-5">
        {/* Aside left */}
        <div className="min-h-screen w-80">
          <DashboardAsideLeft />
        </div>

        {/* Main section */}
        <div className="bg-whiteColor rounded-xl flex-1">{children}</div>
      </div>
    </PageWrapper>
  );
};

export default DashboardLayout;
