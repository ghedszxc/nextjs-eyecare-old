// Modules
import { ISliderCollectionItem } from "./SliderCollection.interface";
import AppConfig from "@/lib/AppConfig";

// Components
import ResponsivePicture from "@/components/Picture/ResponsivePicture";
import { Button } from "@/components/global_elements/Button/Button";
import Anchor from "@/components/Anchor/Anchor";

const SliderCollectionItem: React.FC<ISliderCollectionItem> = ({ title, subtitle, picture, fallbackImage, cta, isCropped }) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <div className="
      flex flex-col-reverse md:flex-row-reverse
      w-full md:min-h-[648px]
      py-0 lg:py-20">
      
      {/* Left */}
      <div className="w-full md:w-1/2 px-12 lg:px-[80px] flex items-start justify-center flex-col text-left">
        {
          title && (
            <h2 className="text-[24px] lg:text-[2.29167vw] leading-[45px] lg:leading-[1.875vw] font-[100] text-[#5e6b74] mt-4 lg:mt-0 mx-auto lg:mx-0">
              {title}
            </h2>
          )
        }

        {subtitle && (
          <div className="text-[18px] lg:text-[1.40625vw] leading-[33px] lg:leading-[2.5vw] font-[100] text-[#5e6b74] prose-displayBullet">
            {AppConfig.html(subtitle)}
          </div>
        )}

        {/* CTA */}
        {cta?.label && cta?.url && (
            <Anchor
              href={cta?.url}
              isExternal={!!cta?.isExternal}
            >
              <Button
                className="
                  mt-8
                  mb-16 lg:mb-0
                  bg-white rounded-full
                  px-5 lg:px-8
                  py-1 lg:py-3
                  font-[100]
                  text-[15px] lg:text-[18px]
                  lg:text-[1.45833vw]
                  border-[1px] border-black">
                {cta?.label}
              </Button>
            </Anchor>
          )}
      </div>

      {/* Right */}
      <div className="w-full md:w-1/2">
        <div className="w-full h-full overflow-hidden">
          {picture && (
            <ResponsivePicture
              crops={picture}
              name="Teaser5050withCTA"
              type="widgets"
              url={fallbackImage}
              isCropped={isCropped}
            />
          )}
        </div>
      </div>

    </div>
  );
};
export default SliderCollectionItem;
