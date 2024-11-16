import SettingIcon from "@/assets/components/Icons/SettingIcon";

const FriendLeft: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center p-4">
        <div className="flex-1">
          <h1 className="text-xl font-bold">Bạn bè</h1>
        </div>

        <div className="flex items-center space-x-2 hover:text-blue-800">
          <SettingIcon />
        </div>
      </div>
    </div>
  );
};

export default FriendLeft;
