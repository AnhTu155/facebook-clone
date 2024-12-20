import React from "react";

const MessageIcon: React.FC = () => (
  // <svg
  //   className="w-[25px] h-[25px] text-gray-700 fill-current"
  //   aria-hidden="true"
  //   viewBox="0 0 24 24"
  // >
  //   <path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zM12 13 3.74 7.84 12 3l8.26 4.84z"></path>
  // </svg>
  <img
    srcSet="https://img.icons8.com/?size=48&id=YFbzdUk7Q3F8&format=png 1x, https://img.icons8.com/?size=96&id=YFbzdUk7Q3F8&format=png 2x"
    width="48"
    height="48"
    alt="Messenger icon"
    className="w-[28px] h-[28px] text-gray-700 fill-current"
    loading="lazy"
  />
);

export default MessageIcon;
