import ImageGallery from "@/components/image-gallery";

const images = ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"];

interface HeroImageProps {
  height: number;
}

function HeroImage({ height }: HeroImageProps) {
  return <ImageGallery images={images} height={height} />;
}

export default HeroImage;
