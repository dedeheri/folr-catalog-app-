const fs = require("fs");
const path = require("path");

function removeImage(locationPath) {
  const location = path.join(__dirname, "../../", locationPath);
  fs.unlinkSync(location);
}

module.exports = removeImage;
