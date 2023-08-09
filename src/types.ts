export interface MainProps {
  mainImage: string;
  backgroundBlurImage: string;
  price: number;
  comparePrice: number;
  sale: number;
  productTitle: string;
  topSlogan: string;
  styles: {
    mainColor: string;
  };
}

export interface Advantage {
  image: string;
  title: string;
  description: string;
}

export interface OtherProduct {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Review {
  id: number;
  rating: number;
  reviewText: string;
}
