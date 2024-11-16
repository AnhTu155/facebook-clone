import ActiveIcon from "@/assets/components/Icons/Activeicon";
import BirthdayIcon from "@/assets/components/Icons/BirthdayIcon";
import GameIcon from "@/assets/components/Icons/GameIcon";
import MessageIcon from "@/assets/components/Icons/MessageIcon";
import MoreOneIcon from "@/assets/components/Icons/MoreoneIcon";
import OrderIcon from "@/assets/components/Icons/OrderIcon";
import ReelIcon from "@/assets/components/Icons/ReelIcon";
import MenuItem from "@/assets/components/MenuItem";
import React, { useState } from "react";

const Mores = () => {
  return (
    <div className="w-full h-auto top-2 right-2 cursor-pointer float-left pl-1 ">
      <div className=" flex-col items-center ">
        <MenuItem icon={<MoreOneIcon />} text={"Chiến dịch gây quỹ"} />
        <MenuItem icon={<GameIcon />} text={"Chơi game"} />
        <MenuItem icon={<OrderIcon />} text={"Đơn đặt hàng"} />
        <MenuItem icon={<ActiveIcon />} text={"Hoạt động gần đây"} />
        <MenuItem icon={<MessageIcon />} text={"messenger Kids"} />
        <MenuItem icon={<BirthdayIcon />} text={"Sinh nhật"} />
        <MenuItem icon={<ReelIcon />} text={"Reel"} />
        <MenuItem icon={<MessageIcon />} text={"Trình quản lý"} />
        <MenuItem icon={<MoreOneIcon />} text={"Trung tâm khoa học khí hậu"} />
        <MenuItem icon={<GameIcon />} text={"Video chơi game"} />
      </div>
    </div>
  );
};

export default Mores;
