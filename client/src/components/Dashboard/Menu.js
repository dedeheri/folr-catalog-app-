import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

import { logo } from "../../image";

import * as actionTypes from "../../redux/action-types-style";

function Menu({ children }) {
  const dispatch = useDispatch();
  const { menu } = useSelector((state) => state.style);

  function handleClose() {
    dispatch({ type: actionTypes.MENU_DASHBOARD_OFF });
  }

  return (
    <Transition.Root show={menu} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden"
        onClose={handleClose}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="pointer-events-none fixed inset-y-0 left-0 flex w-72">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="-translate-x-full"
              enterTo="-translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="-translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-full flex-col bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <img src={logo} className="w-36" />
                      <div className="ml-3 flex h-7 items-center pt-4">
                        <button
                          type="button"
                          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          onClick={handleClose}
                        >
                          <span className="sr-only">Close panel</span>
                          <IoClose className="h-8 w-8" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                    {children}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Menu;
