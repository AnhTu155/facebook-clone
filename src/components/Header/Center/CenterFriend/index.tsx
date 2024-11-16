import FriendLeft from "./FriendLeft";
import FriendRight from "./FriendRight";

export default function Friends() {
  return (
    <div className="flex">
      <div className="basis-1/3">
        <FriendLeft />
      </div>
      <div className="basis-2/3">
        <FriendRight />
      </div>
    </div>
  );
}
