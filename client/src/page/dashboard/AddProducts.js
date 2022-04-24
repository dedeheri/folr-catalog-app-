import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// redux
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../redux/action/dashboard/category";
import { addProducts } from "../../redux/action/dashboard/product";

// components
import Button from "../../components/Button";
import ButtonCancel from "../../components/ButtonCancel";
import Layout from "../../components/Dashboard/Layout";
import Form from "../../components/Form";
import FormCurrency from "../../components/FormCurrency";
import SelectCatalog from "../../components/SelectCatalog";
import SelectCategory from "../../components/SelectCategory";
import Spin from "../../components/Spin";
import Textarea from "../../components/Textarea";
import Upload from "../../components/Upload";
import Update from "../../components/Dashboard/Loading/Update";

function AddProducts() {
  const {
    add: { error, fetching },
  } = useSelector((state) => state.dashboardProducts);
  const {
    getCategory: { data, loading },
  } = useSelector((state) => state.dashboardCategory);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // calling api
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  // form
  const [image, setImage] = useState([]);
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [catalog, setCatalog] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [material, setMaterial] = useState("");
  const [width, setWidth] = useState("");
  const [lengthy, setLengthy] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [tokopedia, setTokopedia] = useState("");
  const [shopee, setShopee] = useState("");

  useEffect(() => {
    setCategory(data?.result?.[0]);
    setCatalog(data?.result?.[1]?.catalog[0]);
  }, [data]);

  // image
  const [previewOne, setPreviewOne] = useState(null);
  const [previewTwo, setPreviewTwo] = useState(null);
  const [previewThree, setPreviewThree] = useState(null);
  const [previewFour, setPreviewFour] = useState(null);
  const [imageOne, setImageOne] = useState("");
  const [imageTwo, setImageTwo] = useState("");
  const [imageThree, setImageThree] = useState("");
  const [imageFour, setImageFour] = useState("");

  function handlePreviewOne(e) {
    const image = e.target.files[0];
    setImageOne(image);
    setPreviewOne(URL.createObjectURL(image));
  }

  function handlePreviewTwo(e) {
    const image = e.target.files[0];
    setImageTwo(image);
    setPreviewTwo(URL.createObjectURL(image));
  }
  function handlePreviewThree(e) {
    const image = e.target.files[0];
    setImageThree(image);
    setPreviewThree(URL.createObjectURL(image));
  }
  function handlePreviewFour(e) {
    const image = e.target.files[0];
    setImageFour(image);
    setPreviewFour(URL.createObjectURL(image));
  }

  function handleDeletePreviewOne() {
    setPreviewOne("");
    setImageOne("");
  }
  function handleDeletePreviewTwo() {
    setPreviewTwo("");
    setImageTwo("");
  }
  function handleDeletePreviewThree() {
    setPreviewThree("");
    setImageThree("");
  }
  function handleDeletePreviewFour() {
    setPreviewFour("");
    setImageFour("");
  }

  useEffect(() => {
    setImage([imageOne, imageTwo, imageThree, imageFour]);
  }, [imageOne, imageTwo, imageThree, imageFour]);

  function handleAddProduct(e) {
    e.preventDefault();
    const formData = new FormData();

    for (let i = 0; i < image.length; i++) {
      console.log(image[i]);
      formData.append("image", image[i]);
    }

    formData.append("productName", productName);
    formData.append("price", price);
    formData.append("category", category.category);
    formData.append("catalog", catalog.catalog);
    formData.append("description", description);
    formData.append("material", material);
    formData.append("weight", weight);
    formData.append("lengthy", lengthy);
    formData.append("width", width);
    formData.append("height", height);
    formData.append("tokopedia", tokopedia);
    formData.append("shopee", shopee);

    dispatch(addProducts(formData, navigate));
  }

  return (
    <Layout>
      {loading ? (
        <Update />
      ) : (
        <form onSubmit={handleAddProduct} className="max-w-5xl mx-auto">
          <h1 className="font-medium text-2xl">Tambah Produk</h1>
          {/* parent */}
          <div className="space-y-3 mt-5">
            {/* image */}
            <div className="border rounded-md">
              <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                <div className="space-y-3">
                  <h1 className="text-md font-medium">Foto Produk</h1>
                  <p className="text-base text-gray-500 leading-5">
                    Format gambar .jpg .jpeg .png dan ukuran minimum 300 x 300px
                    (Untuk gambar optimal gunakan ukuran minimum 700 x 700 px).
                  </p>
                </div>
                <div className="col-span-2 space-y-1">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    <Upload
                      handleDeletePreview={handleDeletePreviewOne}
                      error={error?.message?.image?.msg || error?.error?.multer}
                      image={previewOne}
                      onChange={handlePreviewOne}
                    />
                    <Upload
                      handleDeletePreview={handleDeletePreviewTwo}
                      error={error?.message?.image?.msg || error?.error?.multer}
                      image={previewTwo}
                      onChange={handlePreviewTwo}
                    />
                    <Upload
                      handleDeletePreview={handleDeletePreviewThree}
                      image={previewThree}
                      onChange={handlePreviewThree}
                      error={error?.message?.image?.msg || error?.error?.multer}
                    />
                    <Upload
                      handleDeletePreview={handleDeletePreviewFour}
                      image={previewFour}
                      onChange={handlePreviewFour}
                      error={error?.message?.image?.msg || error?.error?.multer}
                    />
                  </div>
                  {error?.message?.image?.msg && (
                    <p className="text-red-500">{error?.message?.image?.msg}</p>
                  )}
                  {error?.error?.multer && (
                    <p className="text-red-500">{error?.error?.multer}</p>
                  )}
                </div>
              </div>
            </div>

            {/* infromasi */}
            <div className="border rounded-md p-5">
              <h1 className="text-lg font-medium ">Informasi Produk</h1>
              {/* Nama Produk*/}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
                <div className="space-y-3">
                  <h1 className="text-md font-medium">Nama Produk</h1>
                  <p className="text-base text-gray-500 leading-5">
                    Cantumkan min. 20 karakter agar semakin menarik dan mudah
                    ditemukan oleh pembeli.
                  </p>
                </div>
                <div className="col-span-2">
                  <Form
                    message={error?.message?.productName?.msg}
                    error={error?.message?.productName?.msg}
                    placeholder="Nama Produk"
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </div>
              </div>
              {/* Kategori dan Katalog */}
              <div className="grid grid-cols-1 md:grid-cols-3  gap-6 w-full mt-8">
                <div className="space-y-3">
                  <h1 className="text-md font-medium">Kategori dan Katalog</h1>
                </div>
                <div className="col-span-2">
                  <div className="flex space-x-2">
                    <SelectCategory
                      data={data}
                      category={category}
                      setCategory={setCategory}
                    />
                    <SelectCatalog
                      data={data}
                      catalog={catalog}
                      setCatalog={setCatalog}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* detail */}
            <div className="border rounded-md p-5">
              <h1 className="text-lg font-medium ">Detail Produk</h1>
              {/* Deskripsi Produk*/}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
                <div className="space-y-3">
                  <h1 className="text-md font-medium">Deskripsi Produk</h1>
                  <p className="text-base text-gray-500 leading-5">
                    Cantumkan min. 260 karakter agar pembeli semakin mudah
                    mengerti dan menemukan produk anda
                  </p>
                </div>
                <div className="col-span-2">
                  <Textarea
                    message={error?.message?.description?.msg}
                    error={error?.message?.description?.msg}
                    placeholder={"Deskripsi"}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* harga */}
            <div className="border rounded-md p-5">
              <h1 className="text-lg font-medium ">Harga Produk</h1>
              {/* Deskripsi Produk*/}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
                <div className="space-y-3">
                  <h1 className="text-md font-medium">Harga Produk</h1>
                </div>
                <div className="col-span-2">
                  <FormCurrency
                    span={"Rp"}
                    message={error?.message?.price?.msg}
                    error={error?.message?.price?.msg}
                    placeholder={"Harga"}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Bahan dan berat */}
            <div className="border rounded-md p-5">
              <h1 className="text-lg font-medium ">Bahan dan berat Produk</h1>
              {/* Bahan */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
                <div className="space-y-3">
                  <h1 className="text-md font-medium">Bahan Produk</h1>
                </div>
                <div className="col-span-2">
                  <Form
                    message={error?.message?.material?.msg}
                    error={error?.message?.material?.msg}
                    placeholder={"Bahan"}
                    onChange={(e) => setMaterial(e.target.value)}
                  />
                </div>
              </div>
              {/* Berat Produk*/}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
                <div className="space-y-3">
                  <h1 className="text-md font-medium">Berat Produk</h1>
                  <p className="text-base text-gray-500 leading-5">
                    Masukkan berat dengan menimbang produk setelah dikemas.
                  </p>
                </div>
                <div className="col-span-2">
                  <FormCurrency
                    message={error?.message?.weight?.msg}
                    error={error?.message?.weight?.msg}
                    placeholder={"Berat"}
                    span="Gram"
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>
              </div>
              {/* Ukuran */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
                <div className="space-y-3">
                  <h1 className="text-md font-medium">Ukuran Produk</h1>
                  <p className="text-base text-gray-500 leading-5">
                    Masukkan ukuran produk setelah dikemas untuk menghitung
                    berat volume
                  </p>
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <FormCurrency
                      message={error?.message?.lengthy?.msg}
                      error={error?.message?.lengthy?.msg}
                      placeholder={"Panjang"}
                      span="Cm"
                      onChange={(e) => setLengthy(e.target.value)}
                    />
                    <FormCurrency
                      message={error?.message?.width?.msg}
                      error={error?.message?.width?.msg}
                      placeholder={"Lebar"}
                      span="Cm"
                      onChange={(e) => setWidth(e.target.value)}
                    />
                    <FormCurrency
                      message={error?.message?.height?.msg}
                      error={error?.message?.height?.msg}
                      placeholder={"Tinggi"}
                      span="Cm"
                      onChange={(e) => setHeight(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Link */}
            <div className="border rounded-md p-5">
              <h1 className="text-lg font-medium ">Link Produk</h1>
              {/* Tokopida*/}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
                <div className="space-y-3">
                  <h1 className="text-md font-medium">Tokopedia</h1>
                </div>
                <div className="col-span-2">
                  <Form
                    message={error?.message?.tokopedia?.msg}
                    error={error?.message?.tokopedia?.msg}
                    placeholder={"Tokopedia"}
                    onChange={(e) => setTokopedia(e.target.value)}
                  />
                </div>
              </div>
              {/* Shoppe*/}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
                <div className="space-y-3">
                  <h1 className="text-md font-medium">Shoppe</h1>
                </div>
                <div className="col-span-2">
                  <Form
                    message={error?.message?.shopee?.msg}
                    error={error?.message?.shopee?.msg}
                    placeholder={"Shoppe"}
                    onChange={(e) => setShopee(e.target.value)}
                  />
                </div>
              </div>
            </div>
            {/* end parent */}
          </div>
          <div className="flex justify-end my-10 ">
            <div className="w-96 flex space-x-2 ">
              <ButtonCancel link={"/dashboard/product"} name="Batal" />
              {fetching ? <Spin /> : <Button name={"Simpan"} />}
            </div>
          </div>
        </form>
      )}
    </Layout>
  );
}

export default AddProducts;
