const { validationResult } = require("express-validator");
const categorys = require("../../model/category");
const catalogs = require("../../model/catalog");
const latterUpperCase = require("../../utils/uppercase");
const path = require("path");
const fs = require("fs");

async function addCategory(req, res) {
  const id = req.decode.id;
  const category = req.body.category;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ message: errors.mapped() });
  }

  const categories = await categorys.findOne({
    category: latterUpperCase(category),
  });
  if (categories) {
    return res.status(409).json({ message: "Kategori sudah tersedia" });
  }

  try {
    await categorys({
      userId: id,
      category: latterUpperCase(category),
    }).save();

    return res.status(200).json({
      result: `Berhasil menambahkan kategori ${latterUpperCase(category)}`,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan" });
  }
}

async function addCatalog(req, res) {
  const catalog = req.body.catalog;
  const category = req.body.category;
  const image = req.file;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    if (image !== undefined) {
      const link = path.join(__dirname, "../../../", image.path);
      fs.unlinkSync(link);
    }
    return res.status(422).json({ message: errors.mapped() });
  }

  const categories = await categorys.findOne({ category });
  // const cataloggs = await catalogs.findOne({ categoryId: categories._id });

  if (!categories) {
    return res.status(404).json({ message: "Kategori tidak ada" });
  }

  console.log(categories._id);

  try {
    const catalogss = new catalogs({
      categoryId: categories._id,
      catalog,
      image: image.path,
    });

    await catalogss.save();
    await categorys.findByIdAndUpdate(
      { _id: categories._id },
      { $push: { catalog: catalogss._id } },
      { new: true }
    );
    res.status(200).json({
      result: `Berhasil Menambahkan ${catalog} dalam kategori ${categories.category}`,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi Kesalahan" });
  }
}

async function getCategory(req, res) {
  try {
    const data = await categorys.find({}).populate("catalog");
    return res.status(200).json({ result: data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan" });
  }
}

async function deleteCatalog(req, res) {
  const catalogId = req.params.catalogId;
  const categoryId = req.params.categoryId;

  try {
    const category = await categorys.findById(
      { _id: categoryId },
      { subCategory: { _id: catalogId } }
    );
    res.status(200).json({ result: category });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { addCategory, addCatalog, getCategory, deleteCatalog };
