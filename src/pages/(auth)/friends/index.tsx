import Header from "@/assets/components/Header";
import FriendLeft from "./FriendLeft";
import FriendRight from "./FriendRight";

export default function Friends() {
  return (
    <>
      <header className="border border-gray-50 shadow-1g shadow-md cursor-pointer ">
        <Header />
      </header>
      <div className="flex h-full ">
        <div className="w-[360px] h-full bg-white ">
          <FriendLeft />
        </div>
        <div className="flex-1 h-full">
          <FriendRight />
        </div>
      </div>
    </>
  );
}
