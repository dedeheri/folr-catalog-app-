import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

import { BiFilterAlt } from "react-icons/bi";

function Filter() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button>
            <div className="border bg-white rounded-md h-10 hover:bg-gray-100 cursor-pointer duration-300 flex justify-between items-center md:px-4 px-2 space-x-3">
              <BiFilterAlt fontSize={24} />
              <h1 className="text-md font-medium">Filter</h1>
            </div>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute w-80  px-4 mt-1 transform -translate-x-[82%] left-full sm:px-0">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                  <a className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">ASd</p>
                    </div>
                  </a>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

export default Filter;
