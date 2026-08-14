import { ItextFootnote } from "@/widgets/textFootnote/textFootnote.interface";
import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";
import { getAdapterCTA } from "@/logic/utilities";
import { title } from "process";

export class textFootnoteAdapter extends Adapter<
ItextFootnote,
  Nullable<ItextFootnote>
> {
  adapt: (source: any) => Nullable<ItextFootnote> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    return {
      subtitle:data?.detailText?.text   
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
