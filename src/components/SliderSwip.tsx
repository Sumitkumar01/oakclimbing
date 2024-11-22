"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import React, { ReactNode } from "react";

interface Props<T> {
  children: (item: T) => ReactNode;
  classNameSwiper?: string;
  classNameSwiperSlide?: string;
  data: T[];
  [key: string]: unknown;
}

const SliderSwip = <T,>({
  children,
  classNameSwiper = "",
  classNameSwiperSlide = "",
  data,
  ...props
}: Props<T>) => {
  return (
    <Swiper {...props} className={`${classNameSwiper} mySwiper`}>
      {data.map((item, index) => (
        <SwiperSlide key={index} className={`${classNameSwiperSlide}`}>
          {children(item)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderSwip;
