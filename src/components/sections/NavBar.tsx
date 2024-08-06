'use client'
import React from "react";
import Button from "../ui/button";
import { cn } from '@/lib/utils';
import Image from "next/image";
import images from "@/constants";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { navLinks } from "@/constants/data";

const NavBar = () => {
    const pathname = usePathname();
	const router = useRouter();
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
          {navLinks.map(({ path, title}) => {
							const isActive =
								pathname === path || pathname.startsWith(`${path}/`);

							return (
                                <Link
                                className={cn(
										'px-[30px] text-sm py-[24px] hover:bg-background-secondary/30',
										{
											'bg-background-secondary transition-all hover:bg-background-secondary/70 ': isActive,
										}
									)}
                                key={path}
                                href={path}
                                >
                                {title}
                                </Link>
							);
						})}
          </ul>
          <Button> Contact Me </Button>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;

