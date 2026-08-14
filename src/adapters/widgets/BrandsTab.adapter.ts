import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";
import { getAdapterImage, getAdapterCTA } from "@/logic/utilities";
import {
    IBrandTabContent,
    IBrandsTab,
    IBrandTab,
} from "@/widgets/BrandsTab/BrandsTab.interface";

export class BrandsTabAdapter extends Adapter<
    IBrandsTab,
    Nullable<IBrandsTab>
> {
    adapt: (source: any) => Nullable<IBrandsTab> = (
        source
    ): Nullable<IBrandsTab> => {
        if (!source.length) return null;
        const data = source[0];

        const items: IBrandTab[] = data.items.map((item: any): IBrandTab => {
            const pictures = item.pictures;

            const brandContent = (index: number): IBrandTabContent => {
                return {
                    title: pictures[index]?.title || "",
                    subTitle: pictures[index]?.detailText?.text || "",
                    picture: getAdapterImage(pictures)?.[index] || "",
                    color: item.settings?.backgroundcolor || "",
                    cta: getAdapterCTA(item.teaserTargets)?.[0] || null,
                };
            };

            return {
                title: item.teaserTitle || "",
                subTitle: item.teaserText?.text || "",
                leftItem: brandContent(0),
                rightItem: brandContent(1),
            };
        });

        return {
            title: data?.collectionTitle || "",
            subTitle: data?.collectionSubTitle || "",
            items: items,
        };
    };

    adaptReverse: (source: Nullable<any>) => any = (source) => {
        return source;
    };
}
