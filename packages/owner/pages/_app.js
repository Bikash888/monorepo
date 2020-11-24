import React from "react";
import * as Sentry from "@sentry/node";

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    enabled: process.env.NODE_ENV !== "development",
    environment: `owner-${process.env.NODE_ENV}`,
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  });
}
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
