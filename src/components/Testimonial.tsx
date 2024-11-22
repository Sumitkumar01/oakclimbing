"use client";
import { BtnNext, BtnPrev } from "@/utils/icon";
import Container from "./Container";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import SliderSwip from "./SliderSwip";
import { Autoplay, Navigation } from "swiper/modules";

const Testimonial: React.FC = () => {
  return (
    <Section>
      <Container>
        <div className="w-full flex flex-col gap-4 pb-10">
          <SectionHeading title="Customer Reviews" />
          <div className="w-full flex items-center justify-center gap-4 mt-8">
            <button className="hover:scale-110 active:scale-100 transition duration-300 ease-in-out rounded-lg btn-prev">
              <BtnPrev />
              <span className="sr-only">Previous</span>
            </button>
            <SliderSwip
              data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: ".btn-prev",
                nextEl: ".btn-next",
              }}
            >
              {() => (
                <div className="w-full flex flex-col items-center justify-center gap-4">
                  <p className="text-base font-normal text-center text-normal ">
                    &quot;I had an unforgettable stay at the resort! The 2 BHK
                    Luxury Cottage was beautifully appointed and offered a
                    perfect blend of comfort and stunning views—truly a home
                    away from home!&quot;
                  </p>
                  <h3 className="text-lg font-medium text-center text-dark">
                    Pravin Mehra
                  </h3>
                </div>
              )}
            </SliderSwip>

            <button className="hover:scale-110 active:scale-100 transition duration-300 ease-in-out rounded-lg btn-next">
              <BtnNext />
              <span className="sr-only">Next</span>
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Testimonial;
