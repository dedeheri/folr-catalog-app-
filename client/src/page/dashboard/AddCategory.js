import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import ButtonCancel from "../../components/ButtonCancel";

// componets
import Layout from "../../components/Dashboard/Layout";
import Form from "../../components/Form";
import Spin from "../../components/Spin";
import { addCategory } from "../../redux/action/dashboard";

function AddCategory() {
  const {
    addCategory: { fetching, error },
  } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [category, setCategory] = useState("");

  function handleAddCategory(e) {
    e.preventDefault();
    dispatch(addCategory(category, navigate));
  }

  return (
    <Layout>
      <form onSubmit={handleAddCategory} className="max-w-5xl mx-auto">
        <h1 className="font-medium text-2xl">Tambah Kategori</h1>
        {/* parent */}

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
