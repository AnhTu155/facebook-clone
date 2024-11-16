import { Link } from "react-router-dom";
import React from "react";

const HeaderCenter: React.FC = () => {
  return (
    <>
      <div className="flex flex-1 w-full justify-center w-full  ">
        <div className="w-[120px] h-[56px] flex items-center justify-center cursor-pointer hover:bg-gray-300">
          <Link
            to="/"
            aria-label="Trang chủ"
            className="flex items-center text-gray-700 hover:text-blue-600"
            role="link"
            tabIndex="0"
            aria-current="page"
          >
            <svg
              className="w-[28px] h-[28px] text-gray-700 fill-current"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
            </svg>
          </Link>
        </div>

        <div className="w-[120px] h-[56px] flex items-center justify-center cursor-pointer hover:bg-gray-300">
          <Link
            to="/friends/"
            aria-label="Bạn bè"
            className="flex items-center text-gray-700 hover:text-blue-600"
            role="link"
            tabIndex="0"
          >
            <svg
              className="w-[28px] h-[28px] text-gray-700 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
              data-testid="SupervisorAccountIcon"
            >
              <path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5M9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5 6 6.34 6 8s1.34 3 3 3m7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75M9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13"></path>
            </svg>
          </Link>
        </div>

        <div className="w-[120px] h-[56px] flex items-center justify-center cursor-pointer hover:bg-gray-300">
          <Link
            to="/videos/"
            aria-label="Video"
            className="flex items-center text-gray-700 hover:text-blue-600"
            role="link"
            tabIndex="0"
          >
            <svg
              className="w-[28px] h-[28px] text-gray-700 fill-current"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2m0 14H3V5h18zm-5-6-7 4V7z"></path>
            </svg>
          </Link>
        </div>

        <div className="w-[120px] h-[56px] flex items-center justify-center cursor-pointer hover:bg-gray-300">
          <Link
            to=""
            aria-label="Nhóm"
            className="flex items-center text-gray-700 hover:text-blue-600"
            role="link"
            tabIndex="0"
          >
            <svg
              className="w-[28px] h-[28px] text-gray-700 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
              data-testid="SupervisorAccountIcon"
            >
              <path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5M9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5 6 6.34 6 8s1.34 3 3 3m7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75M9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13"></path>
            </svg>
          </Link>
        </div>

        <div className="w-[120px] h-[56px] flex items-center justify-center cursor-pointer hover:bg-gray-300">
          <Link
            to=""
            aria-label="Nhóm"
            className="flex items-center text-gray-700 hover:text-blue-600"
            role="link"
            tabIndex="0"
          >
            <svg
              className="w-[28px] h-[28px] text-gray-700 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
              data-testid="VideogameAssetIcon"
            >
              <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-10 7H8v3H6v-3H3v-2h3V8h2v3h3zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5"></path>
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeaderCenter;
