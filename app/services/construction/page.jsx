import React from "react";
import Divider from "@/components/Divider";
import ConstructionHero from "@/components/services/construction/CMShero";
import ConstrutionApp from "@/components/services/construction/ConstructionApp";

const ConstructionPage = () => {
  return (
    <div>
      <ConstructionHero
        title="Construction"
        subtitle="We specialize in innovative concrete construction, offering traditional and modern solutions. We prioritize quality and efficiency to ensure timely project completion."
      >
        Modern Concrete <br /> Solutions, Built to Last.
      </ConstructionHero>
      <Divider style="" />
      <ConstrutionApp />
    </div>
  );
};

export default ConstructionPage;
