// Modules
import { IFeaturedLogoItem } from "./FeaturedLogo.interface";
import { getAkamayUrl } from "@/lib/utilities";

// Components
import Picture from "@/components/Picture/Picture";

const BrandItem: React.FC<IFeaturedLogoItem> = ({ picture, fallbackImage }) => {
  // Hooks
  // Variables
  // Functions
  // Effects
  
  return (
    <div className="mb-6 lg:mb-0">
      {(picture || fallbackImage) && (
        <Picture
          src={getAkamayUrl(fallbackImage)}
          alt={fallbackImage}
          width={1920}
          height={1080}
          className="w-auto lg:w-[190px] h-[60px] lg:h-[7.8125vw] object-contain m-auto"
          unoptimized
        />
      )}
    </div>
  );
};
export default BrandItem;
