import React, { useState } from "react";
import AllProjectSection from "./AllProjectSection/AllProjectSection";
import BlogSection from "./BlogSection/BlogSection";

import ProjectCountSection from "./ProjectCountSection/ProjectCountSection";
import DashboardMainWrapper from "../../../Global/PageWrapper/DashboardMainWrapper";
import GetStartedLayout from "../../../Layouts/GetStartedLayout/GetStartedLayout";
import CreateProjectModal from "../../../Global/Reuseable/Modals/CreateProjectModal/CreateProjectModal";
import { useAtom } from "jotai";
import {
  createProjectDataAtom,
  creatProjectErrorMessageAtom,
} from "../../../Global/Reuseable/Modals/CreateProjectModal/store/atomStores";

const DashboardIndex = () => {
  

  return (
    <DashboardMainWrapper>
      <GetStartedLayout />
      <ProjectCountSection />
      <BlogSection />
      <AllProjectSection />

     
    </DashboardMainWrapper>
  );
};

export default DashboardIndex;
