"use client"
import { Container, Section, SliderSwip } from "@/components";
import PageTopBanner from "@/components/PageTopBanner";
import Image from "next/image";
import { Navigation } from "swiper/modules";

const Banner = () => {
  const data = [
    "/images/outside20.webp",
    "/images/outside4.webp",
    "/images/outside5.webp",
    "/images/outside6.webp",
  ]
  return (
    <section>
      <div className="lg:pb-[9rem] bg-bgLight max-w-[1590px] w-full mx-auto">
        <PageTopBanner
          title={"About Us"}
          para={
            "Perched at 7,500 feet in the picturesque hill town of Mukteshwar, Oak Climbing Resort is where adventure meets serenity. Surrounded by dense oak forests and offering panoramic views of the snow-capped Himalayan ranges, our resort provides the ideal setting for both thrill-seekers and nature lovers"
          }
        />
      </div>

      <Section className="lg:-mt-[12rem] -mt-12">
        <Container>
          <div className="hidden lg:flex flex-col gap-20 mt-10">
            <div className="grid grid-cols-4 gap-5 ">
              {data?.map((src, index) => (
                <div
                  className="flex items-center justify-center w-full h-full"
                  key={index}
                >
                  <div
                    className={`overflow-hidden rounded-lg hover:border-4  w-full border-white hover:shadow-3xl duration-1000 transition ease-in-out relative  ${index % 2 === 0 ? "aspect-[4/5.5]" : "aspect-[4/4]"}`}
                  >
                    <Image
                      src={src}
                      alt="view"
                      priority={true}
                      fill
                      className="w-full h-full object-cover hover:scale-110 duration-1000 transition ease-linear"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="block lg:hidden">
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
                  />
                </div>
              )}
            </SliderSwip>
          </div>

        </Container>
      </Section>
    </section>
  );
};

export default Banner;
