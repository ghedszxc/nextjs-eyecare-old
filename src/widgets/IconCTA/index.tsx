// Modules
import AppConfig from "@/lib/AppConfig";
import { IIConCTA } from "./IconCTA.interface";
import IconItem from "./IconItem";
import { Button } from "@/components/global_elements/Button/Button";
import Anchor from "@/components/Anchor/Anchor";

// Components

const IconCTA: React.FC<IIConCTA> = ({ viewType, header, icons, cta, longText, backgroundColor }) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <div className="py-16 text-center px-8" style={{ backgroundColor: backgroundColor }}>
      {
        viewType == 'IconCtaGray' &&
        (
          <h2 className="font-[100] text-[40px] lg:text-[4.16667vw] leading-[45px] text-center mb-[8.59375vw]">
            {header}
          </h2>
        )
      }

      
      {
        viewType == 'IconCtaWhite' && 
        (
          <div className="font-light my-10 text-[16px] lg:text-[20px] tracking-wide prose-iconCtaMobile lg:prose-iconCtaDesktop mb-[8.59375vw]">
            {AppConfig.html(longText.text)}
          </div>
        )
      }

      <div className="md:flex justify-evenly items-center place-items-center lg:place-items-start">
        {icons.map((item, index) => (
          <Anchor href={item?.cta?.url || ""} key={index}>
            <IconItem {...item} viewType={viewType} />
          </Anchor>
        ))}
      </div>


      {(viewType == 'IconCtaGray' && longText) && (
        <div className="font-light my-10 text-[16px] lg:text-[20px] tracking-wide">
          {AppConfig.html(longText.text)}
        </div>
      )}

      {cta && (
        <Anchor
          href={cta?.url}
        >
          <Button
            className="mb-6 rounded-full py-2 lg:py-5 px-7 lg:px-12 font-medium tracking-[3px] text-base lg:text-xl border-[1px] border-black"
          >
            {cta?.label}
          </Button>
        </Anchor>
      )}
    </div>
  );
};
export default IconCTA;
