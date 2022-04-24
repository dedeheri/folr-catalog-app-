import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// redux
import { useDispatch, useSelector } from "react-redux";
import { addCatalog, getCategory } from "../../redux/action/dashboard/category";

// components
import Update from "../../components/Dashboard/Loading/Update";
import Button from "../../components/Button";
import ButtonCancel from "../../components/ButtonCancel";
import Layout from "../../components/Dashboard/Layout";
import Form from "../../components/Form";
import SelectCategory from "../../components/SelectCategory";
import Spin from "../../components/Spin";
import Upload from "../../components/Upload";

function AddCatalog() {
  const {
    getCategory: { data, loading },
    addCatalog: { fetching, error },
  } = useSelector((state) => state.dashboardCategory);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // calling api
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const [catalog, setCatalog] = useState("");
  const [category, setCategory] = useState(data?.result?.[0]?.category);
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

  function handleAddCatalog(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("catalog", catalog);
    formData.append("category", category.category);
    dispatch(addCatalog(formData, navigate));
  }

  useEffect(() => {
    setCategory(data?.result?.[0]);
  }, [data]);

  return (
    <Layout>
      {loading ? (
        <Update />
      ) : (
        <form onSubmit={handleAddCatalog} className="max-w-5xl mx-auto">
          <h1 className="font-medium text-2xl">Tambah Katalog</h1>

          {/* image */}

          <div className="space-y-3 mt-5">
            {/* image */}
            <div className="border rounded-md">
              <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                <div className="space-y-3">
                  <h1 className="text-md font-medium">Foto Katalog</h1>
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

          {/* category */}
          <div className="border rounded-md p-5 mt-5">
            <h1 className="text-lg font-medium ">Informasi Katalog</h1>
            {/* Kategori */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
              <div className="space-y-3">
                <h1 className="text-md font-medium">Kategori</h1>
              </div>
              <div className="col-span-2">
                <div className="flex space-x-2">
                  <SelectCategory
                    data={data}
                    category={category}
                    setCategory={setCategory}
                  />
                </div>
              </div>
            </div>
            {/* catalog */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
              <div className="space-y-3">
                <h1 className="text-md font-medium">Katalog</h1>
              </div>
              <div className="col-span-2">
                <div className="flex space-x-2">
                  <Form
                    onChange={(e) => setCatalog(e.target.value)}
                    error={error?.message?.catalog?.msg}
                    message={error?.message?.catalog?.msg}
                    placeholder={"Kategori"}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* end category */}

          {/* button */}
          <div className="flex justify-end my-10 ">
            <div className="md:w-96 w-full flex space-x-2 ">
              <ButtonCancel link={"/dashboard/category"} name="Batal" />
              {fetching ? <Spin /> : <Button name={"Simpan"} />}
            </div>
          </div>
          {/* end button */}
        </form>
      )}
    </Layout>
  );
}

export default AddCatalog;
