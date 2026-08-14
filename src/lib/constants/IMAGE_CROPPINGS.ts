interface IIMageCroppings {
  components: ICroppingPerComponent;
  widgets: ICroppingPerComponent;
}

interface ICroppingPerComponent {
  [name: string]: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    initial: string;
  };
}

const IMAGE_CROPPINGS: IIMageCroppings = {
  components: {

  },
  widgets: {
    HeroBanner: {
      initial: "heroBanner375",
      xs: "heroBanner375",
      sm: "heroBanner1140",
      md: "heroBanner1920",
      lg: "heroBanner1920",
      xl: "heroBanner1920",
    },
    HeroBannerMultiCta: {
      initial: "heroBanner375",
      xs: "heroBanner375",
      sm: "heroBanner1140",
      md: "heroBanner1140",
      lg: "heroBanner1140",
      xl: "heroBanner1140",
    },
  },
};

export default IMAGE_CROPPINGS;
