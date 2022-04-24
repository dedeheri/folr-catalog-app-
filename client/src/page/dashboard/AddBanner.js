import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import ButtonCancel from "../../components/ButtonCancel";
import Layout from "../../components/Dashboard/Layout";
import Form from "../../components/Form";
import Spin from "../../components/Spin";
import Upload from "../../components/Upload";
import { addBanner } from "../../redux/action/dashboard/banner";

function AddBanner() {
  const {
    add: { error, fetching },
  } = useSelector((state) => state.dashboardBanner);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [image, setImage] = useState("");
  const [link, setLink] = useState("");

  // preview
  const [preview, setPreview] = useState("");

  // hanlde preview
  function hanldePreview(e) {
    const image = e.target.files[0];
    if (image) {
      setPreview(URL.createObjectURL(image));
    }

    setImage(image);
  }

  function handleDeletePreview() {
    setPreview(null);
    setImage("");
  }

  function handleAddBanner(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("link", link);

    dispatch(addBanner(formData, navigate));
  }

  return (
    <Layout>
      <form onSubmit={handleAddBanner} className="max-w-5xl mx-auto">
        <h1 className="font-medium text-2xl">Tambah Banner</h1>

        <div className="space-y-3 mt-5">
          {/* image */}
          <div className="border rounded-md">
            <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <div className="space-y-3">
                <h1 className="text-md font-medium">Banner</h1>
                <p className="text-base text-gray-500 leading-5">
                  Format gambar .jpg .jpeg .png dan ukuran minimum 1700 x 500px
                </p>
              </div>
              <div className="col-span-2 space-y-1">
                <Upload
                  handleDeletePreview={handleDeletePreview}
                  error={error?.message?.image?.msg || error?.error?.multer}
                  image={preview}
                  onChange={hanldePreview}
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
          <h1 className="text-lg font-medium ">Informasi Banner</h1>

          {/* catalog */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
            <div className="space-y-3">
              <h1 className="text-md font-medium">Link</h1>
            </div>
            <div className="col-span-2">
              <div className="flex space-x-2">
                <Form
                  onChange={(e) => setLink(e.target.value)}
                  error={error?.message?.link?.msg}
                  message={error?.message?.link?.msg}
                  placeholder={"Link"}
                />
              </div>
            </div>
          </div>
        </div>
        {/* end category */}

        {/* button */}
        <div className="flex justify-end my-10 ">
          <div className="md:w-96 w-full flex space-x-2 ">
            <ButtonCancel link={"/dashboard/banner"} name="Batal" />
            {fetching ? <Spin /> : <Button name={"Simpan"} />}
          </div>
        </div>
      </form>
    </Layout>
  );
}

export default AddBanner;
