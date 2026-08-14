import { ISoundCloud } from "@/widgets/SoundCloud/SoundCloud.interface";
import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";
import { getAdapterCroppings, getAdapterImage, getAdapterCTA } from "@/logic/utilities";

export class SoundCloudAdapter extends Adapter<
  ISoundCloud,
  Nullable<ISoundCloud>
> {
  adapt: (source: any) => Nullable<ISoundCloud> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    return {
      title: data?.teaserTitle,
      subtitle: data?.teaserText.text,
      fallbackImage: getAdapterImage(data?.pictures)?.[0],
      picture: getAdapterCroppings(data?.pictures)?.[0],
      soundLink: data?.teaserTargets[0]?.target?.url || null,
      logo: getAdapterImage(data?.pictures)?.[2],
      logoCrop: getAdapterCroppings(data?.pictures)?.[2],
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
