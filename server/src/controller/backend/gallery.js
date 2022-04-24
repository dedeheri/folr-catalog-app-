const { validationResult } = require("express-validator");
const gallerys = require("../../model/gallery");
const path = require("path");
const fs = require("fs");

async function addGallery(req, res) {
  const image = req.file;
  const description = req.body.description;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    if (image !== undefined) {
      const link = path.join(__dirname, "../../../", image.path);
      fs.unlinkSync(link);
    }
    return res.status(422).json({ message: errors.mapped() });
  }

  try {
    await new gallerys({
      image: image.path,
      description,
    }).save();

    return res.status(200).json({ message: "Berhasil menambahkan galeri" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi Kesalahan" });
  }
}

async function getGallery(req, res) {
  const sort = req.query.sort || -1;
  try {
    const gallery = await gallerys.find().sort({ createdAt: sort });
    return res.status(200).json({ result: gallery });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi Kesalahan" });
  }
}

module.exports = { addGallery, getGallery };
