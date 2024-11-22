"use client";
import { Button, SliderSwip } from "@/components";
import { roomCardType } from "@/types/type";
import Image from "next/image";
import React from "react";
import { Navigation } from "swiper/modules";

const RoomsCard: React.FC<roomCardType> = ({ roomData }) => {
  return (
    <div className={`rounded-[8px] overflow-hidden lg:grid flex ${roomData.id % 2 === 0 ? "flex-col-reverse" : "flex-col"} grid-cols-2`}>
      <div
        className={` w-full ${roomData.id % 2 === 0 ? "order-2" : "order-1"}`}
      >
        {roomData.image && (
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={roomData.image}
              alt="Nearby"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        )}
        {roomData.src && (
          <SliderSwip
            data={roomData.src as string[]}
            classNameSwiper="gallerySwiper relative aspect-[4/3] w-full"
            slidesPerView={1}
            spaceBetween={10}
            modules={[Navigation]}
            navigation={true}
          >
            {(item) => (
              <div className="w-full relative aspect-[4/3]">
                <Image
                  src={item}
                  alt="view"
                  priority={true}
                  fill
                  className={`w-full h-full object-resize`}
                />
              </div>
            )}
          </SliderSwip>
        )}
      </div>
      <div
        className={`flex flex-col flex-grow gap-5 lg:px-10 px-5 justify-center bg-[#FCF9F2] ${roomData.id % 2 === 0 ? "order-1" : "order-2"}`}
      >
        <h3 className="text-[28px] playfair-display font-medium">
          {roomData.name}
        </h3>
        <p className="text-[16px] text-normal">{roomData.description}</p>
        <div className="py-3">
          <Button href={roomData.linkUrl}>{roomData.linkName}</Button>
        </div>
      </div>
    </div>
  );
};

export default RoomsCard;
