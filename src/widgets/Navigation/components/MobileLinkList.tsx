// Modules
import { TLink } from "../INavigation.interface";

// Components
import Anchor from "@/components/Anchor/Anchor";
import AccordionLink from "./AccordionLink";
import Button from "@/components/Button";
import { useState } from "react";

type IMobileLinkListProps = {
  links: TLink[];
  loginLink: TLink;
};

const MobileLinkList: React.FC<IMobileLinkListProps> = ({ links, loginLink }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const CTA = links.find((link) => link.type === "CTA");
  const mainLinks = links.filter((link) => link.type !== "CTA");
 
  
  // Functions
  const renderLink = (link: TLink, key: number) => {
    switch (link.type) {
      case "singleLink":
        return (
          <Anchor href={link.url} data-item="singleLink">
            <div className="px-[15px] py-[10px]">{link.label}</div>
          </Anchor>
        );
      case "multipleLink":
        return <AccordionLink
        key={key}
        link={link}
        isOpen={openIndex === key}
        onToggle={() => handleToggle(key)}
      />
      case "extLink":
        return (
          <div className="px-[15px] py-[10px]">
            <Anchor href={link.url} isExternal>
              {link.label}
            </Anchor>
          </div>
        );
      default:
        return null;
    }
  };

  

  return (
    <div className="lg:hidden bg-white fixed h-full bottom-0 w-full left-0">
      <div className="flex flex-col items-center justify-evenly h-full">
        {/* List */}
        <ul className="w-full list-none p-0 m-0">
          {mainLinks.map((link, key) => (
            <li
              key={key}
              className="uppercase font-medium pb-[14px] mb-[14px] border-b-[1px] first-of-type:pt-[14px] border-[#d0d0d0] overflow-hidden"
            >
              {renderLink(link, key)}
            </li>
          ))}
        </ul>

        <div className="flex justify-center flex-col items-center mb-[20px]">
          {/* Login */}
          <Anchor
            className="font-medium tracking-[1.2px] text-[15px] mb-[15px] leading-[8px] uppercase"
            href={loginLink?.url}
          >
            {loginLink?.label}
          </Anchor>

          {/* CTA */}
          <Anchor href={CTA?.url || "#"} className="h-fit w-fit">
            <Button className="rounded-full py-[11px] px-[18px] font-medium tracking-[3px] text-[18px] outline-[1px] border-black w-full whitespace-nowrap">
              {CTA?.label}
            </Button>
          </Anchor>
        </div>
      </div>
    </div>
  );
};

export default MobileLinkList;
