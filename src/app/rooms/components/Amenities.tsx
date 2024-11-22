"use client"

import {
  Section,
  Container,
  SectionHeading,
  AmenitiesCard,
  SliderSwip,
} from "@/components";
import { amenitiesProps } from "@/types/type";
import {
  AcceptsCards,
  AirConditioning,
  DailyHousekeeping,
  FreeParking,
  FreeWifi,
  RoomService,
} from "@/utils/icon";
import { Navigation } from "swiper/modules";

const Amenities = () => {
  const amenitiesCardsData: amenitiesProps[] = [
    {
      icon: <FreeWifi />,
      title: "Free Wifi",
    },
    {
      icon: <RoomService />,
      title: "Room Service",
    },
    {
      icon: <DailyHousekeeping />,
      title: "Daily Housekeeping",
    },
    {
      icon: <FreeParking />,
      title: "Free Parking",
    },
    {
      icon: <AirConditioning />,
      title: "Air Conditioning",
    },
    {
      icon: <AcceptsCards />,
      title: "Accepts Cards",
    },
  ];
  return (
    <Section>
      <Container>
        <SectionHeading
          color="text-[#777]"
          title="Amenities"
          description="Discover the height of luxury living at Oak Climbing Resort, where our lavish amenities are ready for your delight.  "
        />

        <div className="hidden lg:flex w-full flex-wrap gap-x-24 gap-y-7 mt-10 items-center justify-center">
          {amenitiesCardsData.map((card, index) => (
            <AmenitiesCard key={index} icon={card.icon} title={card.title} />
          ))}
        </div>


        <div className="block lg:hidden mt-5">
          <SliderSwip
            data={amenitiesCardsData}
            classNameSwiper="chooseUs"
            slidesPerView={1}
            spaceBetween={10}
            modules={[Navigation]}
            navigation={true}
          >
            {(item) => <AmenitiesCard icon={item.icon} title={item.title} />}
          </SliderSwip>
        </div>
      </Container>
    </Section>
  );
};

export default Amenities;
