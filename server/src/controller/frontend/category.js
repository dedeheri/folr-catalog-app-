const categorys = require("../../model/category");
const catalogs = require("../../model/catalog");

async function getCategory(req, res) {
  const category = req.query.category;
  try {
    if (category) {
      const data = await categorys
        .findOne({ category })
        .sort({ createdAt: -1 })
        .populate("catalog");

      // console.log(data._id);

      if (data.length === 0) {
        return res.status(200).json({ message: "Kategori tidak tersedia" });
      } else {
        const catalog = await catalogs.find({ categoryId: data._id });

        return res.status(200).json({
          result: catalog,
          message: `Kategori ${data.category}`,
        });
      }
    } else {
      const data = await categorys
        .find({})
        .sort({ createdAt: -1 })
        .populate("catalog");
      return res.status(200).json({ result: data });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi Kesalahan" });
  }
}

async function getCategoryByCatalog(req, res) {
  const catalog = req.query.catalog;

  const category = await categorys
    .find({ catalog })
    .sort({ createdAt: -1 })
    .populate("catalog");

  try {
    console.log(category);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getCategory, getCategoryByCatalog };
