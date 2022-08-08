import { useRouter } from "next/router";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { buildRouteQuery, queryIntersection } from "./funcs/urlQueryHelper";
type INestedLayoutContext =
  | Record<string, INestedLayoutProviderPage |  any> & {
      default: ReactNode;
    } | null;
const NestedLayoutContext = createContext<INestedLayoutContext>(null);
type INestedOutLetContext = {
  outlet?: INodeFunction | INestedLayoutProviderPage;
  nestedPush: (route: string) => void;
  route: string;
  query: object;
  replace: (...params: any) => any;
  routes: Record<string, any>|null;
};
const NestedOutLetContext = createContext<INestedOutLetContext>({
  outlet: "",
  nestedPush: (id) => {},
  route: "",
  query: {},
  replace: () => {},
  routes: {},
});

export const useNestedLayout = () => useContext(NestedLayoutContext);

export const useNestedOutLet = () => useContext(NestedOutLetContext);

type INestedLayoutProviderPage =
  | ReactNode
  | {
      page: ReactNode;
      loader?: ReactNode;
      data?: (params: { value: string | number; data: any }) => any;
    };
type Route = INestedLayoutContext;

type INestedLayoutProvider = {
  routes: Route;
  children: ReactNode;
};

type INodeFunction = (...args: any) => ReactNode;

/**
 *
 * @return {JSX.Element}
 */
function NestedLayoutProvider({
  children,
  routes = { default: '' },
}: INestedLayoutProvider) {
  const [data, setData] = useState<any>('');
  //
  const [nestedPages] = useState<Route>(routes);
  //
  const { query: queryParam, route, push, replace } = useRouter();
  const [prevQueries, setPrevQueries] = useState<Record<string, any>>({});

  const [nestedOutLet, setNestedOutLet] = useState<INestedOutLetContext>({
    // outlet: nestedPages.default,
    route,
    nestedPush: (routeName) => {
      return push(
        routeName,
        undefined,
        // {
        //   query: { ...queryParam },
        // },
        {
          shallow: true,
        }
      );
    },
    query: queryParam,
    replace,
    routes,
  });

  const loadingUi = (pageName: string) => {
    if (nestedPages &&
      !React.isValidElement(nestedPages[pageName]) && 
      nestedPages[pageName] && nestedPages[pageName]["data"] &&
      typeof nestedPages[pageName] === "object" &&
      nestedPages[pageName]["loader"]
    ) {
      const loaderUI = nestedPages[pageName]["loader"];
      setNestedOutLet({
        ...nestedOutLet,
        outlet: loaderUI,
      });
    } else if (
      nestedPages &&
      typeof nestedPages[pageName] === "object" &&
      (!nestedPages[pageName]["loader"] || !nestedPages[pageName]["data"]) &&
      !React.isValidElement(nestedPages[pageName])
    ) {
      setNestedOutLet({
        ...nestedOutLet,
        outlet: nestedPages[pageName]["page"],
      });
    }
  };

  // Load Object type of route
  const loadObjectRouter = (
    pageName: string,
    query: { [k: string]: string }
  ) => {
    if (nestedPages&&nestedPages[pageName]["data"]) {
      loadData(nestedPages[pageName]["data"], {
        value: query[pageName],
        data: undefined,
      });
    } else {
      if (nestedPages && typeof nestedPages[pageName]["page"] === "function") {
        const callabaleFn = nestedPages[pageName]["page"] as INodeFunction;

        setNestedOutLet({
          ...nestedOutLet,
          outlet: callabaleFn({ value: query[pageName], data: undefined }),
        });
      } else {
        setNestedOutLet({
          ...nestedOutLet,
          outlet: nestedPages && nestedPages[pageName]["page"],
        });
      }
    }
  };

  const shouldRender = (pageName: any): boolean => {
    // check if the previous value is same
    const query = buildRouteQuery();
    query.default = "default";
    // check if prevQuries is empty
    const prevKeys = Object.keys(prevQueries);
    if (prevKeys.length === 0) {
      setPrevQueries({
        [pageName]: query[pageName],
      });
      return true;
    }

    if (prevQueries[pageName] === query[pageName]) {
      return false;
    }

    if (!prevQueries[pageName]) {
      setPrevQueries({
        [pageName]: query[pageName],
      });
      return true;
    }

    setPrevQueries({
      [pageName]: query[pageName],
    });
    return true;
  };

  useEffect(() => {
    const { query, pages } = queryIntersection(nestedPages);
    const [pageName = "default"]: string[] = pages;

    if (shouldRender(pageName)) {
      if (pageName) {
        loadingUi(pageName);
        if (nestedPages&& typeof nestedPages[pageName] === "function") {
          const callabaleFn = nestedPages[pageName] as INodeFunction;
          setNestedOutLet({
            ...nestedOutLet,
            outlet: callabaleFn({ value: query[pageName], data: undefined }),
          });
        } else if (nestedPages && React.isValidElement(nestedPages[pageName])) {
          setNestedOutLet({
            ...nestedOutLet,
            outlet: nestedPages[pageName],
          });
        } else if (nestedPages&&
          typeof nestedPages[pageName] === "object" &&
          !React.isValidElement(nestedPages[pageName])
        ) {
          loadObjectRouter(pageName, query);
        }
      } else {
        setNestedOutLet({
          ...nestedOutLet,
          outlet: nestedPages && nestedPages["default"],
        });
      }

      // update prev query
    }
  }, [nestedPages, queryParam]);

  useEffect(() => {
    const { pages } = queryIntersection(nestedPages);
    const [pageName = "default"]: string[] = pages;

    if (
      nestedPages && 
      typeof nestedPages[pageName] === "object" &&
      !React.isValidElement(nestedPages[pageName]) &&
      nestedPages[pageName]["data"]
    ) {
      const callabaleFn = nestedPages[pageName]["page"] as INodeFunction;
      const loaderUI = nestedPages[pageName]["loader"];
      if (data?.ok !== undefined && data?.ok !== null && !data?.ok) {
        setNestedOutLet({
          ...nestedOutLet,
          outlet: nestedPages[pageName]["error"],
        });
      } else if (data) {
        if (typeof nestedPages[pageName]["page"] === "function") {
          setNestedOutLet({
            ...nestedOutLet,
            outlet: callabaleFn({ value: null, data: data }),
          });
        } else {
          setNestedOutLet({
            ...nestedOutLet,
            outlet: callabaleFn,
          });
        }
      } else {
        setNestedOutLet({
          ...nestedOutLet,
          outlet: loaderUI,
        });
      }
    }
  }, [data]);

  const loadData = async (loader: (pr: any) => Promise<any>, param: any) => {
    const data = await loader(param);
    setData(data);
  };

  return (
    <NestedLayoutContext.Provider value={nestedPages}>
      <NestedOutLetContext.Provider value={nestedOutLet}>
        {children}
      </NestedOutLetContext.Provider>
    </NestedLayoutContext.Provider>
  );
}

export default React.memo(NestedLayoutProvider, (prevProps, nextProps) => {
  return true;
});
