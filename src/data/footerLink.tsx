import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

interface contactLink {
  icon: React.ReactNode;
  name: string | string[];
  path: string | string[];
}

export const contactLink: contactLink[] = [
  {
    icon: <FaLocationDot />,
    name: "Oak climbing resort Guniyalekh, Mukteshwar,Uttrakhand",
    path: "https://maps.app.goo.gl/gJLfMAvjZVY7qeMc9",
  },
  {
    icon: <IoCall />,
    name: ["+91 99998 52278", "+91 85339 44444"],
    path: ["tel:+91 99998 52278", "tel:+91 85339 44444"],
  },
  {
    icon: <MdEmail />,
    name: "oakclimbingresort@gmail.com",
    path: "mailto:oakclimbingresort@gmail.com",
  },
];

export const policyLink = [
  {
    name: "Privacy Policy",
    path: "/privacy-policy/",
  },
  {
    name: "Terms & Conditions",
    path: "/terms-and-conditions/",
  },
  {
    name: "Cancellation & Refund Policy",
    path: "/cancellation-and-refund-policy/",
  },
];
