import { ArrowRightIcon } from "lucide-react";
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
          <ArrowRightIcon />
        </div>
      )}
    </div>
  );
}
export default MenuItem;
