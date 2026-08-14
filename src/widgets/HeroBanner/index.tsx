// Modules
import { cva } from "class-variance-authority";
import { IHeroBanner } from "./HeroBanner.interface";
import AppConfig from "@/lib/AppConfig";

// Components
import { Button } from "@/components/global_elements/Button/Button";
import Anchor from "@/components/Anchor/Anchor";
import BackgroundImage from "./BackgroundImage";
import Picture from "@/components/Picture/Picture";
import { getAkamayUrl } from "@/logic/utilities";

const cvaVariants = cva([], {
  variants: {
    height: {
      small: ["h-[164px] relative"],
      large: ["min-h-[80vh] relative"],
    },
    noImageHeight: {
      small: ["h-[164px] relative"],
      large: ["h-[575px] relative"],
    },
    fontSize: {
      small: ["text-[32px] lg:text-[40px] font-medium"],
      large: ["text-[9px] lg:text-[1.5625vw] font-medium"]
    },
  },
});

const HeroBanner = ({
  title,
  subtitle,
  picture,
  cta,
  viewType,
  headImg,
  ctaLogo
}: IHeroBanner) => {
  // Hooks

  // Variables
  const heightClass = cvaVariants({ height: 'large' });
  const heightClassNoImage = cvaVariants({ noImageHeight: 'large' });

  // Functions
  // Effects

  return (
    <div
      className="text-white text-center"
      style={{ backgroundColor: `${viewType == "BgColorBlack" && "#000000"}` }}
    >
      <div className={picture ? heightClass : heightClassNoImage}>
        {picture?.length != 0 && (
          <BackgroundImage picture={picture} title={title || "Hero Banner"} />
        )}

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full lg:w-full px-5 max-w-[100vw]">
        {(headImg?.dataUri) && (
            <div className="block w-[25%] max-md:w-[60%] mx-auto mb-4 max-md:mb-8">
              <Picture
                className="object-contain w-auto mx-auto"
                src={getAkamayUrl(headImg?.dataUri)}
                alt={headImg?.title || "HeroBannerMultiCta"}
                unoptimized
              />
            </div>
          )}
          {
            title && (
              <div className="font-[100] text-[28px] md:text-[5.34vw] lg:text-[6.1vw]">
                {title}
              </div>
            )
          }

          {subtitle && <div className="prose-heroBannerMobile lg:prose-heroBannerDesktop font-medium">
            {AppConfig.html(subtitle)}
          </div>}

          {cta?.label && cta?.url && (
            <Anchor
              href={cta?.url}
              isExternal={!!cta?.isExternal}
            >
              <Button
                className="bg-white rounded-full px-6 lg:px-12 py-2 lg:py-5 font-medium tracking-wider text-sm lg:text-xl text-black uppercase"
              >
                {cta?.label}
              </Button>
            </Anchor>
          )}

          {/* Multiple Image Button / Logos */}
          {ctaLogo && ctaLogo[0]?.picture[0]?.dataUri && ctaLogo[0].cta[0]?.url && (
            <div className="flex flex-row gap-4 lg:gap-6 items-center justify-center w-full">
              {ctaLogo?.map((logoItem: any, i: number) => {
                const logoPic = logoItem?.picture
                  ? logoItem.picture[0]
                  : logoItem?.picture;
                const isExternal = !!logoItem?.cta?.isExternal;

                return (
                  <Anchor
                    href={logoItem?.cta?.[i]?.url || "#"}
                    isExternal={isExternal}
                    key={i}
                  >
                    <Picture
                      className="object-contain w-9 lg:w-16"
                      src={getAkamayUrl(logoPic?.dataUri)}
                      alt={logoPic?.title || ""}
                      width={60}
                      height={60}
                      unoptimized
                    />
                  </Anchor>
                );
              })}
            </div>
          )
          }
          
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
