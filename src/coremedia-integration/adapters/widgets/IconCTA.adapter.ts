import { Nullable } from "@/models/Nullable.interface";
import { Adapter } from "../Adapter";
import { IIConCTA, IIconItem } from "@/widgets/IconCTA/IconCTA.interface";
import { getAdapterCTA, removeCMTextHyphen } from "@/logic/utilities";

export class IconCTAAdapter extends Adapter<IIConCTA, Nullable<IIConCTA>> {
  adapt: (source: any) => Nullable<IIConCTA> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    const items = data?.pictures.map(
      (picture: {
        data: { uri: string };
        title: string;
        teaserTargets: [];
      }, key: number): IIconItem => ({
        icon: picture?.data?.uri,
        header: data?.viewtype == 'IconCtaGray' ? data.teaserTargets?.[key]?.callToActionText : picture?.title, //picture?.title,
        cta: getAdapterCTA([data.teaserTargets[key]])[0] || undefined
      })
    );
    
    return {
      viewType: data?.viewtype,
      header: removeCMTextHyphen(data?.teaserTitle),
      icons: items,
      longText: data.teaserText,
      cta: data.teaserTargets[3] ? getAdapterCTA([data.teaserTargets[3]])[0] : undefined, // getAdapterCTA(data.teaserTargets)?.[0],
      backgroundColor: data?.settings?.backgroundcolor || '#ffffff'
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
