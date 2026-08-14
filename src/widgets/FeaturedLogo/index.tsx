// Modules
import AppConfig from "@/lib/AppConfig";
// import { IIConCTA } from "./IconCTA.interface";
import { IFeaturedLogo } from "./FeaturedLogo.interface";
import BrandItem from "./BrandItem";
import { Button } from "@/components/global_elements/Button/Button";
import Anchor from "@/components/Anchor/Anchor";

// Components

const FeaturedLogo: React.FC<IFeaturedLogo> = ({ header, brands, cta, longText }) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <div className="py-10 lg:py-24 text-center px-8">
      <h2 className="font-[100] text-[40px] lg:text-[3.6vw] text-center mb-4 tracking-[4px]">{header}</h2>

      {
        longText && (
          <div className="font-[100] lg:font-light mb-10 text-[20px] lg:text-[1.9em] tracking-wide text-gray-500">
            {AppConfig.html(longText.text)}
          </div>
        )
      }

      <div className="w-full xl:w-[75%] mx-auto lg:flex justify-evenly items-center place-items-center lg:place-items-start">
        {brands.map((item, index) => (
          <BrandItem key={index} {...item} />
        ))}
      </div>

      {
        cta && (
          <Anchor
            href={cta?.url}
          >
            <Button
              className="mt-12 mb-0 lg:mb-6 rounded-full py-2 lg:py-5 px-7 lg:px-12 font-medium tracking-[3px] text-base lg:text-xl border-[2px] border-black">
              {cta?.label}
            </Button>
          </Anchor>
        )
      }
    </div>
  );
};
export default FeaturedLogo;
