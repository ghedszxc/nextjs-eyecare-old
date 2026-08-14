"use client";

// Modules
import { useState } from "react";
import AppConfig from "@/lib/AppConfig";
import { ITextCenterWithAvatarItem } from "./TextCenterWithAvatar.interface";
import { getAkamayUrl } from "@/lib/utilities";

// Components
import Picture from "@/components/Picture/Picture";
import { Button } from "@/components/global_elements/Button/Button";
import ReadMoreModal from "./ReadMoreModal";

const TextCenterWithAvatarItem: React.FC<ITextCenterWithAvatarItem> = ({ title, subtitle, icon, cta, readMoreText, position }) => {
  // Hooks
  const [dialog, setDialog] = useState<boolean>(false);
  // Variables
  // Functions
  const onClickHandler = () => {
    setDialog(true);
  };

  const onCloseHandler = () => {
    setDialog(false);
  };
  // Effects

  return (
    <div className={`${position >= 4 ? 'flex-2 w-full md:w-[25%]' : 'flex-auto  w-full md:w-[25%]'}`}>
      <Picture
        src={getAkamayUrl(icon || "")}
        alt={title}
        width={1920}
        height={1080}
        className="w-[100px] h-[100px] md:w-[18.59375vw] md:h-[18.59375vw] object-contain m-auto rounded-full mb-6 lg:mb-10"
        unoptimized
      />

      {
        title &&
        (
          <div className="
                text-[18px] md:text-[1.40625vw]
                leading-[25px] md:leading-[2.5vw]
                font-[900] text-[#5e6b74]
          ">
            { title }
          </div>
        )
      }

      {
        subtitle && (
          <div style={{ fontStyle: 'italic' }}
              className="
                text-[16px] md:text-[1.40625vw]
                leading-[25px] md:leading-[2.5vw]
                font-[100] text-[#5e6b74]
          ">
            {AppConfig.html(subtitle)}
          </div>
        )
      }

      
      {
        cta?.label && cta?.url && (
          <Button onClick={onClickHandler}
            style={{ textDecoration: 'underline', fontStyle: 'italic' }}
            className="
              text-[16px] md:text-[1.40625vw]
              leading-[25px] md:leading-[2.5vw]
              font-[100] text-[#5e6b74]
              mb-12 lg:mb-24">
            {cta?.label}
          </Button>
        )
      }
      
      <ReadMoreModal readMoreText={readMoreText} onClose={onCloseHandler} isActive={dialog} />
    </div>
  );
};
export default TextCenterWithAvatarItem;
