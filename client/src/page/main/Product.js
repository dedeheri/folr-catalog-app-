import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createSearchParams,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Layout from "../../components/Main/Layout";

import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import SectionProduct from "../../components/Main/SectionProduct";
import { getProductByQuery } from "../../redux/action/main/product";

import CartLoading from "../../components/Main/Loading/Cart";
import Empty from "../../components/Empty";
import Cart from "../../components/Main/Cart";

import { HiChevronDown } from "react-icons/hi";

function Products() {
  const {
    sort: { data, loading },
  } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  // calling
  useEffect(() => {
    dispatch(getProductByQuery(location.search));
  }, [dispatch, location.search]);

  function replaceSpace(t) {
    return t.replaceAll(" ", "-");
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const sortOptions = [
    {
      name: "Terbaru",
      query: -1,
    },
    {
      name: "Terlama",
      query: 1,
    },
  ];

  function handleSort(key, value) {
    const path = location.pathname;
    const params = new URLSearchParams(location.search);
    params.set(key, value);
    navigate({
      pathname: path,
      search: params.toString(),
    });
  }

  return (
    <Layout>
      {loading ? (
        <CartLoading />
      ) : data?.result?.length === 0 ? (
        <Empty />
      ) : (
        <div className="flex md:space-x-6">
          {/* filter */}
          <div className="space-y-4">
            <h1 className="font-medium text-xl text-gray-700 hover:text-gray-900">
              Filter
            </h1>
            <div className="w-64 h-auto rounded-md border">cookie</div>
          </div>
          {/* end filter */}

          {/* result */}
          <div className="space-y-4">
            <div className="flex justify-between">
              <h1 className="font-medium text-md text-gray-700 hover:text-gray-900">
                Menampikan hasil untuk{" "}
                <span className="font-bold text-black">{data?.title}</span>
              </h1>

              {/* sort */}
              <Menu as="div" className="relative inline-block text-left">
                <div className="text-gray-700 hover:text-gray-900">
                  <Menu.Button className="group inline-flex justify-center font-medium text-md ">
                    Urutkan
                    <HiChevronDown
                      className="flex-shrink-0 -mr-1 ml-1 h-6 w-6 "
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right z-10  absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <div
                              onClick={() => handleSort("sort", option.query)}
                              className={`px-2 py-1 hover:bg-gray-100`}
                            >
                              <h1 className="font-medium text-md cursor-pointer">
                                {option.name}
                              </h1>
                            </div>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
              {/* end sort */}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data?.result?.map((pro) => (
                <Link
                  key={pro._id}
                  to={`/products/${replaceSpace(pro.productName)}`}
                >
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
          {/* end result */}
        </div>
      )}
    </Layout>
  );
}

export default Products;
