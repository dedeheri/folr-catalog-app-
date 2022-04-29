import { useDispatch, useSelector } from "react-redux";

// headlessUi
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";

// icons
import { FiTrash2, FiEdit2 } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";

// redux
import * as actionTypes from "../../redux/action-types-style";
import { getCategory } from "../../redux/action/dashboard/category";

// components
import CategoryLoading from "../../components/Dashboard/Loading/Category";
import Add from "../../components/Dashboard/Add";
import Filter from "../../components/Dashboard/Filter";
import Layout from "../../components/Dashboard/Layout";
import Empty from "../../components/Empty";
import { createSearchParams, useNavigate } from "react-router-dom";

function Category() {
  const {
    getCategory: { data, loading },
    removeCatalog: { data: message },
  } = useSelector((state) => state.dashboardCategory);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch, message]);

  function openModal(id, title) {
    dispatch({ type: actionTypes.REMOVE_CATALOG_ON, id, title });
  }

  function updateCatalog(category, id) {
    navigate({
      pathname: "catalog",
      search: `${createSearchParams({
        category: category,
        catalogId: id,
      })}`,
    });
  }
  return (
    <Layout>
      <div className="flex space-x-3 md:justify-end overflow-x-scroll md:overflow-hidden scrollbar-hide w-full">
        <Filter />
        {/* add */}
        <Add link={"add-category"} name="Tambah Kategori" />
        <Add link={"add-catalog"} name="Tambah Katalog" />
        <Add link={"add-banner"} name="Tambah Banner" />
      </div>

      {loading ? (
        <CategoryLoading />
      ) : data?.result?.length === 0 ? (
        <Empty />
      ) : (
        data?.result?.map((category) => (
          <div key={category._id} className="space-y-3 mb-8 mt-10">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-medium">{category.category}</h1>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex justify-center w-full">
                    <BsThreeDotsVertical fontSize={22} />
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
                  <Menu.Items className="absolute border z-10 right-3 md:right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none">
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-gray-100 text-black"
                                : "text-gray-900"
                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                          >
                            <FiEdit2
                              className="w-5 h-5 mr-2"
                              aria-hidden="true"
                            />
                            Edit
                          </button>
                        )}
                      </Menu.Item>
                    </div>

                    <div className="px-1 py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-gray-100 text-black"
                                : "text-gray-900"
                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                          >
                            <FiTrash2
                              className="w-5 h-5 mr-2"
                              aria-hidden="true"
                            />
                            Hapus
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <div className=" grid grid-cols-2 md:grid-cols-5 gap-3">
              {category.catalog.map(({ image, catalog, _id }) => (
                <div
                  key={_id}
                  className="border p-3 space-y-4 rounded-md relative group"
                >
                  <img
                    alt={_id}
                    src={process.env.REACT_APP_URL_IMAGE + image}
                    className="w-44 h-44 mx-auto"
                  />

                  <div className="absolute top-0 right-4 z-20 opacity-0 group-hover:opacity-100 duration-300 cursor-pointer ">
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="inline-flex justify-center w-full">
                          <BsThreeDotsVertical fontSize={22} />
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
                        <Menu.Items className="absolute border -right-5 md:right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none">
                          <div className="px-1 py-1 ">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={() =>
                                    updateCatalog(category.category, _id)
                                  }
                                  className={`${
                                    active
                                      ? "bg-gray-100 text-black"
                                      : "text-gray-900"
                                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                >
                                  <FiEdit2
                                    className="w-5 h-5 mr-2"
                                    aria-hidden="true"
                                  />
                                  Edit
                                </button>
                              )}
                            </Menu.Item>
                          </div>

                          <div className="px-1 py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={() => openModal(_id, catalog)}
                                  className={`${
                                    active
                                      ? "bg-gray-100 text-black"
                                      : "text-gray-900"
                                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                >
                                  <FiTrash2
                                    className="w-5 h-5 mr-2"
                                    aria-hidden="true"
                                  />
                                  Hapus
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                  <p className="text-xl font-medium">{catalog}</p>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </Layout>
  );
}

export default Category;
