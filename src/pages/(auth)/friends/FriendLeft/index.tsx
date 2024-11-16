import AllPersonIcon from "@/components/Icons/AllPersonIcon";
import BirthdayIcon from "@/components/Icons/BirthdayIcon";
import FriendIcon from "@/components/Icons/FriendIcon";
import PersonAddIcon from "@/components/Icons/PersonAddIcon";
import PersonInviteIcon from "@/components/Icons/PersonInviteIcon";
import SettingIcon from "@/components/Icons/SettingIcon";
import MenuItem from "@/components/ui/MenuItem";

const FriendLeft: React.FC = () => {
  return (
    <>
      <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-200 cursor-pointer mt-2">
        <div className="flex-1">
          <h1 className="text-[24px] font-bold">Bạn bè</h1>
        </div>

        <div className="w-[36px] h-[36px] bg-gray-300 rounded-full hover:bg-gray-100 inline-flex items-center justify-center">
          <SettingIcon />
        </div>
      </div>

      <div className=" justify-between items-center px-2 py-1 ">
        <MenuItem icon={<FriendIcon />} text={"Trang chủ"} />
        <MenuItem
          ishowArrow
          icon={<PersonInviteIcon />}
          text={"lời mời kết bạn"}
        />
        <MenuItem ishowArrow icon={<PersonAddIcon />} text={"Gợi ý"} />
        <MenuItem ishowArrow icon={<AllPersonIcon />} text={"Tất cả bạn bè"} />
        <MenuItem icon={<BirthdayIcon />} text={"Sinh nhật"} />
        <MenuItem
          ishowArrow
          icon={<AllPersonIcon />}
          text={"Danh sách tùy chỉnh"}
        />
      </div>
    </>
  );
};

export default FriendLeft;
