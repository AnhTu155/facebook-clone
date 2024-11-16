import AvatarIcon from "@/assets/components/Icons/AvatarIcon";
import React from "react";

function Story({ image, profileSrc, title }) {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="p-2 h-40 w-24 relative bg-center bg-cover bg-no-repeat shadow-md rounded-lg mr-2 transition ease-in-out duration-200 cursor-pointer flex justify-between "
    >
      <div className="w-40px h-40px rounded-full overflow-hidden">
        <AvatarIcon alt="Sharp" src={profileSrc} />
      </div>
      <h4 className="absolute bottom-[0.6rem] text-white shadow-[6px_5px_17px_-17px_rgba(0,0,0,1)]">
        {title}
      </h4>
    </div>
  );
}

export default Story;
