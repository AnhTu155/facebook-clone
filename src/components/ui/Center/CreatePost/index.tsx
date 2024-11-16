import React, { useState } from "react";

function CreatePost({ setIsPostVisible }) {
  const handlePost = (event) => {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form
    setIsPostVisible(true); // Hiển thị bài post
  };

  return (
    <div className="w-[500px] m-0 [mx-124.24px] bg-white border-2 border-gray-200 rounded-xl mb-3 shadow-sm pt-3 pr-4 pb-2 pl-4 ">
      <div className="flex items-center mb-4 border-b">
        <image
          x="0"
          y="0"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          width="100%"
          xlinkHref="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-1/438263954_1135650504244296_8920633450342587823_n.jpg?stp=cp0_dst-jpg_s40x40&amp;_nc_cat=107&amp;ccb=1-7&amp;_nc_sid=0ecb9b&amp;_nc_ohc=XXbpP8x560oQ7kNvgFjgBOS&amp;_nc_zt=24&amp;_nc_ht=scontent.fsgn2-3.fna&amp;_nc_gid=ATdhsHn0IZfa67D7PVlgQsw&amp;oh=00_AYAhwqNViPEWlf1RxY9DqcqTnO0QV4jmXgx4zZolVVubeQ&amp;oe=6736A4CD"
          className="height: 40px; width: 40px;"
        ></image>
        <button
          onClick={handlePost}
          className="w-full p-3 mb-4 text-left rounded-md bg-gray-100 hover:bg-gray-200"
        >
          <div className="text">Tú ơi, bạn đang nghĩ gì thế?</div>
        </button>
      </div>

      <div className="flex justify-between">
        <button className="flex items-center space-x-2 p-2 text-gray-700 hover:bg-gray-100 rounded-md">
          <img
            className="h-6 w-6 mr-2"
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/c0dWho49-X3.png"
            alt=""
          />
          Video Trực tiếp
        </button>
        <button className="flex items-center space-x-2 p-2 text-gray-700 hover:bg-gray-100 rounded-md">
          <img
            className="h-6 w-6 mr-2"
            referrerPolicy="origin-when-cross-origin"
            src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png"
          />
          Ảnh/ Video
        </button>
        <button className="flex items-center space-x-2 p-2 text-gray-700 hover:bg-gray-100 rounded-md">
          <img
            alt=""
            className="h-6 w-6 mr-2"
            referrerPolicy="origin-when-cross-origin"
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png"
          />{" "}
          Cảm xúc/ Hoạt động
        </button>
      </div>
    </div>
  );
}
export default CreatePost;
