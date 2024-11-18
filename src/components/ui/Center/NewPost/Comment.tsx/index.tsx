import ClickIcon from "@/components/Icons/ClickIcon";
import CommentImage from "@/components/ui/Image/CommentImage";
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
          <CommentImage />
          <div className="flex w-full bg-[#e9ebf0] rounded-lg">
            <input
              type="text"
              className="w-full h-full flex-wrap rounded-lg bg-[#e9ebf0] border-none whitespace-pre-wrap mr-2.5 p-4"
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
            <CommentImage />
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
