import { Advantage, MainProps, OtherProduct, Review } from "@/types";

import {
  mainProps as mainPropsCheetahBlack,
  advantagesData as advantagesCheetahBlack,
  otherProductsData as otherProductsCheetahBlack,
  reviewsData as reviewsCheetahBlack,
} from "./cheetah-black";
import {
  mainProps as mainPropsCarnivalMillenium,
  advantagesData as advantagesCarnivalMillenium,
  otherProductsData as otherProductsCarnivalMillenium,
  reviewsData as reviewsCarnivalMillenium,
} from "./carnival-millenium";

export type WatchesSlugs = "cheetah-black" | "carnival-millenium";

export type WatchData = {
  [slug in WatchesSlugs]: {
    main: MainProps;
    advantages: Advantage[];
    otherProducts: OtherProduct[];
    reviews: Review[];
  };
};

const data: WatchData = {
  "cheetah-black": {
    main: mainPropsCheetahBlack,
    advantages: advantagesCheetahBlack,
    otherProducts: otherProductsCheetahBlack,
    reviews: reviewsCheetahBlack,
  },
  "carnival-millenium": {
    main: mainPropsCarnivalMillenium,
    advantages: advantagesCarnivalMillenium,
    otherProducts: otherProductsCarnivalMillenium,
    reviews: reviewsCarnivalMillenium,
  },
};

export default data;
