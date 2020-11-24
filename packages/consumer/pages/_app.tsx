import * as Sentry from "@sentry/node";
import { AppProps } from "next/app";
import { firebase } from "@project/shared";
import Router from "next/router";
import React from "react";

if (typeof window !== "undefined" && process.env.NODE_ENV === "production") {
  const logEvent = (url: string) => {
    firebase.analytics().setCurrentScreen(url);
    firebase.analytics().logEvent("screen_view", {
      screen_name: url,
      app_name: "Skeleton-Consumer",
    });
  };

  Router.events.on("routeChangeComplete", (url) => {
    logEvent(url);
  });

  logEvent(window.location.pathname);
}

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    enabled: process.env.NODE_ENV !== "development",
    environment: `owner-${process.env.NODE_ENV}`,
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  });
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
