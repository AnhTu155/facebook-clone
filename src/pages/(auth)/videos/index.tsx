import VideoLeft from "./VideoLeft";
import VideoRight from "./VideoRight";

export default function Friends() {
  return (
    <>
      <div className="flex h-full max-h-screen">
        <div className="w-[360px] h-full bg-white fixed ">
          <VideoLeft />
        </div>
        <div className="flex-1 h-full ml-[360px]">
          <VideoRight />
        </div>
      </div>
    </>
  );
}
