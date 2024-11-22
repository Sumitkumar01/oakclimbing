import { Container, Section } from "@/components";
import PageTopBanner from "@/components/PageTopBanner";
import { cancellationAndRefundPolicyDate } from "@/data/policyPagesDates";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Cancellation & Refund Policy - Oak Climbing Resort | Plan Your Adventure in Uttarakhand",
  description:
    "Learn about the cancellation and refund policies of Oak Climbing Resort in Uttarakhand. We value your privacy and protect your information to ensure a safe and secure experience for our guests",
  alternates: {
    canonical: "https://oakclimbingresort.com/cancellation-and-refund-policy/",
    languages: {
      "en-US": "https://oakclimbingresort.com/en-US/cancellation-and-refund-policy/",
    }
  },
  openGraph: {
    title:
      "Cancellation & Refund Policy - Oak Climbing Resort | Plan Your Adventure in Uttarakhand",
    description:
      "Learn about the cancellation and refund policies of Oak Climbing Resort in Uttarakhand. We value your privacy and protect your information to ensure a safe and secure experience for our guests",
    url: "https://oakclimbingresort.com/cancellation-and-refund-policy/",
    siteName: "Oak Climbing Resort",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: "https://oakclimbingresort.com/cancellation-and-refund-policy/og-image.png",
        width: 800,
        height: 600,
        alt: "Oak Climbing Resort",
      },
      {
        url: "https://oakclimbingresort.com/cancellation-and-refund-policy/og-image.png",
        width: 900,
        height: 800,
        alt: "Oak Climbing Resort",
      },
      {
        url: "https://oakclimbingresort.com/cancellation-and-refund-policy/og-image.png",
        width: 1000,
        height: 800,
        alt: "Oak Climbing Resort",
      },
    ],
  },
};
const page = () => {
  return (
    <main>
      <PageTopBanner title={"cancellation & refund policy"} />
      <Section>
        <Container>
          <div
            className="policy_pages_dates"
            dangerouslySetInnerHTML={{
              __html: cancellationAndRefundPolicyDate,
            }}
          />
        </Container>
      </Section>
    </main>
  );
};

export default page;
