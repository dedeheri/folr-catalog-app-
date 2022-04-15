const { validationResult } = require("express-validator");
const products = require("../../model/product.js");
const path = require("path");
const fs = require("fs");

async function addProduct(req, res) {
  const userId = req.decode.id;
  const title = req.body.title;
  const image = req.files;
  const price = req.body.price;
  const material = req.body.material;
  const category = req.body.category;
  const catalog = req.body.catalog;
  const description = req.body.description;
  const tokopedia = req.body.tokopedia;
  const shopee = req.body.shopee;
  const lengthy = req.body.lengthy;
  const width = req.body.width;
  const height = req.body.height;
  const weight = req.body.weight;

  // validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ message: errors.mapped() });
  }

  const img = image.map(({ path }) => path);

  try {
    await new products({
      userId,
      title,
      image: img,
      price,
      description,
      productInfo: {
        category,
        catalog,
        dimensions: {
          lengthy,
          width,
          height,
        },
        material,
        weight,
      },
      link: {
        shopee,
        tokopedia,
      },
    }).save();

    return res
      .status(200)
      .json({ message: `Berhasil menambahkan produk ${title}` });
  } catch (error) {
    return res.status(500).json({ message: "Terjadi Kesalahan" });
  }
}

async function getProduct(req, res) {
  const id = req.decode.id;
  const sort = req.query.sort;
  const category = req.query.category;

  try {
    const product = await products
      .find({ userId: { _id: id } })
      .sort({ createdAt: sort })
      .populate("userId");

    const page = {};
    page.total = product.length;

    return res.status(200).json({ page: page, result: product });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi Kesalahan!" });
  }
}

async function deleteProduct(req, res) {
  const id = req.params.id;

  try {
    const product = await products.findById({ _id: id });
    if (!product) {
      return res.status(404).json({ message: "Produk tidak ada" });
    }

    function remove(filePath) {
      filePath.map((_) => {
        const file = path.join(__dirname, "../../../", _);
        fs.unlinkSync(file);
      });
    }

    remove(product.image);
    await products.findByIdAndRemove({ _id: product._id }, { new: true });

    return res.status(200).json({ message: `Berhasil hapus ${product.title}` });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi Kesalahan!" });
  }
}

module.exports = { addProduct, getProduct, deleteProduct };
