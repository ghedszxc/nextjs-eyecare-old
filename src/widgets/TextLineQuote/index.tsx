// Modules
import { ITextLineQuote } from "./textLineQuote.interface";
import AppConfig from "@/lib/AppConfig";

// Components

const TextLineQuote = ({title, subtitle}: ITextLineQuote) => {
  // Hooks
  // Variables
  // Functions
  // Effects
  return (
    <div className="flex justify-center">
      <div className="w-[90%] lg:w-[85%] xl:w-[61%] py-24 font-light">
        { title && (
          <h2 className="
                text-[6.4vw] md:text-[2.58vw] lg:text-[1.68vw]
                leading-[30px] md:leading-[25px] lg:leading-[35px]
                mb-6
                font-bold">
            {title}
          </h2>
        )}

        { subtitle && (
          <div className="prose-textLineQuoteMobile lg:prose-textLineQuoteDesktop">
            {AppConfig.html(subtitle)}
          </div>
        )}
      </div>
    </div>
  );
};
export default TextLineQuote;
