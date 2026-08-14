import { IPhotoSlider } from "@/widgets/PhotoSlider/PhotoSlider.interface";
import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";
import { getAdapterCroppings, getAdapterImage, getAdapterCTA } from "@/logic/utilities";

export class PhotoSliderAdapter extends Adapter<
  IPhotoSlider,
  Nullable<IPhotoSlider>
> {
  adapt: (source: any) => Nullable<IPhotoSlider> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    const getImages = data.items.map((itm: any) => {
      return {
        picture: getAdapterCroppings(itm?.pictures)?.[0],
        fallbackImage: getAdapterImage(itm?.pictures)?.[0]
      }
    })

    return {
      images: getImages,
      isCropped: data?.settings?.isCropped || false
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
