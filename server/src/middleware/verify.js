const jsonwebtoken = require("jsonwebtoken");

async function verify(req, res, next) {
  const token = req.cookies.token;
  if (token) {
    const jwt = jsonwebtoken.verify(token, process.env.ACCESS_TOKEN);
    req.decode = jwt;
    next();
  } else {
    res.status(401).json({ message: "Harap masuk untuk melanjutkan" });
  }
}
module.exports = verify;
