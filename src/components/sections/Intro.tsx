import React from "react";
import Header from "../ui/header";
import Work from "../ui/work";
import { ArrowUpRight } from "lucide-react";


const Intro = () => {
  return (
    <section>
      <div className="container py-14">
        <Header title="Damien Braun" details="Stunning Photography by" />
        <Work/>
      </div>
    </section>
  );
};

export default Intro;
