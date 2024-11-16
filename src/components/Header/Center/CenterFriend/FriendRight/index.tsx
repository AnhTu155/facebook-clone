const FriendRight: React.FC = () => {
  return (
    <div className="flex flex-col px-5">
      <div className="flex justify-between items-center p-4">
        <h2 className="text-lg font-semibold">Lời mời kết bạn</h2>

        <a
          href="/friends/requests/"
          className="text-blue-600 hover:text-blue-800 font-medium rounded-md px-3 py-1"
          role="link"
        >
          Xem tất cả
        </a>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-gray-700">Danh sách lời mời kết bạn</p>
        </div>
      </div>
    </div>
  );
};

export default FriendRight;
