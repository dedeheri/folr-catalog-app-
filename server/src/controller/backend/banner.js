const { validationResult } = require("express-validator");
const banners = require("../../model/banner");

const removeImage = require("../../utils/removeImage");

async function addBanner(req, res) {
  const image = req.file;
  const link = req.body.link;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    if (image !== undefined) {
      removeImage(image.path);
    }
    return res.status(422).json({ message: errors.mapped() });
  }

  try {
    await new banners({
      image: image.path,
      link,
    }).save();

    return res.status(200).json({ massage: "Berhasil menambahkan banner" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi Kesalahan" });
  }
}

async function getBanner(req, res) {
  const sort = req.body.sort || -1;
  try {
    const banner = await banners.find({}).sort({ createdAt: sort });
    return res.status(200).json({ result: banner });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi Kesalahan" });
  }
}

async function deleteBanner(req, res) {
  const id = req.params.id;
  try {
    const banner = await banners.findById({ _id: id });
    if (!banner) {
      return res.status(404).json({ message: "Banner tidak tersedia" });
    }

    await banners.findByIdAndDelete({ _id: id });
    removeImage(banner.image);

    return res.status(200).json({ message: "Berhasil menghapus banner" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi Kesalahan" });
  }
}

module.exports = { addBanner, getBanner, deleteBanner };
