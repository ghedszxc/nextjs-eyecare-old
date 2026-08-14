// Modules
import AppConfig from "@/lib/AppConfig";
import { ITextIcon2col } from "./TextIcon2col.interface";
import TextIcon2colItem from "./TextIcon2colItem";

// Components

const TextIcon2col: React.FC<ITextIcon2col> = ({ title, subtitle, icons }) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <div className="py-12 lg:py-20 text-center px-8">
      {
        title && (
          <div className="
                font-[300]
                text-[40px] lg:text-[4.16667vw]
                leading-[45px] lg:leading-[4.6875vw]
                mb-4 lg:mb-[2.60417vw]
          ">
            { title }
          </div>
        )
      }

      {
        subtitle && (
          <div className="
                font-[300] text-[#5e6b74]
                text-[18px] lg:text-[1.40625vw]
                leading-[36px] lg:leading-[1.875vw]
                px-6 lg:px-0
                mb-24
          ">
            { subtitle }
          </div>
        )
      }

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        {icons.map((item, index) => (
          <TextIcon2colItem {...item} key={index} />
        ))}
      </div>
    </div>
  );
};
export default TextIcon2col;
