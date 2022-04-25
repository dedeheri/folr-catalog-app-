import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import ButtonCancel from "../../components/ButtonCancel";

import Layout from "../../components/Dashboard/Layout";
import Update from "../../components/Dashboard/Loading/Update";
import Form from "../../components/Form";
import Spin from "../../components/Spin";
import Upload from "../../components/Upload";
import {
  getDetailCatalog,
  updateCatalog,
} from "../../redux/action/dashboard/category";
import NotFound from "../NotFound";

function UpdateCatalog() {
  const {
    updateCatalog: { fetching, error },
    detailCatalog: { data, error: errorDetail, loading },
  } = useSelector((state) => state.dashboardCategory);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { search } = useLocation();

  const [image, setImage] = useState("");
  const [catalog, setCatalog] = useState("");
  const [prieview, setPreview] = useState("");

  useEffect(() => {
    dispatch(getDetailCatalog(search));
  }, [dispatch, search]);

  useEffect(() => {
    const url = process.env.REACT_APP_URL_IMAGE;
    setPreview(url + data?.result?.catalog?.image);
  }, [data]);

  console.log(prieview);

  useEffect(() => {
    setCatalog(data?.result?.catalog?.catalog);
    setImage(data?.result?.catalog?.image);
  }, [data]);

  function handleUploadImage(e) {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0];
      setImage(image);
      setPreview(URL.createObjectURL(image));
    }
  }
  function handleDeletePreview() {
    setPreview(null);
    setImage(null);
  }

  function handleUpdateCatalog(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("catalog", catalog);
    dispatch(updateCatalog(search, formData, navigate));
  }

  return (
    <Layout>
      {loading ? (
        <Update />
      ) : errorDetail ? (
        <NotFound />
      ) : (
        <form onSubmit={handleUpdateCatalog} className="max-w-5xl mx-auto">
          <h1 className="font-medium text-2xl">
            Edit Katalog {data?.result?.catalog?.catalog} dalam{" "}
            {data?.result?.category}
          </h1>

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
                    handleDeletePreview={handleDeletePreview}
                    error={error?.message?.image?.msg || error?.error?.multer}
                    image={prieview}
                    onChange={handleUploadImage}
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
                  <Form defaultValue={data?.result?.category} readOnly />
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
                    value={catalog || " "}
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
        </form>
      )}
    </Layout>
  );
}

export default UpdateCatalog;
