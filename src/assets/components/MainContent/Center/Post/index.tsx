import React, { useState } from "react";

function Post({ setJobs, setIsPostVisible, setShowImage, showImage }) {
  const [job, setJob] = useState("");

  const handleSubmit = () => {
    setJobs((prev) => [...prev, job]);
    setJob("");
    setIsPostVisible(false);
  };

  return (
    <div className="w-[500px] bg-white border-2 border-[#DEDEEC] rounded-lg p-2.5">
      <div className="post-center">
        <h2 className="m-1.5 pb-1 border-b border-[#CFCFCF] text-center">
          Tạo bài viết
        </h2>
        <div className="flex items-center text-xl mb-1.5">
          <img
            className="w-10 h-10 rounded-full mr-2.5 cursor-pointer "
            src="https://i.pinimg.com/75x75_RS/bb/c3/72/bbc3729277f41cdacffe59969a95bc97.jpg"
            alt=""
          />
          <span>Anh Tú</span>
        </div>
        <div>
          <textarea
            className="w-full h-[100px] rounded-[15px] border-0 text-lg whitespace-pre-wrap"
            type="text"
            value={job}
            onChange={(e) => setJob(e.target.value)}
            id="post-input"
            name=""
            placeholder="Tú ơi, bạn đang nghĩ gì thế?"
          ></textarea>
        </div>
      </div>
      <div className="gap-5 p-4 flex items-center justify-center border border-[#C2C0C0] rounded-lg cursor-pointer">
        <p className="pr-7 text-lg">Thêm vào bài viết của bạn</p>
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/b37mHA1PjfK.png"
          alt=""
        />
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png"
          alt=""
        />
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/8zlaieBcZ72.png"
          alt=""
        />
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/q7MiRkL7MLC.png"
          alt=""
        />
      </div>
      <div className="text-center justify-between mt-2.5 bg-[#E9EBF0] rounded-md">
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
