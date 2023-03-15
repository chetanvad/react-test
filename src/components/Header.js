import React from "react";

function Header() {
  return (
    <>
      <header className="sticky top-0 z-10 w-full px-6 py-4 bg-white shadow-1xl">
        <div className="bg-white">
          <div className="flex sm:flex-row flex-col justify-between">
            <div className="self-center flex">
              <div className="self-center">
                <img
                  src="https://cdn.zeplin.io/640f521efdb5a922348115db/assets/2596CFCA-2ED3-4DBC-9AAC-EA8272247F91.svg"
                  alt="Id"
                ></img>
              </div>
              <div className="mx-5 self-center h-[32px] w-[1px] bg-cgray-100"></div>
              <div className="flex self-center">
                <div className="self-center">
                  <img
                    src="https://cdn.zeplin.io/640f521efdb5a922348115db/assets/5DF59BFA-3E28-4572-B4EC-B1EC9ECED99E.svg"
                    alt="Cart"
                    className="mr-3"
                  ></img>
                </div>
                <div className="text-blue-100 font-light text-xl self-center">
                  IAM SHOP
                </div>
              </div>
            </div>
            <div className="flex self-center sm:mt-0 mt-5">
              <div className="self-center">
                <img
                  src="https://cdn.zeplin.io/640f521efdb5a922348115db/assets/8C141B44-18B0-4EBA-889D-311A70A1EC47.png"
                  className="h-10 w-10 object-contain"
                  alt="profile"
                ></img>
              </div>
              <div className="ml-2 self-center">
                <p className="text-sm font-normal text-cgray-200">
                  Patrick Parker
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
