import { Nullable } from "@/models/Nullable.interface";
import { Adapter } from "../Adapter";
import { ITextIcon2col } from "@/widgets/TextIcon2col/TextIcon2col.interface";
import { getAdapterImage } from "@/logic/utilities";

export class TextIcon2colAdapter extends Adapter<ITextIcon2col, Nullable<ITextIcon2col>> {
  adapt: (source: any) => Nullable<ITextIcon2col> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    const icons = data?.items.map((itm: any, key: number) => {
      return {
        title: itm?.title,
        subtitle: itm?.detailText?.text,
        icon: getAdapterImage(data?.items)?.[key]

      }
    });
    
    return {
      title: data?.collectionTitle,
      subtitle: data?.collectionSubTitle,
      icons: icons,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
