import Layout from "../Layout";
import AnalyticsDropdown from "../analytics/AnalyticsDropdown";
import ChartThirteen from "./ChartThirteen";
import SliderOne from "./SliderOne";

const Stocks = () => {
  return (
    <Layout>
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-9">
          {/* ==========Cards============ */}
          <SliderOne />
          {/* ==========Total Investment============ */}
          <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-[1.875rem] shadow-default dark:border-strokedark dark:bg-boxdark sm:px-[1.875rem] xl:col-span-7">
            <div className="mb-[1.375rem] flex flex-wrap items-center justify-between gap-2">
              <div>
                <h4 className="text-[22px] leading-[28px] font-bold text-black dark:text-white">
                  Total Investment
                </h4>
              </div>
              <div className="relative z-20 inline-block rounded">
                <select className="relative z-20 inline-flex appearance-none rounded  text-general-gray dark:text-dark-general-gray border border-stroke bg-transparent py-[5px] pl-3 pr-8 text-sm font-medium outline-none dark:border-strokedark">
                  <option
                    value=""
                    className="dark:bg-boxdark text-general-gray dark:text-dark-general-gray"
                  >
                    Last 7 days
                  </option>
                  <option value="" className="dark:bg-boxdark">
                    Last 15 days
                  </option>
                </select>
                <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.61025 11.8872C8.46025 11.8872 8.33525 11.8372 8.21025 11.7372L2.46025 6.08723C2.23525 5.86223 2.23525 5.51223 2.46025 5.28723C2.68525 5.06223 3.03525 5.06223 3.26025 5.28723L8.61025 10.5122L13.9603 5.23723C14.1853 5.01223 14.5353 5.01223 14.7603 5.23723C14.9853 5.46223 14.9853 5.81223 14.7603 6.03723L9.01025 11.6872C8.88525 11.8122 8.76025 11.8872 8.61025 11.8872Z"
                      fill="#64748B"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className="mb-3 flex flex-wrap gap-6">
              <div>
                <p className="mb-1.5 text-sm font-medium text-general-gray dark:text-dark-general-gray">
                  Invested Value
                </p>
                <div className="flex items-center gap-2.5">
                  <p className="font-medium text-black dark:text-white">
                    $1,279.95
                  </p>
                  <p className="flex items-center gap-1 font-medium text-meta-3">
                    1,22%
                    <svg
                      className="fill-current"
                      width="11"
                      height="8"
                      viewBox="0 0 11 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.77105 0.0465078L10.7749 7.54651L0.767256 7.54651L5.77105 0.0465078Z"
                        fill=""
                      ></path>
                    </svg>
                  </p>
                </div>
              </div>

              <div>
                <p className="mb-1.5 text-sm font-medium text-general-gray dark:text-dark-general-gray">
                  Total Returns
                </p>
                <div className="flex items-center gap-2.5">
                  <p className="font-medium text-black dark:text-white">
                    $22,543.87
                  </p>
                  <p className="flex items-center gap-1 font-medium text-meta-3">
                    10.14%
                    <svg
                      className="fill-current"
                      width="11"
                      height="8"
                      viewBox="0 0 11 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.77105 0.0465078L10.7749 7.54651L0.767256 7.54651L5.77105 0.0465078Z"
                        fill=""
                      ></path>
                    </svg>
                  </p>
                </div>
              </div>
            </div>
            <ChartThirteen />
          </div>
          {/* ==========My Stocks============ */}
          <div className="col-span-12 rounded-sm border border-stroke bg-white px-[1.375rem] py-[1.875rem] shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-5">
            <div className="mb-[1.875rem] flex flex-wrap items-center justify-between gap-2 px-2">
              <div>
                <h4 className="text-[22px] leading-[28px] font-bold text-black dark:text-white">
                  My Stocks
                </h4>
              </div>
              <div className="relative z-20 inline-block rounded">
                <select className="text-general-gray dark:text-dark-general-gray relative z-20 inline-flex appearance-none rounded border border-stroke bg-transparent py-[5px] pl-3 pr-8 text-sm font-medium outline-none dark:border-strokedark">
                  <option
                    value=""
                    className="dark:bg-boxdark text-general-gray dark:text-dark-general-gray"
                  >
                    Short by
                  </option>
                  <option
                    value=""
                    className="dark:bg-boxdark text-general-gray dark:text-dark-general-gray"
                  >
                    Monthly
                  </option>
                  <option
                    value=""
                    className="dark:bg-boxdark text-general-gray dark:text-dark-general-gray"
                  >
                    Yearly
                  </option>
                </select>
                <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.61025 11.8872C8.46025 11.8872 8.33525 11.8372 8.21025 11.7372L2.46025 6.08723C2.23525 5.86223 2.23525 5.51223 2.46025 5.28723C2.68525 5.06223 3.03525 5.06223 3.26025 5.28723L8.61025 10.5122L13.9603 5.23723C14.1853 5.01223 14.5353 5.01223 14.7603 5.23723C14.9853 5.46223 14.9853 5.81223 14.7603 6.03723L9.01025 11.6872C8.88525 11.8122 8.76025 11.8872 8.61025 11.8872Z"
                      fill="#64748B"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              {/* <!-- stock item start --> */}
              <div className="flex items-center justify-between rounded-[5px] px-4 py-3.5 hover:bg-[#F8FAFD] dark:hover:bg-meta-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/stocks/brand-07.svg`}
                      alt="brand"
                    />
                  </div>

                  <div>
                    <h5 className="text-sm font-bold leading-6 text-black dark:text-white">
                      Apple Inc
                    </h5>
                    <p className="text-xs font-medium text-general-gray dark:text-dark-general-gray">
                      16 Shares
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="mb-1 font-medium text-black dark:text-white">
                    $410.50
                  </p>
                  <p className="flex items-center justify-end gap-1 text-xs font-medium text-meta-3">
                    -0.95%
                    <svg
                      className="fill-current"
                      width="9"
                      height="7"
                      viewBox="0 0 9 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.48804 0.0989982L8.49108 6.099L0.484996 6.099L4.48804 0.0989982Z"
                        fill=""
                      ></path>
                    </svg>
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-[5px] px-4 py-3.5 hover:bg-[#F8FAFD] dark:hover:bg-meta-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/stocks/brand-09.svg`}
                      alt="brand"
                    />
                  </div>

                  <div>
                    <h5 className="text-sm font-bold leading-6 text-black dark:text-white">
                      Google
                    </h5>
                    <p className="text-xs font-medium text-general-gray dark:text-dark-general-gray">
                      100 Shares
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="mb-1 font-medium text-black dark:text-white">
                    $410.50
                  </p>
                  <p className="flex items-center justify-end gap-1 text-xs font-medium text-meta-3">
                    -0.95%
                    <svg
                      className="fill-current"
                      width="9"
                      height="7"
                      viewBox="0 0 9 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.48804 0.0989982L8.49108 6.099L0.484996 6.099L4.48804 0.0989982Z"
                        fill=""
                      ></path>
                    </svg>
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-[5px] px-4 py-3.5 hover:bg-[#F8FAFD] dark:hover:bg-meta-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/stocks/brand-10.svg`}
                      alt="brand"
                    />
                  </div>

                  <div>
                    <h5 className="text-sm font-bold leading-6 text-black dark:text-white">
                      Tesla
                    </h5>
                    <p className="text-xs font-medium text-general-gray dark:text-dark-general-gray">
                      20 Shares
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="mb-1 font-medium text-black dark:text-white">
                    $410.50
                  </p>
                  <p className="flex items-center justify-end gap-1 text-xs font-medium text-meta-3">
                    -0.95%
                    <svg
                      className="fill-current"
                      width="9"
                      height="7"
                      viewBox="0 0 9 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.48804 0.0989982L8.49108 6.099L0.484996 6.099L4.48804 0.0989982Z"
                        fill=""
                      ></path>
                    </svg>
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-[5px] px-4 py-3.5 hover:bg-[#F8FAFD] dark:hover:bg-meta-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/stocks/brand-13.svg`}
                      alt="brand"
                    />
                  </div>

                  <div>
                    <h5 className="text-sm font-bold leading-6 text-black dark:text-white">
                      Twitter X
                    </h5>
                    <p className="text-xs font-medium text-general-gray dark:text-dark-general-gray">
                      87 Shares
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="mb-1 font-medium text-black dark:text-white">
                    $410.50
                  </p>
                  <p className="flex items-center justify-end gap-1 text-xs font-medium text-red">
                    -0.95%
                    <svg
                      width="9"
                      height="7"
                      viewBox="0 0 9 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.48804 6.099L0.484999 0.0989983L8.49108 0.098999L4.48804 6.099Z"
                        fill=""
                      ></path>
                    </svg>
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-[5px] px-4 py-3.5 hover:bg-[#F8FAFD] dark:hover:bg-meta-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/stocks/brand-11.svg`}
                      alt="brand"
                    />
                  </div>

                  <div>
                    <h5 className="text-sm font-bold leading-6 text-black dark:text-white">
                      Microsoft
                    </h5>
                    <p className="text-xs font-medium text-general-gray dark:text-dark-general-gray">
                      37 Shares
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="mb-1 font-medium text-black dark:text-white">
                    $410.50
                  </p>
                  <p className="flex items-center justify-end gap-1 text-xs font-medium text-meta-3">
                    -0.95%
                    <svg
                      className="fill-current"
                      width="9"
                      height="7"
                      viewBox="0 0 9 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.48804 0.0989982L8.49108 6.099L0.484996 6.099L4.48804 0.0989982Z"
                        fill=""
                      ></path>
                    </svg>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ==========Trending Stocks============ */}
          <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-10 pt-[1.875rem] shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7 xl:col-span-5">
            <div className="mb-[1.875rem] flex items-center justify-between">
              <div>
                <h3 className="text-[22px] leading-[28px] font-bold text-black dark:text-white">
                  Trending Stocks
                </h3>
              </div>
              <AnalyticsDropdown />
            </div>

            <div className="flex flex-col gap-5">
              {/* <!-- stock item start --> */}
              <div className="rounded-[5px] border border-stroke p-5 dark:border-strokedark">
                <div className="mb-[1.375rem] flex items-center justify-between">
                  <div className="flex items-center gap-[1.125rem]">
                    <div className="flex h-[2.875rem] w-[2.875rem] items-center justify-center rounded-full bg-[#EEF2F8]">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/stocks/brand-14.svg`}
                        alt="brand"
                      />
                    </div>

                    <div>
                      <h5 className="font-bold text-black dark:text-white">
                        Netflix
                      </h5>
                      <p className="text-xs font-medium text-general-gray dark:text-dark-general-gray">
                        $12,453.00
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="mb-0.5 flex items-center justify-end gap-1 text-xs font-medium text-meta-3">
                      0.14%
                      <svg
                        className="fill-current"
                        width="9"
                        height="7"
                        viewBox="0 0 9 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.23511 0.193115L8.23815 6.19312H0.232065L4.23511 0.193115Z"
                          fill=""
                        ></path>
                      </svg>
                    </p>
                    <p className="text-xs font-medium text-meta-3">+ $1,984.00</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button className="flex w-full items-center justify-center rounded-[5px] bg-[#F3F5F8] px-[1.875rem] py-2 text-sm font-medium text-black hover:bg-primary/[0.15] hover:text-primary dark:bg-meta-4 dark:text-white dark:hover:bg-primary/[0.15] dark:hover:text-primary">
                    Short
                  </button>
                  <button className="flex w-full items-center justify-center rounded-[5px] bg-[#F3F5F8] px-[1.875rem] py-2 text-sm font-medium text-black hover:bg-primary/[0.15] hover:text-primary dark:bg-meta-4 dark:text-white dark:hover:bg-primary/[0.15] dark:hover:text-primary">
                    Buy
                  </button>
                </div>
              </div>

              <div className="rounded-[5px] border border-stroke p-5 dark:border-strokedark">
                <div className="mb-[1.375rem] flex items-center justify-between">
                  <div className="flex items-center gap-[1.125rem]">
                    <div className="flex h-[2.875rem] w-[2.875rem] items-center justify-center rounded-full bg-[#EEF2F8]">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/stocks/brand-15.svg`}
                        alt="brand"
                      />
                    </div>

                    <div>
                      <h5 className="font-bold text-black dark:text-white">
                        Apple Inc.
                      </h5>
                      <p className="text-xs font-medium text-general-gray dark:text-dark-general-gray">
                        $132,453.00
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="mb-0.5 flex items-center justify-end gap-1 text-xs font-medium text-meta-3">
                      1.03%
                      <svg
                        className="fill-current"
                        width="9"
                        height="7"
                        viewBox="0 0 9 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.23511 0.193115L8.23815 6.19312H0.232065L4.23511 0.193115Z"
                          fill=""
                        ></path>
                      </svg>
                    </p>
                    <p className="text-xs font-medium text-meta-3">+ $2,634.00</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button className="flex w-full items-center justify-center rounded-[5px] bg-[#F3F5F8] px-[1.875rem] py-2 text-sm font-medium text-black hover:bg-primary/[0.15] hover:text-primary dark:bg-meta-4 dark:text-white dark:hover:bg-primary/[0.15] dark:hover:text-primary">
                    Short
                  </button>
                  <button className="flex w-full items-center justify-center rounded-[5px] bg-[#F3F5F8] px-[1.875rem] py-2 text-sm font-medium text-black hover:bg-primary/[0.15] hover:text-primary dark:bg-meta-4 dark:text-white dark:hover:bg-primary/[0.15] dark:hover:text-primary">
                    Buy
                  </button>
                </div>
              </div>

              <div className="rounded-[5px] border border-stroke p-5 dark:border-strokedark">
                <div className="mb-[1.375rem] flex items-center justify-between">
                  <div className="flex items-center gap-[1.125rem]">
                    <div className="flex h-[2.875rem] w-[2.875rem] items-center justify-center rounded-full bg-[#EEF2F8]">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/stocks/brand-16.svg`}
                        alt="brand"
                      />
                    </div>

                    <div>
                      <h5 className="font-bold text-black dark:text-white">Meta</h5>
                      <p className="text-xs font-medium text-general-gray dark:text-dark-general-gray">
                        $31,428.00
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="mb-0.5 flex items-center justify-end gap-1 text-xs font-medium text-meta-3">
                      0.08%
                      <svg
                        className="fill-current"
                        width="9"
                        height="7"
                        viewBox="0 0 9 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.23511 0.193115L8.23815 6.19312H0.232065L4.23511 0.193115Z"
                          fill=""
                        ></path>
                      </svg>
                    </p>
                    <p className="text-xs font-medium text-meta-3">+ $2,432.00</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button className="flex w-full items-center justify-center rounded-[5px] bg-[#F3F5F8] px-[1.875rem] py-2 text-sm font-medium text-black hover:bg-primary/[0.15] hover:text-primary dark:bg-meta-4 dark:text-white dark:hover:bg-primary/[0.15] dark:hover:text-primary">
                    Short
                  </button>
                  <button className="flex w-full items-center justify-center rounded-[5px] bg-[#F3F5F8] px-[1.875rem] py-2 text-sm font-medium text-black hover:bg-primary/[0.15] hover:text-primary dark:bg-meta-4 dark:text-white dark:hover:bg-primary/[0.15] dark:hover:text-primary">
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* ==========Latest Transections============ */}
          <div className="col-span-12 rounded-sm border border-stroke bg-white p-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:p-[1.875rem] xl:col-span-7">
            <div className="mb-10 flex flex-wrap items-center justify-between gap-2">
              <div>
                <h4 className="text-[22px] leading-[28px] font-bold text-black dark:text-white">
                  Latest Transaction
                </h4>
              </div>
              <div className="relative z-20 inline-block rounded">
                <select className="text-general-gray dark:text-dark-general-gray relative z-20 inline-flex appearance-none rounded border border-stroke bg-transparent py-[5px] pl-3 pr-8 text-sm font-medium outline-none dark:border-strokedark">
                  <option
                    value=""
                    className="dark:bg-boxdark text-general-gray dark:text-dark-general-gray"
                  >
                    Last 7 days
                  </option>
                  <option
                    value=""
                    className="dark:bg-boxdark text-general-gray dark:text-dark-general-gray"
                  >
                    Last 15 days
                  </option>
                </select>
                <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.61025 11.8872C8.46025 11.8872 8.33525 11.8372 8.21025 11.7372L2.46025 6.08723C2.23525 5.86223 2.23525 5.51223 2.46025 5.28723C2.68525 5.06223 3.03525 5.06223 3.26025 5.28723L8.61025 10.5122L13.9603 5.23723C14.1853 5.01223 14.5353 5.01223 14.7603 5.23723C14.9853 5.46223 14.9853 5.81223 14.7603 6.03723L9.01025 11.6872C8.88525 11.8122 8.76025 11.8872 8.61025 11.8872Z"
                      fill="#64748B"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-[25px]">
              {/* <!-- Transaction item start --> */}
              <div className="grid grid-cols-2 items-center gap-5 xsm:grid-cols-3 sm:grid-cols-8">
                <div className="flex items-center gap-[1.125rem] sm:col-span-3 2xl:col-span-2">
                  <div className="flex h-[2.875rem] w-[2.875rem] items-center justify-center rounded-full bg-[#EEF2F8]">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/stocks/brand-15.svg`}
                      alt="brand"
                    />
                  </div>

                  <div className="hidden sm:block">
                    <h5 className="font-bold text-black dark:text-white">
                      Apple Inc.
                    </h5>
                    <p className="text-xs font-medium text-general-gray dark:text-dark-general-gray ">
                      Buy Stock
                    </p>
                  </div>
                </div>

                <div className="hidden sm:col-span-2 sm:block">
                  <h5 className="font-bold text-black dark:text-white">
                    Interest rate
                  </h5>
                  <p className="text-xs font-medium text-general-gray dark:text-dark-general-gray">
                    3.8%
                  </p>
                </div>

                <div className="hidden sm:block sm:col-span-1 2xl:col-span-2">
                  <p className="mb-0.5 flex items-center gap-[5px] text-sm font-bold leading-6 text-meta-3">
                    <svg
                      className="fill-current"
                      width="9"
                      height="7"
                      viewBox="0 0 9 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.10864 0.450195L8.11168 6.4502H0.1056L4.10864 0.450195Z"
                        fill=""
                      ></path>
                    </svg>
                    3.69%
                  </p>
                  <p className="text-xs text-general-gray dark:text-dark-general-gray">
                    Ratio
                  </p>
                </div>

                <div className="text-right sm:col-span-2">
                  <h5 className="font-bold text-black dark:text-white">
                    + $9346.00
                  </h5>
                  <p className="text-xs font-medium text-general-gray dark:text-dark-general-gray">
                    20 Sep, 27
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 items-center gap-5 xsm:grid-cols-3 sm:grid-cols-8">
                <div className="flex items-center gap-[1.125rem] sm:col-span-3 2xl:col-span-2">
                  <div className="flex h-[2.875rem] w-[2.875rem] items-center justify-center rounded-full bg-[#EEF2F8]">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/stocks/brand-17.svg`}
                      alt="brand"
                    />
                  </div>

                  <div className="hidden sm:block">
                    <h5 className="font-bold text-black dark:text-white">Amazon</h5>
                    <p className="text-xs font-medium text-general-gray dark:text-dark-general-gray">
                      Buy Stock
                    </p>
                  </div>
                </div>

                <div className="hidden sm:col-span-2 sm:block">
                  <h5 className="font-bold text-black dark:text-white">
                    Interest rate
                  </h5>
                  <p className="text-xs font-medium text-general-gray dark:text-dark-general-gray">
                    2.7%
                  </p>
                </div>

                <div className="hidden sm:block sm:col-span-1 2xl:col-span-2">
                  <p className="mb-0.5 flex items-center gap-[5px] text-sm font-bold leading-6 text-meta-3">
                    <svg
                      className="fill-current"
                      width="9"
                      height="7"
                      viewBox="0 0 9 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.10864 0.450195L8.11168 6.4502H0.1056L4.10864 0.450195Z"
                        fill=""
                      ></path>
                    </svg>
                    3.69%
                  </p>
                  <p className="text-xs text-general-gray dark:text-dark-general-gray">
                    Ratio
                  </p>
                </div>

                <div className="text-right sm:col-span-2">
                  <h5 className="font-bold text-black dark:text-white">
                    + $6879.00
                  </h5>
                  <p className="text-xs font-medium text-general-gray dark:text-dark-general-gray">
                    20 Sep, 27
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 items-center gap-5 xsm:grid-cols-3 sm:grid-cols-8">
                <div className="flex items-center gap-[1.125rem] sm:col-span-3 2xl:col-span-2">
                  <div className="flex h-[2.875rem] w-[2.875rem] items-center justify-center rounded-full bg-[#EEF2F8]">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/stocks/brand-14.svg`}
                      alt="brand"
                    />
                  </div>

                  <div className="hidden sm:block">
                    <h5 className="font-bold text-black dark:text-white">
                      Netflix
                    </h5>
                    <p className="text-xs font-medium text-general-gray dark:text-dark-general-gray">
                      Buy Stock
                    </p>
                  </div>
                </div>

                <div className="hidden sm:col-span-2 sm:block">
                  <h5 className="font-bold text-black dark:text-white">
                    Interest rate
                  </h5>
                  <p className="text-xs font-medium text-general-gray dark:text-dark-general-gray">
                    2.5%
                  </p>
                </div>

                <div className="hidden sm:block sm:col-span-1 2xl:col-span-2">
                  <p className="mb-0.5 flex items-center gap-[5px] text-sm font-bold leading-6 text-red">
                    <svg
                      className="fill-current"
                      width="9"
                      height="7"
                      viewBox="0 0 9 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.10864 6.4502L0.105604 0.450196L8.11168 0.450195L4.10864 6.4502Z"
                        fill=""
                      ></path>
                    </svg>
                    3.69%
                  </p>
                  <p className="text-xs text-general-gray dark:text-dark-general-gray">
                    Ratio
                  </p>
                </div>

                <div className="text-right sm:col-span-2">
                  <h5 className="font-bold text-black dark:text-white">
                    - $1439.00
                  </h5>
                  <p className="text-xs font-medium text-general-gray dark:text-dark-general-gray">
                    20 Sep, 27
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 items-center gap-5 xsm:grid-cols-3 sm:grid-cols-8">
                <div className="flex items-center gap-[1.125rem] sm:col-span-3 2xl:col-span-2">
                  <div className="flex h-[2.875rem] w-[2.875rem] items-center justify-center rounded-full bg-[#EEF2F8]">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/stocks/brand-18.svg`}
                      alt="brand"
                    />
                  </div>

                  <div className="hidden sm:block">
                    <h5 className="font-bold text-black dark:text-white">IBM</h5>
                    <p className="text-xs font-medium text-general-gray dark:text-dark-general-gray">
                      Buy Stock
                    </p>
                  </div>
                </div>

                <div className="hidden sm:col-span-2 sm:block">
                  <h5 className="font-bold text-black dark:text-white">
                    Interest rate
                  </h5>
                  <p className="text-xs font-medium text-general-gray dark:text-dark-general-gray">
                    1.8%
                  </p>
                </div>

                <div className="hidden sm:block sm:col-span-1 2xl:col-span-2">
                  <p className="mb-0.5 flex items-center gap-[5px] text-sm font-bold leading-6 text-red">
                    <svg
                      className="fill-current"
                      width="9"
                      height="7"
                      viewBox="0 0 9 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.10864 6.4502L0.105604 0.450196L8.11168 0.450195L4.10864 6.4502Z"
                        fill=""
                      ></path>
                    </svg>
                    3.69%
                  </p>
                  <p className="text-xs text-general-gray dark:text-dark-general-gray">
                    Ratio
                  </p>
                </div>

                <div className="text-right sm:col-span-2">
                  <h5 className="font-bold text-black dark:text-white">
                    - $2329.00
                  </h5>
                  <p className="text-xs font-medium text-general-gray dark:text-dark-general-gray">
                    20 Sep, 27
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 items-center gap-5 xsm:grid-cols-3 sm:grid-cols-8">
                <div className="flex items-center gap-[1.125rem] sm:col-span-3 2xl:col-span-2">
                  <div className="flex h-[2.875rem] w-[2.875rem] items-center justify-center rounded-full bg-[#EEF2F8]">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/stocks/brand-16.svg`}
                      alt="brand"
                    />
                  </div>

                  <div className="hidden sm:block">
                    <h5 className="font-bold text-black dark:text-white">Meta</h5>
                    <p className="text-xs font-medium text-general-gray dark:text-dark-general-gray">
                      Buy Stock
                    </p>
                  </div>
                </div>

                <div className="hidden sm:col-span-2 sm:block">
                  <h5 className="font-bold text-black dark:text-white">
                    Interest rate
                  </h5>
                  <p className="text-xs font-medium text-general-gray dark:text-dark-general-gray">
                    3.7%
                  </p>
                </div>

                <div className="hidden sm:block sm:col-span-1 2xl:col-span-2">
                  <p className="mb-0.5 flex items-center gap-[5px] text-sm font-bold leading-6 text-meta-3">
                    <svg
                      className="fill-current"
                      width="9"
                      height="7"
                      viewBox="0 0 9 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.10864 0.450195L8.11168 6.4502H0.1056L4.10864 0.450195Z"
                        fill=""
                      ></path>
                    </svg>
                    3.69%
                  </p>
                  <p className="text-xs text-general-gray dark:text-dark-general-gray">
                    Ratio
                  </p>
                </div>

                <div className="text-right sm:col-span-2">
                  <h5 className="font-bold text-black dark:text-white">
                    + $1026.00
                  </h5>
                  <p className="text-xs font-medium text-general-gray dark:text-dark-general-gray">
                    20 Sep, 27
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 items-center gap-5 xsm:grid-cols-3 sm:grid-cols-8">
                <div className="flex items-center gap-[1.125rem] sm:col-span-3 2xl:col-span-2">
                  <div className="flex h-[2.875rem] w-[2.875rem] items-center justify-center rounded-full bg-[#EEF2F8]">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/stocks/brand-11.svg`}
                      alt="brand"
                    />
                  </div>

                  <div className="hidden sm:block">
                    <h5 className="font-bold text-black dark:text-white">
                      Microsoft
                    </h5>
                    <p className="text-xs font-medium text-general-gray dark:text-dark-general-gray">
                      Buy Stock
                    </p>
                  </div>
                </div>

                <div className="hidden sm:col-span-2 sm:block">
                  <h5 className="font-bold text-black dark:text-white">
                    Interest rate
                  </h5>
                  <p className="text-xs font-medium text-general-gray dark:text-dark-general-gray">
                    3.7%
                  </p>
                </div>

                <div className="hidden sm:block sm:col-span-1 2xl:col-span-2">
                  <p className="mb-0.5 flex items-center gap-[5px] text-sm font-bold leading-6 text-meta-3">
                    <svg
                      className="fill-current"
                      width="9"
                      height="7"
                      viewBox="0 0 9 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.10864 0.450195L8.11168 6.4502H0.1056L4.10864 0.450195Z"
                        fill=""
                      ></path>
                    </svg>
                    3.69%
                  </p>
                  <p className="text-xs text-general-gray dark:text-dark-general-gray">
                    Ratio
                  </p>
                </div>

                <div className="text-right sm:col-span-2">
                  <h5 className="font-bold text-black dark:text-white">
                    + $3226.00
                  </h5>
                  <p className="text-xs font-medium text-general-gray dark:text-dark-general-gray">
                    20 Sep, 27
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 items-center gap-5 xsm:grid-cols-3 sm:grid-cols-8">
                <div className="flex items-center gap-[1.125rem] sm:col-span-3 2xl:col-span-2">
                  <div className="flex h-[2.875rem] w-[2.875rem] items-center justify-center rounded-full bg-[#EEF2F8]">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/stocks/brand-20.svg`}
                      alt="brand"
                    />
                  </div>

                  <div className="hidden sm:block">
                    <h5 className="font-bold text-black dark:text-white">Tesla</h5>
                    <p className="text-xs font-medium text-general-gray dark:text-dark-general-gray">
                      Buy Stock
                    </p>
                  </div>
                </div>

                <div className="hidden sm:col-span-2 sm:block">
                  <h5 className="font-bold text-black dark:text-white">
                    Interest rate
                  </h5>
                  <p className="text-xs font-medium text-general-gray dark:text-dark-general-gray">
                    3.7%
                  </p>
                </div>

                <div className="hidden sm:block sm:col-span-1 2xl:col-span-2">
                  <p className="mb-0.5 flex items-center gap-[5px] text-sm font-bold leading-6 text-red">
                    <svg
                      className="fill-current"
                      width="9"
                      height="7"
                      viewBox="0 0 9 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.10864 6.4502L0.105604 0.450196L8.11168 0.450195L4.10864 6.4502Z"
                        fill=""
                      ></path>
                    </svg>
                    1.24%
                  </p>
                  <p className="text-xs text-general-gray dark:text-dark-general-gray">
                    Ratio
                  </p>
                </div>

                <div className="text-right sm:col-span-2">
                  <h5 className="font-bold text-black dark:text-white">
                    - $6426.00
                  </h5>
                  <p className="text-xs font-medium text-general-gray dark:text-dark-general-gray">
                    20 Sep, 27
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ==========Latest Transections End============ */}
        </div>
      </div>
    </Layout>
  );
};

export default Stocks;
