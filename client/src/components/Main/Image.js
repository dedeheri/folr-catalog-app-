import React, { useEffect, useState, Fragment } from "react";

import { Dialog, Transition } from "@headlessui/react";
import * as actionTypeStyle from "../../redux/action-types-style";
import { useDispatch, useSelector } from "react-redux";

import { MdOutlineClose } from "react-icons/md";

function Image() {
  const {
    image: { condition, url, title, data },
  } = useSelector((state) => state.style);
  const dispatch = useDispatch();
  const [preview, setPreview] = useState("");
  const [active, setActive] = useState("");

  useEffect(() => {
    setPreview(url);
    setActive(url);
  }, [data, url]);

  function hanldeImage(prop) {
    setPreview(prop);
    setActive(prop);
  }

  function closeModal() {
    dispatch({ type: actionTypeStyle.IMAGE_OFF });
  }

  return (
    <Transition appear show={condition} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center ">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-5xl h-[40rem] md:h-[34rem] p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl space-y-3">
              <div className="flex justify-between">
                <h1 className="font-medium text-2xl">{title}</h1>

                <MdOutlineClose
                  onClick={closeModal}
                  fontSize={32}
                  className="text-gray-600 bg-gray-100 p-1 rounded-full cursor-pointer hover:bg-gray-200 duration-300"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <img
                  src={process.env.REACT_APP_URL_IMAGE + preview}
                  alt={process.env.REACT_APP_URL_IMAGE + preview}
                  className="w-full rounded-md col-span-2"
                />

                <div className="space-y-3">
                  <h1 className="font-medium text-lg">Gambar Lainya</h1>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {data?.result?.detail?.image?.map((_, i) => (
                      <div
                        onClick={() => hanldeImage(_)}
                        className={`p-1 cursor-pointer hover:border-2 hover:border-blue-500 duration-300 rounded-md ${
                          active === _
                            ? "border-2 border-blue-500"
                            : "border-2 border-transparent"
                        }`}
                      >
                        <img
                          key={i}
                          src={process.env.REACT_APP_URL_IMAGE + _}
                          alt={process.env.REACT_APP_URL_IMAGE + _}
                          className="md:h-20 rounded-md"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

export default Image;
