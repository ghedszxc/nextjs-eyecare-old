// Modules
import { IPhotoSliderItem } from "./PhotoSlider.interface";

// Components
import ResponsivePicture from "@/components/Picture/ResponsivePicture";

const PhotoSliderItem: React.FC<IPhotoSliderItem> = ({ picture, fallbackImage, isCropped }) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <div>
      <ResponsivePicture
        crops={picture}
        url={fallbackImage}
        isCropped={isCropped}
        name="PhotoSlider"
        type="widgets"
        className="object-cover"
      />
    </div>
  );
};
export default PhotoSliderItem;
