import React from "react";

// Card component
function Cards(props) {
  const { user, handleOpenDetails } = props;
  return (
    <>
      <div className="lg:col-span-4 sm:col-span-6 col-span-12 mt-5 rounded-md shadow-4xl overflow-hidden">
        <div>
          <div className="gradiant-img p-6">
            <p className="text-white font-medium">{user?.name}</p>
          </div>
          <div className="bg-white">
            <div className="px-4 py-6">
              <div>
                <p className="text-cgray-600 uppercase font-medium text-xs">
                  FRIENDLY NAME
                </p>
                <p className="text-black text-sm font-normal mt-2">
                  {user?.name}
                </p>
              </div>
              <div className="mt-4">
                <p className="text-cgray-600 uppercase font-medium text-xs">
                  DNS NAME
                </p>
                <p className="text-black text-sm font-normal mt-2">
                  {user?.dns}
                </p>
              </div>
              <div className="mt-4">
                <p className="text-cgray-600 uppercase font-medium text-xs">
                  DESCRIPTION
                </p>
                <p className="text-black text-sm font-normal mt-2">
                  {user?.des}
                </p>
              </div>
              <div className="mt-4">
                <p className="text-cgray-600 uppercase font-medium text-xs">
                  END DATE
                </p>
                <p className="text-black text-sm font-normal mt-2">
                  {user?.date} <span className="ml-3">{user?.time}</span>
                </p>
              </div>
            </div>
            <div className="mx-4 pb-6">
              <button
                className="bg-cgreen-100 w-full text-white font-normal text-sm py-2 rounded hover:bg-cgreen-200 hover:shadow-6xl transition ease-in-out delay-250"
                onClick={() => handleOpenDetails()}
              >
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
