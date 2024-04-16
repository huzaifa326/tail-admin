import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderOne = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className=" relative col-span-12 rounded-sm border border-stroke bg-white py-10 shadow-default dark:border-strokedark dark:bg-boxdark">
      <Slider {...settings} className="relative w-full flex justify-between ">
        <div className="relative max-w-[307px] w-full border-r border-stroke px-10 dark:border-strokedark">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="h-[2.625rem] w-[2.625rem] overflow-hidden rounded-full">
                <img
                  src={`${process.env.PUBLIC_URL}/images/stocks/brand-07.svg`}
                  alt="brand"
                />
              </div>
              <h4 className="text-xl font-bold text-black dark:text-white">
                Apple
              </h4>
            </div>
            <div className="relative h-[1.875rem] w-full max-w-[6.25rem] ">
              <div className=" chartEleven chartEleven-01 absolute right-0 top-1/2 -ml-5 -translate-y-1/2">
                <img
                  src={`${process.env.PUBLIC_URL}/images/stocks/chartpic.png`}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mt-[1.375rem] flex flex-col gap-1.5">
            <div className="flex items-center justify-between gap-1">
              <p className="text-sm font-medium text-general-gray dark:text-dark-general-gray ">
                Total Share
              </p>

              <p className="font-medium text-black dark:text-white">$410.50</p>
            </div>

            <div className="flex items-center justify-between gap-1">
              <p className="text-sm font-medium text-general-gray dark:text-dark-general-gray">
                Total Return
              </p>

              <p className="flex items-center gap-1 font-medium text-[#FB5454]">
                -1.10%
                <svg
                  className="fill-current"
                  width="11"
                  height="9"
                  viewBox="0 0 11 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.83246 8.41748L0.828662 0.91748L10.8363 0.91748L5.83246 8.41748Z"
                    fill=""
                  ></path>
                </svg>
              </p>
            </div>
          </div>
        </div>
        <div className="relative max-w-[307px] w-full border-r border-stroke px-10 dark:border-strokedark">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="h-[2.625rem] w-[2.625rem] overflow-hidden rounded-full">
                <img
                  src={`${process.env.PUBLIC_URL}/images/stocks/brand-08.svg`}
                  alt="brand"
                />
              </div>
              <h4 className="text-xl font-bold text-black dark:text-white">
                Meta
              </h4>
            </div>
            <div className="relative h-[1.875rem] w-full max-w-[6.25rem] ">
              <div className=" chartEleven chartEleven-01 absolute right-0 top-1/2 -ml-5 -translate-y-1/2">
                <img
                  src={`${process.env.PUBLIC_URL}/images/stocks/chartpic.png`}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mt-[1.375rem] flex flex-col gap-1.5">
            <div className="flex items-center justify-between gap-1">
              <p className="text-sm font-medium text-general-gray dark:text-dark-general-gray ">
                Total Share
              </p>

              <p className="font-medium text-black dark:text-white">$157.36</p>
            </div>

            <div className="flex items-center justify-between gap-1">
              <p className="text-sm font-medium text-general-gray dark:text-dark-general-gray">
                Total Return
              </p>

              <p className="flex items-center gap-1 font-medium text-[#FB5454]">
                -0.10%
                <svg
                  className="fill-current"
                  width="11"
                  height="9"
                  viewBox="0 0 11 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.83246 8.41748L0.828662 0.91748L10.8363 0.91748L5.83246 8.41748Z"
                    fill=""
                  ></path>
                </svg>
              </p>
            </div>
          </div>
        </div>
        <div className="relative max-w-[307px] w-full border-r border-stroke px-10 dark:border-strokedark">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="h-[2.625rem] w-[2.625rem] overflow-hidden rounded-full">
                <img
                  src={`${process.env.PUBLIC_URL}/images/stocks/brand-09.svg`}
                  alt="brand"
                />
              </div>
              <h4 className="text-xl font-bold text-black dark:text-white">
                Google
              </h4>
            </div>
            <div className="relative h-[1.875rem] w-full max-w-[6.25rem] ">
              <div className=" chartEleven chartEleven-01 absolute right-0 top-1/2 -ml-5 -translate-y-1/2">
                <img
                  src={`${process.env.PUBLIC_URL}/images/stocks/chartpics.png`}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mt-[1.375rem] flex flex-col gap-1.5">
            <div className="flex items-center justify-between gap-1">
              <p className="text-sm font-medium text-general-gray dark:text-dark-general-gray ">
                Total Share
              </p>

              <p className="font-medium text-black dark:text-white">$743.76</p>
            </div>

            <div className="flex items-center justify-between gap-1">
              <p className="text-sm font-medium text-general-gray dark:text-dark-general-gray">
                Total Return
              </p>

              <p className="flex items-center gap-1 font-medium text-meta-3">
                +0.95%
                <svg
                  className="fill-current"
                  width="11"
                  height="8"
                  viewBox="0 0 11 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.83258 0.417479L10.8364 7.91748L0.828779 7.91748L5.83258 0.417479Z"
                    fill="#10B981"
                  ></path>
                </svg>
              </p>
            </div>
          </div>
        </div>

        <div className="relative max-w-[307px] w-full border-r border-stroke px-10 dark:border-strokedark">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="h-[2.625rem] w-[2.625rem] overflow-hidden rounded-full">
                <img
                  src={`${process.env.PUBLIC_URL}/images/stocks/brand-10.svg`}
                  alt="brand"
                />
              </div>
              <h4 className="text-xl font-bold text-black dark:text-white">
                Tesla
              </h4>
            </div>
            <div className="relative h-[1.875rem] w-full max-w-[6.25rem] ">
              <div className=" chartEleven chartEleven-01 absolute right-0 top-1/2 -ml-5 -translate-y-1/2">
                <img
                  src={`${process.env.PUBLIC_URL}/images/stocks/chartpic.png`}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mt-[1.375rem] flex flex-col gap-1.5">
            <div className="flex items-center justify-between gap-1">
              <p className="text-sm font-medium text-general-gray dark:text-dark-general-gray ">
                Total Share
              </p>

              <p className="font-medium text-black dark:text-white">$234.09</p>
            </div>

            <div className="flex items-center justify-between gap-1">
              <p className="text-sm font-medium text-general-gray dark:text-dark-general-gray">
                Total Return
              </p>

              <p className="flex items-center gap-1 font-medium text-[#FB5454]">
                -1.10%
                <svg
                  className="fill-current"
                  width="11"
                  height="9"
                  viewBox="0 0 11 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.83246 8.41748L0.828662 0.91748L10.8363 0.91748L5.83246 8.41748Z"
                    fill=""
                  ></path>
                </svg>
              </p>
            </div>
          </div>
        </div>
        <div className="relative max-w-[307px] w-full border-r border-stroke px-10 dark:border-strokedark">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="h-[2.625rem] w-[2.625rem] overflow-hidden rounded-full">
                <img
                  src={`${process.env.PUBLIC_URL}/images/stocks/brand-11.svg`}
                  alt="brand"
                />
              </div>
              <h4 className="text-xl font-bold text-black dark:text-white">
                Microsoft
              </h4>
            </div>
            <div className="relative h-[1.875rem] w-full max-w-[63.25rem] ">
              <div className=" chartEleven chartEleven-01 absolute right-0 top-1/2 ml-[5px] -translate-y-1/2">
                <img
                  src={`${process.env.PUBLIC_URL}/images/stocks/chartpic.png`}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mt-[1.375rem] flex flex-col gap-1.5">
            <div className="flex items-center justify-between gap-1">
              <p className="text-sm font-medium text-general-gray dark:text-dark-general-gray ">
                Total Share
              </p>

              <p className="font-medium text-black dark:text-white">$410.50</p>
            </div>

            <div className="flex items-center justify-between gap-1">
              <p className="text-sm font-medium text-general-gray dark:text-dark-general-gray">
                Total Return
              </p>

              <p className="flex items-center gap-1 font-medium text-[#FB5454]">
                -2.9%
                <svg
                  className="fill-current"
                  width="11"
                  height="9"
                  viewBox="0 0 11 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.83246 8.41748L0.828662 0.91748L10.8363 0.91748L5.83246 8.41748Z"
                    fill=""
                  ></path>
                </svg>
              </p>
            </div>
          </div>
        </div>
        <div className="relative max-w-[307px] w-full border-r border-stroke px-10 dark:border-strokedark">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="h-[2.625rem] w-[2.625rem] overflow-hidden rounded-full">
                <img
                  src={`${process.env.PUBLIC_URL}/images/stocks/brand-12.svg`}
                  alt="brand"
                />
              </div>
              <h4 className="text-xl font-bold text-black dark:text-white">
                Amazon
              </h4>
            </div>
            <div className="relative h-[1.875rem] w-full max-w-[6.25rem] ">
              <div className=" chartEleven chartEleven-01 absolute right-0 top-1/2 -ml-5 -translate-y-1/2">
                <img
                  src={`${process.env.PUBLIC_URL}/images/stocks/chartpics.png`}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mt-[1.375rem] flex flex-col gap-1.5">
            <div className="flex items-center justify-between gap-1">
              <p className="text-sm font-medium text-general-gray dark:text-dark-general-gray ">
                Total Share
              </p>

              <p className="font-medium text-black dark:text-white">$743.76</p>
            </div>

            <div className="flex items-center justify-between gap-1">
              <p className="text-sm font-medium text-general-gray dark:text-dark-general-gray">
                Total Return
              </p>

              <p className="flex items-center gap-1 font-medium text-meta-3">
                +0.65%
                <svg
                  className="fill-current"
                  width="11"
                  height="8"
                  viewBox="0 0 11 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.83258 0.417479L10.8364 7.91748L0.828779 7.91748L5.83258 0.417479Z"
                    fill="#10B981"
                  ></path>
                </svg>
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderOne;
