import { ITextCenterWidePadding } from "@/widgets/TextCenterWidePadding/TextCenterWidePadding.interface";
import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";

export class TextCenterWidePaddingAdapter extends Adapter<
ITextCenterWidePadding,
  Nullable<ITextCenterWidePadding>
> {
  adapt: (source: any) => Nullable<ITextCenterWidePadding> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    return {
      title: data?.teaserTitle,
      subtitle: data?.teaserText.text,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
