import { Adapter } from "@/adapters/Adapter";
import { Nullable } from "../../models/Nullable.interface";
import { getAdapterViewtype, getAdapterImage } from "@/logic/utilities";
import { IFooter, ILogo } from "./IFooter.interface";
import { TLink } from "../Navigation/INavigation.interface";
import { getAkamayUrl } from "@/lib/utilities";

type INavAdapter = Omit<IFooter, "lang">;

interface IMainLinksRaw {
  teaserTitle: string;
  type: string;
  teaserTarget: {
    navigationPath: {
      segment: string;
    }[];
  };
  url?: string;
  pictures?: any
}

export class FooterAdapter extends Adapter<IFooter, Nullable<INavAdapter>> {
  adapt: (source: any) => Nullable<INavAdapter> = (source) => {
    const data = source?.data?.content?.pageByPath?.grid?.placements;
    if (!data?.length) return source;

    // Main links
    const mainLinks = getAdapterViewtype(data, "Footercopyright").selected;

    const linkList = mainLinks.items.map((item: IMainLinksRaw): TLink => {
      const isExternal = item.type === "CMExternalLink";
      const externalLink = item?.url || "#";

      const link = item?.teaserTarget?.navigationPath
        .map((path) => path.segment)
        .join("/");

      return {
        label: item.teaserTitle,
        url: isExternal ? externalLink : link,
        type: isExternal ? "extLink" : "singleLink",
        logo: getAdapterImage(item?.pictures)
      };
    });

    // Logos
    const logos = getAdapterViewtype(data, "Footerlogos").selected;

    interface ILogoPicRaw {
      data: {
        uri: string;
      };
    }

    interface ILogoLinksRaw {
      target: {
        url: string;
      };
    }

    const logoRawArr: {
      pictures: ILogoPicRaw[];
      teaserTargets: ILogoLinksRaw[];
    } = logos?.items?.[0];

    const logoList = logoRawArr?.pictures?.map(
      (pic: ILogoPicRaw, index: number): ILogo => ({
        photo: getAkamayUrl(pic?.data?.uri),
        link: logoRawArr?.teaserTargets?.[index]?.target?.url || "#",
      })
    );

    interface ICopyRightRaw {
      items: {
        detailText: string;
        title: string;
      }[];
    }
    const copyright: ICopyRightRaw = getAdapterViewtype(data, "Footerdisclaimer").selected;

    return {
      linkList: linkList,
      logoList: logoList,
      copyRight: {
        copyRight: copyright?.items?.[0].title,
        disclaimer: copyright?.items?.[0].detailText,
      },
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
