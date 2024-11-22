import {
  SectionHeading,
  Section,
  Container,
  Banner,
  Testimonial,
} from "@/components";
import { Aboutus, Accommodation, Nearby, ResortHighlights } from "./components";

const page = () => {
  return (
    <main>
      <Banner />
      <Section>
        <Container>
          <SectionHeading
            className="lg:max-w-3xl lg:mx-auto text-center"
            h1
            span="Welcome to"
            title="Oak Climbing Resort"
            description="Explore the Untouched Paradise In The Lap Of Himalayas At Oak Climbing Resort."
          />
        </Container>
      </Section>
      <Aboutus />
      <Accommodation />
      <ResortHighlights />
      <Nearby />
      <Testimonial />
    </main>
  );
};

export default page;
