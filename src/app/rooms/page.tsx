import { Container } from "@/components";
import RoomsCard from "./components/RoomsCard";
// import RoomImage from "../../../public/images/room.webp";
import PageTopBanner from "@/components/PageTopBanner";
import Amenities from "./components/Amenities";
import { Metadata } from "next";




export const metadata: Metadata = {
  title: "Rooms & Suites - Oak Climbing Resort | Stay in Comfort in Uttarakhand",
  description: "Find your ideal stay at Oak Climbing Resort in Uttarakhand. Our comfortable, well-appointed rooms offer the perfect retreat after a day of adventure. Explore our accommodations for couples, families, and solo travelers, all set against the serene backdrop of the Himalayas",
  alternates: {
    canonical: "https://oakclimbingresort.com/rooms/",
    languages: {
      "en-US": "https://oakclimbingresort.com/en-US/rooms/",
    }
  },
  openGraph: {
    title: "Rooms & Suites - Oak Climbing Resort | Stay in Comfort in Uttarakhand",
    description: "Find your ideal stay at Oak Climbing Resort in Uttarakhand. Our comfortable, well-appointed rooms offer the perfect retreat after a day of adventure. Explore our accommodations for couples, families, and solo travelers, all set against the serene backdrop of the Himalayas",
    url: "https://oakclimbingresort.com/rooms/",
    siteName: "Oak Climbing Resort",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: "https://oakclimbingresort.com/rooms/og-image.png",
        width: 800,
        height: 600,
        alt: "Oak Climbing Resort",
      },
      {
        url: "https://oakclimbingresort.com/rooms/og-image.png",
        width: 900,
        height: 800,
        alt: "Oak Climbing Resort",
      },
      {
        url: "https://oakclimbingresort.com/rooms/og-image.png",
        width: 1000,
        height: 800,
        alt: "Oak Climbing Resort",
      },
    ],
  }
};


const page = () => {
  const roomDatas = [
    {
      id: 1,
      // image: RoomImage,
      src: ["/images/crystal_stone1.webp", "/images/crystal_stone2.webp", "/images/crystal_stone3.webp", "/images/crystal_stone4.webp", "/images/crystal_stone5.webp", "/images/crystal_stone6.webp", "/images/crystal_stone7.webp"],
      name: "Crystal Stone Cottage",
      description:
        "Our 3 BHK Luxury Cottages provide an exquisite retreat that combines spacious elegance with stunning natural surroundings. Our cottage features beautifully appointed bedroom with plush bedding to ensure a restful night’s sleep. The open-plan living area includes a cozy lounge with comfortable seating and a dining space perfect for gathering with family and friends. With modern amenities and stylish decor, our cottages offer a serene and inviting atmosphere, making them an ideal choice for a memorable getaway. Enjoy the perfect blend of comfort and luxury in your own private haven.",
      linkName: "Book Now",
      linkUrl: "https://engine.eazotel.com?id=ccb9b5a8-c327-4c5e-a050-a05630a6954b&hid=76167589",
    },
    {
      id: 2,
      src: ["/images/Stone_bite2.webp", "/images/Stone_bite1.webp", "/images/Stone_bite3.webp", "/images/Stone_bite4.webp", "/images/Stone_bite5.webp", "/images/Stone_bite6.webp", "/images/Stone_bite7.webp"],
      name: "Stone Bite Cottage",
      description:
        "Our 2 BHK Luxury Cottages offer a delightful escape, combining stylish comfort with a touch of nature. Designed to accommodate up to four guests, each cottage features elegantly furnished bedrooms, ensuring a restful stay for everyone. The inviting living area boasts comfortable seating and a dining space, perfect for enjoying meals together. With modern amenities and tasteful decor, our cottages create a warm and welcoming ambiance, ideal for a relaxing getaway. Experience the perfect balance of luxury and tranquility in your own charming retreat.",
      linkName: "Book Now",
      linkUrl: "https://engine.eazotel.com?id=ccb9b5a8-c327-4c5e-a050-a05630a6954b&hid=76167589",
    },
    {
      id: 3,
      // image: RoomImage,
      src: ["/images/wood_slice1.webp", "/images/wood_slice2.webp", "/images/wood_slice3.webp"],
      name: "Wood Slice Cottages",
      description:
        "The Wood Slice Cottages at Oak Climbing Resort, Mukteshwar, offer a cozy blend of rustic charm and modern comfort, with wooden interiors and breathtaking views of the Himalayas. Each cottage features comfortable bedding, attached bathrooms, and private balconies for a peaceful retreat. Perfect for nature lovers and adventure seekers, guests can relax amidst the serene surroundings or explore the resort's outdoor activities.",
      linkName: "Book Now",
      linkUrl: "https://engine.eazotel.com?id=ccb9b5a8-c327-4c5e-a050-a05630a6954b&hid=76167589",
    },
    {
      id: 4,
      src: ["/images/img1.webp", "/images/img2.webp", "/images/img3.webp", "/images/img4.webp", "/images/img5.webp", "/images/img6.webp"],
      name: "Mud House",
      description:
        "Welcome to our Mud House, a unique retreat that beautifully merges traditional charm with modern comforts. This inviting space is designed with comfortable bedding to ensure a restful night’s sleep. The open-plan living area creates a warm and welcoming atmosphere, perfect for unwinding after a day of adventure. With its earthy decor and natural materials, the Mud House offers a serene escape that allows you to connect with nature. Enjoy all the modern amenities in a setting that celebrates simplicity and sustainability, making it the perfect choice for a memorable getaway.",
      linkName: "Book Now",
      linkUrl: "https://engine.eazotel.com?id=ccb9b5a8-c327-4c5e-a050-a05630a6954b&hid=76167589",
    },
  ];
  return (
    <div className="py-14">
      <PageTopBanner
        title={"Accommodation"}
        para={"Experience unparalleled comfort and luxury at Anandha Inn"}
      />

      <Container>
        <div className="space-y-10 mt-10">
          {roomDatas.map((roomData, index) => (
            <RoomsCard roomData={roomData} key={index} />
          ))}
        </div>
      </Container>
      <Amenities />
    </div>
  );
};

export default page;
