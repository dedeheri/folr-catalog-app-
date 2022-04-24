import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import ButtonCancel from "../../components/ButtonCancel";

// components
import Layout from "../../components/Dashboard/Layout";
import Form from "../../components/Form";
import Spin from "../../components/Spin";
import Upload from "../../components/Upload";
import { addGallery } from "../../redux/action/dashboard/gallery";

function AddGallery() {
  const {
    add: { fetching, data, error },
  } = useSelector((state) => state.dashboardGallery);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [description, setDiscription] = useState("");

  // preview
  const [preview, setPreview] = useState(null);

  function handlePreview(e) {
    const image = e.target.files[0];
    setImage(image);
    setPreview(URL.createObjectURL(image));
  }

  function handleDeletePreview() {
    setImage(null);
    setPreview(null);
  }

  function handleAddGallery(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("description", description);

    dispatch(addGallery(formData, navigate));
  }

  console.log(error);

  return (
    <Layout>
      <form onSubmit={handleAddGallery} className="max-w-5xl mx-auto">
        <h1 className="font-medium text-2xl">Tambah Galeri</h1>

        {/* image */}

        <div className="space-y-3 mt-5">
          {/* image */}
          <div className="border rounded-md">
            <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <div className="space-y-3">
                <h1 className="text-md font-medium">Foto Galeri</h1>
                <p className="text-base text-gray-500 leading-5">
                  Format gambar .jpg .jpeg .png dan ukuran minimum 500 x 500px
                </p>
              </div>
              <div className="col-span-2 space-y-1">
                <Upload
                  handleDeletePreview={handleDeletePreview}
                  error={error?.message?.image?.msg || error?.error?.multer}
                  image={preview}
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
          <h1 className="text-lg font-medium ">Informasi Galeri</h1>
          {/* Kategori */}
          {/* catalog */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
            <div className="space-y-3">
              <h1 className="text-md font-medium">Deskripsi</h1>
            </div>
            <div className="col-span-2">
              <div className="flex space-x-2">
                <Form
                  onChange={(e) => setDiscription(e.target.value)}
                  error={error?.message?.description?.msg}
                  message={error?.message?.description?.msg}
                  placeholder={"Deskripsi"}
                />
              </div>
            </div>
          </div>
        </div>
        {/* end category */}

        {/* button */}
        <div className="flex justify-end my-10 ">
          <div className="md:w-96 w-full flex space-x-2 ">
            <ButtonCancel link={"/dashboard/gallery"} name="Batal" />
            {fetching ? <Spin /> : <Button name={"Simpan"} />}
          </div>
        </div>
        {/* end button */}
      </form>
    </Layout>
  );
}

export default AddGallery;
