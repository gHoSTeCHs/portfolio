'use client'
import React from "react";
import Button from "../ui/button";
import Image from "next/image";
import images from "@/constants";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { navLinks } from "@/constants/data";

const NavBar = () => {
  const router = useRouter();
  const pathName = usePathname()
  return (
    <div className="border-b border-background-tertiary">
      <div className="container">
        <nav className="flex items-center justify-between pt-3">
          <div>
            {" "}
            <Image
              src={images.logo}
              alt={"logo"}
              className="w-[auto] h-[18px] md:w-auto md:h-[22px]"
            />{" "}
          </div>
          <ul className="flex items-center border border-background-tertiary border-b-0 rounded-tr-[10px] rounded-tl-[10px] overflow-hidden">
            {navLinks.map((link) => (
              <Link
                className="bg-background-secondary px-[30px] py-[24px]"
                key={link.path}
                href={link.path}
              >
                {link.title}
              </Link>
            ))}
          </ul>
          <Button> Contact Me </Button>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
