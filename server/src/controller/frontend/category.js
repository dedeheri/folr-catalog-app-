const categorys = require("../../model/category");

async function getCategory(req, res) {
  try {
    const category = await categorys
      .find({})
      .sort({ createdAt: -1 })
      .populate("catalog");
    return res.status(200).json({ result: category });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi Kesalahan" });
  }
}

module.exports = { getCategory };
