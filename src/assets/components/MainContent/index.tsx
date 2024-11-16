import React from "react";
import MainContentLeft from "./Left";
import MainContentCenter from "./Center";
import MainContentRight from "./Right";

const MainContent: React.FC = () => {
  return (
    <div className="flex w-full h-full justify-center  bg-gray-100 flex mt-[56px]">
      <MainContentLeft />

      <MainContentCenter />

      <MainContentRight />
    </div>
  );
};

export default MainContent;
