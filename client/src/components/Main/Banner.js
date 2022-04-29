import React, { useEffect } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import { getBanner } from "../../redux/action/main/banner";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import BannerLoading from "./Loading/Banner";

function Banner() {
  const {
    get: { data, loading },
  } = useSelector((state) => state.banner);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBanner());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <BannerLoading />
      ) : (
        <Swiper
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {data?.result?.map(
            (c) =>
              c.sorted === null && (
                <SwiperSlide key={c._id}>
                  <img
                    alt={process.env.REACT_APP_URL_IMAGE + c.image}
                    src={process.env.REACT_APP_URL_IMAGE + c.image}
                    className="w-full md:h-[22rem] h-[12rem] rounded-md"
                  />
                </SwiperSlide>
              )
          )}
        </Swiper>
      )}
    </div>
  );
}

export default Banner;
