import { IHeroBannerMultiCta } from "@/widgets/HeroBannerMultiCta/HeroBannerMultiCta.interface";
import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";
import { getAdapterCroppings, getAdapterImage, getAdapterCTA, getAdapterVideoUrl } from "@/logic/utilities";

export class HeroBannerMultiCtaAdapter extends Adapter<
  IHeroBannerMultiCta,
  Nullable<IHeroBannerMultiCta>
> {
  adapt: (source: any) => Nullable<IHeroBannerMultiCta> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    return {
      title: data?.teaserTitle,
      subtitle: data?.teaserText.text,
      picture: getAdapterVideoUrl(data?.pictures),
      cta: getAdapterCTA(data?.teaserTargets)[0] || null,
      headImg: getAdapterImage(data?.pictures)?.[2],
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
