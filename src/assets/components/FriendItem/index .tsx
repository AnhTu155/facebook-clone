function FriendItem({ img, text, to }: any) {
  return (
    <div className="max-w-[250px] bg-white rounded-lg border border-gray-300 shadow-lg cursor-pointer overflow-hidden">
      {img}
      <div className="flex items-start mx-3 mt-2">
        <span className="text-sm text-black" dir="auto">
          <span className="font-medium">{text}</span>
        </span>
      </div>
      <div className="flex mx-3 mb-2">
        <p>1 bạn chung</p>
      </div>
      <div className="w-full flex justify-center ">
        <div
          aria-label="Xác nhận"
          role="button"
          tabindex="0"
          className="w-full bg-blue-500 text-center text-white py-2 px-4 mx-3 rounded-[10px] border-gray-300 cursor-pointer hover:bg-blue-300"
        >
          <span className="font-medium">xác nhận</span>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div
          aria-label="Xóa"
          role="button"
          tabindex="0"
          className="w-full bg-gray-300 text-center text-white py-2 px-4 mx-3 m-2 rounded-[10px] border-gray-300 cursor-pointer hover:bg-gray-400"
        >
          <span className="font-medium">Xóa</span>
        </div>
      </div>
    </div>
  );
}
export default FriendItem;
