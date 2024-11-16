const VideoRight: React.FC = () => {
  return (
    <div className="w-full flex flex-col px-5 bg-gray-100 max-h-screen hover:overflow-auto">
      <div className=" justify-center bg-white items-center p-3 my-3 mx-[105px]">
        <div className="flex items-center">
          <span className="text-xl font-bold leading-tight">
            Video mới dành cho bạn
          </span>
          <div className="mx-2">•</div>
          <div>
            <span className="text-xl font-bold leading-tight">5</span>
          </div>
        </div>

        <div className="flex justify-between items-center py-4">
          <div className="flex items-center w-[350px] h-full">
            <div className="w-15 h-15 border border-gray-300 rounded-full overflow-hidden">
              <img
                src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/464309518_1002339495266154_2003911793366198650_n.jpg?stp=cp0_dst-jpg_s60x60&_nc_cat=1&ccb=1-7&_nc_sid=808fa7&_nc_ohc=Y6m9rFZs9RoQ7kNvgHp9-wj&_nc_zt=24&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=Asja0TzdmN1KsuctqZavfpi&oh=00_AYABFnU9RgRLvdcDAC6rCpXv0r7JqDY6n6NmyRPaui1iBg&oe=6739EE91"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-base text-gray-900 max-w-full ml-3">
              <p className="w-[250px] text-[17px] font-semibold line-clamp-2">
                Video mới của CGV Cinemas Vietnam và những người khác.
              </p>
              <div className="text-xs text-gray-500 mt-1">5 giờ trước</div>
            </div>
          </div>

          <div className="flex items-center w-[350px] h-full">
            <div className="w-15 h-15 border border-gray-300 rounded-full overflow-hidden">
              <img
                src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/464309518_1002339495266154_2003911793366198650_n.jpg?stp=cp0_dst-jpg_s60x60&_nc_cat=1&ccb=1-7&_nc_sid=808fa7&_nc_ohc=Y6m9rFZs9RoQ7kNvgHp9-wj&_nc_zt=24&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=Asja0TzdmN1KsuctqZavfpi&oh=00_AYABFnU9RgRLvdcDAC6rCpXv0r7JqDY6n6NmyRPaui1iBg&oe=6739EE91"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-base text-gray-900 max-w-full ml-3">
              <p className="w-[250px] text-[17px] font-semibold line-clamp-2">
                Video mới của CGV Cinemas Vietnam và những người khác.
              </p>
              <div className="text-xs text-gray-500 mt-1">5 giờ trước</div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex gap-4 p-4 flex-nowrap flex-row"> */}
      <div className="justify-center bg-white items-center p-3 mx-[105px]">
        <div className="flex">
          <div className="relative h-12 w-12 rounded-full overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-1/464315159_565909929135038_171595993942746202_n.jpg?stp=cp0_dst-jpg_s40x40&_nc_cat=1&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=j3b3VFByX6gQ7kNvgEvYsZA&_nc_zt=24&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=APwelkM3JAaD5coWrppowmL&oh=00_AYASl1cok_Wl-E7q7WK-dym9ArVH_Roxv9YiK-f1dqlivQ&oe=673B91B4"
              alt="Profile Image"
            />
            <div className="absolute inset-0 rounded-full"></div>
          </div>
          <div className="w-full">
            <div className="flex">
              <p>Viral Video. </p>
              <p className="text-blue-800">Theo dõi</p>
            </div>
            <div className="flex items-center">
              <span className="text-gray-600 text-sm">
                <a
                  href="/watch/?v=1675747046301869&amp;__cft__[0]=AZVqivTaXRj_Rc2jxApb0cWk4jS1l1phZjbTZUOJWyzOonCGL2QSe70J8VO9X9FpZJjUXMPKK9NLnJJXvGnRhrhhJJ241E4NfO1wa_XJXbtqn_pK7AEy4f2DW3t2U1gZeDVwHiCaMA3XrSk7na79bGHc1RLMxw2uFZ-DkleGu5eeEtYQgnn9-1-NInMNuXMtzScxPcxKUStvYb1hewyEeJ9H"
                  className=" hover:underline"
                  aria-label="Link to video"
                >
                  October 18 at 20:15
                </a>
                <span className="mx-1">&middot;</span>
                <span className="text-gray-500 flex items-center">
                  <svg
                    viewBox="0 0 16 16"
                    width="12"
                    height="12"
                    fill="currentColor"
                    className="mr-1"
                  >
                    <title>Shared with Public</title>
                    <g fill-rule="evenodd" transform="translate(-448 -544)">
                      <g>
                        <path
                          d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434"
                          transform="translate(354 143.5)"
                        ></path>
                        <path
                          d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096"
                          transform="translate(354 143.5)"
                        ></path>
                        <path
                          fill-rule="nonzero"
                          d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"
                          transform="translate(354 143.5)"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  Public
                </span>
              </span>
            </div>
          </div>
          <div className="flex-col ">
            <svg
              className="w-6 h-6 fill-current text-gray-700 cursor-pointer"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              tabindex="-1"
              role="img"
            >
              <path d="M19.5 9.5c-1.03 0-1.9.62-2.29 1.5h-2.92c-.39-.88-1.26-1.5-2.29-1.5s-1.9.62-2.29 1.5H6.79c-.39-.88-1.26-1.5-2.29-1.5C3.12 9.5 2 10.62 2 12s1.12 2.5 2.5 2.5c1.03 0 1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5s1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5 1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5"></path>
            </svg>
          </div>
        </div>
        <div className="text-base font-medium text-gray-800 leading-tight">
          <span className="block text-lg font-semibold text-gray-900">
            VÙNG ĐẤT TANABATA (2024) Phim Siêu Bánh Cuốn - Link FULL trong
            comment
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex justify-center">
            <video
              className="block w-full max-w-lg rounded-lg"
              src="blob:https://www.facebook.com/d005d6fe-070d-4e35-aa4c-a2684ff73c74"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoRight;
