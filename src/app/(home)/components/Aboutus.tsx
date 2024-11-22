import { Button, Container, Section } from "@/components";
import Image from "next/image";

const Aboutus = () => {
  const gridPattern = [
    "col-span-2 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
  ];

  const data = {
    title: "Discover luxury and welcoming hospitality at",
    span: "Oak Climbing Resort",
    description:
      "Discover the pristine beauty of the Himalayas at Oak Climbing Resort, your ideal retreat nestled in the hills. Experience breathtaking viewpoints that showcase the majestic mountain range, making it the perfect getaway for nature lovers and adventure seekers alike. Escape to this untouched paradise, where tranquility and stunning landscapes await you!",
    label: "About Us",
    href: "/about-us",
    image: [
      "/images/swimming.webp",
      "/images/outside.webp",
      "/images/room.webp",
    ],
  };
  return (
    <Section>
      <Section className="bg-bgLight" lgPy="py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="grid grid-cols-2 auto-rows-[12.5rem] grid-flow-row rounded-lg overflow-hidden">
              {data.image.map((src, index) => (
                <div
                  key={index}
                  className={`${gridPattern[index % gridPattern.length]
                    } overflow-hidden  hover:shadow-3xl duration-1000 transition ease-in-out relative aspect-auto lg:aspect-[4/2.8]`}
                >
                  <Image
                    src={src}
                    alt="view"
                    priority={true}
                    fill
                    className={`w-full h-full object-cover lg:object-resize hover:scale-110 duration-1000 transition ease-linear`}
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-8 w-full justify-center">
              <h2 className="text-3xl font-semibold playfair-display text-dark">
                {data.title} <span className="text-primary">{data.span}</span>
              </h2>
              {/* <h2 className="hidden lg:block text-4xl tracking-wide font-semibold playfair-display text-dark">
                Discover luxury and <br /> welcoming hospitality at <br /><span className="text-primary">{data.span}</span>
              </h2> */}

              <p className="text-normal text-[16px]">{data.description}</p>
              <Button href={data.href}>{data.label}</Button>
            </div>
          </div>
        </Container>
      </Section>
    </Section>
  );
};

export default Aboutus;
