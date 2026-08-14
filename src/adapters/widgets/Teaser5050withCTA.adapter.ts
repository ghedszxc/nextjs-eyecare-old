import { ITeaser5050withCTA } from "@/widgets/Teaser5050withCTA/Teaser5050withCTA.interface";
import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";
import { getAdapterCroppings, getAdapterImage, getAdapterCTA, removeCMTextHyphen } from "@/logic/utilities";
import { isExternal } from "util/types";

export class Teaser5050withCTAAdapter extends Adapter<
  ITeaser5050withCTA,
  Nullable<ITeaser5050withCTA>
> {
  adapt: (source: any) => Nullable<ITeaser5050withCTA> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    return {
      viewtype: data?.viewtype,
      title: removeCMTextHyphen(data?.teaserTitle),
      subtitle: data?.teaserText.text,
      picture: getAdapterCroppings(data?.pictures)?.[0],
      cta: getAdapterCTA(data?.teaserTargets)[0] || null,
      fallbackImage: getAdapterImage(data?.pictures)?.[0],
      backgroundColor: data?.settings?.backgroundcolor,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
