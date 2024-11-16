import CommentIcon from "@/assets/components/Icons/CommentIcon";
import LikeIcon from "@/assets/components/Icons/LikeIcon";
import ShareIcon from "@/assets/components/Icons/ShareIcon";
import React, { useState } from "react";
import Comment from "./Comment.tsx/index.tsx";

const NewsPost = ({ jobs, showImage }) => {
  const [comment, SetComment] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const handleComment = (event) => {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form
    SetComment(true); // Hiển thị bài post

    setShowButton(true);
  };

  return (
    <>
      {(jobs || []).map((item, index) => (
        <div
          className="w-[500px] bg-white border-2 border-gray-300 p-2.5 mb-2.5 bg-white rounded-lg m-3"
          key={index}
        >
          <div className="flex items-start justify-start w-full">
            <img
              src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/464836687_122165560256096850_8306177198689279171_n.jpg?stp=cp0_dst-jpg_s32x32&_nc_cat=106&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=2zg-QRZ1tskQ7kNvgGV9r6V&_nc_zt=24&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=AdEcECcYVlmGkQ0H9Mw3n7i&oh=00_AYCLbyVLQUlAfdKkP9cMFdwOUwcMpwzKKSnQ86eeUa4sDg&oe=673BAD0A"
              className="h-8 w-8 object-cover cursor-pointer rounded-full mr-2.5"
              alt="Profile Image"
            />
            <div className="user-info">
              <h4 className="m-0">Người Dùng</h4>
              <p className="text-gray-500 text-xs m-0">1 giờ trước</p>
            </div>
          </div>
          <div className="min-h-[50px] px-2.5 border-t-0">
            <div className="w-full h-auto">
              {showImage && showImage.trim("") && (
                <img className="w-full" src={showImage} alt="" />
              )}
              <p className="text-start w-full p-2  border-gray-300 rounded-md whitespace-pre-wrap break-words m-3">
                {item}
              </p>
            </div>
          </div>
          <div className="flex  grid-cols-3   p-2 border-t border-b border-gray-300 max-w-full justify-around  ">
            <button className="inline-block text-base text-gray-500 bg-white border-0 gap-3 px-5 rounded-lg cursor-pointer flex items-center hover:bg-[#e0e0e0] ">
              <LikeIcon className="  " /> Thích
            </button>
            <button
              onClick={handleComment}
              className="inline-block text-base text-gray-500 bg-white border-0 gap-3 px-5 rounded-lg cursor-pointer flex items-center hover:bg-[#e0e0e0]  "
            >
              <CommentIcon className="" /> Bình luận
            </button>
            <button className="inline-block text-base text-gray-500 bg-white border-0 gap-3 px-5 rounded-lg cursor-pointer flex items-center hover:bg-[#e0e0e0] ">
              <ShareIcon className="" /> Chia sẻ
            </button>
          </div>
          {comment && (
            <Comment showButton={showButton} setShowButton={setShowButton} />
          )}
        </div>
      ))}
    </>
  );
};

export default NewsPost;
