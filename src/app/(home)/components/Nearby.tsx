"use client";
import {
  Section,
  SectionHeading,
  Container,
  SliderSwip,
  Card,
} from "@/components";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";

const Nearby = () => {
  const data = [
    {
      image: "/images/Kainchi-Dham.webp",
      title: "Kainchi Dham",
      blog: false,
    },
    {
      image: "/images/Boating.webp",
      title: "Boating in Bhimtal & Naukuchital",
      blog: false,
    },
    {
      image: "/images/Paragliding.webp",
      title: "Paragliding",
      blog: false,
    },
    {
      image: "/images/Bhalu-Waterfall.webp",
      title: "Bhalu Gaad Waterfall",
      blog: false,
    },
    {
      image: "/images/IVRI-Forest.webp",
      title: "IVRI Forest",
      blog: false,
    },
    {
      image: "/images/Starscapes-Observatory.webp",
      title: "Starscapes Observatory",
      blog: false,
    },
  ];
  return (
    <Section>
      <Section className="bg-bgLight">
        <Container>
          <SectionHeading title="Nearby Tourist Spots" className="pb-10" />
        </Container>
        <Container>
          <SliderSwip
            data={data}
            classNameSwiper="mySwiper"
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              stopOnLastSlide: true,
            }}
            loop
            pagination={{
              clickable: true,
              type: "bullets",
              el: ".nearby-pagination",
            }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              720: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {(item) => <Card data={item} />}
          </SliderSwip>

          <div className="nearby-pagination w-full flex justify-center gap-1 cursor-pointer items-center lg:mt-10 mt-4 mb-4"></div>
        </Container>
      </Section>
      <div className="flex justify-center pt-10">
        <Link href="https://engine.eazotel.com?id=ccb9b5a8-c327-4c5e-a050-a05630a6954b&hid=76167589" target="_blank" className="w-fit source-code-pro rounded-lg capitalize px-5 py-2 bg-primary text-white flex items-center justify-center hover:scale-x-105 transition-all ease-in-out hover:bg-bgLight hover:text-primary hover:shadow-2xl font-medium border border-primary">
          Book now

        </Link>
      </div>
    </Section>
  );
};

export default Nearby;
