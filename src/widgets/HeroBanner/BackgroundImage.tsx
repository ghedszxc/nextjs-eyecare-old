"use client";

import Picture from "@/components/Picture/Picture";
import React from "react";
import { IHeroBanner } from "./HeroBanner.interface";
import useResponsiveBackground from "@/hooks/useResponsiveBackground";

const BackgroundImage = (props: IHeroBanner) => {
  const {picture, title} = props;
  const [background] = useResponsiveBackground(
    picture || [],
    true
  );
  return (
    <Picture
      className="object-cover min-h-[80vh] h-auto w-full"
      src={background || ""}
      alt={title || ""}
      // fill={true}
      unoptimized
    />
  );
};

export default BackgroundImage;
