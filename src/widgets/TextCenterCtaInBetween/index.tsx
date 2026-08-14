// Modules
import { ITextCenterCtaInBetween } from "./TextCenterCtaInBetween.interface";
import AppConfig from "@/lib/AppConfig";

// Components
import { Button } from "@/components/global_elements/Button/Button";
import Anchor from "@/components/Anchor/Anchor";
const TextCenterCtaInBetween = ({ title, subtitle, footnote, bg, cta }: ITextCenterCtaInBetween) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <div className="flex justify-center text-center" style={{ background: '#dfdfe1' }}>
      <div className="w-[85%] lg:w-2/3 py-12 lg:py-20 font-light">
      {/* prose-textCenterCtaInBetweenDesktop */}
        {
          subtitle && <div className="text-sm lg:text-xl">{AppConfig.html(subtitle)}</div>
        }
        <div className="text-2xl lg:text-4xl tracking-wide mt-0 lg:mt-6 mb-6 lg:mb-12">
          {AppConfig.html(title)}
        </div>

        
        {cta?.label && cta?.url && (
          <Anchor
            href={cta?.url}
            isExternal={!!cta?.isExternal}
          >
          <Button
            className="mb-8 lg:mb-20 bg-white rounded-full px-6 lg:px-12 py-2 lg:py-5 font-medium tracking-wider text-xs lg:text-xl">
            {cta?.label}
          </Button>
          </Anchor>
        )}

        <div className="text-xs text-gray-500">
          {AppConfig.html(footnote)}
        </div>
      </div>
    </div>
  );
};
export default TextCenterCtaInBetween;
