import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <section>
      <header className="border border-gray-50 shadow-1g shadow-md cursor-pointer ">
        <Header />
      </header>
      <div className="h-screen bg-slate-100 font-primary mt-[56px]">
        <Outlet />
      </div>
    </section>
  );
}
