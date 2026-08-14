import { ITextCenterCtaInBetween } from "@/widgets/TextCenterCtaInBetween/TextCenterCtaInBetween.interface";
import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";
import { getAdapterCTA } from "@/logic/utilities";

export class TextCenterCtaInBetweenAdapter extends Adapter<
  ITextCenterCtaInBetween,
  Nullable<ITextCenterCtaInBetween>
> {
  adapt: (source: any) => Nullable<ITextCenterCtaInBetween> = (source) => {
    if (!source.length) return null;
    const data = source[0];
    return {
      title: data?.teaserTitle,
      subtitle: data?.teaserText.text,
      footnote: data?.teaserTargets[0]?.target?.teaserText.text,
      cta: getAdapterCTA(data?.teaserTargets)[0] || null
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
