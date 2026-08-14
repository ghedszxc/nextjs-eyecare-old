import { Nullable } from "@/models/Nullable.interface";
import { Adapter } from "../Adapter";

interface ISample {
  test: "test"
}

export class SampleAdapter extends Adapter<ISample, Nullable<ISample>> {
  adapt: (source: any) => Nullable<ISample> = (source) => {
    if (!source.length) return null;
    return {
      test: "test",
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
