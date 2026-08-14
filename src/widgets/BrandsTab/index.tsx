"use client";

import { IBrandsTab } from "./BrandsTab.interface";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import AppConfig from "@/lib/AppConfig";
import { getAkamayUrl } from "@/lib/utilities";
import { useState } from "react";
import Button from "@/components/Button";
import useResponsive from "@/hooks/useResponsive";
import Picture from "@/components/Picture/Picture";

const BrandsTab: React.FC<IBrandsTab> = ({ title, subTitle, items }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { html } = AppConfig;
  const { is } = useResponsive();

  const isMobileLBelow = is("mobile-l", "<");

  const addListDisc = (index: number): string => {
    return (
      items[index].rightItem.subTitle
        ?.replace(/<ul>/g, "<ul style='list-style: disc; padding-left: 15px;'>")
        .replace(/<li>/g, "<li style='padding-bottom: 1.04167vw;'>") || ""
    );
  };

  return (
    <div className="pt-[7.03125vw] px-[32px] md:pt-[6vw] md:px-[11.4583vw]">
      <div className="flex flex-col gap-[2.60417vw] text-center mb-[5.78125vw]">
        {title && (
          <h2 className="text-[40px] md:text-[4.16667vw] leading-[45px] md:leading-[4.6875vw] tracking-normal uppercase mt-0 font-light">
            {html(title)}
          </h2>
        )}
        {subTitle && (
          <p className="text-[18px] md:text-[1.40625vw] leading-9 md:leading-[1.875vw] text-[#53575f] font-extralight">
            {html(subTitle)}
          </p>
        )}
      </div>
      <Tabs className="relative w-full" onSelect={setActiveIndex}>
        <TabList className="flex relative w-full">
          {items.map((item, index) => (
            <Tab
              key={index}
              className={`flex w-full cursor-pointer bg-white ${
                activeIndex === index
                  ? "shadow-[17px_-9px_20px_-9px_rgba(0,0,0,0.25)]"
                  : "shadow-[7px_9px_20px_0_rgba(0,0,0,0.25)]"
              }`}
              style={{ zIndex: activeIndex === index ? 9 : 4 - index }}
            >
              <div className="relative max-w-full w-full h-14 md:h-[8.125vw]">
                <Picture
                  className={`px-2 ${isMobileLBelow ? "object-contain" : "object-cover"}`}
                  src={getAkamayUrl(item.leftItem.picture || "")}
                  alt="Logo"
                  fill={true}
                  priority
                  unoptimized
                />
                {activeIndex === index && (
                  <div className="w-full h-full px-2 absolute -z-10 bg-white shadow-[-21px_-7px_20px_-20px_rgba(0,0,0,0.25)]"></div>
                )}
              </div>
            </Tab>
          ))}
        </TabList>
        {items.map((item, index) => (
          <TabPanel
            key={index}
            className="relative flex flex-col w-full bg-white shadow-[0_-20px_20px_0_rgba(0,0,0,0.06)] z-[8]"
          >
            <div className="flex flex-col md:flex-row p-[3.38542vw] pt-[5.46875vw] w-full gap-5 md:gap-10">
              {item.leftItem.title || item.leftItem.subTitle ? (
                <div className="flex flex-col w-full text-[14px] pr-0 md:pr-[3.38542vw] md:border-r-2 border-[#000] md:text-[1.45833vw] text-[#5e6b74] font-thin">
                  {item.leftItem.title && (
                    <span
                      className="pb-[3.38542vw] text-[16px] md:text-[2.29167vw]"
                      style={{ color: item.leftItem.color }}
                    >
                      {html(item.leftItem.title)}
                    </span>
                  )}
                  {item.leftItem.subTitle && (
                    <span className="text-[14px] md:text-[1.45833vw] leading-[22px] md:leading-[2.13542vw]">
                      {html(item.leftItem.subTitle)}
                    </span>
                  )}
                  {item.leftItem.cta?.url && (
                    <Button
                      href={item.leftItem.cta.url}
                      isExternal={item.leftItem.cta.isExternal}
                      className="!px-5 md:!px-8 !py-1 md:!py-2 text-[15px] md:text-[1.45833vw] font-thin text-black w-full sm:w-max mt-5 md:mt-[1.5625vw] tracking-normal border border-black"
                    >
                      {html(item.leftItem.cta.label)}
                    </Button>
                  )}
                </div>
              ) : null}
              <div className="flex flex-col w-full text-[14px] md:text-[1.45833vw] text-[#5e6b74] font-black border border-[#5e6b74]">
                <div
                  className="relative max-w-full w-full h-14 md:h-[8.125vw]"
                  style={{ backgroundColor: item.leftItem.color }}
                >
                  <Picture
                    className="object-contain"
                    src={getAkamayUrl(item.rightItem.picture || "")}
                    alt="Logo"
                    fill={true}
                    priority={true}
                    unoptimized
                  />
                </div>
                <div className="px-[3.125vw] py-[2.91667vw]">
                  {item.rightItem.title && (
                    <span style={{ color: item.leftItem.color }}>
                      {html(item.rightItem.title)}
                    </span>
                  )}
                  {item.rightItem.subTitle && (
                    <span className="font-thin">
                      {html(addListDisc(index))}
                    </span>
                  )}
                </div>
              </div>
            </div>
            {(item.title || item.subTitle) && (
              <div className="flex flex-col gap-2 text-center p-5 md:px-[13.3333vw] md:py-[3.125vw] bg-[#f5fafd] text-[14px] md:text-[1.45833vw] text-[#5e6b74] font-black shadow-[0_20px_20px_0_rgba(0,0,0,0.06)]">
                {item.subTitle && <span>{html(item.subTitle)}</span>}
                {item.title && <span>{html(item.title)}</span>}
              </div>
            )}
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default BrandsTab;
