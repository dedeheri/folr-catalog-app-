import React from "react";
import { Link } from "react-router-dom";
import CartLoading from "../../components/Main/Loading/Cart";
import Cart from "./Cart";

function SectionCatalog({ loading, data }) {
  function replaceSpace(t) {
    return t.replaceAll(" ", "-");
  }

  return loading ? (
    <CartLoading />
  ) : data?.result?.length !== 0 ? (
    <div className="space-y-4">
      <h1 className="font-bold text-2xl">
        Berdasarkan {data?.result?.catalog?.[0]?.catalog}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {data?.result?.catalog?.map((pro) => (
          <Link key={pro._id} to={`/products/${replaceSpace(pro.productName)}`}>
            <Cart
              image={pro.image}
              productName={pro.productName}
              price={pro.price}
              discount={pro.discount}
              oldPrice={pro.oldPrice}
              category={pro.category}
              catalog={pro.catalog}
            />
          </Link>
        ))}
      </div>
    </div>
  ) : null;
}

export default SectionCatalog;
