import {
  CarouselProvider,
  ImageWithZoom,
  Slide,
  Slider,
  Dot,
} from "pure-react-carousel";
import Image from "next/image";

import "pure-react-carousel/dist/react-carousel.es.css";
import UntilInteraction from "./UntilInteraction";

const CustomDotGroup = ({ images, ...imageProps }) => {
  return (
    <div className="grid grid-cols-2 gap-6 mt-6">
      {images.map((image, slide) => (
        <div
          className="col-span-1 relative h-96"
          key={slide}
          //   onClick={() => onThumbnailClick?.(slide)}
        >
          <Dot slide={slide}>
            <Image
              src={image.src}
              {...imageProps}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt=""
            ></Image>
          </Dot>
        </div>
      ))}
    </div>
  );
};

const ImageCarousel = ({
  images,
  //   onThumbnailClick,
  showZoom,
  currentSlide,
  ...imageProps
}) => (
  <CarouselProvider
    currentSlide={currentSlide}
    naturalSlideWidth={1}
    naturalSlideHeight={1}
    hasMasterSpinner={false}
    totalSlides={images.length}
  >
    <div className="relative h-96">
      <UntilInteraction
        skeleton={
          <Image
            src={images[0].src}
            {...imageProps}
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        }
      >
        <Slider>
          {images.map((image, index) => (
            <Slide index={index} key={index}>
              {showZoom ? (
                <div className="h-96">
                  <ImageWithZoom
                    src={image.src}
                    imageClassName="h-96 bg-center"
                    overlayClassName="h-96 bg-center"
                  />
                </div>
              ) : (
                <Image
                  src={image.src}
                  {...imageProps}
                  alt=""
                  height="400"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              )}
            </Slide>
          ))}
        </Slider>
      </UntilInteraction>
    </div>
    {showZoom && (
      <CustomDotGroup
        {...imageProps}
        //   onThumbnailClick={onThumbnailClick}
        images={images}
      />
    )}
  </CarouselProvider>
);

export default ImageCarousel;
