import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../../redux/action-types-style";

// components
import Button from "../Button";
import Spin from "../Spin";

// image
import { remove } from "../../image";
import { removeBanner } from "../../redux/action/dashboard/banner";

function RemoveBanner() {
  const dispatch = useDispatch();
  const {
    banner: { condition, id },
  } = useSelector((state) => state.style);

  function closeModal() {
    dispatch({ type: actionTypes.REMOVE_BANNER_OFF });
  }
  function handleLogOut() {
    dispatch(removeBanner(id));
    closeModal();
  }

  return (
    <Transition appear show={condition} as={Fragment}>
      <Dialog
        as="div"
        className="fixed left-0 z-50 right-0 bottom-24 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity" />
          </Transition.Child>

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
            <div className="inline-block w-full  max-w-md  p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl ">
              <img src={remove} alt="remove" className="mx-auto w-1/2 py-3" />
              <div className="flex space-x-1 mt-8">
                <p className="text-lg mx-auto">Apakah anda yakin menghapus?</p>
              </div>

              <div className="mt-4 flex space-x-5 ">
                <button
                  onClick={closeModal}
                  type="submit"
                  className="h-10 w-full border hover:bg-gray-100 duration-300 rounded-md"
                >
                  <h1 className="text-lg font-medium">Batal</h1>
                </button>{" "}
                {false ? (
                  <Spin />
                ) : (
                  <Button onClick={handleLogOut} name={"Hapus"} />
                )}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

export default RemoveBanner;
