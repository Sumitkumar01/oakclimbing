"use client";
import {
  Section,
  SectionHeading,
  Container,
  SliderSwip,
  Button,
} from "@/components";
import Image from "next/image";
import { Autoplay, EffectCoverflow } from "swiper/modules";

const ResortHighlights: React.FC = () => {
  const data = [
    {
      image: "/images/himalayan-Views.webp",
      title: "Himalayan Views",
    },
    {
      image: "/images/Swimming-Pool.webp",
      title: "Swimming Pool",
    },
    {
      image: "/images/Indoor-Play-Area.webp",
      title: "Indoor Play Area",
    },
    {
      image: "/images/Kids-Play-Area.webp",
      title: "Kids Play Area",
    },
    {
      image: "/images/Restaurant.webp",
      title: "Restaurant & Dining Area",
    },
    {
      image: "/images/himalayan-Views.webp",
      title: "Himalayan Views",
    },
    // {
    //   image: "/images/Swimming-Pool.webp",
    //   title: "Swimming Pool",
    // },
    {
      image: "/images/Indoor-Play-Area.webp",
      title: "Indoor Play Area",
    },
    {
      image: "/images/Kids-Play-Area.webp",
      title: "Kids Play Area",
    },
    {
      image: "/images/Restaurant.webp",
      title: "Restaurant & Dining Area",
    },
  ];
  return (
    <Section>
      <Container>
        <SectionHeading title="Resort Highlights" />
        <div className="mt-10">
          <SliderSwip
            data={data}
            classNameSwiper="resort-highlights"
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            slidergap={30}
            coverflowEffect={{
              rotate: 0,
              stretch: 30,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              waitForTransition: true,
            }}
            speed={1000}
            modules={[EffectCoverflow, Autoplay]}
            breakpoints={{
              720: {
                slidesPerView: 3,
                // spaceBetween: 10,
              },
            }}
          >
            {(item) => (
              <div className="w-full flex flex-col items-center justify-center gap-4 bg-white">
                <div className="relative aspect-[4/3] rounded-lg w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="w-full h-full object-resize"
                  />
                </div>
                <h3 className="text-xl text-center font-medium duration-300 transition ease-in-out">
                  {item.title}
                </h3>
              </div>
            )}
          </SliderSwip>

          <div className="mt-10 flex justify-center">
            <Button href="/gallery">view gallery</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ResortHighlights;
