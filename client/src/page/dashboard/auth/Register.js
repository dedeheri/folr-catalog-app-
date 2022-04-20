import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// redux
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../../redux/action/dashboard/auth";
// components
import Layout from "./Layout";
import Form from "../../../components/Form";
import FormPassword from "../../../components/FromPassword";
import Spin from "../../../components/Spin";
import Button from "../../../components/Button";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    signup: { error, fetching },
  } = useSelector((state) => state.auth);

  // form
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  // handle register
  function register(e) {
    e.preventDefault();

    dispatch(signUp(fullName, email, password, repeatPassword, navigate));
  }

  return (
    <Layout>
      <form onSubmit={register} className="mt-10 w-72 mx-auto space-y-4">
        <Form
          error={error?.message?.fullName?.msg}
          message={error?.message?.fullName?.msg}
          placeholder={"Nama Lengkap"}
          type={"text"}
          onChange={(e) => setFullName(e.target.value)}
        />
        <Form
          error={error?.message?.email?.msg}
          message={error?.message?.email?.msg}
          type={"email"}
          placeholder={"Email"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormPassword
          error={error?.message?.password?.msg}
          message={error?.message?.password?.msg}
          placeholder={"Kata Sandi"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormPassword
          error={error?.message?.repeatPassword?.msg}
          message={error?.message?.repeatPassword?.msg}
          placeholder={"Konfirmasi Kata Sandi"}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />

        {fetching ? <Spin /> : <Button name={"Registrasi"} />}

        <div className="flex justify-center space-x-1">
          <h1>Sudah punya akun?</h1>
          <Link className="font-semibold hover:underline" to={"/auth"}>
            Masuk
          </Link>
        </div>
      </form>
    </Layout>
  );
}

export default Register;
