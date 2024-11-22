import { Card, Container } from "@/components";
import PageTopBanner from "@/components/PageTopBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Oak Climbing Resort | Tips, Guides & Stories from Uttarakhand",
  description:
    "Dive into the Oak Climbing Resort blog for tips, guides, and stories on adventure travel, climbing, and exploring Uttarakhand. Stay updated on the latest resort news, events, and local attractions to make the most of your stay in the Himalayas",
  openGraph: {
    title:
      "Blog - Oak Climbing Resort | Tips, Guides & Stories from Uttarakhand",
    description:
      "Dive into the Oak Climbing Resort blog for tips, guides, and stories on adventure travel, climbing, and exploring Uttarakhand. Stay updated on the latest resort news, events, and local attractions to make the most of your stay in the Himalayas",
  },
};

const page = () => {
  const BlogDatas = [
    {
      id: 1,
      blog: true,
      image: "/images/outside20.webp",
      title: "Best night photo at lakecious",
    },
    {
      id: 1,
      blog: true,
      image: "/images/outside21.webp",
      title:
        "Top 5 Reasons Why to Visit Oak Climbing Resort – Luxury Hotel/Resort near Bhimtal",
    },
    {
      id: 1,
      blog: true,
      image: "/images/outside15.webp",
      title: "Best night photo at lakecious",
    },
  ];
  return (
    <div className="py-14">
      <PageTopBanner
        title={"Blogs"}
        para={
          "Blogs Oak Climbing Resort is located in the Mukteshwar- the land of sublime natural beauty and serene spirituality, where you can connect with your inner self. Oak Resort is ideal for those looking for tranquility, peace, and beautiful settings of the hills"
        }
      />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {BlogDatas.map((blog, index) => (
            <Card data={blog} key={index} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default page;
