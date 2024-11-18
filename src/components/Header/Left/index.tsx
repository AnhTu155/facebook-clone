import React from "react";
import LogoIcon from "@/components/Icons/LogoIcon";
import { SearchIcon } from "lucide-react";
import LogoImage from "@/components/ui/Image/LogoImage";

const HeaderLeft: React.FC = () => {
  return (
    <div className="w-[302.5px] flex items-center space-x-2">
      <LogoImage />
      <div className="flex w-[240px] items-center border rounded-full py-2 pl-2 bg-gray-100">
        <LogoIcon />
        <input
          placeholder="Tìm kiếm trên Facebook"
          type="text"
          className="bg-transparent outline-none w-full text-sm text-gray-900 placeholder-gray-500"
        />
      </div>
    </div>
  );
};

export default HeaderLeft;
