import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiSelector } from "react-icons/hi";

function SelectCatalog({ data, catalog, setCatalog }) {
  return (
    <div className="w-full">
      <Listbox value={catalog} onChange={setCatalog}>
        <div className="relative">
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left border bg-white rounded-lg h-11 cursor-pointer hover:border-black duration-300">
            <span className="block truncate">{catalog?.catalog}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <HiSelector
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {data?.result?.map((c) =>
                c.catalog.map((b, i) => (
                  <Listbox.Option
                    key={i}
                    className={({ active }) =>
                      `select-none relative py-2 pl-4 pr-4  cursor-pointer ${
                        active ? "text-gray-900 bg-gray-100" : "text-gray-900"
                      }`
                    }
                    value={b}
                  >
                    <span
                      className={`block truncate
                          "font-normal"
                        }`}
                    >
                      {b.catalog}
                    </span>
                  </Listbox.Option>
                ))
              )}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export default SelectCatalog;
