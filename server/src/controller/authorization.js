const authorizations = require("../model/authorization.js");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const latterUpperCase = require("../utils/uppercase.js");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

function genereteAccessToken(props, exp) {
  return jwt.sign({ id: props._id }, process.env.ACCESS_TOKEN, {
    expiresIn: exp,
  });
}

function genereteRefreshToken(email) {
  return jwt.sign({ id: email }, process.env.REFRESH_TOKEN);
}

async function signIn(req, res) {
  const email = req.body.email;
  const plantPassword = req.body.password;

  const rememberMe = req.body.rememberMe;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ message: errors.mapped() });
  }

  const authorization = await authorizations.findOne({ email });
  if (!authorization) {
    return res
      .status(404)
      .json({ message: { email: "Email tidak terdaftar" } });
  }

  try {
    const compare = bcrypt.compareSync(plantPassword, authorization.password);
    if (!compare) {
      return res
        .status(401)
        .json({ message: { password: "Kata sandi salah" } });
    }

    const accessToken = genereteAccessToken(authorization, "30d");
    const refreshToken = genereteRefreshToken(email);

    await authorizations.findByIdAndUpdate(
      { _id: authorization._id },
      {
        refreshToken: refreshToken,
      },
      { new: true }
    );

    if (rememberMe) {
      res.cookie("token", accessToken, {
        maxAge: 30 * 24 * 3600000,
      });
      res.cookie("logged", true, {
        maxAge: 30 * 24 * 3600000,
      });
    } else {
      res.cookie("logged", true, {
        maxAge: 1 * 24 * 3600000,
      });
      res.cookie("token", accessToken, {
        maxAge: 1 * 24 * 3600000,
      });
    }

    const { password, ...rest } = authorization._doc;
    return res.status(200).json({ token: accessToken, result: rest });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Terjadi kesalahan" });
  }
}

async function signUp(req, res) {
  const fullName = req.body.fullName;
  const email = req.body.email;
  const password = req.body.password;
  const repeatPassword = req.body.repeatPassword;

  console.log(password);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ message: errors.mapped() });
  }

  const authorization = await authorizations.findOne({ email });
  if (authorization) {
    return res.status(409).json({ message: "Email sudah terdaftar" });
  }

  try {
    const hash = bcrypt.hashSync(password, 10);

    const newAuthorization = new authorizations({
      fullName: latterUpperCase(fullName),
      email,
      password: hash,
      refreshToken: genereteRefreshToken(email),
    });
    await newAuthorization.save();

    res.status(200).json({
      result: newAuthorization,
      message: `Email ${email} berhasil dibuat!`,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Terjadi kesalahan" });
  }
}

async function logOut(req, res) {
  const cookies = req.cookies;

  try {
    Object.keys(cookies).map((_) => {
      res.clearCookie(_);
    });
    return res.status(200).json({ message: "Berhasil keluar" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Terjadi Kesalahan" });
  }
}

async function forget(req, res) {
  const email = req.body.email;

  // validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ message: errors.mapped() });
  }

  const authorization = await authorizations.findOne({ email });
  if (!authorization) {
    return res.status(404).json({ message: "Email belum terdaftar" });
  }

  try {
    const transport = nodemailer.createTransport({
      service: process.env.NODEMAILER_SERVICE,
      host: process.env.NODEMAILER_HOST,
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    });

    const token = genereteAccessToken(authorization.email, "1d");
    const link = `${process.env.BASE_URL}/auth/reset?token=${token}&id=${authorization._id}`;

    await transport.sendMail(
      {
        from: process.env.NODEMAILER_USER,
        to: authorization.email,
        subjet: "Reset Password",
        text: link,
      },
      function (err) {
        if (err) {
          return res
            .status(200)
            .json({ message: `Gagal kirim email ke ${email}` });
        }

        return res
          .status(200)
          .json({ message: `Email berhasil dikirim ke ${email}` });
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Terjadi Kesalahan" });
  }
}

async function expToken(req, res) {
  const token = req.query.token;

  if (!token) {
    return res.status(404).json({ message: "Terjadi kesalahan" });
  }

  try {
    jwt.verify(token, process.env.ACCESS_TOKEN, function (err) {
      if (err) {
        return res.status(422).json({ message: "Token expired" });
      } else {
        res.status(200).json({ message: "token working" });
      }
    });
  } catch (error) {
    return res.status(500).json({ message: "Terjadi kesalahan" });
  }
}

async function reset(req, res) {
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  const id = req.query.id;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ message: errors.mapped() });
  }

  const authorization = await authorizations.findById({ _id: id });
  if (!authorization) {
    return res.status(404).json({ message: "User tidak ditemukan" });
  }

  try {
    const hash = await bcrypt.hash(password, 10);

    await authorizations.findByIdAndUpdate(
      { _id: id },
      { password: hash },
      { new: true }
    );
    return res.status(200).json({ message: "Berhasil reset password" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan" });
  }
}

async function user(req, res) {
  const id = req.decode.id;

  const authorization = await authorizations.findById({ _id: id });
  if (!authorization) {
    return res.status(404).json({ message: "User tidak ditemukan" });
  }

  try {
    const { password, ...rest } = authorization._doc;
    return res.status(200).json({ result: rest });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi Kesalahan" });
  }
}

module.exports = { signIn, signUp, logOut, forget, expToken, reset, user };
