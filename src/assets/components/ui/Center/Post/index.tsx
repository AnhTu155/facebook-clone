import React, { useState } from "react";
import CommentImage from "../../Image/CommentImage";
import ImojiImage from "../../Image/ImojiImage";
import AddressImage from "../../Image/AddressImage";
import GifImage from "../../Image/GifImage";
import TagImage from "../../Image/TagImage";

function Post({ setJobs, setIsPostVisible, setShowImage, showImage }) {
  const [job, setJob] = useState("");

  const handleSubmit = () => {
    setJobs((prev) => [...prev, job]);
    setJob("");
    setIsPostVisible(false);
  };

  return (
    <div className="w-[500px] bg-white border-2 border-[#DEDEEC] rounded-lg ">
      <div className="post-center">
        <h2 className="m-1.5 pb-1 border-b border-[#CFCFCF] text-center">
          Tạo bài viết
        </h2>
        <div className="flex items-center text-xl mb-1.5 ml-2">
          <CommentImage />
          <span>Anh Tú</span>
        </div>
        <div>
          <textarea
            className="w-full h-[100px] rounded-[15px] border-0 text-lg whitespace-pre-wrap p-2"
            type="text"
            value={job}
            onChange={(e) => setJob(e.target.value)}
            id="post-input"
            name=""
            placeholder="Tú ơi, bạn đang nghĩ gì thế?"
          ></textarea>
        </div>
      </div>
      <div className="gap-5 p-4 flex items-center justify-center border border-[#C2C0C0] rounded-[10px] cursor-pointer mx-5">
        <p className="pr-7 text-lg">Thêm vào bài viết của bạn</p>
        <TagImage />
        <ImojiImage />
        <AddressImage />
        <GifImage />
      </div>
      <div className="text-center justify-between mt-2.5 bg-[#E9EBF0] rounded-md m-1  hover:bg-[#e0e0e0]">
        <button
          className="border-0 bg-[#E9EBF0] py-1 px-2.5 cursor-pointer text-black bg-[#B6B4B4] rounded-lg px-2.5 hover:bg-[#e0e0e0]"
          onClick={handleSubmit}
          type="submit"
        >
          Đăng
        </button>
      </div>
    </div>
  );
}
export default Post;
