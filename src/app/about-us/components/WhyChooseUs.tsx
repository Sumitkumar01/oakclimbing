"use client";
import {
  Card,
  Container,
  Section,
  SectionHeading,
  SliderSwip,
} from "@/components";
import { HimalayanViewPoint, HomeHills, PerfectGetaway } from "@/utils/icon";
import Link from "next/link";
import { Navigation } from "swiper/modules";

const WhyChooseUs = () => {
  const data = [
    {
      title: "Perfect Getaway",
      icon: <PerfectGetaway />,
      blog: false,
    },
    {
      title: "Your Home in the Hills",
      icon: <HomeHills />,
      blog: false,
    },
    {
      title: "Himalayan View Point",
      icon: <HimalayanViewPoint />,
      blog: false,
    },
  ];
  return (
    <Section>
      <Container>
        <div className="bg-bgLight rounded-lg shadow-md">
          <div className="lg:p-[5rem] py-[3rem]">
            <SectionHeading title="Why Choose Us" />

            <div className="lg:grid hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full mt-10">
              {data.map((item, index) => (
                <Card key={index} data={item} />
              ))}
            </div>

            <div className="block lg:hidden">
              <SliderSwip
                data={data}
                classNameSwiper="chooseUs"
                slidesPerView={1}
                spaceBetween={10}
                modules={[Navigation]}
                navigation={true}
              >
                {(item) => <Card data={item} />}
              </SliderSwip>
            </div>
            <div className="flex items-center justify-center mt-10">
              <Link href="https://engine.eazotel.com?id=ccb9b5a8-c327-4c5e-a050-a05630a6954b&hid=76167589" target="_blank" className="py-2 w-fit source-code-pro rounded-lg capitalize px-5 bg-primary text-white flex items-center justify-center hover:scale-x-105 transition-all ease-in-out hover:bg-bgLight hover:text-primary hover:shadow-2xl font-medium border border-primary">
                Book now
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default WhyChooseUs;
