// Modules
import { Nullable } from "@/models/Nullable.interface";
import { Factory } from "./Factory";
import { IAdapter } from "../adapters/Adapter";
import { GenericWidgetNameModel } from "@/models/IGenericWidgetValue.interface";

// Adapters
import { HeroBannerAdapter } from "@/adapters/widgets/HeroBanner.adapter";
import { IconCTAAdapter } from "../adapters/widgets/IconCTA.adapter";
import { TextCenterCtaInBetweenAdapter } from "@/adapters/widgets/TextCenterCtaInBetween.adapter";
import { LRdynamicTextAdapter } from "@/adapters/widgets/LRdynamicText.adapter";
import { FeaturedLogoAdapter } from "@/adapters/widgets/FeaturedLogo.adapter";
import { CarouselAdapter } from "@/adapters/widgets/Carousel.adapter";
import { TextCenterWithMediaAdapter } from "@/adapters/widgets/TextCenterWithMedia.adapter";
import { TextCenterCtaInBottomAdapter } from "@/adapters/widgets/TextCenterCtaInBottom.adapter";
import { Teaser5050withCTAAdapter } from "@/adapters/widgets/Teaser5050withCTA.adapter";
import { LongTextCenterCtaBottomAdapter } from "@/adapters/widgets/LongTextCenterCtaBottom.adapter";
import { Teaser3070withCTAAdapter } from "@/adapters/widgets/Teaser3070withCTA.adapter";
import { TextCenterWithColumnsAdapter } from "@/adapters/widgets/TextCenterWithColumns.adapter";
import { TextCenterWidePaddingAdapter } from "@/adapters/widgets/TextCenterWidePadding.adapter";
import { SoundCloudAdapter } from "@/adapters/widgets/SoundCloud.adapter";
import { VideoGalleryWithSliderAdapter } from "@/adapters/widgets/VideoGalleryWithSlider.adapter";
import { longTextJustifyWithCtaAdapter } from "@/adapters/widgets/longTextJustifyWithCta.adapter";
import { textFootnoteAdapter } from "@/adapters/widgets/textFootnote.adapter";
import { HeroBannerMultiCtaAdapter } from "@/adapters/widgets/HeroBannerMultiCta.adapter";
import { PhotoSliderAdapter } from "@/adapters/widgets/PhotoSlider.adapter";
import { SliderCollectionAdapter } from "@/adapters/widgets/SliderCollection.adapter";
import { MultipleGallerySliderAdapter } from "@/adapters/widgets/MultipleGallerySlider.adapter";
import { TextIcon2colAdapter } from "@/adapters/widgets/TextIcon2col.adapter";
import { TextCenterWithAvatarAdapter } from "@/adapters/widgets/TextCenterWithAvatar.adapter";
import { IconTeamAdapter } from "@/adapters/widgets/IconTeam.adapter";
import { BrandsTabAdapter } from "@/adapters/widgets/BrandsTab.adapter";
import { FaqAdapter } from "@/adapters/widgets/Faq.adapter";
import { TextPoliciesAdapter } from "@/adapters/widgets/TextPolicies.adapter";
import { TextLineQuoteAdapter } from "@/adapters/widgets/textLineQuote.adapter";
import { GridCardsAdapter } from "@/adapters/widgets/GridCards.adapter";

export class WidgetParamAdapterFactory extends Factory<
  GenericWidgetNameModel,
  Nullable<IAdapter>
> {
  instance: (comparator: GenericWidgetNameModel) => Nullable<IAdapter> = (
    comparator
  ) => {
    switch (comparator) {
      case "heroBanner":
        return new HeroBannerAdapter();
      case "heroBannerMultiCta":
        return new HeroBannerMultiCtaAdapter();
      case "IconCta":
        return new IconCTAAdapter();
      case "textCenterCtaInbetween":
        return new TextCenterCtaInBetweenAdapter();
      case "LRdynamicText":
        return new LRdynamicTextAdapter();
      case "FeaturedLogo":
        return new FeaturedLogoAdapter();
      case "CarouselWithTestimonial":
      case "TextCenterWithCarouselimage":
      case "VideoSliderWithCarousel":
        return new CarouselAdapter();
      case "TextCenterWithMedia":
        return new TextCenterWithMediaAdapter();
      case "textCenterCtaInbottom":
        return new TextCenterCtaInBottomAdapter();
      case "Teaser3070withCTA":
        return new Teaser3070withCTAAdapter();
      case "teaser5050withCTA":
        return new Teaser5050withCTAAdapter();
      case "LongTextCenterCtabottom":
        return new LongTextCenterCtaBottomAdapter();
      case "textFootnote":
        return new textFootnoteAdapter();
      case "TextCenterWithColumns":
        return new TextCenterWithColumnsAdapter();
      case "TextCenterWidePadding":
        return new TextCenterWidePaddingAdapter();
      case "soundCloud":
        return new SoundCloudAdapter();
      case "VideoGallerywithMobileslider":
        return new VideoGalleryWithSliderAdapter();
      case "longTextJustifyWithCta":
        return new longTextJustifyWithCtaAdapter();      
      case "PhotoSlider":
        return new PhotoSliderAdapter();
      case "5050sliderCollection":
        return new SliderCollectionAdapter();
      case "MultipleGallerySlider":
        return new MultipleGallerySliderAdapter();
      case "TextIcon2col":
        return new TextIcon2colAdapter();
      case "TextCenterWithAvatar":
        return new TextCenterWithAvatarAdapter();
      case "IconTeam":
        return new IconTeamAdapter();
      case "BrandsTab":
        return new BrandsTabAdapter();
      case "Faq":
        return new FaqAdapter();
      case "TextPolicies":
        return new TextPoliciesAdapter();
      case "TextLineQuote":
        return new TextLineQuoteAdapter();
      case "GridCards":
        return new GridCardsAdapter();
      default:
        return null;
    }
  };
}
