import { Nullable } from "@/models/Nullable.interface";
import { Adapter } from "../Adapter";
import { IFeaturedLogo } from "@/widgets/FeaturedLogo/FeaturedLogo.interface";
import { getAdapterCTA } from "@/logic/utilities";
import { getAkamayUrl, getAdapterCroppings, getAdapterImage } from "@/lib/utilities";

export class FeaturedLogoAdapter extends Adapter<IFeaturedLogo, Nullable<IFeaturedLogo>> {
  adapt: (source: any) => Nullable<IFeaturedLogo> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    const brands = data?.pictures.map((item: any, key: number) => {
      return {
        fallbackImage: getAdapterImage(data?.pictures)?.[key],
        picture: getAdapterCroppings(data?.pictures)?.[key],
      }
    })
    
    return {
      header: data?.teaserTitle,
      brands: brands,
      longText: data.teaserText,
      cta: getAdapterCTA(data?.teaserTargets)?.[0]
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
