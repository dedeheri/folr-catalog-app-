import React, { useState } from "react";

// icons
import { AiOutlineClose } from "react-icons/ai";
import { FiTrash2, FiEye } from "react-icons/fi";

// redux
import * as actionTypes from "../../redux/action-types-style";
import { useDispatch, useSelector } from "react-redux";

// conponents
import Button from "../Button";

function Feedback() {
  const { feedback } = useSelector((state) => state.style);
  const dispatch = useDispatch();

  function closeFeedBack() {
    dispatch({ type: actionTypes.FEEDBACK_DASHBOARD_OFF });
  }

  const [previewImage, setPreviewImage] = useState("");

  function handleImage(e) {
    const image = e.target.files[0];
    setPreviewImage(URL.createObjectURL(image));
  }

  const image = {
    url: null,
  };

  return (
    <div
      className={`border z-40 fixed bg-white mb-4 bottom-0 right-4 w-96 h-[32rem] rounded-md shadow-md duration-300 transition -space-y-2 ease-in ${
        feedback
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0 mb-0"
      }`}
    >
      <div className="flex bg-gray-100 justify-between items-center border-b px-4 py-2 ">
        <h1 className="text-lg font-medium">Masukan</h1>
        <div
          onClick={closeFeedBack}
          className="mt-2 text-gray-500 hover:text-black p-1 cursor-pointer hover:bg-gray-100 rounded-full duration-300"
        >
          <AiOutlineClose fontSize={24} />
        </div>
      </div>

      <div className="px-4 py-2 pt-5 space-y-2">
        <h1 className="text-md font-medium">Gambar</h1>
        {/* 1 */}

        <div className="mt-1 h-32 flex justify-center px-2 py-2 border hover:border-slate-500 duration-300 border-gray-300 border-dashed rounded-md ">
          {previewImage ? (
            <div className="w-full relative group">
              <img
                src={previewImage}
                className="rounded-md w-full h-[6.8rem]"
              />
              <div className="absolute bottom-2 right-2  opacity-0 group-hover:opacity-100 duration-300 cursor-pointer flex items-center space-x-1">
                <div className="p-1 hover:bg-gray-300 duration-300 hover:bg-opacity-90 rounded-full">
                  <FiEye />
                </div>
                <div className="p-1 hover:bg-gray-300 duration-300 hover:bg-opacity-90 rounded-full">
                  <FiTrash2 />
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-1 text-center p-3">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium "
                >
                  <span>Tambahkan Gambar</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    onChange={handleImage}
                    type="file"
                    className="sr-only"
                  />
                </label>
              </div>
            </div>
          )}
        </div>

        {/* 2 */}
      </div>

      <div className="px-4 py-2 space-y-2">
        <h1 className="text-md font-medium">Masukan</h1>

        <textarea
          className="border w-full rounded-md hover:border-slate-500 duration-300 outline-none p-2"
          rows={3}
        />
      </div>
      <div className="px-4 py-2">
        <Button name={"Kirim"} />
      </div>

      <div className="px-4 py-2">
        <p className="leading-4 fixed bottom-6 text-gray-500 text-sm">
          Masukan berguna untuk developer terkait memperbaiki bug atau
          improvisasi fitur.
        </p>
      </div>
    </div>
  );
}

export default Feedback;
