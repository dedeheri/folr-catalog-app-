import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import ButtonCancel from "../../components/ButtonCancel";
import Select from "../../components/Select";

// components
import Layout from "../../components/Dashboard/Layout";
import Form from "../../components/Form";
import FormCurrency from "../../components/FormCurrency";
import Spin from "../../components/Spin";
import Textarea from "../../components/Textarea";
import Upload from "../../components/Upload";
import Update from "../../components/Dashboard/Loading/Update";
import {
  getCategoryDashboard,
  getProductsDetail,
} from "../../redux/action/dashboard";

function UpdateProducts() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    detailProduct: { data, error, loading },
    getCategory: { data: categorys, error: errors, loading: loadingg },
  } = useSelector((state) => state.dashboard);

  // console.log(categorys);

  useEffect(() => {
    dispatch(getProductsDetail(id));
    dispatch(getCategoryDashboard());
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

  return (
    <Layout>
      {loading ? (
        <Update />
      ) : (
        <form className="max-w-5xl mx-auto">
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
                    {data?.result?.image.map((_, i) => (
                      <Upload
                        key={i}
                        image={process.env.REACT_APP_URL_IMAGE + _}
                      />
                    ))}

                    {data?.result?.image.length < 3 ? (
                      <div className="flex w-full space-x-2">
                        <Upload />
                        <Upload />
                        <Upload />
                      </div>
                    ) : null}

                    {/* <Upload
                      image={
                        data?.result?.image[1] == null
                          ? process.env.REACT_APP_URL_IMAGE +
                            data?.result?.image[1]
                          : null
                      }
                    />
                    <Upload
                      image={
                        process.env.REACT_APP_URL_IMAGE + data?.result?.image[2]
                      }
                    />
                    <Upload
                      image={
                        process.env.REACT_APP_URL_IMAGE + data?.result?.image[3]
                      }
                    /> */}
                  </div>
                  {/* {error?.message?.image?.msg && (
                    <p className="text-red-500">{error?.message?.image?.msg}</p>
                  )}
                  {error?.error?.multer && (
                    <p className="text-red-500">{error?.error?.multer}</p>
                  )} */}
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
                    // message={error?.message?.productName?.msg}
                    // error={error?.message?.productName?.msg}
                    placeholder="Nama Produk"
                    value={data?.result?.productName}
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
                    <Select data={categorys} />
                    <Select />

                    {/* <Form
                      placeholder="Kategori"
                      // message={error?.message?.category?.msg}
                      // error={error?.message?.category?.msg}
                      value={data?.result?.productInfo?.category}
                      onChange={(e) => setCategory(e.target.value)}
                    />
                    <Form
                      placeholder="Katalog"
                      // message={error?.message?.catalog?.msg}
                      // error={error?.message?.catalog?.msg}
                      // onChange={(e) => setCatalog(e.target.value)}
                    /> */}
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
                    placeholder={"Deskripsi"}
                    // message={error?.message?.description?.msg}
                    // error={error?.message?.description?.msg}
                    // onChange={(e) => setDescription(e.target.value)}
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
                    // message={error?.message?.price?.msg}
                    // error={error?.message?.price?.msg}
                    // onChange={(e) => setPrice(e.target.value)}
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
                    // message={error?.message?.material?.msg}
                    // error={error?.message?.material?.msg}
                    // onChange={(e) => setMaterial(e.target.value)}
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
                    // message={error?.message?.weight?.msg}
                    // error={error?.message?.weight?.msg}
                    // onChange={(e) => setWeight(e.target.value)}
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
                      // message={error?.message?.lengthy?.msg}
                      // error={error?.message?.lengthy?.msg}
                      // onChange={(e) => setLengthy(e.target.value)}
                    />
                    <FormCurrency
                      placeholder={"Lebar"}
                      span="Cm"
                      // message={error?.message?.width?.msg}
                      // error={error?.message?.width?.msg}
                      // onChange={(e) => setWidth(e.target.value)}
                    />
                    <FormCurrency
                      placeholder={"Tinggi"}
                      span="Cm"
                      // message={error?.message?.height?.msg}
                      // error={error?.message?.height?.msg}
                      // onChange={(e) => setHeight(e.target.value)}
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
                    // message={error?.message?.tokopedia?.msg}
                    // error={error?.message?.tokopedia?.msg}
                    // onChange={(e) => setTokopedia(e.target.value)}
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
                    value={data?.result?.link?.shopee}
                    // message={error?.message?.shopee?.msg}
                    // error={error?.message?.shopee?.msg}
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
