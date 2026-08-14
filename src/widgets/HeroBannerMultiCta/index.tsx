// Modules
import { cva } from "class-variance-authority";
import { IHeroBannerMultiCta } from "./HeroBannerMultiCta.interface";
import AppConfig from "@/lib/AppConfig";

// Components
import { Button } from "@/components/global_elements/Button/Button";
import Anchor from "@/components/Anchor/Anchor";
import Picture from "@/components/Picture/Picture";
import BackgroundImage from "../HeroBanner/BackgroundImage";
import { getAkamayUrl } from "@/logic/utilities";

const cvaVariants = cva([], {
  variants: {
    height: {
      small: ["h-[164px] relative"],
      // medium: ["h-[47.3vh] lg:h-[63vh] relative"],
      large: ["h-[100vh] lg:h-[80vh] relative"],
    },
    noImageHeight: {
      small: ["h-[164px] relative"],
      // medium: ["h-[596px] relative"],
      large: ["h-[683px] relative"],
    },
    fontSize: {
      small: ["text-[32px] lg:text-[40px] font-medium"],
      // medium: ["text-[42px] lg:text-[56px]"],
      // large: ["text-[42px] lg:text-[56px]"],
      large: ["text-[9px] lg:text-[1.5625vw] font-medium"]
    },
  },
});

const HeroBannerMultiCta = ({ title, subtitle, picture, cta, headImg}: IHeroBannerMultiCta) => {
  // Hooks
  // Variables
  const heightClass = cvaVariants({ height: 'large' });
  const heightClassNoImage = cvaVariants({ noImageHeight: 'large' });
  const fontClass = cvaVariants({ fontSize: 'large' });

  // Functions
  // Effects
  
  return (
    <div className="overflow-hidden bg-gradient-to-r from-gradient-blue to-black text-white text-center">
      <div className={picture ? heightClass : heightClassNoImage}>
        {(picture) && (
          <BackgroundImage
            picture={picture}
            title={title || "Hero Banner"}
          />
        )}

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full lg:w-full px-5 max-w-[100vw] lg:max-w-[48vw]">
          {(headImg) && (
            <div className="block w-[60vw] lg:w-[30vw] mx-auto mb-4 lg:mb-8">
              <Picture
                className="object-cover w-full"
                src={getAkamayUrl(headImg)}
                alt="HeroBannerMultiCta"
                unoptimized
              />
            </div>
          )}
          
          <h1 className="font-medium mb-6 text-[18px] lg:text-[1.5625vw]">
            {title}
          </h1>


          {cta?.label && cta?.url && (
            <Anchor
              href={cta?.url}
              isExternal={!!cta?.isExternal}
            >
              <Button
                className="bg-white rounded-full px-6 lg:px-12 py-2 lg:py-5 font-medium tracking-wider text-xs lg:text-xl text-black"
              >
                {cta?.label}
              </Button>
            </Anchor>
          )}

          <div className="font-medium mt-[3.125vw] text-[14px] lg:text-[1.5625vw]">
            {AppConfig.html(subtitle)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerMultiCta;
