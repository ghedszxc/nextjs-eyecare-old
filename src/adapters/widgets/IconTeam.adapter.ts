import { IIconTeam } from "@/widgets/IconTeam/IconTeam.interface";
import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";
import { getAdapterCroppings, getAdapterImage } from "@/logic/utilities";

export class IconTeamAdapter extends Adapter<
  IIconTeam,
  Nullable<IIconTeam>
> {
  adapt: (source: any) => Nullable<IIconTeam> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    const countryList = data?.items.map((itm: any, key: number) => {
      return {
        countryName: itm?.name,
        name: itm?.teaserTitle,
        description: itm?.teaserText?.text,
        fallbackImage: getAdapterImage(itm?.pictures)?.[0],
        picture: getAdapterCroppings(itm?.pictures)?.[0],
      }
    })

    


    return {
      title: data?.collectionTitle,
      subtitle: data?.collectionSubTitle,
      countryList: countryList
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
