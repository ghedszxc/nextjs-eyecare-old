import { IMultipleGallerySlider } from "@/widgets/MultipleGallerySlider/MultipleGallerySlider.interface";
import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";
import { getAdapterCroppings, getAdapterImage, getAdapterCTA } from "@/logic/utilities";

export class MultipleGallerySliderAdapter extends Adapter<
  IMultipleGallerySlider,
  Nullable<IMultipleGallerySlider>
> {
  adapt: (source: any) => Nullable<IMultipleGallerySlider> = (source) => {
    if (!source.length) return null;

    const getContents = source.map((slide: any) => {
      return {
        title: slide?.collectionTitle,
        pictures: getAdapterCroppings(slide?.items),
        fallbackImages: getAdapterImage(slide?.items),
      }
    })

    return {
      contents: getContents
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
