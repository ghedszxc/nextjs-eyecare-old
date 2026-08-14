// Modules
import AppConfig from "@/lib/AppConfig";
import { ITextIcon2colItem } from "./TextIcon2col.interface";

// Components
import Picture from "@/components/Picture/Picture";
import { getAkamayUrl } from "@/lib/utilities";

const TextIcon2colItem: React.FC<ITextIcon2colItem> = ({ title, subtitle, icon }) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <div>
      <Picture
        src={getAkamayUrl(icon || "")}
        alt={title}
        width={1920}
        height={1080}
        className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] object-contain m-auto"
        unoptimized
      />

      {
        title &&
        (
          <div className="
                text-[22px] lg:text-[2.29167vw]
                leading-[25px] lg:leading-[2.44792vw]
                pt-6 lg:pt-[3.38542vw]
                pb-6 lg:pb-[2.08333vw]
                font-[100] text-[#5e6b74]
          ">
            { title }
          </div>
        )
      }

      {
        subtitle && (
          <div className="
                text-[15px] lg:text-[1.40625vw]
                leading-[23px] lg:leading-[2.5vw]
                font-[100] text-[#5e6b74]
                px-4 md:px-0 lg:px-[5vw]
          ">
            {AppConfig.html(subtitle)}
          </div>
        )
      }
    </div>
  );
};
export default TextIcon2colItem;
