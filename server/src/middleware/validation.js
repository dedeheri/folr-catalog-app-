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
    case "PRODUCT": {
      return [
        body("title").notEmpty().withMessage("Nama Produk tidak boleh kosong"),
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

    default:
      return props;
  }
}

module.exports = validation;
