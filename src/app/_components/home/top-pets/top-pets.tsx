"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import { useRef } from "react";
import PetCard from "@/components/pet-card";
import NavigationButton from "@/components/navigation-button";
import Button from "@/components/common/button";

export default function TopPets() {
  const swiperRef = useRef(null);

  return (
    <div className="border-box relative mx-auto flex max-w-[1160px] flex-col small-screen:max-w-[calc(100%-60px)]">
      <div className="mb-[25px] mt-[35px] text-center">
        <h2 className="font-quicksand text-[30px] font-bold leading-[34px] tracking-[-0.025em] text-tertiary">
          Top Pets
        </h2>
      </div>

      <div className="peer">
        <div className="overflow-hidden rounded-[4px]">
          <Swiper
            ref={swiperRef}
            effect="coverflow"
            grabCursor
            breakpoints={{
              1: {
                slidesPerView: 2,
              },
              756: {
                slidesPerView: 3,
              },
              988: {
                slidesPerView: 4,
              },
              1190: {
                slidesPerView: 5,
              },
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,

              renderBullet: function (index, className) {
                return `<span class="${className} !bg-[#531492]"></span>`;
              },
            }}
            navigation={{
              prevEl: ".top-pets-swiper-button-prev",
              nextEl: ".top-pets-swiper-button-next",
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper-container"
          >
            {[...Array(8)].map((_, index) => (
              <SwiperSlide
                className="border-box flex min-w-[232px] flex-1 transform flex-col border border-solid border-light_gray_color_second bg-white small-screen:min-w-[25%] x-small-screen:min-w-[calc(100%/3)] x-smallest-screen:min-w-[50%]"
                key={index}
              >
                <PetCard />
              </SwiperSlide>
            ))}
            <SwiperSlide
              className="border-box flex min-w-[232px] flex-1 transform items-center justify-center border border-solid border-light_gray_color_second bg-white small-screen:min-w-[25%] x-small-screen:min-w-[calc(100%/3)] x-smallest-screen:min-w-[50%]"
              key={8}
            >
              <Button
                size="xsm"
                className="text-[12px] font-bold leading-[15px] tracking-[0.045em]"
              >
                View More
              </Button>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <NavigationButton
        prevClass="top-pets-swiper-button-prev"
        nextClass="top-pets-swiper-button-next"
        typeReference="peer"
      />

      <div className="swiper-pagination !relative mt-[25px]" />
    </div>
  );
}
