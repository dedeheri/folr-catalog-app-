import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiOutlineCheck, HiSelector } from "react-icons/hi";

function SelectCatalog({ data, category, setCategory }) {
  return (
    <div className="w-full">
      <Listbox value={category} onChange={setCategory}>
        <div className="relative">
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left border bg-white rounded-lg h-11 cursor-pointer hover:border-black duration-300">
            <span className="block truncate">{category?.category}</span>
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
              {data?.result?.map((c, i) => (
                <Listbox.Option
                  key={i}
                  className={({ active }) =>
                    `cursor-default select-none relative py-2 pl-10 pr-4 ${
                      active ? "text-gray-900 bg-gray-100" : "text-gray-900"
                    }`
                  }
                  value={c}
                >
                  {({ category }) => (
                    <>
                      <span
                        className={`block truncate ${
                          category ? "font-medium" : "font-normal"
                        }`}
                      >
                        {c.category}
                      </span>
                      {category ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <HiOutlineCheck
                            className="w-5 h-5"
                            aria-hidden="true"
                          />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export default SelectCatalog;
