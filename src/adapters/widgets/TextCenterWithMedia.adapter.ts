import { ITextCenterWithMedia } from "@/widgets/TextCenterWithMedia/TextCenterWithMedia.interface";
import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";
import { getAdapterCroppings, getAdapterImage, removeCMTextHyphen } from "@/logic/utilities";

export class TextCenterWithMediaAdapter extends Adapter<
  ITextCenterWithMedia,
  Nullable<ITextCenterWithMedia>
> {
  adapt: (source: any) => Nullable<ITextCenterWithMedia> = (source) => {
    if (!source.length) return null;
    const data = source[0];
    
    return {
      title: removeCMTextHyphen(data?.title),
      subtitle: removeCMTextHyphen(data?.detailText.text),
      fallbackVideoImg: getAdapterImage(data?.pictures)?.[0],
      videoImg: getAdapterCroppings(data.pictures)?.[0],
      videoUrl: data?.related[0]?.video?.dataUrl || ""
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
