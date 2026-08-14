"use client";

// Modules
import { IFaq } from "./Faq.interface";

import React from "react";
import { useState } from "react";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";

// Components
import { Button } from "@/components/global_elements/Button/Button";
import Anchor from "@/components/Anchor/Anchor";
import AppConfig from "@/lib/AppConfig";
import Presence from "@/components/Animations/Presence"
import Icon from "@/components/global_elements/Icon/Icon";


const Faq = ({ title, subtitle, lists }: IFaq) => {
  // Hooks
  const [openItems, setOpenItems] = useState<boolean[]>(new Array(lists.length).fill(false));

  // Variables
  // Functions
  const onClickHandler = (position: number) => {
    setOpenItems(prev => {
      const newState = [...prev];
      newState[position] = !newState[position];
      return newState;
    });
  };

  // Effects
  
  return (
    <div>
      {title && (
        <h1 className="font-[300] text-center
              mt-6 md:mt-12
              text-[30px] md:text-[5.20833vw]
              leading-[6.51042vw]
              tracking-[8px]">
          {title?.toUpperCase()}
        </h1>
      )}

      {subtitle && (
        <div className="font-[100] text-center
                mt-4 md:mt-1
                mb-6 md:mb-12
                text-[16px] md:text-[1.5625vw]
                leading-[1.875vw]">
          {subtitle}
        </div>
      )}
      
      <div className="w-[90%] lg:w-[75%] mx-auto">
        {lists.map((item, index) => (
          <div key={index} className="border-b border-black p-4 md:p-2">
            <div className="w-[98%] inline-block font-[900] text-[16px] md:text-[1.40625vw] leading-[25px] md:leading-[3.02083vw]"
              onClick={() => onClickHandler(index)}>
              {item.title}
            </div>

            <div className="w-[1%] inline-block m-auto">
              {!openItems[index] ?
                (<BsChevronRight onClick={() => onClickHandler(index)} />) :
                (<BsChevronDown onClick={() => onClickHandler(index)} />)
              }
            </div>
              
            {openItems[index] && (
              <div 
                className="mt-2 font-[100] text-[17px] leading-[24px] tracking-[1px] text-[#54575e]">
                <Presence render={true}
                  initial="opacity-0"
                  animate="opacity-100">
                  {AppConfig.html(item.subtitle)}
                </Presence>
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};

export default Faq;
