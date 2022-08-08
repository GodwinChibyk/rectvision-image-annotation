import type { AppProps } from "next/app";
import { Hydrate, QueryClientProvider } from "react-query";
import { queryClient } from "../base";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "react-query/devtools";

// Default theme
import "@splidejs/splide/css";
import "../styles/globals.css";
import "./range.css"
import '../styles/fileDrop.css'
import { useRouter } from "next/router";
import DashboardLayout from "../components/Layouts/DashboardLayout/DashboardLayout";

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  // check if route is dashboard
  if (pathname.startsWith("/dashboard")) {
  return  <QueryClientProvider client={queryClient}>
      <DashboardLayout>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
        <Toaster
          toastOptions={{
            className: "md-w-full m-w-full py-6",
          }}
        />
        <ReactQueryDevtools initialIsOpen={false} />
      </DashboardLayout>
    </QueryClientProvider>;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
      <Toaster
        toastOptions={{
          className: "md-w-full m-w-full py-6",
        }}
      />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
