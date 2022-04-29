const categorys = require("../../model/category");
const catalogs = require("../../model/catalog");
const banners = require("../../model/banner");

async function getCategoryByCatalog(req, res) {
  const category = req.params.category;
  const slug = category.split("-").join(" ");

  try {
    const data = await categorys
      .findOne({ category: slug })
      .sort({ createdAt: -1 })
      .populate("catalog");

    if (!data) {
      return res.status(404).json({ message: "Kategori tidak tersedia" });
    } else {
      const banner = await banners.find({ sorted: data.category });
      const catalog = await catalogs.find({ categoryId: data._id });

      return res.status(200).json({
        result: catalog,
        banner: banner,
        message: `Hasil untuk ${data.category}`,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi Kesalahan" });
  }
}

async function getCategory(req, res) {
  try {
    const category = await categorys
      .find()
      .sort({ createdAt: -1 })
      .populate("catalog");

    return res.status(200).json({ result: category });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi Kesalahan" });
  }
}

module.exports = { getCategory, getCategoryByCatalog };
