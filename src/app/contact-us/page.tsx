import { Container, Form, LazyLoadedMap, Section } from "@/components";
import PageTopBanner from "@/components/PageTopBanner";
import { contactLink } from "@/data/footerLink";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Contact Us - Oak Climbing Resort | Plan Your Adventure in Uttarakhand",
  description:
    "Get in touch with Oak Climbing Resort in Uttarakhand. Whether you have questions about our accommodations, climbing facilities, or bookings, we’re here to help. Reach out to plan your next adventure in the Himalayas",
};
const page = () => {
  return (
    <main className="py-14">
      <PageTopBanner
        title={"Contact Us"}
        para={
          "If you have any inquiries about booking your stay at OAK CLIMBING RESORT, please don't hesitate to contact us. Our dedicated team is here to provide assistance and ensure that your experience with us exceeds expectations"
        }
      />
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl playfair-display font-semibold text-primary">
                Contact details
              </h2>
              <ul className="flex flex-col gap-2 lg:max-w-sm w-full">
                {contactLink.map((item, index) => (
                  <li key={index} className="flex gap-2">
                    <span
                      aria-label={
                        Array.isArray(item.name) ? item.name[0] : item.name
                      }
                      className="mt-[0.30rem] text-base"
                    >
                      {item.icon}
                    </span>
                    {Array.isArray(item.name) && Array.isArray(item.path) ? (
                      item.name.map((subName, subIndex) => (
                        <span key={subIndex}>
                          <Link
                            href={item.path[subIndex]}
                            // key={subIndex}
                            className="hover:text-primary transition duration-300 ease-in-out"
                          >
                            {subName}
                          </Link>
                          {subIndex !== item.name.length - 1 && ","}
                        </span>
                      ))
                    ) : (
                      <Link
                        href={item.path as string}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-primary transition duration-300 ease-in-out"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <Form />
            </div>
          </div>
        </Container>
      </Section>
      <Section>
        <div className="aspect-[4/1.5]">
          <LazyLoadedMap src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13909.639306415898!2d79.6468379!3d29.3582872!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0967448d26bc7%3A0xb6b5182e8f792bdc!2sOak%20Climbing%20Resort!5e0!3m2!1sen!2sin!4v1730871361513!5m2!1sen!2sin" />
        </div>
      </Section>
    </main>
  );
};

export default page;
