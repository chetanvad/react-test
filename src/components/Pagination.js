import React from "react";

function Pagination() {
  return (
    <>
      <div className="flex my-10 shadow-3xl rounded-5 w-fit overflow-hidden ">
        <div className="self-center px-4 h-10 bg-white hover:bg-blue-100 flex cursor-pointer">
          <img
            className="justify-center self-center item-center"
            src="https://cdn.zeplin.io/640f521efdb5a922348115db/assets/1FDDCF8C-3429-45EE-B982-A5DE38753CE7.svg"
            alt="leftArrow"
          ></img>
        </div>
        <div className="sm:flex bg-blue-100 hidden cursor-pointer">
          <p className="self-center justify-center item-center px-4 text-sm  font-normal text-white">
            1
          </p>
        </div>
        <div className="sm:flex h-10 bg-white hover:bg-blue-100 hidden cursor-pointer">
          <p className="self-center px-4 text-sm text-cgray-700 font-normal hover:text-white">
            2
          </p>
        </div>
        <div className="ml-1 sm:flex h-10 bg-white hover:bg-blue-100 hidden cursor-pointer">
          <p className="self-center px-4 text-sm text-cgray-700 font-normal hover:text-white">
            3
          </p>
        </div>
        <div className="ml-1 sm:flex h-10 bg-white hover:bg-blue-100 hidden cursor-pointer">
          <p className="self-center px-4 text-sm text-cgray-700 font-normal hover:text-white">
            4
          </p>
        </div>
        <div className="ml-1 sm:flex h-10 bg-white hover:bg-blue-100 hidden cursor-pointer">
          <p className="self-center px-4 text-sm text-cgray-700 font-normal hover:text-white">
            -
          </p>
        </div>
        <div className="ml-1 sm:flex h-10 bg-white hidden hover:bg-blue-100 cursor-pointer">
          <p className="self-center px-4 text-sm text-cgray-700 font-normal hover:text-white">
            186
          </p>
        </div>
        <div className="ml-1 sm:flex h-10 bg-white hidden hover:bg-blue-100 cursor-pointer">
          <p className="self-center px-4 text-sm text-cgray-700 font-normal hover:text-white">
            187
          </p>
        </div>
        <div className="self-center px-4 ml-1 flex h-10 hover:bg-blue-100 bg-white hover:text-white cursor-pointer">
          <img
            className="justify-center self-center item-center"
            src="https://cdn.zeplin.io/640f521efdb5a922348115db/assets/895DBF1C-96F9-49EA-9F5D-91A44B9ED829.svg"
            alt="leftArrow"
          ></img>
        </div>
      </div>
    </>
  );
}

export default Pagination;
