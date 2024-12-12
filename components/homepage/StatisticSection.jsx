import React from "react";
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
  return (
    <div className="bg-bejj">
      <div className=" container mx-auto px-4  py-20 md:py-32 flex flex-col ">
        <DividerTitle
          title="Statistics"
          dividerWidth={"90px"}
          textColor="text-lightBejj"
          dividerColor="bg-white opacity-85"
        />
        <HomeSubtitle
          title="Experience You Can Trust"
          style=" text-lightBejj"
        />

        <div className="pt-10 flex flex-col  w-3/4 mx-auto">
          <div className="grid  lg:mb-12 lg:grid-cols-3 grid-cols-1  items-center justify-items-center">
            <MovingCompanyState
              state="Point of Sales"
              icon={<FaMoneyBill />}
              companyCount={5}
            />
            <MovingCompanyState
              state="Vehicles"
              icon={<FaTruck />}
              companyCount={50}
            />
            <MovingCompanyState
              state="Employee"
              icon={<FaPersonBooth />}
              companyCount={90}
            />
          </div>

          <div className="grid   items-center justify-items-center align-middle  lg:grid-cols-2">
            <MovingCompanyState
              state="Local Brands"
              icon={<FaCity />}
              companyCount={7}
            />
            <MovingCompanyState
              state="Project"
              icon={<FaTruck />}
              companyCount={8}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticSection;
