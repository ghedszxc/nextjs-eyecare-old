import { ILongTextCenterCtaBottom } from "@/widgets/LongTextCenterCtaBottom/LongTextCenterCtaBottom.interface";
import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";
import { getAdapterCTA, removeCMTextHyphen, getAdapterCroppings, getAdapterImage } from "@/logic/utilities";


export class LongTextCenterCtaBottomAdapter extends Adapter<
  ILongTextCenterCtaBottom,
  Nullable<ILongTextCenterCtaBottom>
> {
  adapt: (source: any) => Nullable<ILongTextCenterCtaBottom> = (source) => {
    if (!source.length) return null;
    const data = source[0]; 
    return {
      title: removeCMTextHyphen(data?.teaserTitle),
      subtitle: removeCMTextHyphen(data?.detailText?.text),
      fallbackImage: getAdapterImage(data?.pictures)?.[0],
      picture: getAdapterCroppings(data?.pictures)?.[0],
      cta: getAdapterCTA(data?.related?.[0]?.teaserTargets)?.[0] || null,
      isCropped: data?.settings?.isCropped || false

    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
