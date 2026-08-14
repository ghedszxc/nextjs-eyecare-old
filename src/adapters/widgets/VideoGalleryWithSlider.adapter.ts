import { IVideoGalleryWithSlider } from "@/widgets/VideoGalleryWithSlider/VideoGalleryWithSlider.interface";
import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";
import { getAdapterCroppings, getAdapterImage } from "@/logic/utilities";

export class VideoGalleryWithSliderAdapter extends Adapter<
  IVideoGalleryWithSlider,
  Nullable<IVideoGalleryWithSlider>
> {
  adapt: (source: any) => Nullable<IVideoGalleryWithSlider> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    const getVideos = getAdapterCroppings(data?.pictures).map((item: any, key: number) => {
      return {
        videoImg: item,
        fallbackVideoImg: getAdapterImage(data?.pictures)[key],
        title: data?.teaserTargets[key]?.target?.title,
        videoUrl: data?.teaserTargets[key]?.target?.dataUrl
      }
    })

    return {
      videos: getVideos
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
