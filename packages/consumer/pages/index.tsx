import React from "react";
import { Button } from "@project/shared";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Button>{t("Hello")}</Button>
    </>
  );
}
