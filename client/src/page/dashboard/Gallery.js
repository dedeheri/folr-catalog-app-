import React, { useEffect } from "react";

// zoom
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

// icons
import { BiTrash } from "react-icons/bi";

// components
import Layout from "../../components/Dashboard/Layout";
// redux
import { useDispatch, useSelector } from "react-redux";
import { getGallery } from "../../redux/action/dashboard/gallery";
import Filter from "../../components/Dashboard/Filter";
import Empty from "../../components/Empty";
import Add from "../../components/Dashboard/Add";
import GalleryLoading from "../../components/Dashboard/Loading/Gallery";

function Gallery() {
  const dispatch = useDispatch();
  const {
    get: { data, loading },
  } = useSelector((state) => state.dashboardGallery);

  // calling api
  useEffect(() => {
    dispatch(getGallery());
  }, [dispatch]);

  return (
    <Layout>
      <div className="flex space-x-3 md:justify-end overflow-x-scroll md:overflow-hidden scrollbar-hide w-full">
        <Filter />
        {/* add */}
        <Add link={"add-gallery"} name="Tambah Galeri" />
      </div>

      {loading ? (
        <GalleryLoading />
      ) : data?.result?.length === 0 ? (
        <Empty />
      ) : (
        <div className="columns-2 md:columns-3 lg:columns-4 gap-2 space-y-2 mt-10 mb-8 w-full">
          {data?.result?.map((image) => (
            <div
              key={image._id}
              className="group hover:border-black duration-300 relative"
            >
              <Zoom>
                <img
                  className="rounded-md"
                  src={process.env.REACT_APP_URL_IMAGE + image.image}
                  alt={image.description}
                />
              </Zoom>
              <div className="absolute bottom-7 right-7 opacity-0 group-hover:opacity-100 duration-300 p-1 hover:bg-gray-200 rounded-full cursor-pointer bg-gray-100">
                <BiTrash
                  fontSize={20}
                  className="text-gray-500 hover:text-black duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
}

export default Gallery;
