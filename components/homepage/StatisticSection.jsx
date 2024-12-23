import React from "react";
import { useTranslations } from "next-intl";
import {
  FaMoneyBill,
  FaTruck,
  FaPersonBooth,
  FaBuilding,
  FaCity,
} from "react-icons/fa";
import MovingCompanyState from "./CompanyStat";
import DividerTitle from "./DividerTitle";
import HomeSubtitle from "./HomeSubtitle";

const StatisticSection = () => {
  const t = useTranslations('HomePage.StatisticSection');

  return (
    <div className="bg-bejj">
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col">
        <DividerTitle
          title={t('sectionTitle')}
          dividerWidth={"90px"}
          textColor="text-lightBejj"
          dividerColor="bg-white opacity-85"
        />
        <HomeSubtitle
          title={t('sectionSubtitle')}
          style=" text-lightBejj"
        />

        <div className="pt-10 flex flex-col w-3/4 mx-auto">
          <div className="grid lg:mb-12 lg:grid-cols-3 grid-cols-1 items-center justify-items-center">
            <MovingCompanyState
              state={t('statistics.0.state')}
              icon={<FaMoneyBill />}
              companyCount={t('statistics.0.numbers')}
            />
            <MovingCompanyState
              state={t('statistics.1.state')}
              icon={<FaTruck />}
              companyCount={t('statistics.1.numbers')}
            />
            <MovingCompanyState
              state={t('statistics.2.state')}
              icon={<FaPersonBooth />}
              companyCount={t('statistics.2.numbers')}
            />
          </div>

          <div className="grid items-center justify-items-center align-middle lg:grid-cols-2">
            <MovingCompanyState
              state={t('statistics.3.state')}
              icon={<FaCity />}
              companyCount={t('statistics.3.numbers')}
            />
            <MovingCompanyState
              state={t('statistics.4.state')}
              icon={<FaTruck />}
              companyCount={t('statistics.4.numbers')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticSection;