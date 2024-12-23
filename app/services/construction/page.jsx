import React from "react";
import Divider from "@/components/Divider";
import ConstructionHero from "@/components/services/construction/CMShero";
import ConstrutionApp from "@/components/services/construction/ConstructionApp";
import { useTranslations } from "next-intl";
const ConstructionPage = () => {

  const t = useTranslations('ConstructionPage.Hero')
  return (
    <div>
      <ConstructionHero
        title={t('title')}
        subtitle={t('subtitle')}
      >
       {t('heading1')}   <br /> {t('heading2')}  
      </ConstructionHero>
      <Divider style="" />
      <ConstrutionApp />
    </div>
  );
};

export default ConstructionPage;
