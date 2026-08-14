// Modules
import { ITeaser3070withCTA } from "./Teaser3070withCTA.interface";
import AppConfig from "@/lib/AppConfig";

// Components
import { Button } from "@/components/global_elements/Button/Button";
import ResponsivePicture from "@/components/Picture/ResponsivePicture";
import Anchor from "@/components/Anchor/Anchor";
const Teaser3070withCTA = ({ title, subtitle, cta, picture, fallbackImage }: ITeaser3070withCTA) => {
  // Hooks
  // Variables
  // Functions
  // Effects
  
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-stretch py-16 lg:py-24" style={{ background: '#dfdfe1' }}>
        <div className="w-full lg:w-[75vw]">
          {picture && (
            <ResponsivePicture
              crops={picture}
              name="Teaser3070withCTA"
              type="widgets"
              url={fallbackImage}
            />
          )}
        </div>

        <div className="w-full lg:w-[100vw] flex flex-col justify-center pl-0 lg:pl-6 pr-0 lg:pr-36 text-center lg:text-left">
          {title && (
            <h3 className="text-4xl/[50px] lg:text-6xl/[75px] font-light tracking-wider my-6 lg:my-0 lg:mb-4 px-6 lg:px-0" >
              {title}
            </h3>
          )}

          {subtitle && (
            <div className="prose-Teaser3070withCTAMobile lg:prose-Teaser3070withCTADesktop px-6 lg:px-0">
              {AppConfig.html(subtitle)}
            </div>
          )}

          <div className="text-center lg:text-start">
            {cta?.label && cta?.url && (
              <Anchor
                href={cta?.url}
                isExternal={!!cta?.isExternal}
              >
                <Button
                  className="mb-6 rounded-full py-4 lg:py-6 font-medium tracking-widest text-base lg:text-xl border-[1px] border-black w-[44%]"
                >
                  {cta?.label}
                </Button>
              </Anchor>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Teaser3070withCTA;
