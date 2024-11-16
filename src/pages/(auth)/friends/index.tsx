import FriendLeft from "./FriendLeft";
import FriendRight from "./FriendRight";

export default function Friends() {
  return (
    <>
      <div className="flex h-full">
        <div className="w-[360px] h-full bg-white fixed pb-2">
          <FriendLeft />
        </div>
        <div className="flex-1 h-screen ml-[360px]">
          <FriendRight />
        </div>
      </div>
    </>
  );
}
