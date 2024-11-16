import React from "react";

const OrderIcon: React.FC = () => (
  // <svg
  //   className="w-[28px] h-[28px] text-gray-800"
  //   aria-hidden="true"
  //   viewBox="0 0 24 24"
  // >
  //   <path d="M20 12c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L6 19h1l.67-2h8.67l.66 2h1l.67-2H20zm-4-2h-3V7h3zM8 7h3v3H8zm-2 5h12v3H6z"></path>
  // </svg>
  <img
    srcset="https://img.icons8.com/?size=30&id=beSK_kIyJFIT&format=png 1x, https://img.icons8.com/?size=60&id=beSK_kIyJFIT&format=png 2x"
    alt="Save icon"
    className="w-[28px] h-[28px] text-gray-800"
    loading="lazy"
  />
);

export default OrderIcon;
