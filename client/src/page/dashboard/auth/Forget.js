import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Form from "../../../components/Form";
import Spin from "../../../components/Spin";
import { forget } from "../../../redux/action/dashboard";

// components
import Layout from "./Layout";

// icons
import { GrFormClose, GrSend } from "react-icons/gr";

function Forget() {
  const {
    forget: { data, fetching, error, success },
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // form
  const [email, setEmail] = useState("");
  // error
  const [errorEmail, setErrorEmail] = useState(false);

  function handleForgetPassword(e) {
    e.preventDefault();
    dispatch(forget(email));
  }

  useEffect(() => {
    error?.message?.email?.msg ? setErrorEmail(true) : setErrorEmail(false);
  }, [error]);

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(success);
  }, [success]);

  return (
    <Layout>
      <form
        onSubmit={handleForgetPassword}
        className="mt-10 w-72 mx-auto space-y-4"
      >
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
        <Form
          message={error?.message?.email?.msg}
          error={errorEmail}
          placeholder={"Email"}
          type={"email"}
          onChange={(e) => setEmail(e.target.value)}
        />

        {fetching ? <Spin /> : <Button name={"Kirim"} />}

        <div className="flex justify-center space-x-1">
          <h1>Kembali ke masuk?</h1>
          <Link className="font-semibold hover:underline" to={"/auth"}>
            Masuk
          </Link>
        </div>
      </form>
    </Layout>
  );
}

export default Forget;
