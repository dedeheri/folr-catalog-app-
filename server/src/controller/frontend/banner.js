const banners = require("../../model/banner");

async function getBanner(req, res) {
  try {
    const banner = await banners.find({}).sort({ createdAt: -1 });
    return res.status(200).json({ result: banner });
  } catch (error) {
    return res.status(500).json({ message: "Terjadi kesalahan." });
  }
}

module.exports = { getBanner };
