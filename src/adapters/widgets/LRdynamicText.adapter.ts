import { ILRdynamicText } from "@/widgets/LRdynamicText/LRdynamicText.interface";
import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";
import { getAdapterCroppings, getAdapterCTA, getAdapterImage } from "@/logic/utilities";

export class LRdynamicTextAdapter extends Adapter<
  ILRdynamicText,
  Nullable<ILRdynamicText>
> {
  adapt: (source: any) => Nullable<ILRdynamicText> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    return {
      title: data?.teaserTitle,
      subtitle: data?.teaserText.text,
      picture: getAdapterCroppings(data?.pictures)?.[0],
      cta: getAdapterCTA(data?.teaserTargets)[0] || null,
      fallbackImage: getAdapterImage(data?.pictures)?.[0],
      isCropped: data?.settings?.isCropped || false
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
