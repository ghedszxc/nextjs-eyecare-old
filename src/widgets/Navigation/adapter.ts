import { Adapter } from "@/adapters/Adapter";
import { Nullable } from "../../models/Nullable.interface";
import { INavigation, TLink } from "./INavigation.interface";
import { getAdapterCTA, getAdapterViewtype } from "@/logic/utilities";

type INavAdapter = Omit<INavigation, "lang">;

interface INavigationPath {
  segment: string;
}

interface ITeaserTarget {
  title?: string;
  navigationPath: INavigationPath[];
}

interface IItems {
  teaserTitle: string;
  teaserTarget: ITeaserTarget;
}

interface ICMTeaser {
  items: {
    type: string;
    teaserTitle: string;
    collectionTitle: string;
    teaserTarget: ITeaserTarget;
    items: IItems[];
    url?: string;
  }[];
}

interface IExternal {
  items: {
    teaserTitle: string;
    url: string;
  }[]
}

export class NavigationAdapter extends Adapter<
  INavigation,
  Nullable<INavAdapter>
> {
  adapt: (source: any) => Nullable<INavAdapter> = (source) => {
    const data = source?.data?.content?.pageByPath?.grid?.rows;
    if (!data.length) return source;

    const placements = data.map(
      (item: { placements: unknown[] }) => item.placements[0]
    );
    const topMainNav: ICMTeaser = getAdapterViewtype(
      placements,
      "topMainNav"
    ).selected;

    const loginLink: IExternal = getAdapterViewtype(
      placements,
      "Canonical link"
    ).selected;

    function getType(type: string) {
      switch (type) {
        case "CMTeaser":
          return "CTA";
        case "CMCollection":
          return "multipleLink";
        case "CMExternalLink":
          return "extLink";
        default:
          return "singleLink";
      }
    }

    const links = topMainNav.items.map(
      (data): TLink => ({
        type: getType(data.type),
        label: data?.teaserTitle || data?.collectionTitle,
        url: data?.teaserTarget?.navigationPath?.map((item) => item.segment).join("/") || data?.url || "",
        subLinks: data?.items?.map((item) => ({
          type: "singleLink",
          label: item?.teaserTitle,
          url: item?.teaserTarget?.navigationPath?.map((item) => item.segment).join("/"),
        })),
      })
    );

    return {
      mainLogo: "/images/logo-luxottica-2022-png-data.png",
      links: links,
      logoList: [
        "/images/brands-lens-crafters-png-data.png",
        "/images/brands-foreyes-png-data.png",
        "/images/brands-optical-png-data.png",
        "/images/brands-pearle-vision-png-data.png",
      ],
      loginLink: {
        label: loginLink?.items?.[0]?.teaserTitle,
        url: loginLink?.items?.[0]?.url,
        type: "singleLink",
      }
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
