import React from "react";

const HeaderRight: React.FC = () => {
  return (
    <div className="w-[302.5px] flex flex-row items-center  justify-end">
      <button className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 m-[3.5px] py-[6px] px-[8px]">
        <svg
          className="w-5 h-5 text-black"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4 8h4V4H4zm6 12h4v-4h-4zm-6 0h4v-4H4zm0-6h4v-4H4zm6 0h4v-4h-4zm6-10v4h4V4zm-6 4h4V4h-4zm6 6h4v-4h-4zm0 6h4v-4h-4z"></path>
        </svg>
      </button>

      <button className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 m-[3.5px] py-[6px] px-[8px]">
        <svg viewBox="0 0 12 13" className="w-5 h-5 fill-current text-gray-700">
          <g fillRule="evenodd" transform="translate(-450 -1073)">
            <path d="m459.603 1077.948-1.762 2.851a.89.89 0 0 1-1.302.245l-1.402-1.072a.354.354 0 0 0-.433.001l-1.893 1.465c-.253.196-.583-.112-.414-.386l1.763-2.851a.89.89 0 0 1 1.301-.245l1.402 1.072a.354.354 0 0 0 .434-.001l1.893-1.465c.253-.196.582.112.413.386M456 1073.5c-3.38 0-6 2.476-6 5.82 0 1.75.717 3.26 1.884 4.305.099.087.158.21.162.342l.032 1.067a.48.48 0 0 0 .674.425l1.191-.526a.473.473 0 0 1 .32-.024c.548.151 1.13.231 1.737.231 3.38 0 6-2.476 6-5.82 0-3.344-2.62-5.82-6-5.82"></path>
          </g>
        </svg>
      </button>

      <button className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 m-[3.5px] py-[6px] px-[8px]">
        <svg
          className="w-6 h-6 text-gray-700 fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 16.5c-.83 0-1.5-.67-1.5-1.5h3c0 .83-.67 1.5-1.5 1.5m5-2.5H7v-1l1-1v-2.61C8 9.27 9.03 7.47 11 7v-.5c0-.57.43-1 1-1s1 .43 1 1V7c1.97.47 3 2.28 3 4.39V14l1 1z"></path>
        </svg>
      </button>

      <button className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 m-[3.5px] py-[6px] px-[8px]">
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
        </svg>
        <span className="MuiTouchRipple-root"></span>
      </button>
    </div>
  );
};

export default HeaderRight;
