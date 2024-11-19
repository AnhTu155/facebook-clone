import { Gift, Search, Plus } from "lucide-react";

interface Props {
  avatar: string;
  name: string;
}

function UserItem({ avatar, name }: Props) {
  return (
    <div
      className="flex items-center gap-2 p-2 rounded-sm hover:bg-[#dbdde0]"
      key={avatar}
    >
      {avatar ? (
        <img
          className=" h-8 w-8"
          style={{ width: "28px", height: "28px", borderRadius: "50%" }}
          src={avatar}
          alt=""
        />
      ) : (
        <img
          className="h-8 w-8 rounded-full"
          style={{ width: "28px", height: "28px", borderRadius: "50%" }}
          src="https://img.freepik.com/premium-vector/avatar-cute-little-boy-isolated-white-background-cartoon-style-vector-illustration_174639-55048.jpg?w=740"
          alt=""
        />
      )}
      <p className="font-sans font-medium font-medium">{name}</p>
    </div>
  );
}
export default UserItem;
