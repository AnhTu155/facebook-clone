import Header from "@/assets/components/Header";
import SidebarCenter from "@/assets/components/ui/Center";
import SidebarLeft from "@/assets/components/ui/Left";
import SidebarRight from "@/assets/components/ui/Right/index";

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
