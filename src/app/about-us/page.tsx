import { Container, Section, SectionHeading } from "@/components";
import { Banner, WhyChooseUs } from "./components";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";



export const metadata: Metadata = {
  title: "About Us - Oak Climbing Resort | Adventure Awaits in Uttarakhand",
  description: "Discover Oak Climbing Resort in Uttarakhand, where passion for adventure meets the beauty of the Himalayas. Learn about our commitment to providing an unforgettable experience with premier rock climbing, scenic landscapes, and warm hospitality. Perfect for adventure lovers and nature enthusiasts alike",
  alternates: {
    canonical: "https://oakclimbingresort.com/about-us/",
    languages: {
      "en-US": "https://oakclimbingresort.com/en-US/about-us/",
    }
  },
  openGraph: {
    title: "About Us - Oak Climbing Resort | Adventure Awaits in Uttarakhand",
    description: "Discover Oak Climbing Resort in Uttarakhand, where passion for adventure meets the beauty of the Himalayas. Learn about our commitment to providing an unforgettable experience with premier rock climbing, scenic landscapes, and warm hospitality. Perfect for adventure lovers and nature enthusiasts alike",
    url: "https://oakclimbingresort.com/about-us/",
    siteName: "Oak Climbing Resort",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: "https://oakclimbingresort.com/about-us/og-image.png",
        width: 800,
        height: 600,
        alt: "Oak Climbing Resort",
      },
      {
        url: "https://oakclimbingresort.com/about-us/og-image.png",
        width: 900,
        height: 800,
        alt: "Oak Climbing Resort",
      },
      {
        url: "https://oakclimbingresort.com/about-us/og-image.png",
        width: 1000,
        height: 800,
        alt: "Oak Climbing Resort",
      },
    ],
  }
};

const page = () => {
  const data = {
    title: "Experience hospitality at its finest",
    description: [
      "At Oak Climbing Resort, we specialize in creating an immersive, nature-centric experience for our guests. Whether you're an avid rock climber, an enthusiastic trekker, or simply seeking a peaceful mountain escape, we have something to offer.",
      "For those looking to reconnect with nature, Oak Climbing Resort offers more than just activities. We provide curated experiences such as guided nature walks, birdwatching tours, and stargazing under the clear Himalayan skies.",
      "Our accommodations are designed to offer a perfect blend of comfort and rustic charm. Guests can unwind in cozy rooms or eco-friendly cottages, all thoughtfully designed to reflect the beauty of the surrounding landscape. The resort’s restaurant serves fresh, locally sourced meals that capture the authentic flavors of the region, providing a true farm-to-table experience.",
      "With personalized service, warm hospitality, and a commitment to sustainability, Oak Climbing Resort is dedicated to creating memorable experiences for every guest. Whether you’re visiting for an adventure-filled holiday, a quiet getaway, or a team-building retreat, our resort is your gateway to the unparalleled beauty of the Kumaon hills.",
    ],

  };
  return (
    <main className="my-14">
      <Banner />
      <Section>
        <Container>
          <SectionHeading title={data.title} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8">
            {data.description.map((para, index) => (
              <p className="text-sm lg:text-[16px]  font-normal text-normal" key={index}>
                {para}
              </p>
            ))}
          </div>
        </Container>
      </Section>
      <WhyChooseUs />
      <Section>
        <div className="w-full relative aspect-[4/2.5] md:aspect-[4/1.5]">
          <Image
            src="/images/discover.webp"
            alt="alt"
            fill
            className="object-cover"
          />
        </div>
      </Section>
      <section className="flex justify-center ">
        <Link href="https://engine.eazotel.com?id=ccb9b5a8-c327-4c5e-a050-a05630a6954b&hid=76167589" target="_blank" className="py-2 w-fit source-code-pro rounded-lg capitalize px-5 bg-primary text-white flex items-center justify-center hover:scale-x-105 transition-all ease-in-out hover:bg-bgLight hover:text-primary hover:shadow-2xl font-medium border border-primary">
          Book now
        </Link>
      </section>
    </main>
  );
};

export default page;
