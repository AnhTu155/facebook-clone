import React from "react";
import { Gift, Search, Plus } from "lucide-react";
import UserItem from "../ListFriend";
import GroupItem from "../GroupItem";

const getRandomAvatar = () => {
  const avatars = [
    "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg",
    "https://img.freepik.com/free-vector/avatar-businessman-profile-anonymous-person_24877-60111.jpg",
    "https://img.freepik.com/free-vector/businessman-avatar-profile-picture_24877-60109.jpg",
    "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60109.jpg",
    "https://img.freepik.com/free-vector/businessman-avatar_24877-60112.jpg",
    "https://img.freepik.com/free-vector/male-businessman-character-avatar-isolated_24877-60115.jpg",
    "https://img.freepik.com/free-vector/female-business-avatar-profile-picture_24877-60114.jpg",
  ];

  return avatars[Math.floor(Math.random() * avatars.length)];
};

const SidebarRight: React.FC = () => {
  const LIST = [
    { name: "Phạm Ngọc Thắm", avatar: getRandomAvatar() },
    { name: "Bùi Anh Tú", avatar: getRandomAvatar() },
    { name: "Nguyễn Văn A", avatar: getRandomAvatar() },
    { name: "Trần Thị B", avatar: getRandomAvatar() },
    { name: "Lê Quang C", avatar: getRandomAvatar() },
    { name: "Đỗ Minh D", avatar: getRandomAvatar() },
    { name: "Phan Thị E", avatar: getRandomAvatar() },
    { name: "Nguyễn Công Tân", avatar: getRandomAvatar() },
    { name: "Nguyễn Thị Ngọc", avatar: getRandomAvatar() },
    { name: "Lâm Quốc Tùng", avatar: getRandomAvatar() },
    { name: "Lê Kim Bằng", avatar: getRandomAvatar() },
    { name: "Quang Hà", avatar: getRandomAvatar() },
    { name: "Quang Lộc", avatar: getRandomAvatar() },
    { name: "Jack 97", avatar: getRandomAvatar() },
  ]; // Sample data can be added
  const GROUP = []; // Sample data can be added

  return (
    <div className="w-[302.5px]  cursor-pointer p-4  bg-transparent text-[#050505] overflow-y-auto max-h-screen w-1/4 h-full  fixed right-0 ">
      <div className="w-full flex flex-col h-full">
        <div className="border-b-2 border-gray-300">
          <h3 className="my-2 p-x-2 text-xl font-bold text-gray-600 text-start">
            Sinh nhật
          </h3>
          <div className="mb-4 flex items-start gap-2 px-2">
            <Gift
              style={{ width: "40px", height: "40px" }}
              className="h-14 w-14"
            />
            <p style={{ fontSize: "16px" }} className="text-base">
              Hôm nay là sinh nhật của{" "}
              <span style={{ fontWeight: "700" }} className="font-bold">
                Nguyễn thị thu hằng
              </span>{" "}
              và <span className="font-bold">Tài phan</span>
            </p>
          </div>
        </div>
        <div className="border-b-2 border-gray-300">
          <div className="flex items-center justify-between">
            <h3 className="friend-list__title">Người liên hệ</h3>
            <div
              className="flex items-center gap-2"
              style={{ display: "flex", alignItems: "center", gap: " 0 8px" }}
            >
              <Search className="cursor-pointer hover:bg-gray-300" />
              <div
                style={{
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                }}
                className="friend-list__search-icon cursor-pointer rounded-full px-3 py-2 hover:bg-gray-200"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  fill="currentColor"
                >
                  <circle cx="12" cy="12" r="2.5"></circle>
                  <circle cx="19.5" cy="12" r="2.5"></circle>
                  <circle cx="4.5" cy="12" r="2.5"></circle>
                </svg>
              </div>
            </div>
          </div>

          {LIST.map((item, index) => (
            <UserItem key={index} avatar={item.avatar} name={item.name} />
          ))}
        </div>
        <div className="border-b-2 border-gray-300">
          <h3 className="my-2 px-2">Đây là đoạn chát cộng đồng của bạn</h3>
          <div className="flex items-center gap-2 p-2 rounded-sm hover:bg-[#dbdde0]">
            <img
              className="h-8 w-8 rounded-full"
              style={{ width: "28px", height: "28px", borderRadius: "50%" }}
              src="https://img.freepik.com/premium-vector/avatar-cute-little-boy-isolated-white-background-cartoon-style-vector-illustration_174639-55048.jpg?w=740"
              alt=""
            />
            <div>
              <h3 className="font-sans font-medium font-medium">
                Đoạn chát chung
              </h3>
              <p className="text-sm">Kỷ nguyển hải tặc</p>
            </div>
          </div>
        </div>
        <div className="border-b-2 border-gray-300">
          <h3 className="my-2 px-2">Cuộc trò truyện nhóm</h3>
          {GROUP.map((item, index) => (
            <GroupItem key={index} avatar={item.avatar} name={item.name} />
          ))}
          <div className="flex items-center gap-2 p-2 rounded-sm">
            <Plus className="h-8 w-8 rounded-full bg-gray-300 p-2" />
            <p className="font-sans font-medium font-medium">Tạo nhóm mới</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarRight;
