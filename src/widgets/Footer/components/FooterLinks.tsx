"use client";

// Modules
import Anchor from "@/components/Anchor/Anchor";
import { TLink } from "@/widgets/Navigation/INavigation.interface";
import { getAkamayUrl } from "@/lib/utilities";
import useResponsive from "@/hooks/useResponsive";

// Components
import Picture from "@/components/Picture/Picture";

type IFooterLinksProps = {
  links: TLink[];
};

const FooterLinks: React.FC<IFooterLinksProps> = ({ links }) => {
  // Hooks
  const { is } = useResponsive();
  const isTabletLBelow = is("tablet", "<");

  const getComponents = (data: any, key: number) => {
    if (links.length != key + 1) {
      return (
        <div
          key={key}
          className="text-white font-[200] text-[18px] lg:text-[.9375vw] tracking-[1px] text-center lg:text-right hover:text-[#66b7ed]"
        >
          <Anchor
            href={data.url}
            className="p-[.78125vw] leading-[48px] lg:leading-[1.14583vw] inline-block tracking-[1px]"
          >
            {data.label}
          </Anchor>
        </div>
      );
    } else if (links.length == key + 1) {
      return (
        <div
          key={key}
          className="text-white font-[200] text-[18px] lg:text-[.9375vw] tracking-[1px] text-center lg:text-right hover:text-[#66b7ed]"
        >
          <Anchor
            className="p-[.78125vw] leading-[48px] lg:leading-[1.14583vw] inline-block tracking-[1px]"
            href={data.url}
            onClick={() =>
              window?._sp_?.globalcmp?.loadPrivacyManagerModal("1327226")
            }
          >
            <span className="flex">
              {data?.logo && (
                <Picture
                  src={getAkamayUrl(data?.logo)}
                  alt={data?.logo}
                  unoptimized
                  className="mr-2 my-auto
                      h-auto
                      w-[25px] lg:w-[20px]
                    "
                />
              )}
              {data.label} {isTabletLBelow}
            </span>
          </Anchor>
        </div>
      );
    }
  };
  // Variables
  // Functions
  // Effects

  return (
    <div className="px-[15px] lg:w-[33.3333333%] lg:float-left">
      {links?.map((data, key) => getComponents(data, key))}
    </div>
  );
};
export default FooterLinks;
