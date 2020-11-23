import React from "react";
import Image from "next/image";
import { Button } from "@project/shared";
import About from "../assets/about2.png";
import TopImageSrc from "../assets/top.svg";

export default function Home() {
  return (
    <>
      <Image height={150} width={150} src={TopImageSrc} loading="lazy" />
      <Image height={150} width={150} src={About} loading="lazy"/>
      <Button minheight={50} boxshadow="0px">
        This is a OWNER Page. This Button is from shared module{" "}
      </Button>
    </>
  );
}
