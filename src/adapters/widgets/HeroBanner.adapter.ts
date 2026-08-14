import { ICTALogo, IHeroBanner } from "@/widgets/HeroBanner/HeroBanner.interface";
import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";
import { getAdapterVideoUrl, getAdapterCTA, getAdapterImage, getAdapterPicture } from "@/logic/utilities";

export class HeroBannerAdapter extends Adapter<
  IHeroBanner,
  Nullable<IHeroBanner>
> {
  adapt: (source: any) => Nullable<IHeroBanner> = (source) => {
    if (!source.length) return null;
    const data = source[0];
    const ctaLogo = data.teaserTargets.map((logo: any )=>{
      return {
        picture: getAdapterPicture(logo.target.pictures),
        cta: getAdapterCTA(data.teaserTargets)
      }
    });

    return {
      title: data?.teaserTitle,
      subtitle: data?.teaserText?.text,
      picture: getAdapterVideoUrl(data?.pictures),
      headImg: getAdapterPicture(data?.pictures)?.[2],
      cta: getAdapterCTA(data?.teaserTargets)[0] || null,
      ctaLogo: ctaLogo || null,
      viewType: data?.viewtype,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
