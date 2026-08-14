// Modules
import { IlongTextJustifyWithCta } from "./longTextJustifyWithCta.interface";
import AppConfig from "@/lib/AppConfig";

// Components
import { Button } from "@/components/global_elements/Button/Button";
import Anchor from "@/components/Anchor/Anchor";
const LongTextJustifyWithCta = ({ title, subtitle, cta }: IlongTextJustifyWithCta) => {
  // Hooks
  // Variables
  // Functions
  // Effects
  return (
    <div className="flex justify-center text-center">
      <div className="w-[90%] lg:w-[74%] pt-4 lg:pt-12 font-light">

        {
          subtitle && 
          (
            <div className="prose-longTextJustifyWithCtaMobile lg:prose-longTextJustifyWithCtaDesktop mb-12">{AppConfig.html(subtitle)}</div>
          )
        }
        
        {cta?.label && cta?.url && (
          <Anchor
            href={cta?.url}
            isExternal={!!cta?.isExternal}
          >
            <Button
              className={`
                ${!title ? 'mb-8 lg:mb-20' : 'mb-6'}
                rounded-full
                px-[16vw] lg:px-14
                py-3 lg:py-5
                font-medium
                tracking-wider
                text-xl
                border-[2px] border-black`}>
              {cta?.label}
            </Button>
          </Anchor>
        )}

        { title && (
          <div>
            {title}
          </div>
        )}
      </div>
    </div>
  );
};
export default LongTextJustifyWithCta;
