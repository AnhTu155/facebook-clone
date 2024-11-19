import AvatarIcon from "@/components/Icons/AvatarIcon";
import React, { useState } from "react";
import VideoImage from "../../Image/VideoImage";
import ImageVideo from "../../Image/ImageVideo";
import ImojiImage from "../../Image/ImojiImage";

function CreatePost({ setIsPostVisible }) {
  const handlePost = (event) => {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form
    setIsPostVisible(true); // Hiển thị bài post
  };

  return (
    <div className="w-[500px] m-0 [mx-124.24px] bg-white border-2 border-gray-200 rounded-xl mb-3 shadow-sm pt-3 pr-4 pb-2 pl-4 ">
      <div className="flex items-center mb-4 border-b ">
        <div className="justify-center w-[40px] h-[40px]">
          <AvatarIcon />
        </div>
        <button
          onClick={handlePost}
          className="w-full p-3 mb-4 w-[40px] h-[40px] text-left rounded-md bg-gray-100 hover:bg-gray-200"
        >
          <div className="text">Tú ơi, bạn đang nghĩ gì thế?</div>
        </button>
      </div>

      <div className="flex justify-between">
        <button className="flex items-center space-x-2 p-2 text-gray-700 hover:bg-gray-100 rounded-md">
          <VideoImage />
          Video Trực tiếp
        </button>
        <button className="flex items-center space-x-2 p-2 text-gray-700 hover:bg-gray-100 rounded-md">
          <ImageVideo />
          Ảnh/ Video
        </button>
        <button className="flex items-center space-x-2 p-2 text-gray-700 hover:bg-gray-100 rounded-md">
          <ImojiImage />
          Cảm xúc/ Hoạt động
        </button>
      </div>
    </div>
  );
}
export default CreatePost;
