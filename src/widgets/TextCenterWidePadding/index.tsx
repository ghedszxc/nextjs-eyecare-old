// Modules
import { ITextCenterWidePadding } from "./TextCenterWidePadding.interface";
import AppConfig from "@/lib/AppConfig";

// Components
import { Button } from "@/components/global_elements/Button/Button";
import Anchor from "@/components/Anchor/Anchor";
const TextCenterWidePadding = ({ title, subtitle}: ITextCenterWidePadding) => {
  // Hooks
  // Variables
  // Functions
  // Effects
  return (
    <div className="flex justify-center text-center">
      <div className="w-full lg:w-[74%] py-12 lg:py-24 font-light">
        { subtitle && (
          <div className="prose-TextCenterWidePaddingMobile lg:prose-TextCenterWidePaddingDesktop">
            {AppConfig.html(subtitle)}
          </div>
        )}   
      </div>
    </div>
  );
};
export default TextCenterWidePadding;
