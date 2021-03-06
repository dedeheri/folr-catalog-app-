const { body } = require("express-validator");

function validation(props) {
  switch (props) {
    case "SIGNUP": {
      return [
        body("fullName")
          .notEmpty()
          .withMessage("Name Lengkap tidak boleh kosong"),
        body("email")
          .notEmpty()
          .withMessage("Email tidak boleh kosong")
          .isEmail()
          .withMessage("Format email tidak didukung"),
        body("password")
          .notEmpty()
          .withMessage("Kata Sandi tidak boleh kosong")
          .isLength({ min: 6 })
          .withMessage("Kata Sandi minimal 6 karakter atau lebih"),
        body("repeatPassword")
          .notEmpty()
          .withMessage("Konfirmasi Kata Sandi tidak boleh kosong")
          .custom((value, { req }) => {
            if (value !== req.body.password) {
              throw new Error("Kata sandi tidak sama");
            }
            return true;
          }),
      ];
    }

    // signin
    case "SIGNIN": {
      return [
        body("email")
          .notEmpty()
          .withMessage("Email tidak boleh kosong")
          .isEmail()
          .withMessage("Format email tidak didukung"),
        body("password")
          .notEmpty()
          .withMessage("Kata Sandi tidak boleh kosong")
          .isLength({ min: 6 })
          .withMessage("Kata Sandi minimal 6 karakter atau lebih"),
      ];
    }

    // forget
    case "FORGET": {
      return [
        body("email")
          .notEmpty()
          .withMessage("Email tidak boleh kosong")
          .isEmail()
          .withMessage("Format email tidak didukung"),
      ];
    }

    // reset
    case "RESET": {
      return [
        body("password")
          .notEmpty()
          .withMessage("Kata Sandi tidak boleh kosong")
          .isLength({ min: 6 })
          .withMessage("Kata Sandi minimal 6 karakter atau lebih"),
        body("confirmPassword")
          .notEmpty()
          .withMessage("Konfirmasi Kata Sandi tidak boleh kosong")
          .custom((value, { req }) => {
            if (value !== req.body.password) {
              throw new Error("Kata sandi tidak sama");
            }
            return true;
          }),
      ];
    }
    // add product
    case "UPDATE_PRODUCT": {
      return [
        body("productName")
          .notEmpty()
          .withMessage("Nama Produk tidak boleh kosong"),
        body("price").notEmpty().withMessage("Harga tidak boleh kosong"),
        body("material").notEmpty().withMessage("Bahan tidak boleh kosong"),
        body("category").notEmpty().withMessage("Kategori tidak boleh kosong"),
        body("catalog").notEmpty().withMessage("Katalog tidak boleh kosong"),
        body("description")
          .notEmpty()
          .withMessage("Deskripsi tidak boleh kosong"),
        body("lengthy").notEmpty().withMessage("Panjang tidak boleh kosong"),
        body("width").notEmpty().withMessage("Lebar tidak boleh kosong"),
        body("height").notEmpty().withMessage("Tinggi tidak boleh kosong"),
        body("weight").notEmpty().withMessage("Berat tidak boleh kosong"),
        body("tokopedia")
          .notEmpty()
          .withMessage("Link Tokopedia tidak boleh kosong"),
        body("shopee").notEmpty().withMessage("Link Shoppe tidak boleh kosong"),
      ];
    }

    case "PRODUCT": {
      return [
        body("image").custom((value, { req }) => {
          if (req.files.length == 0) {
            throw new Error("Produk harus memiliki minimum 1 gambar");
          }
          return true;
        }),
        body("productName")
          .notEmpty()
          .withMessage("Nama Produk tidak boleh kosong"),
        body("price").notEmpty().withMessage("Harga tidak boleh kosong"),
        body("material").notEmpty().withMessage("Bahan tidak boleh kosong"),
        body("category").notEmpty().withMessage("Kategori tidak boleh kosong"),
        body("catalog").notEmpty().withMessage("Katalog tidak boleh kosong"),
        body("description")
          .notEmpty()
          .withMessage("Deskripsi tidak boleh kosong"),
        body("lengthy").notEmpty().withMessage("Panjang tidak boleh kosong"),
        body("width").notEmpty().withMessage("Lebar tidak boleh kosong"),
        body("height").notEmpty().withMessage("Tinggi tidak boleh kosong"),
        body("weight").notEmpty().withMessage("Berat tidak boleh kosong"),
        body("tokopedia")
          .notEmpty()
          .withMessage("Link Tokopedia tidak boleh kosong"),
        body("shopee").notEmpty().withMessage("Link Shoppe tidak boleh kosong"),
      ];
    }

    // add feedback
    case "FEEDBACK": {
      return [
        body("feedback").notEmpty().withMessage("Masukan tidak boleh kosong"),
      ];
    }

    // category
    case "CATEGORY": {
      return [
        body("image").custom((value, { req }) => {
          if (!req.file) {
            throw new Error("Gambar tidak boleh kosong");
          }
          return true;
        }),
        body("category").notEmpty().withMessage("Kategori tidak boleh kosong"),
      ];
    }

    // catalog
    case "CATALOG": {
      return [
        body("category").notEmpty().withMessage("Kategori tidak boleh kosong"),
        body("catalog").notEmpty().withMessage("Katalog tidak boleh kosong"),
        body("image").custom((value, { req }) => {
          if (!req.file) {
            throw new Error("Gambar tidak boleh kosong");
          }
          return true;
        }),
      ];
    }
    // catalog
    case "UPDATE_CATALOG": {
      return [
        body("catalog").notEmpty().withMessage("Katalog tidak boleh kosong"),
        body("image").custom((value, { req }) => {
          if (req.body) {
            return true;
          }
          if (!req.file) {
            throw new Error("Gambar tidak boleh kosong");
          }
          return true;
        }),
      ];
    }

    // gallery
    case "GALLERY": {
      return [
        body("image").custom((value, { req }) => {
          if (!req.file) {
            throw new Error("Gambar tidak boleh kosong");
          }
          return true;
        }),
        body("description")
          .notEmpty()
          .withMessage("Deskripsi tidak boleh kosong"),
      ];
    }

    // banner
    case "BANNER": {
      return [
        body("image").custom((value, { req }) => {
          if (!req.file) {
            throw new Error("Gambar tidak boleh kosong");
          }
          return true;
        }),
        body("link").notEmpty().withMessage("Link tidak boleh kosong"),
      ];
    }

    default:
      return props;
  }
}

module.exports = validation;
