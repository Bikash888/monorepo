import React from "react";
import * as Sentry from "@sentry/node";
import "antd/dist/antd.css";

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    enabled: process.env.NODE_ENV !== "development",
    environment: `consumer-${process.env.NODE_ENV}`,
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  });
}

function MyApp({ Component, pageProps, err }) {
  return <Component {...pageProps} err={err} />;
}

export default MyApp;
