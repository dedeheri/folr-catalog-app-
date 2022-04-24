import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import { BiFilterAlt } from "react-icons/bi";

function Filter() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full ">
          <div className="border rounded-md h-[2.6rem]  px-3 space-x-3 flex items-center">
            <BiFilterAlt fontSize={24} aria-hidden="true" />
            <h1 className="text-md text-black font-medium whitespace-nowrap">
              Filter
            </h1>
          </div>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-20 right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-gray-100 text-black" : "text-gray-900"
                  } group flex rounded-md items-center w-full px-2 py-1 text-sm`}
                >
                  <AiOutlineSortDescending
                    className="w-5 h-5 mr-2"
                    aria-hidden="true"
                  />
                  <h1 className="font-base text-lg">Terbaru</h1>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-gray-100 text-black" : "text-gray-900"
                  } group flex rounded-md items-center w-full px-2 py-1 text-sm`}
                >
                  <AiOutlineSortAscending
                    className="w-5 h-5 mr-2"
                    aria-hidden="true"
                  />
                  <h1 className="font-base text-lg">Terlama</h1>
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default Filter;
