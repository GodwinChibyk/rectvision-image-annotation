export const buildRouteQuery = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  return Object.fromEntries(urlSearchParams.entries());
};
// intersect the window questring and routes
export const queryIntersection = (routeQuery: any, pageQuery?: any) => {
  const query = pageQuery ?? buildRouteQuery();
  const pages = Object.keys(query).filter({}.hasOwnProperty.bind(routeQuery));
  return { query, pages };
};
