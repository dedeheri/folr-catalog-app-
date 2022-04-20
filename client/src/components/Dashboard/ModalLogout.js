import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

import { useNavigate } from "react-router-dom";

// redux
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../../redux/action-types-style";

// components
import Button from "../Button";
import Spin from "../Spin";

// redux
import { signOut } from "../../redux/action/dashboard/auth";

// image
import { logout } from "../../image";

function ModalLogout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { modalLogOut } = useSelector((state) => state.style);
  const {
    user: { data },
    signout: { fetching },
  } = useSelector((state) => state.auth);

  function closeModal() {
    dispatch({ type: actionTypes.MODAL_LOG_OUT_OFF });
  }

  function handleLogOut() {
    closeModal();
    dispatch(signOut(navigate));
  }

  return (
    <Transition appear show={modalLogOut} as={Fragment}>
      <Dialog
        as="div"
        className="fixed left-0 right-0 bottom-24  z-10 overflow-y-auto"
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
            <Dialog.Overlay className="fixed inset-0" />
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
            <div className="inline-block w-full max-w-md  p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl ">
              <img src={logout} alt="remove" className="mx-auto" />
              <div className="flex justify-center space-x-1 mt-8">
                <p className="text-lg ">Apakah anda yakin ingin keluar?</p>
                <p className="font-medium text-lg">{data?.result?.fullName}</p>
              </div>

              <div className="mt-4 flex space-x-5 ">
                <button
                  onClick={closeModal}
                  type="submit"
                  className="h-10 w-full border hover:bg-gray-100 duration-300 rounded-md"
                >
                  <h1 className="text-lg font-medium">Batal</h1>
                </button>{" "}
                {fetching ? (
                  <Spin />
                ) : (
                  <Button onClick={handleLogOut} name={"Keluar"} />
                )}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

export default ModalLogout;
