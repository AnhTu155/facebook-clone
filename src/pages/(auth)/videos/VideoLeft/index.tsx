import AllPersonIcon from "@/components/Icons/AllPersonIcon";
import DiscoveryIcon from "@/components/Icons/DiscoveryIcon";
import ReelIcon from "@/components/Icons/ReelIcon";
import SettingIcon from "@/components/Icons/SettingIcon";
import MenuItem from "@/assets/components/ui/MenuItem";

import { VideoIcon } from "lucide-react";
import LogoIcon from "@/components/Icons/LogoIcon";

const VideoLeft: React.FC = () => {
  const videoLeft = [
    { icon: <VideoIcon />, text: "Trang chủ" },
    { icon: <ReelIcon />, text: "Trực tiếp" },
    { icon: <ReelIcon />, text: "Reel" },
    { icon: <VideoIcon />, text: "Chương trình" },
    { icon: <DiscoveryIcon />, text: "Khám phá" },
    { icon: <AllPersonIcon />, text: "Video đã lưu" },
  ];

  return (
    <div className="flex flex-col bg-white ">
      <div className="flex justify-between items-center p-2 hover:bg-gray-200 cursor-pointer  ">
        <div className="flex-1">
          <h1 className="text-2xl font-bold ml-2">Video</h1>
        </div>

        <div className="w-[36px] h-[36px] mr-2 bg-gray-300 rounded-full hover:bg-gray-100 rounded-full hover:bg-gray-100 rounded-full inline-flex items-center justify-center">
          <SettingIcon />
        </div>
      </div>

      <div className="flex justify-between items-center border rounded-full py-2 px-4 bg-gray-100 mx-2 mb-1 hover:bg-gray-200 cursor-pointer">
        <LogoIcon />
        <input
          placeholder="Tìm kiếm Video"
          type="text"
          className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder-gray-500"
        />
      </div>

      <div className=" justify-between items-center p-2 ">
        {/* <MenuItem icon={<VideoIcon />} text={"Trang chủ"} />
        <MenuItem icon={<ReelIcon />} text={"Trực tiếp"} />
        <MenuItem icon={<ReelIcon />} text={"Reel"} />
        <MenuItem icon={<VideoIcon />} text={"Chương trình"} />
        <MenuItem icon={<DiscoveryIcon />} text={"Khám phá"} />
        <MenuItem icon={<AllPersonIcon />} text={"Video đã lưu"} /> */}

        {videoLeft.map((item, index) => (
          <MenuItem key={index} icon={item.icon} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default VideoLeft;
