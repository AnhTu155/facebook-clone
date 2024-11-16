import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <section>
      <header></header>
      <div className=" bg-slate-100 font-primary">
        <Outlet />
      </div>
    </section>
  );
}
