import { Nullable } from "@/models/Nullable.interface";
import { Adapter } from "../Adapter";
import { ITextCenterWithAvatar } from "@/widgets/TextCenterWithAvatar/TextCenterWithAvatar.interface";
import { getAdapterImage, getAdapterCTA } from "@/logic/utilities";

export class TextCenterWithAvatarAdapter extends Adapter<ITextCenterWithAvatar, Nullable<ITextCenterWithAvatar>> {
  adapt: (source: any) => Nullable<ITextCenterWithAvatar> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    const icons = data?.items.map((itm: any, key: number) => {
      return {
        title: itm?.teaserTitle,
        subtitle: itm?.teaserText?.text,
        cta: getAdapterCTA(itm?.teaserTargets)[0] || null,
        icon: getAdapterImage(data?.pictures)?.[key],
        readMoreText: itm?.teaserTargets?.[0]?.target?.detailText?.text,
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
