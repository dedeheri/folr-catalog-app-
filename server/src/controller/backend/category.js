const { validationResult } = require("express-validator");
const categorys = require("../../model/category");
const catalogs = require("../../model/catalog");

const latterUpperCase = require("../../utils/uppercase");
const removeImage = require("../../utils/removeImage");

async function addCategory(req, res) {
  const id = req.decode.id;
  const category = req.body.category;
  const image = req.file;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    if (image !== undefined) {
      removeImage(image.path);
    }
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
      image: image.path,
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
      removeImage(image.path);
    }
    return res.status(422).json({ message: errors.mapped() });
  }

  const categories = await categorys.findOne({ category });
  if (!categories) {
    return res.status(404).json({ message: "Kategori tidak ada" });
  }

  const checkCatalog = await catalogs.findOne({ catalog });
  if (checkCatalog) {
    return res.status(409).json({ message: "Katalog sudah tersedia" });
  }

  try {
    const catalogss = new catalogs({
      categoryId: categories._id,
      catalog,
      image: image.path,
    });

    const catalogSave = await catalogss.save();
    await categorys.updateOne(
      { _id: categories._id },
      { $push: { catalog: catalogSave } }
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
    const data = await categorys.find().populate("catalog");
    return res.status(200).json({ result: data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan" });
  }
}

async function deleteCatalog(req, res) {
  const id = req.params.id;

  try {
    const catalog = await catalogs.findOne({ _id: id });

    if (!catalog) {
      return res.status(404).json({ message: "Katalog tidak tersedia" });
    } else {
      await catalogs.findByIdAndRemove({ _id: catalog._id });
      return res
        .status(200)
        .json({ result: `Berhasil hapus catalog ${catalog.catalog}` });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan" });
  }
}

async function detailCatalog(req, res) {
  const catalogId = req.query.catalogId;

  try {
    const catalog = await catalogs.findById({ _id: catalogId });
    const categoryss = await categorys.findById({ _id: catalog.categoryId });

    const { category, ...rest } = categoryss._doc;
    if (!catalog) {
      return res.status(404).json({ message: "Katalog tidak tersedia" });
    } else {
      return res.status(200).json({ result: { category, catalog } });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi Kesalahan" });
  }
}

async function updateCatalog(req, res) {
  const catergoryName = req.query.category;
  const catalogId = req.query.catalogId;
  const image = req.file;
  const catalogBody = req.body.catalog;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    if (image !== undefined) {
      removeImage(image.path);
    }

    return res.status(422).json({ message: errors.mapped() });
  }

  try {
    const category = await categorys.findOne({ category: catergoryName });
    const catalog = await catalogs.findById({ _id: catalogId });
    // check
    if (!category) {
      return res.status(404).json({ message: "Kategori tidak tersedia" });
    } else if (!catalog) {
      return res.status(404).json({ message: "Katalog tidak tersedia" });
    } else {
      await catalogs.findByIdAndUpdate(
        { _id: catalog._id },
        {
          catalog: catalogBody,
          image: image == undefined ? catalog.image : image.path,
        },
        {
          new: true,
        }
      );
      return res.status(200).json({ message: `Berhasil edit data` });
    }
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: "Terjadi kesalahan" });
  }
}

module.exports = {
  addCategory,
  addCatalog,
  getCategory,
  deleteCatalog,
  updateCatalog,
  detailCatalog,
};
