"use client";

import { PriceRange } from "@/constants/price-range";
import { useEffect, useState } from "react";
import ReactSlider from "react-slider";
import PetsCategory from "./pets-category";
import { CategoryType, CategoryTypes } from "@/constants/category-type";
import PetCard from "@/components/pet-card";
import CancelIcon from "@/components/common/icons/cancel-icon";
import { SortType, SortTypes } from "@/constants/sort-type";
import Sort from "./sort";
import AngleIcon from "@/components/common/icons/angle-icon";
import cn from "@/utils/style/cn";
import Pagination from "../../_components/pagination";

export default function PetsContent() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [category, setCategory] = useState<CategoryTypes>(CategoryType.ALL);
  const [price, setPrice] = useState([PriceRange.MIN, PriceRange.MAX]);

  const [sort, setSort] = useState<SortTypes>(SortType.DEFAULT);
  const [paging, setPaging] = useState<number>(2);

  function handleCategoryFilter(categoryCurrent: CategoryTypes) {
    setCategory(categoryCurrent);
  }

  function handleSortFilter(sortCurrent: SortTypes) {
    setSort(sortCurrent);
  }
  function handlePagingFilter(pagingCurrent: number) {
    setPaging(pagingCurrent);
  }

  useEffect(() => {
    const params = new URLSearchParams();

    params.append("category", category);

    params.append("sort", sort);

    params.append("page", paging.toString());
  }, [category, sort, paging]);

  return (
    <>
      <PetsCategory
        category={category}
        handleCategoryFilter={handleCategoryFilter}
      />

      <div className="mx-auto flex flex-nowrap rounded-[4px] border border-solid border-light_gray_color_second bg-white large-screen:mb-[40px] large-screen:mt-[15px] large-screen:w-[1160px] small-screen:mb-[30px] small-screen:mt-[30px] smallest-screen:mb-[20px] smallest-screen:mt-[10px]">
        <div className="border-r border-solid border-light_gray_color_second large-screen:min-w-[232px] small-screen:relative small-screen:overflow-hidden">
          <div
            className={cn(
              "sticky left-0 top-[90px] flex flex-col pb-[30px] transition-all duration-150 ease-linear small-screen:fixed small-screen:right-0 small-screen:top-0 small-screen:z-[200] small-screen:h-full small-screen:w-[360px] small-screen:max-w-full small-screen:bg-white small-screen:pb-[30px] small-screen:leading-[1.23]",
              {
                "small-screen:translate-x-0 small-screen:opacity-100":
                  isFilterOpen,
                "small-screen:w-0 small-screen:translate-x-full small-screen:opacity-0":
                  !isFilterOpen,
              },
            )}
          >
            <div className="relative flex items-center justify-end large-screen:hidden">
              <div className="flex h-[46px] w-[46px] items-center justify-center">
                <button onClick={() => setIsFilterOpen(false)}>
                  <CancelIcon size={32} className="fill-current text-primary" />
                </button>
              </div>
            </div>

            <div className="flex flex-col px-[25px] pt-[25px]">
              <h3 className="mb-[20px] font-quicksand text-[20px] font-bold leading-[1.1] tracking-[-0.01em] text-primary">
                Price
              </h3>
              <form action="" className="flex flex-col">
                <span>
                  <ReactSlider
                    className="horizontal-slider"
                    ariaLabel={["Lower thumb", "Upper thumb"]}
                    renderThumb={(props, state) => (
                      <div
                        {...props}
                        key={state.index}
                        className="top-[-4px] h-[10px] w-[10px] rounded-[50%] !border-none bg-primary focus-visible:outline-none"
                      />
                    )}
                    thumbActiveClassName=""
                    renderTrack={(props, state) => {
                      if (state.index === 1) {
                        return (
                          <div
                            {...props}
                            key={state.index}
                            className="relative h-[2px] rounded-full bg-primary"
                          />
                        );
                      } else {
                        return (
                          <div
                            {...props}
                            key={state.index}
                            className="relative h-[2px] rounded-full bg-background_color"
                          />
                        );
                      }
                    }}
                    step={100000}
                    min={PriceRange.MIN}
                    max={PriceRange.MAX}
                    onChange={setPrice}
                    value={price}
                  />
                </span>

                <div className="mb-[3px] mt-[15px] text-[12px] leading-[18px] tracking-[0.025em] text-text_color">
                  <span>Price:&nbsp;</span>
                  <span>{price[0]} </span>
                  <span>&nbsp;&nbsp;-&nbsp;</span>
                  <span>{price[1]} </span>
                </div>

                <button
                  type="button"
                  className="hover_animate mt-[10px] inline-block cursor-pointer rounded-[18px] border-[2px] border-solid border-primary bg-white px-[18px] py-[5px] text-center text-[12px] font-bold uppercase tracking-wider text-primary outline-none hover:bg-primary hover:text-white"
                >
                  Filter
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="flex-1 large-screen:min-w-[900px] small-screen:w-full">
          <div className="flex min-h-[55px] items-center border-b border-solid border-light_gray_color_second px-[30px] py-[13px] text-[13px] font-normal leading-[16px] tracking-[0.025em] text-text_color">
            <div className="flex w-full flex-1 small-screen:gap-[5px] up-smallest-screen:items-center up-smallest-screen:justify-between smallest-screen:flex-col">
              <div className="w-full flex-1">Showing all 11 results</div>
              <Sort sort={sort} handleSortFilter={handleSortFilter} />
            </div>
            <div className="ml-[15px] mr-[2px] large-screen:hidden large-screen:opacity-0">
              <button
                className="hover_animate inline-flex cursor-pointer items-center gap-[7px] rounded-[17px] border-[2px] border-solid border-primary bg-white px-[22px] py-[7px] text-center text-[11px] font-bold uppercase leading-[14px] tracking-[0.07em] text-primary outline-none hover:bg-primary hover:text-white"
                onClick={() => setIsFilterOpen(true)}
              >
                <AngleIcon size={8} className="rotate-[-90deg] fill-current" />
                Filter
              </button>
            </div>
          </div>

          <div className="flex flex-wrap">
            {[...Array(11)].map((_, index) => (
              <div
                className="large-screen:w-[25%] up-x-small-screen:w-[25%] up-x-smallest-screen:!w-[calc(100%/3)] up-xx-smallest-screen:!w-[50%] xx-smallest-screen:w-full down-xx-smallest-screen:!w-[50%]"
                key={index}
              >
                <PetCard />
              </div>
            ))}
          </div>

          <div className="mt-[30px] flex justify-center pb-[30px]">
            <Pagination
              paging={paging}
              handlePagingFilter={handlePagingFilter}
            />
          </div>
        </div>
      </div>
    </>
  );
}
