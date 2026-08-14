import { ISliderCollection } from "@/widgets/SliderCollection/SliderCollection.interface";
import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";
import { getAdapterCroppings, getAdapterImage, getAdapterCTA } from "@/logic/utilities";

export class SliderCollectionAdapter extends Adapter<
  ISliderCollection,
  Nullable<ISliderCollection>
> {
  adapt: (source: any) => Nullable<ISliderCollection> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    const getContents = data.items.map((itm: any) => {
      return {
        title: itm?.teaserTitle,
        subtitle: itm?.teaserText?.text,
        picture: getAdapterCroppings(itm?.pictures)?.[0],
        fallbackImage: getAdapterImage(itm?.pictures)?.[0],
        cta: getAdapterCTA(itm?.teaserTargets)[0] || null
      }
    })

    return {
      title: data?.collectionTitle,
      subtitle: data?.collectionSubTitle,
      contents: getContents,
      isCropped: data?.settings?.isCropped || false
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
