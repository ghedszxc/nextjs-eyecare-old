import dynamic from "next/dynamic";
import { ComponentType } from "react";
import { IWidgetModel } from "@/models/IWidget.interface";
import { WidgetParamAdapterFactory } from "@/coremedia-integration/factory/WidgetParamAdapterFactory";
import { IUrl } from "@/models/IUrl.interface";
import { TPadding } from "@/models/IPadding";

interface Widgets {
  [key: string]: ComponentType<any> | null;
}

/**
 * Add import here for new modules
 * set SSR true if needed.
 */
const Widgets: Widgets = {
  "heroBanner":  dynamic(() => import("@/widgets/HeroBanner")),
  "IconCta":  dynamic(() => import("@/widgets/IconCTA")),
  "textCenterCtaInbetween":  dynamic(() => import("@/widgets/TextCenterCtaInBetween")),
  "LRdynamicText":  dynamic(() => import("@/widgets/LRdynamicText")),
  "FeaturedLogo":  dynamic(() => import("@/widgets/FeaturedLogo")),
  "TextCenterWithCarouselimage":  dynamic(() => import("@/widgets/Carousel")),
  "TextCenterWithMedia":  dynamic(() => import("@/widgets/TextCenterWithMedia")),
  "textCenterCtaInbottom":  dynamic(() => import("@/widgets/TextCenterCtaInBottom")),
  "Teaser3070withCTA": dynamic(() => import("@/widgets/Teaser3070withCTA")),
  "teaser5050withCTA": dynamic(() => import("@/widgets/Teaser5050withCTA")),
  "LongTextCenterCtabottom": dynamic(() => import("@/widgets/LongTextCenterCtaBottom")),
  "VideoSliderWithCarousel": dynamic(() => import("@/widgets/VideoSliderWithCarousel"), { ssr: false }),
  "TextCenterWithColumns": dynamic(() => import("@/widgets/TextCenterWithColumns")),
  "TextCenterWidePadding": dynamic(() => import("@/widgets/TextCenterWidePadding")),
  "soundCloud": dynamic(() => import("@/widgets/SoundCloud")),
  "VideoGallerywithMobileslider": dynamic(() => import("@/widgets/VideoGalleryWithSlider")),
  "longTextJustifyWithCta": dynamic(() => import("@/widgets/longTextJustifyWithCta")),
  "textFootnote": dynamic(() => import("@/widgets/textFootnote")),
  "heroBannerMultiCta": dynamic(() => import("@/widgets/HeroBannerMultiCta")),
  "PhotoSlider": dynamic(() => import("@/widgets/PhotoSlider")),
  "5050sliderCollection": dynamic(() => import("@/widgets/SliderCollection")),
  "MultipleGallerySlider": dynamic(() => import("@/widgets/MultipleGallerySlider")),
  "TextIcon2col": dynamic(() => import("@/widgets/TextIcon2col")),
  "TextCenterWithAvatar": dynamic(() => import("@/widgets/TextCenterWithAvatar")),
  "IconTeam": dynamic(() => import("@/widgets/IconTeam")),
  "BrandsTab": dynamic(() => import("@/widgets/BrandsTab")),
  "Faq": dynamic(() => import("@/widgets/FAQ")),
  "TextPolicies": dynamic(() => import("@/widgets/TextPolicies")),
  "TextLineQuote": dynamic(() => import("@/widgets/TextLineQuote")),
  "GridCards": dynamic(() => import("@/widgets/GridCards")),
};

interface IDynamicWidgetProps {
  url: IUrl;
  adaptedValues: unknown;
  padding: TPadding;
  pageType: string;
}

const WidgetGenerator = ({
  widgetName,
  widgetValue,
  widgetContainerId,
  url,
  settings,
  pageType,
}: IWidgetModel) => {
  const adapter = new WidgetParamAdapterFactory().instance(widgetName);
  const adaptedValues = adapter ? adapter.adapt(widgetValue) : widgetValue;

  const DynamicWidget: ComponentType<IDynamicWidgetProps> | null = Widgets[widgetName];

  /**
   * Widget settings configurations
   * 1. Padding
   */
  const padding: TPadding | undefined = widgetContainerId === undefined ? "both" : settings?.PlacementPadding?.[widgetContainerId];

  if (DynamicWidget) {
    DynamicWidget.displayName = widgetName;
    return (
      <DynamicWidget
        url={url}
        {...adaptedValues}
        padding={padding || "both"}
        pageType={pageType}
      />
    );
  } else {
    return null;
  }
};

export default WidgetGenerator;
