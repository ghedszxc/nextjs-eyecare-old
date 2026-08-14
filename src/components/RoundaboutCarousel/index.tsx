import { ICarousel } from "@/widgets/Carousel/Carousel.interface";
import RoundaboutCarousel from "./RoundaboutCarousel";
import React from "react";

const RoundAboutCarousel: React.FC<ICarousel> = (props) => {
    return <RoundaboutCarousel {...props} />;
};

export default RoundAboutCarousel;
