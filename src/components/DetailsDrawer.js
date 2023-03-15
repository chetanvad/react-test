import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

function DetailsDrawer(props) {
  const { handleCloseModel, showModal } = props;
 
  return (
    <>
      <Transition.Root show={showModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleCloseModel}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-40"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-40"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 w-full h-full bg-black opacity-40 backdrop-blur-lg backdrop-opacity-100" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-250 sm:duration-500"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-500"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-2xl">
                    <div className="flex  min-h-screen py-5">
                      <div className="relative h-[100vh] w-full max-w-2xl ml-auto bg-white overflow-hidden rounded-tl-2xl shadow-lg">
                        <div className="gradiant-img-bg p-8">
                          <div className="flex justify-between items-center">
                            <div>
                            <Dialog.Title className="text-white text-22 font-medium">
                            Computers Item Friendly Name
                        </Dialog.Title>
                            </div>
                            <div className="cursor-pointer">
                              <img
                                src="https://cdn.zeplin.io/640f521efdb5a922348115db/assets/526CF1D2-723F-43E2-81EA-3AA915D98E49.svg"
                                alt="close-icon"
                                onClick={() => {
                                  handleCloseModel();
                                }}
                              ></img>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-12 p-8 shadow-5xl">
                          <div className="col-span-4">
                            <p className="text-cgray-600 uppercase font-medium text-xs">
                              Friendly Name
                            </p>
                            <p className="text-cgray-600 uppercase font-medium text-xs mt-4">
                              DNS Name
                            </p>
                            <p className="text-cgray-600 uppercase font-medium text-xs mt-4">
                              Environment
                            </p>
                            <p className="text-cgray-600 uppercase font-medium text-xs mt-4">
                              End Date
                            </p>
                          </div>
                          <div className="col-span-6">
                            <p className="text-black text-sm font-normal">
                              Friendly Name
                            </p>
                            <p className="text-black text-sm font-normal mt-3">
                              DNS Name
                            </p>
                            <p className="text-black text-sm font-normal mt-3">
                              Environment
                            </p>
                            <p className="text-black text-sm font-normal mt-3">
                              21/11/2021{" "}
                              <span className="ml-3">02:33 a.m.</span>
                            </p>
                          </div>
                        </div>
                        <div className="py-9 px-8">
                          <button
                            className="bg-blue-100 py-3 px-6 text-white text-base font-normal rounded-md hover:bg-blue-200 hover:shadow-btn-blue transition ease-in-out delay-250"
                            onClick={() => {
                              handleCloseModel();
                            }}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

export default DetailsDrawer;
