const products = require("../../model/product");
const jwt = require("jsonwebtoken");

async function getNewProduct(req, res) {
  try {
    const product = await products.find({}).sort({ createdAt: -1 });

    return res.status(200).json({ result: product.slice(0, 5) });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi Kesalahan" });
  }
}

async function getAllProduct(req, res) {
  try {
    const product = await products.find({}).sort({ createdAt: -1 });
    return res.status(200).json({ result: product });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi Kesalahan" });
  }
}

async function getDetailProduct(req, res) {
  const slug = req.params.slug;

  const gs = slug.split("-").join(" ");
  const product = await products.findOne({ productName: gs });
  try {
    if (!product) {
      return res.status(404).json({ message: "Produk tidak tersedia" });
    } else {
      function gJWT(prop) {
        return jwt.sign({ ind: prop }, process.env.ACCESS_TOKEN);
      }

      const generetCategory = gJWT(product.category);
      res.cookie("_cid", generetCategory, {
        maxAge: 356 * 24 * 3600000,
        secure: true,
        httpOnly: true,
      });

      const generetCatalog = gJWT(product.catalog);
      res.cookie("_caid", generetCatalog, {
        maxAge: 356 * 24 * 3600000,
        secure: true,
        httpOnly: true,
      });

      const getDataByCatalog = await products.find({
        catalog: product.catalog,
      });

      const getDataByCategory = await products.find({
        category: product.category,
      });

      return res.status(200).json({
        result: {
          detail: product,
          category: getDataByCategory,
          catalog: getDataByCatalog,
        },
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi Kesalahan" });
  }
}

async function getProductByHistory(req, res) {
  const cookieCategory = req.cookies._cid;
  const cookieCatalog = req.cookies._caid;
  try {
    if (cookieCategory && cookieCatalog) {
      const { ind } = jwt.verify(cookieCategory, process.env.ACCESS_TOKEN);
      const { ind: i } = jwt.verify(cookieCatalog, process.env.ACCESS_TOKEN);

      const productCategory = await products.find({ category: ind });
      const producCatalog = await products.find({ catalog: i });
      return res.status(200).json({
        result: {
          category: productCategory,
          catalog: producCatalog,
        },
      });
    } else {
      return res.status(200).json({ result: [] });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi Kesalahan" });
  }
}

async function getProductByCategory(req, res) {
  const catalog = req.query.catalog;
  const category = req.query.category;
  const sort = req.query.sort;

  try {
    if (typeof catalog !== "undefined" && typeof category !== "undefined") {
      const product = await products.find({ category, catalog }).sort({ sort });
      return res.status(200).json({ result: product, title: catalog });
    } else if (typeof catalog !== "undefined") {
      const product = await products.find({ catalog }).sort({ sort });
      return res.status(200).json({ result: product, title: catalog });
    } else {
      const product = await products.find({}).sort({ sort });
      return res.status(200).json({ result: product });
    }
  } catch (error) {
    return res.status(500).json({ message: "Terjadi Kesalahan" });
  }
}

module.exports = {
  getNewProduct,
  getDetailProduct,
  getProductByHistory,
  getAllProduct,
  getProductByCategory,
};
