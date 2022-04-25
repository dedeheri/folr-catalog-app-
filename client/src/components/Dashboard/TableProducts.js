import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

// icons
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiTrash2, FiEdit2 } from "react-icons/fi";
import { RiCoupon4Line, RiStarSmileLine } from "react-icons/ri";
import { useDispatch } from "react-redux";

// redux
import * as actionTypes from "../../redux/action-types-style";
import { useNavigate } from "react-router-dom";

function TableProducts({ data }) {
  const dispatch = useDispatch();
  const columnName = [
    "Gambar",
    "Nama Produk",
    "Harga",
    "Diskon",
    "Deskripsi",
    "Kategori / Katalog",
    "Link",
  ];

  function handleDelete(id, title) {
    dispatch({
      type: actionTypes.REMOVE_PRODUCT_DASHBOARD_ON,
      id: id,
      title: title,
    });
  }

  function handlefeaturedProduct(id, title, body) {
    dispatch({
      type: actionTypes.FEATURED_PRODUCT_DASHBOARD_ON,
      id: id,
      title: title,
      body: body,
    });
  }

  const navigate = useNavigate();
  function handleNavigateEdit(id, productName) {
    const replace = productName.replaceAll(" ", "-");
    navigate({
      pathname: `/dashboard/product/${id}/${replace}`,
    });
  }

  return (
    <div className=" font-roboto overflow-x-scroll scrollbar-hide">
      <table className="min-w-full table-fixed">
        <thead>
          <tr className="border-b">
            {columnName?.map((items, key) => (
              <th
                key={key}
                className="whitespace-nowrap text-sm text-gray-500 py-3 px-3 text-left"
              >
                {items}
              </th>
            ))}
            <th className="relative">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.result?.map((list, key) => (
            <tr
              key={key}
              className="hover:bg-gray-100  border-b group text-black transition duration-400"
            >
              <td className="text-md whitespace-nowrap px-3 p-1">
                <img
                  alt={process.env.REACT_APP_URL_IMAGE + list.image[0]}
                  src={process.env.REACT_APP_URL_IMAGE + list.image[0]}
                  className="h-14 w-14 rounded-md"
                />
              </td>
              <td className="text-md whitespace-nowrap px-3 p-1 ">
                <div className="flex">
                  {list.featuredProduct && (
                    <p className="bg-yellow-100 px-2 rounded-md mr-3">
                      Unggulan
                    </p>
                  )}

                  <div className="cursor-pointer">
                    {list.productName?.length > 20
                      ? list.productName?.substring(0, 20) + "..."
                      : list.productName}
                  </div>
                </div>
              </td>
              <td className="text-md whitespace-nowrap px-3">
                Rp {list.price}
              </td>
              <td className="text-md whitespace-nowrap px-3 r">
                {list.discount ? list.discount : "Tidak ada diskon"}
              </td>
              <td className="text-md whitespace-nowrap px-3">
                {list.description.length > 40
                  ? list.description.substring(0, 40) + "..."
                  : list.description}
              </td>
              <td className="text-md whitespace-nowrap px-3">
                <div className="flex space-x-2">
                  <div className="bg-gray-100 px-3 rounded-md">
                    {list?.productInfo?.category}
                  </div>
                  <div className="bg-gray-100 px-3 rounded-md">
                    {list?.productInfo?.catalog}
                  </div>
                </div>
              </td>
              <td className="text-md whitespace-nowrap px-3">
                <div className="flex space-x-2">
                  <div className="bg-green-100 px-3 rounded-md">
                    <a
                      href={list?.link?.tokopedia}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Tokopedia
                    </a>
                  </div>
                  <div className="bg-orange-100 px-3 rounded-md">
                    <a
                      href={list?.link?.shopee}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Shopee
                    </a>
                  </div>
                </div>
              </td>

              <td className="text-md whitespace-nowrap px-1 opacity-0 group-hover:opacity-100">
                <div className="border-l pl-2">
                  {/* action  */}
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="inline-flex justify-center w-full px-4 py-2 ">
                        <BsThreeDotsVertical
                          className="w-5 h-5 ml-2 -mr-1 text-gray-700 hover:text-gray-900"
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
                      <Menu.Items className="fixed right-14 md:right-20 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={() =>
                                  handleNavigateEdit(
                                    list?._id,
                                    list.productName
                                  )
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
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active
                                    ? "bg-gray-100 text-black"
                                    : "text-gray-900"
                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                              >
                                <RiCoupon4Line
                                  className="w-5 h-5 mr-2"
                                  aria-hidden="true"
                                />
                                Terapkan diskon
                              </button>
                            )}
                          </Menu.Item>

                          {list.featuredProduct ? (
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={() =>
                                    handlefeaturedProduct(
                                      list._id,
                                      list.productName,
                                      false
                                    )
                                  }
                                  className={`${
                                    active
                                      ? "bg-gray-100 text-black"
                                      : "text-gray-900"
                                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                >
                                  <RiStarSmileLine
                                    className="w-5 h-5 mr-2"
                                    aria-hidden="true"
                                  />
                                  Batalkan Produk Unggulan
                                </button>
                              )}
                            </Menu.Item>
                          ) : (
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={() =>
                                    handlefeaturedProduct(
                                      list._id,
                                      list.productName,
                                      true
                                    )
                                  }
                                  className={`${
                                    active
                                      ? "bg-gray-100 text-black"
                                      : "text-gray-900"
                                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                >
                                  <RiStarSmileLine
                                    className="w-5 h-5 mr-2"
                                    aria-hidden="true"
                                  />
                                  Produk Unggulan
                                </button>
                              )}
                            </Menu.Item>
                          )}
                        </div>

                        <div className="px-1 py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={() =>
                                  handleDelete(list._id, list.productName)
                                }
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

                {/* end action */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableProducts;
