import { FooterLinks } from "@/constants/data";
import React from "react";
import FooterComponent from "../ui/footerComponent";
import Work from "../ui/work";

const Footer = () => {
  return (
    <footer className="container ">
      <div className="border border-background-tertiary">
        <div className="flex flex-col gap-5 px-5 py-10">
          <p className="text-sm font-semibold text-[#797C86] uppercase">
            A more meaningful home for photography
          </p>
          <Work />
        </div>
        <div className="px-5 py-10 border-t border-background-tertiary">
          <div className="flex flex-wrap gap-[50px] ">
            {FooterLinks.map((link, index) => (
              <FooterComponent
                key={index}
                title={link.title}
                links={link.links}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
