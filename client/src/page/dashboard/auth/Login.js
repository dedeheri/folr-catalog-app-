import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

// components
import Button from "../../../components/Button";
import Form from "../../../components/Form";
import FormPassword from "../../../components/FromPassword";
import Spin from "../../../components/Spin";

import { signIn } from "../../../redux/action/dashboard";
import Layout from "./Layout";

import * as actionTypes from "../../../redux/action-types";

function Login() {
  const {
    signin: { fetching, error },
  } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // border
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  function handleSignIn(e) {
    e.preventDefault();
    dispatch(signIn(email, password, rememberMe, navigate));
  }

  useEffect(() => {
    error?.message?.email?.msg ? setErrorEmail(true) : setErrorEmail(false);
    error?.message?.email ? setErrorEmail(true) : setErrorEmail(false);

    error?.message?.password?.msg
      ? setErrorPassword(true)
      : setErrorPassword(false);
    error?.message?.password ? setErrorPassword(true) : setErrorPassword(false);
  }, [error]);

  useEffect(() => {
    return () => {
      dispatch({ type: actionTypes.REMOVE_MESSAGE_REGISTER });
    };
  }, []);

  return (
    <Layout>
      {/* section 1 */}
      <form onSubmit={handleSignIn} className="mt-10 w-72 mx-auto space-y-4">
        <Form
          message={error?.message?.email?.msg || error?.message?.email}
          placeholder={"Email"}
          type="email"
          error={errorEmail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormPassword
          message={error?.message?.password?.msg || error?.message?.password}
          placeholder={"Kata Sandi"}
          error={errorPassword}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* section 2 */}
        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <input
              onChange={(e) => setRememberMe(e.target.checked)}
              id="remember-me"
              name="remember-me"
              type="checkbox"
            />
            <label
              htmlFor="remember-me"
              className="text-md hover:underline cursor-pointer"
            >
              Tetap masuk
            </label>
          </div>
          <Link to={"/auth/forget"}>
            <p className="text-md hover:underline">Lupa kata sandi?</p>
          </Link>
        </div>

        {/* section 3 */}
        {fetching ? <Spin /> : <Button name={"Masuk"} />}

        <div className="flex justify-center space-x-1">
          <h1>Belum punya akun?</h1>
          <Link className="font-semibold hover:underline" to={"signup"}>
            Register
          </Link>
        </div>
      </form>
    </Layout>
  );
}

export default Login;
