export interface ICrops {
  [index: string]: number | string;
}

export interface IPictureCrops {
  crops: ICrops;
  uriTemplate: string;
}

export interface IAdapterPictureRaw {
  title?: string;
  data?: {
    uri?: string;
  };
  uriTemplate?: string;
  crops?: ICrops;
}

export interface IAdapterPicture {
  title?: string;
  dataUri?: string;
  uriTemplate?: string;
  crops?: ICrops;
}