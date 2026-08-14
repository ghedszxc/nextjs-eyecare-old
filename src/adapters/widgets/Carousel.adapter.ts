import { ICarousel } from "@/widgets/Carousel/Carousel.interface";
import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";
import { getAdapterCTA } from "@/logic/utilities";

export class CarouselAdapter extends Adapter<
  ICarousel,
  Nullable<ICarousel>
> {
  adapt: (source: any) => Nullable<ICarousel> = (source) => {
    if (!source.length) return null;
    const textCenterTestimonial = source[0];
    const articleCta  = source[1];
    const modal = source[1];   

    return {
      viewtype: textCenterTestimonial?.viewtype,
      title: textCenterTestimonial?.collectionTitle,
      subTitle: textCenterTestimonial?.collectionSubTitle,
      slides: textCenterTestimonial?.items,
      modal: modal,
      options: {
        ...(textCenterTestimonial?.options || {}),
        loop: true
      },
      layoutType: textCenterTestimonial?.viewtype,
      // TO DO: check if adjustments on BE can be made -- James
      articleCta: {
        label: articleCta?.teaserTargets?.[0]?.callToActionText,
        url: articleCta?.teaserTargets?.[0]?.target?.data?.uri,
        isExternal: articleCta?.teaserTargets?.[0]?.target?.type === "CMExternalLink",
        isFileDownload: articleCta?.teaserTargets?.[0]?.target?.type === "CMDownload"
      }
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}

