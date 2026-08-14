import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";
import { ITextPolicies } from "@/widgets/TextPolicies/TextPolicies.interface";

export class TextPoliciesAdapter extends Adapter<
  ITextPolicies,
  Nullable<ITextPolicies>
> {
  adapt: (source: any) => Nullable<ITextPolicies> = (source) => {
    if (!source.length) return null;
    const textPolicies = source[0];

    return {
      title: textPolicies?.title,
      type: textPolicies?.type,
      detailText: textPolicies?.detailText.text,
      teaserText: textPolicies?.teaserText.text,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
