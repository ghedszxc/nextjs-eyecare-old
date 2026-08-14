// Modules
import { IIconItem } from "./IconCTA.interface";

// Components
import Picture from "@/components/Picture/Picture";
import { Button } from "@/components/global_elements/Button/Button";
import Anchor from "@/components/Anchor/Anchor";
import { getAkamayUrl } from "@/lib/utilities";

const IconItem: React.FC<IIconItem> = ({ header, icon, cta, viewType }) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <div>
      <Picture
        src={getAkamayUrl(icon)}
        alt={header}
        width={1920}
        height={1080}
        className="w-[130px] h-[60px] lg:h-[7.8125vw] object-contain m-auto"
        unoptimized
      />
      {
        header &&
        (
          <h2 className={`font-medium py-[3.64583vw] text-center text-[16px] lg:text-[1.66667vw] ${viewType == 'IconCtaGray' && 'mb-14 mt-4 lg:mt-0'}`}>
            {header}
          </h2>
        )
      }
      
      {
        (viewType == 'IconCtaWhite' && cta) &&
        (
          <Anchor href={cta?.url}>
            <Button className="mb-[60px] rounded-full py-2 lg:py-5 px-7 lg:px-12 font-medium tracking-[3px] text-base md:text-sm lg:text-lg border-[1px] border-black">
              {cta?.label}
            </Button>
          </Anchor>
        )
      }
    </div>
  );
};
export default IconItem;
