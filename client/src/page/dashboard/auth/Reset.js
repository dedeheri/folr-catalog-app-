import React, { useEffect, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Button from "../../../components/Button";
import FormPassword from "../../../components/FromPassword";
import Spin from "../../../components/Spin";
import { getTokenExp, reset } from "../../../redux/action/dashboard";
import NotFound from "../../NotFound";
import Layout from "./Layout";

function Reset() {
  const { search } = useLocation();
  const dispatch = useDispatch();

  const {
    reset: { fetching, data, error, success },
    token: { error: expToken, loading },
  } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getTokenExp(search));
  }, [dispatch]);

  // alert
  const [show, setShow] = useState(false);
  // from
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // error
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);

  function handleReset(e) {
    e.preventDefault();

    dispatch(reset(password, confirmPassword, search));
  }

  useEffect(() => {
    error?.message?.password?.msg
      ? setErrorPassword(true)
      : setErrorPassword(false);
    error?.message?.confirmPassword?.msg
      ? setErrorConfirmPassword(true)
      : setErrorConfirmPassword(false);
  }, [error]);

  useEffect(() => {
    setShow(success);
  }, [success]);

  return (
    <>
      {loading ? (
        <div className="max-w-2xl mx-auto mt-20">
          <div className="w-72 mx-auto  space-y-3 animate-pulse">
            <div className="bg-gray-100 h-10 w-full rounded-md"></div>
            <div className="bg-gray-100 h-10 w-full rounded-md"></div>
            <div className="bg-gray-100 h-10 w-full rounded-md"></div>
            <div className="bg-gray-100 h-10 w-full rounded-md"></div>
            <div className="bg-green-100 h-10 w-full rounded-md"></div>
          </div>
        </div>
      ) : expToken ? (
        <NotFound />
      ) : (
        <Layout>
          <form onSubmit={handleReset} className="mt-10 w-72 mx-auto space-y-4">
            {show && (
              <div className="h-auto px-3 w-full bg-green-100 rounded-md p-1 flex items-center justify-between">
                <p className="leading-5">{data?.message}</p>
                <div
                  onClick={() => setShow(false)}
                  className="p-1 hover:bg-green-200 duration-300 cursor-pointer rounded-full"
                >
                  <GrFormClose fontSize={25} />
                </div>
              </div>
            )}

            <FormPassword
              error={errorPassword}
              message={error?.message?.password?.msg}
              placeholder={"Kata Sandi"}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormPassword
              error={errorConfirmPassword}
              message={error?.message?.confirmPassword?.msg}
              placeholder={"Konfrimasi Kata Sandi"}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            {fetching ? <Spin /> : <Button name={"Reset"} />}

            {show && (
              <div className="flex justify-center space-x-1">
                <h1>Masuk ke helaman login?</h1>
                <Link className="font-semibold hover:underline" to={"/auth"}>
                  Login
                </Link>
              </div>
            )}
          </form>
        </Layout>
      )}
    </>
  );
}

export default Reset;
