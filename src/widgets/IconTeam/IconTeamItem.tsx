// Modules
import { IIconTeamItem } from "./IconTeam.interface";
import AppConfig from "@/lib/AppConfig";

// Components
import ResponsivePicture from "@/components/Picture/ResponsivePicture";

const IconTeamItem: React.FC<IIconTeamItem> = ({ name, description, fallbackImage, picture }) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <div className="flex m-auto
          flex-col-reverse md:flex-row-reverse
          w-[56%] md:w-[63%] lg:w-[94%] xl:w-[83%]">
      
      {/* Right */}
      <div className="md:w-1/2 w-full py-12 md:py-20 pl-9 flex items-start text-left flex-col bg-white">
        {
          name && (
            <h2 className="font-[100] text-[11px] mb-4">
              {name}
            </h2>
          )
        }

        {description && (
          <div className="prose-iconTeamMobile md:prose-iconTeamDesktop">
            {AppConfig.html(description, { ignoreTarget: true })}
          </div>
        )}
      </div>

      {/* Left */}
      <div className="md:w-1/2 w-full">
        <div className="w-full h-full overflow-hidden">
          {picture && (
            <ResponsivePicture
              crops={picture}
              name="Teaser5050withCTA"
              type="widgets"
              url={fallbackImage}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default IconTeamItem;
