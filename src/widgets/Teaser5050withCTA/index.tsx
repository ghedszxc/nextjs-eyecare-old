// Modules
import { ITeaser5050withCTA } from "./Teaser5050withCTA.interface";
import AppConfig from "@/lib/AppConfig";

// Components
import { Button } from "@/components/global_elements/Button/Button";
import ResponsivePicture from "@/components/Picture/ResponsivePicture";
import Anchor from "@/components/Anchor/Anchor";


const Teaser5050WithCTA = ({ viewtype, title, subtitle, cta, picture, fallbackImage, backgroundColor }: ITeaser5050withCTA) => {
  // Hooks
  // Variables
  // Functions
  // Effects
  
  return (
    <div className={
      `flex flex-col w-full md:min-h-[648px] md:flex-row
      ${viewtype == 'teaser5050imageright' ? 'text-black md:flex-row' : 'text-black md:flex-row-reverse px-0 lg:px-28 py-0 lg:py-20'}`
    }>
      
      {/* Left */}
      <div className="md:w-1/2 w-full px-12 py-12 md:py-24 px-6 flex items-start justify-center flex-col text-center md:text-left"
        style={{ backgroundColor: backgroundColor }}>
        {
          title && (
            <h2 className="font-[900] mb-6 text-[#53575f]
              text-[30px]/[40px] lg:text-[2.23958vw]/[45px]">
              {title}
            </h2>
          )
        }

        {subtitle && (
          <div className="prose-teaser5050withCTAMobile lg:prose-teaser5050withCTADesktop">
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
                className="mt-8 bg-white rounded-full
                px-8 py-2
                ml-[29vw] md:ml-0
                font-medium
                tracking-wider
                text-[18px]
                text-black
                border-[3px] border-black"
              >
                {cta?.label}
              </Button>
            </Anchor>
          )}
      </div>

      {/* Right */}
      <div className="md:w-1/2 w-full">
        <div className="w-full h-full overflow-hidden">
          {picture && (
            <ResponsivePicture
              crops={picture}
              name="Teaser5050withCTA"
              type="widgets"
              url={fallbackImage}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default Teaser5050WithCTA;
