import React, { useEffect } from "react";
import Add from "../../components/Dashboard/Add";
import Filter from "../../components/Dashboard/Filter";
import Layout from "../../components/Dashboard/Layout";
import BannerLoading from "../../components/Dashboard/Loading/Banner";

// zoom
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getBanner } from "../../redux/action/dashboard/banner";
import Empty from "../../components/Empty";

import * as actionType from "../../redux/action-types-style";

// icons
import { BiTrash } from "react-icons/bi";

function Banner() {
  const {
    get: { data, loading },
    remove: { data: message },
  } = useSelector((state) => state.dashboardBanner);
  const dispatch = useDispatch();

  // calling api
  useEffect(() => {
    dispatch(getBanner());
  }, [dispatch, message]);

  function handleDelete(id) {
    dispatch({ type: actionType.REMOVE_BANNER_ON, id });
  }

  return (
    <Layout>
      <div className="flex space-x-3 justify-end">
        <Filter />
        {/* add */}
        <Add link={"add"} name="Tambah Banner" />
      </div>

      {loading ? (
        <BannerLoading />
      ) : data?.result?.length === 0 ? (
        <Empty />
      ) : (
        <div className="mt-10 max-w-7xl m-auto space-y-3 ">
          {data?.result?.map(({ image, _id }) => (
            <div key={_id} className="border p-3 rounded-md relative group">
              <Zoom>
                <img
                  alt={image}
                  src={process.env.REACT_APP_URL_IMAGE + image}
                  className="rounded-md h-96 w-screen bg-contain"
                />
              </Zoom>
              <button
                onClick={() => handleDelete(_id)}
                className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 duration-300 bg-red-100 p-1 rounded-full hover:bg-red-300 cursor-pointer"
              >
                <BiTrash fontSize={20} />
              </button>
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
}

export default Banner;
