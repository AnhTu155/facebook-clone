import FriendItem from "@/components/ui/FriendItem/index ";
import ImagePhoto from "@/components/ui/ImagePhoto/ImagePhotoComponent";

const FriendRight: React.FC = () => {
  return (
    <div className="w-full flex flex-col px-5 bg-gray-100">
      <div className="flex justify-between items-center px-4 pt-8 ">
        <h2 className="text-lg font-bold text-[20px]">Lời mời kết bạn</h2>

        <a
          href="/friends/requests/"
          className="text-blue-600 hover:text-blue-800 font-medium rounded-md px-3 py-1"
          role="link"
        >
          Xem tất cả
        </a>
      </div>

      {/* <div className="flex gap-4 p-4 flex-nowrap flex-row"> */}
      <div className="grid grid-cols-4 gap-4 p-4 ">
        <FriendItem img={<ImagePhoto />} text={"Longgg"} />
        <FriendItem img={<ImagePhoto />} text={"Thu Phương"} />
        <FriendItem img={<ImagePhoto />} text={"Phương Anh"} />
        <FriendItem img={<ImagePhoto />} text={"Phương Ly"} />
      </div>

      <div className="grid grid-cols-4 gap-4 p-4 ">
        <FriendItem img={<ImagePhoto />} text={"Longgg"} />
        <FriendItem img={<ImagePhoto />} text={"Thu Phương"} />
        <FriendItem img={<ImagePhoto />} text={"Phương Anh"} />
        <FriendItem img={<ImagePhoto />} text={"Phương Ly"} />
      </div>
    </div>
  );
};

export default FriendRight;
