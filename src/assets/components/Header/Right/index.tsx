import ArrowBotIcon from "@/components/Icons/ArrowBotIcon";
import MessengerIcon from "@/components/Icons/MessengerIcon";
import NotificationIcon from "@/components/Icons/NotificationIcon";
import { MenuIcon } from "lucide-react";
import React from "react";

const HeaderRight: React.FC = () => {
  return (
    <div className="w-[302.5px] flex flex-row items-center  justify-end">
      <button className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 m-[3.5px] py-[6px] px-[8px]">
        <MenuIcon />
      </button>

      <button className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 m-[3.5px] py-[6px] px-[8px]">
        <MessengerIcon />
      </button>

      <button className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 m-[3.5px] py-[6px] px-[8px]">
        <NotificationIcon />
      </button>

      <button className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 m-[3.5px] py-[6px] px-[8px]">
        <ArrowBotIcon />
        <span className="MuiTouchRipple-root"></span>
      </button>
    </div>
  );
};

export default HeaderRight;
