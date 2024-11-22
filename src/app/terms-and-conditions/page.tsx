import { Container, Section } from "@/components";
import PageTopBanner from "@/components/PageTopBanner";
import { termsAndConditionsDate } from "@/data/policyPagesDates";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Terms & Conditions - Oak Climbing Resort | Plan Your Adventure in Uttarakhand",
  description:
    "Learn about the terms and conditions of Oak Climbing Resort in Uttarakhand. We value your privacy and protect your information to ensure a safe and secure experience for our guests",
  alternates: {
    canonical: "https://oakclimbingresort.com/terms-and-conditions/",
    languages: {
      "en-US": "https://oakclimbingresort.com/en-US/terms-and-conditions/",
    }
  },
  openGraph: {
    title:
      "Terms & Conditions - Oak Climbing Resort | Plan Your Adventure in Uttarakhand",
    description:
      "Learn about the terms and conditions of Oak Climbing Resort in Uttarakhand. We value your privacy and protect your information to ensure a safe and secure experience for our guests",
    url: "https://oakclimbingresort.com/terms-and-conditions/",
    siteName: "Oak Climbing Resort",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: "https://oakclimbingresort.com/terms-and-conditions/og-image.png",
        width: 800,
        height: 600,
        alt: "Oak Climbing Resort",
      },
      {
        url: "https://oakclimbingresort.com/terms-and-conditions/og-image.png",
        width: 900,
        height: 800,
        alt: "Oak Climbing Resort",
      },
      {
        url: "https://oakclimbingresort.com/terms-and-conditions/og-image.png",
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
      <PageTopBanner title={"Terms & Conditions"} />
      <Section>
        <Container>
          <div
            className="policy_pages_dates"
            dangerouslySetInnerHTML={{
              __html: termsAndConditionsDate,
            }}
          />
        </Container>
      </Section>
    </main>
  );
};

export default page;
