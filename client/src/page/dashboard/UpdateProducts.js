import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

// components
import Layout from "../../components/Dashboard/Layout";
import Form from "../../components/Form";
import FormCurrency from "../../components/FormCurrency";
import Spin from "../../components/Spin";
import Textarea from "../../components/Textarea";
import Upload from "../../components/Upload";
import Update from "../../components/Dashboard/Loading/Update";
import Button from "../../components/Button";
import ButtonCancel from "../../components/ButtonCancel";
import SelectCatalog from "../../components/SelectCatalog";
import SelectCategory from "../../components/SelectCategory";

// redux
import { getCategory } from "../../redux/action/dashboard/category";

import {
  getProductsDetail,
  updateProducts,
} from "../../redux/action/dashboard/product";
import NotFound from "../../page/NotFound";

function UpdateProducts() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    getCategory: { data: categorys, loading: loadingg },
  } = useSelector((state) => state.dashboardCategory);

  const {
    detail: { data, error: errors, loading },
    update: { error },
  } = useSelector((state) => state.dashboardProducts);

  useEffect(() => {
    dispatch(getProductsDetail(id));
    dispatch(getCategory());
  }, [dispatch, id]);

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

  const [previewOne, setPreviewOne] = useState(null);
  const [previewTwo, setPreviewTwo] = useState(null);
  const [previewThree, setPreviewThree] = useState(null);
  const [previewFour, setPreviewFour] = useState(null);
  const [imageOne, setImageOne] = useState("");
  const [imageTwo, setImageTwo] = useState("");
  const [imageThree, setImageThree] = useState("");
  const [imageFour, setImageFour] = useState("");

  useEffect(() => {
    setImage(data?.result?.image);
    setProductName(data?.result?.productName);
    setDescription(data?.result?.description);
    setPrice(data?.result?.price);
    setCategory(data?.result?.productInfo);
    setCatalog(data?.result?.productInfo);
    setMaterial(data?.result?.productInfo?.material);
    setWeight(data?.result?.productInfo?.weight);
    setLengthy(data?.result?.productInfo?.dimensions?.lengthy);
    setWidth(data?.result?.productInfo?.dimensions?.width);
    setHeight(data?.result?.productInfo?.dimensions?.height);
    setTokopedia(data?.result?.link?.tokopedia);
    setShopee(data?.result?.link?.shopee);

    if (data?.result?.image[0] !== undefined) {
      setPreviewOne(process.env.REACT_APP_URL_IMAGE + data?.result?.image[0]);
    }
    if (data?.result?.image[1] !== undefined) {
      setPreviewTwo(process.env.REACT_APP_URL_IMAGE + data?.result?.image[1]);
    }
    if (data?.result?.image[2] !== undefined) {
      setPreviewThree(process.env.REACT_APP_URL_IMAGE + data?.result?.image[2]);
    }
    if (data?.result?.image[3] !== undefined) {
      setPreviewFour(process.env.REACT_APP_URL_IMAGE + data?.result?.image[3]);
    }
  }, [data]);

  useEffect(() => {
    setImage([imageOne, imageTwo, imageThree, imageFour]);
  }, [imageOne, imageTwo, imageThree, imageFour]);

  function handleUpdate(e) {
    e.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < image.length; i++) {
      formData.append("image", image[i]);
    }
    formData.append("productName", productName);
    formData.append("catalog", catalog.catalog);
    formData.append("category", category.category);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("material", material);
    formData.append("weight", weight);
    formData.append("lengthy", lengthy);
    formData.append("width", width);
    formData.append("height", height);
    formData.append("tokopedia", tokopedia);
    formData.append("shopee", shopee);
    dispatch(updateProducts(formData, id, navigate));
  }

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
    setPreviewOne(null);
    setImageOne(null);
  }
  function handleDeletePreviewTwo() {
    setPreviewTwo(null);
    setImageTwo(null);
  }
  function handleDeletePreviewThree() {
    setPreviewThree(null);
    setImageThree(null);
  }
  function handleDeletePreviewFour() {
    setPreviewFour(null);
    setImageFour(null);
  }

  return (
    <Layout>
      {loading ? (
        <Update />
      ) : errors ? (
        <NotFound />
      ) : (
        <form onSubmit={handleUpdate} className="max-w-5xl mx-auto">
          <h1 className="font-medium text-2xl">
            Edit Produk {data?.result?.productName}
          </h1>

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

                    {error?.message?.image?.msg && (
                      <p className="text-red-500">
                        {error?.message?.image?.msg}
                      </p>
                    )}
                    {error?.error?.multer && (
                      <p className="text-red-500">{error?.error?.multer}</p>
                    )}
                  </div>
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
                    value={productName || " "}
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
                  {loadingg ? (
                    <div className="flex space-x-2 animate-pulse">
                      <div className="bg-gray-100 w-full h-10 rounded-md" />
                      <div className="bg-gray-100 w-full h-10 rounded-md" />
                    </div>
                  ) : (
                    <div className="flex space-x-2">
                      <SelectCategory
                        category={category}
                        data={categorys}
                        setCategory={setCategory}
                      />
                      <SelectCatalog
                        data={categorys}
                        catalog={catalog}
                        setCatalog={setCatalog}
                      />
                    </div>
                  )}
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
                    value={description || " "}
                    placeholder={"Deskripsi"}
                    message={error?.message?.description?.msg}
                    error={error?.message?.description?.msg}
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
                    placeholder={"Harga"}
                    span={"Rp"}
                    value={price || " "}
                    message={error?.message?.price?.msg}
                    error={error?.message?.price?.msg}
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
                    placeholder={"Bahan"}
                    message={error?.message?.material?.msg}
                    error={error?.message?.material?.msg}
                    onChange={(e) => setMaterial(e.target.value)}
                    value={material || " "}
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
                    placeholder={"Berat"}
                    span="Gram"
                    message={error?.message?.weight?.msg}
                    error={error?.message?.weight?.msg}
                    onChange={(e) => setWeight(e.target.value)}
                    value={weight || " "}
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
                      placeholder={"Panjang"}
                      span="Cm"
                      message={error?.message?.lengthy?.msg}
                      error={error?.message?.lengthy?.msg}
                      onChange={(e) => setLengthy(e.target.value)}
                      value={lengthy || " "}
                    />
                    <FormCurrency
                      placeholder={"Lebar"}
                      span="Cm"
                      message={error?.message?.width?.msg}
                      error={error?.message?.width?.msg}
                      onChange={(e) => setWidth(e.target.value)}
                      value={width || " "}
                    />
                    <FormCurrency
                      placeholder={"Tinggi"}
                      span="Cm"
                      message={error?.message?.height?.msg}
                      error={error?.message?.height?.msg}
                      onChange={(e) => setHeight(e.target.value)}
                      value={height || " "}
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
                    placeholder={"Tokopedia"}
                    message={error?.message?.tokopedia?.msg}
                    error={error?.message?.tokopedia?.msg}
                    onChange={(e) => setTokopedia(e.target.value)}
                    value={tokopedia || " "}
                  />
                </div>
              </div>
              {/* Shoppe*/}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
                <div className="space-y-3">
                  <h1 className="text-md font-medium">Shopee</h1>
                </div>
                <div className="col-span-2">
                  <Form
                    placeholder={"Shoppe"}
                    value={shopee || " "}
                    message={error?.message?.shopee?.msg}
                    error={error?.message?.shopee?.msg}
                    onChange={(e) => setShopee(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end my-10 ">
            <div className="w-96 flex space-x-2 ">
              <ButtonCancel link={"/dashboard/product"} name="Batal" />
              {false ? <Spin /> : <Button name={"Simpan"} />}
            </div>
          </div>
        </form>
      )}
    </Layout>
  );
}

export default UpdateProducts;
