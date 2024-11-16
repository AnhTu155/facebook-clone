import React from "react";

import HeaderCenter from "./Center";
import HeaderLeft from "./Left";
import HeaderRight from "./Right";

const Header: React.FC = () => {
  return (
    <header className="px-4 max-h-screen fixed w-full h-14 flex justify-between bg-white z-50 w-auto shadow-md cursor-pointer top-0">
      <HeaderLeft />

      <HeaderCenter />

      <HeaderRight />
    </header>
  );
};

export default Header;
