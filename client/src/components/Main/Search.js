import React, { useEffect, useState } from "react";

// icons
import { BiSearch } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";

// redux
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProduct, getNewProduct } from "../../redux/action/main/product";

// components
import LoadingSearch from "./Loading/Search";

function Search() {
  const [show, setShow] = useState(false);
  const {
    newProduct: { data, loading },
    getAll: { data: dataAll },
  } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [resultFiltered, setResultFiltered] = useState("");

  useEffect(() => {
    if (show) {
      dispatch(getNewProduct());
    }
  }, [dispatch, show]);

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  useEffect(() => {
    const f = dataAll?.result?.filter((c) => {
      return c.productName.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setResultFiltered(f);
  }, [dataAll, searchTerm]);

  function replaceSpace(t) {
    return t.replaceAll(" ", "-");
  }

  function gprice(t) {
    const p = new Intl.NumberFormat("idr", {
      style: "currency",
      currency: "IDR",
    }).format(t);

    return p;
  }
  return (
    <div className="relative">
      <div className="border  flex items-center h-9 md:h-10 hover:border-slate-400 duration-300 rounded-md">
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          onClick={() => setShow(true)}
          className="outline-none w-44  px-4"
          placeholder="Pencarian"
        />
        <div className="bg-gray-100 w-14 h-full pl-4 flex items-center rounded-r-md">
          <BiSearch fontSize={20} />
        </div>
      </div>

      {show && (
        <div
          className={`absolute  border right-0 h-96 top-11 rounded-md bg-white shadow-md overflow-y-scroll w-[25rem] md:w-[35rem] p-4 duration-300`}
        >
          {/* result */}
          <div className="space-y-5">
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-lg">Pencarian</h1>
              <div
                onClick={() => setShow(false)}
                className="cursor-pointer -mt-4"
              >
                <MdOutlineClose
                  fontSize={30}
                  className="text-gray-500 hover:bg-gray-100 bg-gray-50 rounded-full duration-300 p-1"
                />
              </div>
            </div>

            <div>
              {searchTerm.length === 0
                ? null
                : Object.values(resultFiltered || "")?.map((c) => (
                    <Link
                      key={c._id}
                      to={`/products/${replaceSpace(c.productName)}`}
                    >
                      <div className="flex items-center space-x-3 hover:bg-slate-100 p-1 rounded-md duration-300 cursor-pointer">
                        <BiSearch fontSize={20} className="text-gray-500" />
                        <h1 className="font-medium text-md">{c.productName}</h1>
                      </div>
                    </Link>
                  ))}
            </div>

            {/* end result */}

            {/* new product */}
            <div className="mt-2">
              <h1 className="font-medium text-lg mb-4">Prodak Baru</h1>
            </div>

            {loading ? (
              <LoadingSearch />
            ) : (
              data?.result?.map((c) => (
                <Link
                  key={c._id}
                  to={`/products/${replaceSpace(c.productName)}`}
                >
                  <div className="flex space-x-3 hover:bg-gray-100 p-1 rounded-md duration-300 cursor-pointer">
                    <img
                      alt={process.env.REACT_APP_URL_IMAGE + c.image[0]}
                      src={process.env.REACT_APP_URL_IMAGE + c.image[0]}
                      className="w-14 h-14"
                    />
                    <div className="space-y-1">
                      <h1 className="font-medium text-md">{c.productName}</h1>
                      <h1 className="font-bold text-md">{gprice(c.price)}</h1>
                    </div>
                  </div>
                </Link>
              ))
            )}
            {/* end new product */}
          </div>
        </div>
      )}
      {/* end */}
    </div>
  );
}

export default Search;
