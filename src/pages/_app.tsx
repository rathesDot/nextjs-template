import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";

import * as Fathom from "fathom-client";

import "../../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_FATHOM_TRACKING_CODE) {
      return;
    }

    Fathom.load(process.env.NEXT_PUBLIC_FATHOM_TRACKING_CODE, {
      includedDomains: (
        process.env.NEXT_PUBLIC_FATHOM_INCLUDED_DOMAINS || ""
      ).split(","),
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
