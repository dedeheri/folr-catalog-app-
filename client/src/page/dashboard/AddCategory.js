import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// componets
import Button from "../../components/Button";
import ButtonCancel from "../../components/ButtonCancel";
import Layout from "../../components/Dashboard/Layout";
import Form from "../../components/Form";
import Spin from "../../components/Spin";

// redux
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../../redux/action/dashboard/category";
import Upload from "../../components/Upload";

function AddCategory() {
  const {
    addCategory: { fetching, error },
  } = useSelector((state) => state.dashboardCategory);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  // image
  const [prieview, setPreview] = useState("");

  function handlePreview(e) {
    const image = e.target.files[0];
    setPreview(URL.createObjectURL(image));
    setImage(image);
  }

  function handleDeletePreviewOne() {
    setPreview("");
  }

  function handleAddCategory(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    formData.append('category', category);

    dispatch(addCategory(formData, navigate));
  }

  return (
    <Layout>
      <form onSubmit={handleAddCategory} className="max-w-5xl mx-auto">
        <h1 className="font-medium text-2xl">Tambah Kategori</h1>
        {/* parent */}

        <div className="space-y-3 mt-5">
          {/* image */}
          <div className="border rounded-md">
            <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <div className="space-y-3">
                <h1 className="text-md font-medium">Foto Kategori</h1>
                <p className="text-base text-gray-500 leading-5">
                  Format gambar .jpg .jpeg .png dan ukuran minimum 500 x 500px
                </p>
              </div>
              <div className="col-span-2 space-y-1">
                <Upload
                  handleDeletePreview={handleDeletePreviewOne}
                  error={error?.message?.image?.msg || error?.error?.multer}
                  image={prieview}
                  onChange={handlePreview}
                />
                {error?.message?.image?.msg && (
                  <p className="text-red-500">{error?.message?.image?.msg}</p>
                )}
                {error?.error?.multer && (
                  <p className="text-red-500">{error?.error?.multer}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* end image */}

        <div className="border rounded-md p-5 mt-5">
          <h1 className="text-lg font-medium ">Informasi Produk</h1>
          {/* Kategori */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
            <div className="space-y-3">
              <h1 className="text-md font-medium">Kategori</h1>
            </div>
            <div className="col-span-2">
              <Form
                onChange={(e) => setCategory(e.target.value)}
                error={error?.message?.category?.msg || error?.message}
                message={error?.message?.category?.msg || error?.message}
                placeholder={"Kategori"}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end my-10 ">
          <div className="w-96 flex space-x-2 ">
            <ButtonCancel link={"/dashboard/category"} name="Batal" />
            {fetching ? <Spin /> : <Button name={"Simpan"} />}
          </div>
        </div>
      </form>
    </Layout>
  );
}

export default AddCategory;
