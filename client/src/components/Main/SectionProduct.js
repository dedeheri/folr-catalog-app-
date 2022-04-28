import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";

function SectionProduct({ data, title }) {
  function replaceSpace(t) {
    return t.replaceAll(" ", "-");
  }

  return (
    <div className="space-y-4">
      <h1 className="font-bold text-2xl">{title}</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {data?.result?.map((pro) => (
          <Link key={pro._id} to={`/products/${replaceSpace(pro.productName)}`}>
            <Cart
              image={pro.image}
              productName={pro.productName}
              price={pro.price}
              discount={pro.discount}
              oldPrice={pro.oldPrice}
              category={pro.category}
              catalog={pro.catalog}
              featured={pro.featuredProduct}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SectionProduct;
