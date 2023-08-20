import React, { PropsWithChildren } from "react";
import Slider from "react-slick";
import NextArrow from "../icons/NextArrow";
import PrevArrow from "../icons/PrevArrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface Props {
  title: string;
}
const CarouselWrapper: React.FC<PropsWithChildren<Props>> = ({
  children,
  title,
}) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1.1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // tablet breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const sliderRef = React.useRef<any>();
  const goToNext = () => {
    //@ts-ignore
    sliderRef?.current?.slickNext?.();
  };

  const goToPrev = React.useCallback(() => {
    //@ts-ignore
    sliderRef?.current?.slickPrev?.();
  }, [sliderRef]);

  return (
    <div className="w-full overflow-hidden pt-4">
      <div className=" h-full w-full flex items-center pr-10">
        <h1 className="font-bold text-purple-500 text-[24px]">{title}</h1>
        <div className="grow" />
        <div className="relative w-10 flex">
          <div className="cursor-pointer text-white mr-2" onClick={goToPrev}>
            <PrevArrow />
          </div>
          <div className="cursor-pointer text-white" onClick={goToNext}>
            <NextArrow />
          </div>
        </div>
      </div>
      <Slider {...settings} ref={sliderRef}>
        {children}
      </Slider>
    </div>
  );
};
export default CarouselWrapper;
