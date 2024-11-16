import ClickIcon from "@/assets/components/Icons/ClickIcon";
import { useState } from "react";

function Comment({ showButton, setShowButton }) {
  const [chat, SetChat] = useState();
  const [chats, SetChats] = useState([]);

  const handleClick = () => {
    SetChats((prev) => [...prev, chat]); // Hiển thị bài post
    SetChat("");
    setShowButton(false);
  };

  return (
    <div className=" p-2.5 rounded-[15px] bg-white mb-1.5">
      {showButton && (
        <form className="flex w-full h-full justify-center mb-3" action="">
          <img
            src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/464836687_122165560256096850_8306177198689279171_n.jpg?stp=cp0_dst-jpg_s32x32&_nc_cat=106&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=2zg-QRZ1tskQ7kNvgGV9r6V&_nc_zt=24&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=AdEcECcYVlmGkQ0H9Mw3n7i&oh=00_AYCLbyVLQUlAfdKkP9cMFdwOUwcMpwzKKSnQ86eeUa4sDg&oe=673BAD0A"
            className="h-8 w-8 object-cover cursor-pointer  rounded-full mr-2.5"
            alt="Profile Image"
          />
          <div className="flex w-full bg-[#e9ebf0] rounded-lg">
            <input
              type="text"
              className="w-full h-full flex-wrap rounded-lg bg-[#e9ebf0] border-none whitespace-pre-wrap mr-2.5 p-4"
              type="text"
              id=""
              name=""
              value={chat}
              onChange={(e) => SetChat(e.target.value)}
              placeholder="Viết bình luận ..."
            />
            <button
              className=" hover:bg-[gray] rounded-lg "
              onClick={handleClick}
            >
              <ClickIcon />
            </button>
          </div>
        </form>
      )}

      <div className="w-full">
        {chats.map((chat, index) => (
          <div className="flex w-full h-auto" key={index}>
            <img
              src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/464836687_122165560256096850_8306177198689279171_n.jpg?stp=cp0_dst-jpg_s32x32&_nc_cat=106&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=2zg-QRZ1tskQ7kNvgGV9r6V&_nc_zt=24&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=AdEcECcYVlmGkQ0H9Mw3n7i&oh=00_AYCLbyVLQUlAfdKkP9cMFdwOUwcMpwzKKSnQ86eeUa4sDg&oe=673BAD0A"
              className="h-8 w-8 object-cover cursor-pointer  rounded-full mr-2.5"
              alt="Profile Image"
            />
            <textarea
              className="w-full h-full p-2 px-3 flex bg-[#e9ebf0] rounded-[15px] border-none mb-4"
              type="text"
              id=""
              name=""
            >
              {chat}
            </textarea>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Comment;
