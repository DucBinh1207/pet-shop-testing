"use client";

import Item from "./item";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import { useRef } from "react";
import NavigationButton from "@/components/navigation-button";

export default function Comments() {
  const swiperRef = useRef(null);

  return (
    <div className="mx-auto my-[35px] max-w-[1920px]">
      <div className="mb-[25px] flex justify-center">
        <h2 className="leading-[34px font-quicksand text-[30px] font-bold tracking-[-0.025em] text-primary">
          Testimonials
        </h2>
      </div>
      <div className="group relative mx-auto max-w-[calc(100%-100px)] bg-comments_bg px-[35px] small-screen:px-[15px]">
        <div className="w-full overflow-hidden">
          <Swiper
            ref={swiperRef}
            effect="coverflow"
            loop
            grabCursor
            breakpoints={{
              1: {
                slidesPerView: 1,
              },
              756: {
                slidesPerView: 2,
              },
              1190: {
                slidesPerView: 3,
              },
            }}
            navigation={{
              nextEl: ".about-us-swiper-button-next",
              prevEl: ".about-us-swiper-button-prev",
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            modules={[Navigation, EffectCoverflow]}
          >
            {[...Array(4)].map((_, index) => (
              <SwiperSlide
                className="min-w-[calc(100%/3)] rounded-[8px] px-[60px] pb-[49px] pt-[47px] small-screen:min-w-[50%] small-screen:px-[30px] small-screen:py-[20px] x-smallest-screen:min-w-full"
                key={index}
              >
                <Item />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <NavigationButton
          prevClass="about-us-swiper-button-prev"
          nextClass="about-us-swiper-button-next"
          typeReference="group"
        />
      </div>
    </div>
  );
}
