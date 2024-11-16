import react, { useState } from "react";
import Mores from "./More";

import AvatarIcon from "@/components/Icons/AvatarIcon";
import FriendIcon from "@/components/Icons/FriendIcon";
import MessageIcon from "@/components/Icons/MessageIcon";
import MarketplaceIcon from "@/components/Icons/Marketplace";
import EventIcon from "@/components/Icons/EventIcon";
import { HistoryIcon } from "lucide-react";
import ArrowBotIcon from "@/components/Icons/ArrowBotIcon";
import OrderIcon from "@/components/Icons/OrderIcon";
import MenuItem from "@/components/ui/MenuItem";

function SidebarLeft() {
  const [showMores, setShowMores] = useState(false);
  const handleToggleSidebar = () => {
    setShowMores(!showMores);
  };

  return (
    <div className="w-[302.5px] h-full cursor-pointer py-2   bg-transparent text-[#050505] overflow-y-auto max-h-screen   fixed left-0 ">
      <div className="w-full flex-col items-center pl-2 mt-2">
        <MenuItem icon={<AvatarIcon />} text={"Trang chủ"} />
        <MenuItem icon={<FriendIcon />} text={"Bạn bè"} />
        <MenuItem icon={<HistoryIcon />} text={"Kỷ niệm"} />
        <MenuItem icon={<OrderIcon />} text={"Đã lưu"} />

        <MenuItem icon={<FriendIcon />} text={"Nhóm"} />
        <MenuItem icon={<MessageIcon />} text={"Messenger"} />
        <MenuItem icon={<MarketplaceIcon />} text={"Marketplace"} />
        <MenuItem icon={<EventIcon />} text={"Event"} />
      </div>

      <div className="w-full top-2 right-2 cursor-pointer float-left p-1 pb-4">
        <button
          onClick={handleToggleSidebar}
          className="flex items-center gap-1 text-gray-800 hover:text-gray-600 pl-3"
        >
          <ArrowBotIcon />
          More
        </button>
        {showMores && <Mores />}
        {/* <Mores /> */}
      </div>

      <div className="flex items-start p-[10px] ml-2 border-t border-[#c2bfbf]">
        Lối tắt của bạn
      </div>

      <div className="flex flex-row items-center hover:bg-gray-300  ml-2 rounded-lg space-x-2 px-2 rounded-lg ">
        <img
          src="https://maxst.icons8.com/vue-static/icon/landing/animated-formats/lottie.svg"
          alt="lottie icon"
          className="w-[28px] h-[28px] text-gray-700 fill-current"
          loading="lazy"
        />
        <h4 className=" font-medium text-black text-[15px] font-sans my-3 mx-2">
          Reactjs Việt Nam
        </h4>
      </div>

      <div className="flex flex-row items-center hover:bg-gray-300  ml-2 pb-[60px] rounded-lg space-x-2 px-2 rounded-lg ">
        <img
          src="https://maxst.icons8.com/vue-static/icon/svg/recolor-wheel.svg"
          alt="Color wheel"
          className="w-[28px] h-[28px] text-gray-700 fill-current"
          loading="lazy"
        />
        <h4 className=" font-medium text-black text-[15px] font-sans my-3 mx-2">
          8 Ball Pool
        </h4>
      </div>
    </div>
  );
}

export default SidebarLeft;
