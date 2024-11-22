"use client";
import Link from "next/link";
import Container from "./Container";
import { contactLink, navLink } from "@/data/navLink";
import Image from "next/image";
import Button from "./Button";
import { usePathname } from "next/navigation";
import { IoIosMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { useEffect, useState } from "react";

const NavBar: React.FC = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);
  return (
    <header>
      <nav className="flex flex-col max-w-[1590px] mx-auto ">
        {/* upper nav */}
        <div className="bg-secondary">
          <Container>
            <div className="w-full flex justify-end py-3">
              <ul className="flex gap-8">
                {contactLink.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.path}
                      target={item.label === "Address" ? "_blank" : "_self"}
                      rel="noreferrer"
                      className="hover:scale-105 hover:text-primary transition duration-300 ease-in-out text-base flex items-center justify-center gap-1 text-white"
                    >
                      <span aria-label={item.name}>{item.icon}</span>
                      <span className="lg:block hidden"> {item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </div>

        {/* lower nav */}
        <div className="flex py-4 w-full justify-between items-center max-w-[1415px] max-md:px-[1.2rem] xxl:ms-9 ms-0">
          <div className="flex items-center">
            <Link
              href="/"
              className="cursor-pointer relative h-14 aspect-[4/1] flex items-center justify-center"
            >
              <Image
                src="/images/logo.webp"
                alt="logo"
                fill
                quality={100}
                priority
                className="cursor-pointer object-contain"
              />
            </Link>
          </div>
          <ul className="lg:flex gap-8 hidden">
            {navLink.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className={`relative px-5 py-3 montserrat group flex items-center justify-center uppercase transition duration-300 ease-in-out text-base font-medium ${pathName === item.path ? "text-primary" : "text-dark"
                    } hover:text-primary hover:scale-105`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-2  left-0 h-[2px] bg-primary transition-all duration-300 ease-in-out ${pathName === item.path ? "w-full" : "w-0"
                      } group-hover:w-full`}
                  />
                </Link>
              </li>
            ))}
          </ul>
          <div className="lg:block hidden">
            <Link href="https://engine.eazotel.com?id=ccb9b5a8-c327-4c5e-a050-a05630a6954b&hid=76167589" target="_blank" className="py-3 w-fit source-code-pro rounded-lg capitalize px-5 bg-primary text-white flex items-center justify-center hover:scale-x-105 transition-all ease-in-out hover:bg-bgLight hover:text-primary hover:shadow-2xl font-medium border border-primary">
              Book now
            </Link>
          </div>
          <div className="block lg:hidden">
            <button
              className={`flex items-center text-4xl cursor-pointer justify-center text-primary duration-300 ease-in-out transition ${open ? "rotate-90" : ""}`}
            >
              {!open ? (
                <IoIosMenu
                  className={open ? "opacity-0" : "opacity-100"}
                  onClick={() => setOpen(true)}
                />
              ) : (
                <IoIosClose
                  className={open ? "opacity-100" : "opacity-0"}
                  onClick={() => setOpen(false)}
                />
              )}
            </button>
          </div>
        </div>
      </nav>
      {open && <MobileNav open={open} setOpen={setOpen} />}
    </header>
  );
};

export default NavBar;

interface mobileNavProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MobileNav: React.FC<mobileNavProps> = ({ open, setOpen }) => {
  const pathName = usePathname();
  return (
    <div
      className={`absolute top-32  transition-all duration-300 ease-in-out w-full z-30 h-full bg-bgLight ${open ? "left-0" : "left-[-100%]"}`}
    >
      <ul className="flex flex-col gap-2 items-start py-8">
        {navLink.map((item, index) => (
          <li key={index} className="px-1 w-full">
            <Link
              href={item.path}
              className={`px-5 py-3 montserrat group w-full block uppercase transition duration-300 ease-in-out text-base font-medium ${pathName === item.path
                ? "text-primary border-l-4 border-primary bg-white"
                : "text-dark"
                }`}
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          </li>
        ))}
        <li className="px-6">
          <Button href="/contact" className="py-3">
            Book now
          </Button>
        </li>
      </ul>
    </div>
  );
};
