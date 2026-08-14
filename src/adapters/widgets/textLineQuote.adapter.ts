import { ITextLineQuote } from "@/widgets/TextLineQuote/textLineQuote.interface";
import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";

export class TextLineQuoteAdapter extends Adapter<
ITextLineQuote,
  Nullable<ITextLineQuote>
> {
  adapt: (source: any) => Nullable<ITextLineQuote> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    return {
      title: data?.title,
      subtitle:data?.detailText?.text   
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
