import React from "react";

function CardFormInformasion() {
  return (
    <div className="border rounded-md p-5">
      <h1 className="text-lg font-medium ">Informasi Produk</h1>
      {/* Nama Produk*/}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
        <div className="space-y-3">
          <h1 className="text-md font-medium">Nama Produk</h1>
          <p className="text-base text-gray-500 leading-5">
            Cantumkan min. 20 karakter agar semakin menarik dan mudah ditemukan
            oleh pembeli.
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
            <Form
              message={error?.message?.category?.msg}
              error={error?.message?.category?.msg}
              placeholder="Kategori"
              onChange={(e) => setCategory(e.target.value)}
            />
            <Form
              message={error?.message?.catalog?.msg}
              error={error?.message?.catalog?.msg}
              placeholder="Katalog"
              onChange={(e) => setCatalog(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardFormInformasion;
