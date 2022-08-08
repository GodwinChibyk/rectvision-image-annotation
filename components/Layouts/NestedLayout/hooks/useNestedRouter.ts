import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { buildRouteQuery, queryIntersection } from "../funcs/urlQueryHelper";
import { useNestedLayout } from "../NestedLayoutProvider";

export const useNestedRouter = () => {
  const pages = useNestedLayout();
  const { push, route } = useRouter();
  const [query, setQuery] = useState<any>();

  useEffect(() => {
    const newQuery = buildRouteQuery();
    setQuery(newQuery);
  }, []);

  const nestedPush = (page: Record<string, string | number | boolean>) => {
    const queryString = buildRouteQuery();
    setQuery(queryString);
    const pageIntersection: string[] = queryIntersection(
      pages,
      queryString
    ).pages;
    // remove all pages for this page from cache
    pageIntersection.forEach((pageName) => {
      delete queryString[pageName];
    });

    push(
      route,
      {
        query: {
          ...queryString,
          ...page,
        },
      },
      {
        shallow: true,
      }
    );
  };
  return { route, nestedPush, query };
};
