import react from "react";

function MenuItem({ icon, text, to, ishowArrow }: any) {
  return (
    <div className="w-full pb-2 flex items-center space-x-2 py-2 px-2 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
      <div className="w-[28px] h-[28px]   rounded-full  inline-flex items-center justify-center">
        {icon}
      </div>
      <span className="flex-1 text-base font-medium text-gray-800">{text}</span>

      {ishowArrow && (
        <div className="flex items-center">
          <svg
            className="w-6 h-6 text-gray-600 hover:text-gray-800"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"></path>
          </svg>
        </div>
      )}
    </div>
  );
}
export default MenuItem;
