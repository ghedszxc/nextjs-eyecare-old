import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";
import { ITextCenterWithColumns } from "@/widgets/TextCenterWithColumns/TextCenterWithColumns.interface";

export class TextCenterWithColumnsAdapter extends Adapter<
ITextCenterWithColumns,
  Nullable<ITextCenterWithColumns>
> {
  adapt: (source: any) => Nullable<ITextCenterWithColumns> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    return {
      title: data?.title || '',
      teaserText1: data?.teaserText1 || '',
      teaserText2: data?.teaserText2 || ''
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
