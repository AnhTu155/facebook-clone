import Header from "@/components/Header";
import SidebarCenter from "@/components/ui/Center";
import SidebarLeft from "@/components/ui/Left";
import SidebarRight from "@/components/ui/Right/index";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex w-full h-full justify-center  bg-gray-100 mt-[56px]">
        <SidebarLeft />
        <SidebarCenter />
        <SidebarRight />
      </div>
    </>
  );
}
