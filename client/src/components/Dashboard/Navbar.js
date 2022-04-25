import { Popover, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";

// image
import { logo } from "../../image";

// icons
import { IoMdMenu } from "react-icons/io";
import { CgChevronDown } from "react-icons/cg";
import { GrLogout } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";

// redux
import * as actionTypes from "../../redux/action-types-style";

function Navbar() {
  const dispatch = useDispatch();
  const {
    user: { data, loading },
  } = useSelector((state) => state.auth);

  function handleLogOut() {
    dispatch({ type: actionTypes.MODAL_LOG_OUT_ON });
  }

  function handleMenu() {
    dispatch({ type: actionTypes.MENU_DASHBOARD_ON });
  }

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <div
      className={`w-full z-40 sticky top-0 bg-white  h-16 border-b px-5 flex justify-between items-center duration-300 ${
        scroll ? "shadow-md" : ""
      }`}
    >
      <div className="flex items-center space-x-1">
        <div
          onClick={handleMenu}
          className="hover:bg-gray-100 cursor-pointer duration-300 p-1 rounded-md block md:hidden"
        >
          <IoMdMenu fontSize={25} />
        </div>
        <img src={logo} className="w-28 md:w-32" alt="logo" />
      </div>

      {/* popper */}
      <div>
        {loading ? (
          <div className="animate-pulse">
            <div className="bg-gray-100 h-8 w-36 rounded-md" />
          </div>
        ) : (
          <Popover className="relative ">
            {({ open }) => (
              <>
                <Popover.Button
                  className={`
                ${open ? "" : "text-opacity-90"}
                text-black group py-2 rounded-md inline-flex items-center text-lg font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <h1>{data?.result?.fullName}</h1>
                  <CgChevronDown
                    className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5  group-hover:text-opacity-80 transition ease-in-out duration-150`}
                    aria-hidden="true"
                  />
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
                  <Popover.Panel className="absolute z-10 w-72 max-w-sm px-4 transform -translate-x-[60%] md:-translate-x-[67%]  sm:px-0 lg:max-w-3xl">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="relative bg-white px-3 py-1 ">
                        <div
                          onClick={handleLogOut}
                          className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 cursor-pointer"
                        >
                          <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                            <GrLogout fontSize={25} />
                          </div>
                          <div className="ml-2">
                            <p className="text-lg text-gray-900">Keluar</p>
                          </div>
                        </div>

                        {/* a */}
                        <div className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 cursor-pointer">
                          <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                            <GrLogout fontSize={25} />
                          </div>
                          <div className="ml-2">
                            <p className="text-lg text-gray-900">Keluar</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        )}
      </div>
    </div>
  );
}

export default Navbar;
