import { ViewGridIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FunctionComponent } from "react";
import { DASHBOARD_BASE } from "./constants";

interface IAsideLeftLinkProps {
  icon: FunctionComponent<{ className: string }>;
  title: string;
  link: string;
}

const DashboardAsideLeftLink = ({ link, title, icon }: IAsideLeftLinkProps) => {
  const { pathname, push } = useRouter();

  const replacedPathname =  pathname === DASHBOARD_BASE? pathname: pathname.replace(DASHBOARD_BASE, "");
  const replacedLink = pathname === DASHBOARD_BASE ? link: link.replace(DASHBOARD_BASE, "");
  const active = replacedLink === ""  ?false:  replacedPathname.includes(replacedLink);
  // create custom element
  const iconElement = React.createElement(icon, {
    className: `h-7 w-7   ${
      active ? "text-primaryColor" : "text-grayColorDark"
    }`,
  });
  return (
    <>
      <button
        onClick={() => {
          push(link, undefined, {
            shallow: true,
          });
        }}
        className={`w-full rounded-lg pl-4 pr-2 py-3 flex items-center space-x-1.5 mb-6 ${
          active ? "bg-activeGray" : ""
        }`}
      >
        {iconElement}
        <span
          className={`text-textNormal tracking-wider text-textColorLight capitalize ${
            active ? "text-primaryColor font-semibold" : ""
          }`}
        >
          {title}
        </span>
      </button>
    </>
  );
};

export default DashboardAsideLeftLink;
