// Modules
import { ItextFootnote } from "./textFootnote.interface";
import AppConfig from "@/lib/AppConfig";

// Components
const textFootnote = ({subtitle}: ItextFootnote) => {
  // Hooks
  // Variables
  // Functions
  // Effects
  
  return (
    <div className="flex justify-center text-center bg-dark">
      <div className="w-[90%] lg:w-[74%] py-12 lg:py-24 font-light">
        {
          subtitle && 
          (
            <div className="prose-textFootnoteMobile lg:prose-textFootnoteDesktop">{AppConfig.html(subtitle)}</div>
          )
        }
      </div>
    </div>
  );
};
export default textFootnote;
