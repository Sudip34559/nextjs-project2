import { ImageSlider } from "./ui/card-Slider";

const images = [
  {
    url: "/img/8a39396c-6b61-4a80-94f2-8b1fe92bf25d.jpg",
  },
  {
    url: "/img/8a39396c-6b61-4a80-94f2-8b1fe92bf25d.jpg",
  },
  {
    url: "/img/8a39396c-6b61-4a80-94f2-8b1fe92bf25d.jpg",
  },
  {
    url: "/img/8a39396c-6b61-4a80-94f2-8b1fe92bf25d.jpg",
  },
  {
    url: "/img/8a39396c-6b61-4a80-94f2-8b1fe92bf25d.jpg",
  },
  {
    url: "/img/8a39396c-6b61-4a80-94f2-8b1fe92bf25d.jpg",
  },
];

export const CardSlider = () => {
  return (
    <div>
      <h1>Image Slider</h1>
      <ImageSlider images={images} />
    </div>
  );
};
