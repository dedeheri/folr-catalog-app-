import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
// import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { HiOutlineCheck, HiSelector } from "react-icons/hi";

const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];

function Select({ data }) {
  const [selected, setSelected] = useState(data?.result[0]);
  const [query, setQuery] = useState("");

  //   console.log(data.result);

  const filteredPeople =
    query === ""
      ? data?.result
      : data?.result?.filter((c) =>
          c.category
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  console.log(filteredPeople);

  return (
    <div className="w-full">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div className="relative w-full text-left bg-white rounded-md h-10 border outline-none">
            <Combobox.Input
              className="w-full border-none outline-none bg-transparent focus:ring-0 py-2 pl-3 pr-10 text-sm leading-5 text-gray-900"
              displayValue={(person) => person.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <HiSelector
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {/* {filteredPeople.length === 0 && query !== "" ? (
                <div className="cursor-default select-none relative py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                Object.values(filteredPeople).map((person) => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) =>
                      `cursor-default select-none  relative py-2 pl-10 pr-4 ${
                        active ? "text-black bg-gray-100" : "text-gray-900"
                      }`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-black" : "text-teal-600"
                            }`}
                          >
                            <HiOutlineCheck
                              className="w-5 h-5"
                              aria-hidden="true"
                            />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )} */}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}

export default Select;
