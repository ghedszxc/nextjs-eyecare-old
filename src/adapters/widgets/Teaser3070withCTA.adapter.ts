import { ITeaser3070withCTA } from "@/widgets/Teaser3070withCTA/Teaser3070withCTA.interface";
import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";
import { getAdapterCroppings, getAdapterImage, removeCMTextHyphen } from "@/logic/utilities";
import { getAkamayUrl } from "@/lib/utilities";

export class Teaser3070withCTAAdapter extends Adapter<
  ITeaser3070withCTA,
  Nullable<ITeaser3070withCTA>
> {
  adapt: (source: any) => Nullable<ITeaser3070withCTA> = (source) => {
    if (!source.length) return null;
    const data = source[0];
    
    const ctaDownload = {
      label: data?.teaserTargets[0]?.target?.title,
      url: getAkamayUrl(data?.teaserTargets[0]?.target?.data?.uri),
      isExternal: data?.teaserTargets[0]?.target?.type === "CMDownload",
      isFileDownload: data?.teaserTargets[0]?.target?.type === "CMDownload"
    }

    return {
      title: removeCMTextHyphen(data?.teaserTitle), 
      subtitle: data?.teaserText.text,
      picture: getAdapterCroppings(data?.pictures)?.[0],
      // cta: getAdapterCTA(data?.teaserTargets)[0] || null,
      cta: ctaDownload || null,
      fallbackImage: getAdapterImage(data?.pictures)?.[0]
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
