import { IFaq } from "@/widgets/FAQ/Faq.interface";
import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";

export class FaqAdapter extends Adapter<
  IFaq,
  Nullable<IFaq>
> {
  adapt: (source: any) => Nullable<IFaq> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    const lists = data?.items?.map((itm: any, key: number) => {
      return {
        title: itm?.title,
        subtitle: itm?.detailText?.text
      }
    })

    return {
      title: data?.collectionTitle,
      subtitle: data?.collectionSubTitle,
      lists: lists
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
