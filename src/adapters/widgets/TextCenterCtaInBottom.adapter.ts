import { ITextCenterCtaInBottom } from "@/widgets/TextCenterCtaInBottom/TextCenterCtaInBottom.interface";
import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";
import { getAdapterCTA, removeCMTextHyphen } from "@/logic/utilities";

export class TextCenterCtaInBottomAdapter extends Adapter<
  ITextCenterCtaInBottom,
  Nullable<ITextCenterCtaInBottom>
> {
  adapt: (source: any) => Nullable<ITextCenterCtaInBottom> = (source) => {
    if (!source.length) return null;
    const data = source[0];
    
    return {
      viewType: data?.viewtype,
      title: removeCMTextHyphen(data?.teaserTitle),
      subtitle: data?.teaserText,
      cta: getAdapterCTA(data?.teaserTargets)[0] || null,
      backgroundColor: data?.settings?.backgroundcolor
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
