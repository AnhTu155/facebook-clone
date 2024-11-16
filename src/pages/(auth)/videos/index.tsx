import Header from "@/assets/components/Header";
import VideoLeft from "./VideoLeft";
import VideoRight from "./VideoRight";

export default function Friends() {
  return (
    <>
      <header className="border border-gray-50 shadow-1g shadow-md cursor-pointer ">
        <Header />
      </header>
      <div className="flex h-full max-h-screen">
        <div className="w-[360px] h-full bg-white ">
          <VideoLeft />
        </div>
        <div className="flex-1 h-full">
          <VideoRight />
        </div>
      </div>
    </>
  );
}
