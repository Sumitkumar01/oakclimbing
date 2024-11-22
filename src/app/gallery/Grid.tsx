"use client";
import { Container, Section, SliderSwip } from "@/components";
import FullScreenImageViewPopUP from "@/components/FullScreenImageViewPopUP";
import Image from "next/image";
import { useState } from "react";
import { Navigation } from "swiper/modules";

const Grid = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalSrc, setModalSrc] = useState<string>("");
  const gridPattern = [
    "col-span-1 row-span-2",
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-2",
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
    "col-span-1 row-span-1",
    // "col-span-1 row-span-1",
    // "col-span-1 row-span-1",
  ];

  const data = [
    "/images/outside7.webp",
    "/images/outside8.webp",
    "/images/outside9.webp",
    "/images/outside4.webp",
    "/images/outside11.webp",
    // "/images/outside12.webp",
    "/images/img1.webp",
    "/images/outside10.webp",
    "/images/outside13.webp",
    "/images/outside14.webp",
    "/images/outside15.webp",
    "/images/himalayan-Views.webp",
    "/images/outside16.webp",
    "/images/outside18.webp",
    "/images/outside19.webp",
    "/images/outside17.webp",
    "/images/outside20.webp",
    "/images/inside1.webp",
    "/images/inside2.webp",
    "/images/inside4.webp",
    "/images/inside3.webp",
    "/images/inside6.webp",
    "/images/inside7.webp",
    "/images/inside5.webp",
    "/images/inside8.webp",
  ];
  return (
    <Section>
      <Container>
        <div className="lg:grid hidden grid-cols-4 auto-rows-[17rem] grid-flow-row rounded-sm gap-2 overflow-hidden">
          {data.map((src, index) => (
            <div
              key={index}
              className={`${gridPattern[index % gridPattern.length]
                } overflow-hidden hover:border-4 border-white  hover:shadow-3xl shadow-2xl hover:-translate-y-1 hover:shadow-gray-600 duration-1000 transition ease-in-out relative aspect-auto`}
            >
              <Image
                src={src}
                alt="view"
                priority={true}
                fill
                className={`w-full h-full cursor-pointer object-cover hover:scale-110 duration-1000 transition ease-linear`}
                onClick={() => {
                  setShowModal(true);
                  setModalSrc(src);
                }}
              />
            </div>
          ))}
        </div>

        <div className="lg:hidden block">
          <SliderSwip
            data={data}
            classNameSwiper="gallerySwiper"
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
                  className={`w-full h-full cursor-pointer object-cover`}
                  onClick={() => {
                    setShowModal(true);
                    setModalSrc(item);
                  }}
                />
              </div>
            )}
          </SliderSwip>
        </div>
      </Container>
      {showModal && (
        <FullScreenImageViewPopUP
          setShowModal={setShowModal}
          src={modalSrc}
          showModal={showModal}
        />
      )}
    </Section>
  );
};

export default Grid;
