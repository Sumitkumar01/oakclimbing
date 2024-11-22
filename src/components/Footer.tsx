"use client";
import { CopyRight } from "@/utils/icon";
import Container from "./Container";
import Link from "next/link";
import { navLink } from "@/data/navLink";
import Image from "next/image";
import { policyLink, contactLink } from "@/data/footerLink";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="max-w-[1590px] mx-auto source-code-pro footer">
      <section className="bg-secondary lg:py-20 py-8 text-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-[2.2rem] gap-4 tracking-wide">
            {/* logo */}
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="relative h-20 aspect-[4/1] flex items-center justify-center"
              >
                <Image
                  src="/images/logo2.webp"
                  alt="logo"
                  fill
                  className="w-20 h-20"
                />
              </Link>
              <Link href={"/"} className="text-center text-[15px] font-medium hover:scale-105 hover:text-primary transition duration-300 ease-in-out">
                Untouched Paradise In The Lap Of Himalayas
              </Link>
            </div>
            {/* quick links */}
            <div className="flex flex-col gap-4 lg:ms-8">
              <h2 className="text-lg playfair-display ">Quick Links</h2>
              <ul className="flex flex-col gap-2">
                {navLink.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.path}
                      className="font-medium hover:scale-105 hover:text-primary transition duration-300 ease-in-out"
                    >
                      {item.name === "Accommodation" ? "Suits & Rooms" : item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Policies */}
            <div className="flex flex-col gap-4 lg:ms-2">
              <h2 className="text-lg playfair-display font-semibold">
                Policies
              </h2>
              <ul className="flex flex-col gap-2">
                {policyLink.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.path}
                      className="hover:scale-105 hover:text-primary transition duration-300 ease-in-out"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Contact */}
            <div className="flex flex-col gap-4">
              <h2 className="text-lg playfair-display font-semibold">
                Contact
              </h2>
              <ul className="flex flex-col gap-2">
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
          </div>
        </Container>
      </section>

      <section className="bg-primary py-3 text-white tracking-wide">
        <Container>
          <div className="flex flex-wrap lg:gap-5 gap-2 justify-center">
            <p className="text-center capitalize gap-1 flex items-center justify-center">
              <span>
                <span className="sr-only">copyright</span>
                <CopyRight />
              </span>{" "}
              {year} Oak Climbing Resort
            </p>
            <p className="text-center capitalize gap-1 flex items-center justify-center">
              <span>•</span> All rights reserved
            </p>
            <p className="text-center capitalize gap-1 flex items-center justify-center">
              <span>•</span> Designed & Developed by
              <Link
                href="https://www.eazotel.com/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold"
              >
                Eazotel
              </Link>
            </p>
          </div>
        </Container>
      </section>
    </footer>
  );
};

export default Footer;
