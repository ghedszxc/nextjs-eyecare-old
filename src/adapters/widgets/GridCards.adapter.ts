import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";
import { getAdapterCTA, getAdapterPicture } from "@/logic/utilities";
import { IGridCard, IGridCards } from "@/widgets/GridCards/GridCards.interface";

export class GridCardsAdapter extends Adapter<
  IGridCards,
  Nullable<IGridCards>
> {
  adapt: (source: any) => Nullable<IGridCards> = (source) : Nullable<IGridCards> => {
    if (!source || !source.length) return null;
    const data = source[0];
    const cards = (data.items || []).map((item: any): IGridCard => {
      const ctaLogo = (item.teaserTargets || []).map((logo: any) => {
        return {
          picture: getAdapterPicture(logo.target.pictures),
          cta: getAdapterCTA(item.teaserTargets)
        }
      });

      return {
        cardTitle: item?.teaserTitle || null,
        description: item.teaserText?.text || null,
        date: item?.settings.date || null,
        ctaLogo: ctaLogo.length ? ctaLogo : undefined,
      }
    });

    return {
      cards: cards.length ? cards : undefined,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}

