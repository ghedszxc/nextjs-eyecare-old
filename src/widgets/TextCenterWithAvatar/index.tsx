// Modules
import AppConfig from "@/lib/AppConfig";
import { ITextCenterWithAvatar } from "./TextCenterWithAvatar.interface"
import TextCenterWithAvatarItem from "./TextCenterWithAvatarItem";

// Components

const TextCenterWithAvatar: React.FC<ITextCenterWithAvatar> = ({ title, subtitle, icons }) => {
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
                w-full lg:w-[75vw] mx-auto
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
                px-6 lg:px-24
                mb-24
                w-full lg:w-[75vw] mx-auto
          ">
            { subtitle }
          </div>
        )
      }

      <div className="flex flex-wrap justify-center w-full lg:w-[85vw] mx-auto">
        {
          icons.map((item, index) => (
            <TextCenterWithAvatarItem {...item} key={index} position={index} />
          ))
        }
      </div>
    </div>
  );
};
export default TextCenterWithAvatar;
