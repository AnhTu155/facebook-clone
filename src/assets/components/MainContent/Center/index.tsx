import React from "react";
import { useState } from "react";
import CreatePost from "./CreatePost";
import StoryReel from "./StoryReel";
import Post from "./Post";
import NewsPost from "./NewPost";

const MainContentCenter: React.FC = () => {
  const [newPost, setNewPost] = useState(false);
  const [isPostVisible, setIsPostVisible] = useState(false);
  const [showImage, setShowImage] = useState("");
  const [jobs, setJobs] = useState([]);
  return (
    <div className="w-full h-full flex-1 items-center justify-center h-screen bg-gray-100 px-8 py-4 rounded-[15px] text-[15px]  ml-1/4 h-screen  ">
      <div className="w-full  bg-gray-100 flex items-center justify-center">
        <CreatePost setIsPostVisible={setIsPostVisible} />
      </div>
      <div className="w-full  bg-gray-100 flex items-center justify-center">
        <StoryReel />
      </div>

      <div className="w-full  bg-gray-100 flex items-center justify-center">
        {isPostVisible && (
          <p>
            {
              <Post
                setShowImage={setShowImage}
                showImage={showImage}
                setIsPostVisible={setIsPostVisible}
                setJobs={setJobs}
              />
            }
          </p>
        )}
      </div>
      <div className="w-full  bg-gray-100 justify-items-center">
        {jobs.length > 0 && <NewsPost showImage={showImage} jobs={jobs} />}
      </div>
    </div>
  );
};

export default MainContentCenter;
