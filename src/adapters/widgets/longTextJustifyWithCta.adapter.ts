import { IlongTextJustifyWithCta } from "@/widgets/longTextJustifyWithCta/longTextJustifyWithCta.interface";
import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";
import { getAdapterCTA, removeCMTextHyphen } from "@/logic/utilities";

export class longTextJustifyWithCtaAdapter extends Adapter<
IlongTextJustifyWithCta,
  Nullable<IlongTextJustifyWithCta>
> {
  adapt: (source: any) => Nullable<IlongTextJustifyWithCta> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    return {
      title: removeCMTextHyphen(data?.teaserTitle),
      subtitle: data?.detailText?.text,
      cta: getAdapterCTA(data?.related?.[0]?.teaserTargets)?.[0] || null
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
