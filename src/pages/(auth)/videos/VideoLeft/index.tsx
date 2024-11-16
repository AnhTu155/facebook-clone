import AllPersonIcon from "@/components/Icons/AllPersonIcon";
import DiscoveryIcon from "@/components/Icons/DiscoveryIcon";
import ReelIcon from "@/components/Icons/ReelIcon";
import SettingIcon from "@/components/Icons/SettingIcon";
import MenuItem from "@/components/ui/MenuItem";

import { VideoIcon } from "lucide-react";

const VideoLeft: React.FC = () => {
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

      <div className="flex justify-between items-center border rounded-full py-2 px-4 bg-gray-100 mx-4 mb-1 hover:bg-gray-200 cursor-pointer">
        <svg
          className="w-5 h-5 text-gray-500 mr-1"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="SearchIcon"
        >
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"></path>
        </svg>
        <input
          placeholder="Tìm kiếm Video"
          type="text"
          className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder-gray-500"
        />
      </div>

      <div className=" justify-between items-center p-2 ">
        <MenuItem icon={<VideoIcon />} text={"Trang chủ"} />
        <MenuItem icon={<ReelIcon />} text={"Trực tiếp"} />
        <MenuItem icon={<ReelIcon />} text={"Reel"} />
        <MenuItem icon={<VideoIcon />} text={"Chương trình"} />
        <MenuItem icon={<DiscoveryIcon />} text={"Khám phá"} />
        <MenuItem icon={<AllPersonIcon />} text={"Video đã lưu"} />
      </div>
    </div>
  );
};

export default VideoLeft;
