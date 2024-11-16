import React from "react";
import { SearchOutlined } from "@ant-design/icons";

const HeaderLeft: React.FC = () => {
  return (
    <div className="w-[302.5px] flex items-center space-x-2">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
        alt="Facebook Logo"
        className="w-[40px] h-[40px]"
      />
      <div className="flex w-[240px] items-center border rounded-full py-2 pl-2 bg-gray-100">
        <svg
          className="w-5 h-5 text-gray-500 mr-2"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="SearchIcon"
        >
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"></path>
        </svg>
        <input
          placeholder="Tìm kiếm trên Facebook"
          type="text"
          className="bg-transparent outline-none w-full text-sm text-gray-900 placeholder-gray-500"
        />
      </div>
    </div>
  );
};

export default HeaderLeft;
