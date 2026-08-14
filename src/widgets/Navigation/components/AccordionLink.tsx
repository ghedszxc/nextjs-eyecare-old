"use client";

import { TLink } from "../INavigation.interface";
import Anchor from "@/components/Anchor/Anchor";
import Presence from "@/components/Animations/Presence";
import { cx } from "class-variance-authority";

type AccordionLinkProps = {
  link: TLink;
  isOpen: boolean;
  onToggle: () => void;
};

const AccordionLink = ({ link, isOpen, onToggle }: AccordionLinkProps) => {
  return (
    <div className="cursor-pointer">
      <div
        className={cx(`px-[15px] py-[10px] accordion-arrow ${isOpen ? "accordion-open" : ""}`)}
        onClick={onToggle}
      >
        {link.label}
      </div>

      <Presence
        render={isOpen}
        initial="h-0"
        animate="h-auto"
        className="transition-all duration-500"
      >
        <ul className="p-[15px] list-none">
          {link.subLinks?.map((item, key) => (
            <li key={key} className="mb-3">
              <Anchor
                href={item.url}
                className="text-[15px] hover:underline capitalize"
              >
                {item.label}
              </Anchor>
            </li>
          ))}
        </ul>
      </Presence>
    </div>
  );
};

export default AccordionLink;