import Layout from "../Layout";
import { Link } from "react-router-dom";
import ChartOne from "../ecommerce/charts/ChartOne";
import ChartTwo from "../ecommerce//charts/ChartTwo";
import ChartThree from "../ecommerce//charts/ChartThree";

const BasicChart = () => {
  return (
    <Layout>
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-[#F1F5F9] dark:bg-[#1A222C]">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-[26px] leading-[30px] font-bold text-black dark:text-white">
            Chart
          </h2>

          <nav>
            <ol className="flex items-center gap-2">
              <li className="text-general-gray dark:text-dark-general-gray">
                <Link
                  to="/"
                  className="font-medium text-general-gray dark:text-dark-general-gray"
                >
                  Dashboard /
                </Link>
              </li>
              <li className="font-medium text-primary">Chart</li>
            </ol>
          </nav>
        </div>
        {/* ========= */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-[1.875rem]">
          {/*-------Chart One Started-----*/}
          <div
            className={`col-span-12 rounded-sm border bg-white border-[rgba(226,232,240,1)] dark:border-[rgba(46,58,71,1)] dark:bg-[#1C2434]  px-5 pb-5 pt-[1.875rem] shadow-default  sm:px-7.5 xl:col-span-8`}
          >
            <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
              <div className="flex w-full flex-wrap gap-3 sm:gap-5">
                <div className="flex min-w-[11.875rem]">
                  <span className="mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-[#3c50e0] ">
                    <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-[#3c50e0] "></span>
                  </span>
                  <div className="w-full">
                    <p className="font-semibold text-[#3c50e0] ">
                      Total Revenue
                    </p>
                    <p
                      className={`text-sm font-medium text-[#64748b]  dark:text-[#aeb7c0] `}
                    >
                      12.04.2022 - 12.05.2022
                    </p>
                  </div>
                </div>
                <div className="flex min-w-[11.875rem]">
                  <span className="mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-[#80caee]">
                    <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-[#80caee]"></span>
                  </span>
                  <div className="w-full">
                    <p className="font-semibold text-[#80caee]">Total Sales</p>
                    <p
                      className={`text-sm font-medium text-[#64748b] dark:text-[#aeb7c0] `}
                    >
                      12.04.2022 - 12.05.2022
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex w-full max-w-[11.25rem] justify-end">
                <div
                  className={`inline-flex items-center rounded-md p-1.5 bg-[rgba(245,247,253,1)] dark:bg-[#313d4a]`}
                >
                  <button
                    className={`rounded  px-3 py-1 text-xs font-medium shadow-card hover:bg-white hover:shadow-card  text-black bg-white dark:text-white dark:bg-[#24303f] `}
                  >
                    Day
                  </button>
                  <button
                    className={`rounded  px-3 py-1 text-xs font-medium shadow-card hover:bg-white hover:shadow-card  text-black bg-white dark:text-white dark:bg-[#24303f] `}
                  >
                    Week
                  </button>
                  <button
                    className={`rounded  px-3 py-1 text-xs font-medium shadow-card hover:bg-white hover:shadow-card  text-black bg-white dark:text-white dark:bg-[#24303f] `}
                  >
                    Month
                  </button>
                </div>
              </div>
            </div>
            <ChartOne />
          </div>
          {/*-------Chart two Started-----*/}
          <div
            className={`col-span-12 rounded-sm border bg-white border-[rgba(226,232,240,1)] dark:border-[rgba(46,58,71,1)] dark:bg-[#1C2434]  p-[1.875rem] shadow-default xl:col-span-4`}
          >
            <div className="mb-4 justify-between gap-4 sm:flex">
              <div>
                <h4
                  className={`text-xl font-medium text-[#1c2434] dark:text-white `}
                >
                  Profit this week
                </h4>
              </div>
              <div>
                <div className="relative z-20 inline-block">
                  <select
                    name="#"
                    id="#"
                    className={`relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none text-[#1c2434] dakr:text-[#64748b]
                    `}
                  >
                    <option value="">This Week</option>
                    <option value="">Last Week</option>
                  </select>
                  <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2">
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z"
                        fill="#637381"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.22659 0.546578L5.00141 4.09604L8.76422 0.557869C9.08459 0.244537 9.54201 0.329403 9.79139 0.578788C10.112 0.899434 10.0277 1.36122 9.77668 1.61224L9.76644 1.62248L5.81552 5.33722C5.36257 5.74249 4.6445 5.7544 4.19352 5.32924C4.19327 5.32901 4.19377 5.32948 4.19352 5.32924L0.225953 1.61241C0.102762 1.48922 -4.20186e-08 1.31674 -3.20269e-08 1.08816C-2.40601e-08 0.905899 0.0780105 0.712197 0.211421 0.578787C0.494701 0.295506 0.935574 0.297138 1.21836 0.539529L1.22659 0.546578ZM4.51598 4.98632C4.78076 5.23639 5.22206 5.23639 5.50155 4.98632L9.44383 1.27939C9.5468 1.17642 9.56151 1.01461 9.45854 0.911642C9.35557 0.808672 9.19376 0.793962 9.09079 0.896932L5.14851 4.60386C5.06025 4.67741 4.92785 4.67741 4.85431 4.60386L0.912022 0.896932C0.809051 0.808672 0.647241 0.808672 0.54427 0.911642C0.500141 0.955772 0.47072 1.02932 0.47072 1.08816C0.47072 1.16171 0.50014 1.22055 0.558981 1.27939L4.51598 4.98632Z"
                        fill="#637381"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <ChartTwo />
          </div>
          {/*-------Chart three Started-----*/}
          <div
            className={`col-span-12 rounded-sm border bg-white border-[rgba(226,232,240,1)] dark:border-[rgba(46,58,71,1)] dark:bg-[#1C2434]  px-5 pb-5 pt-[1.875rem] shadow-default sm:px-7.5 xl:col-span-5`}
          >
            <div className="mb-3 justify-between gap-4 sm:flex">
              <div>
                <h4
                  className={`text-xl font-bold text-[#1c2434] dark:text-white`}
                >
                  Visitors Analytics
                </h4>
              </div>
              <div>
                <div className="relative z-20 inline-block">
                  <select
                    name=""
                    id=""
                    className={`relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none text-[#1c2434]  dark:text-[#64748b]`}
                  >
                    <option value="">Monthly</option>
                    <option value="">Yearly</option>
                  </select>
                  <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2">
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z"
                        fill="#637381"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.22659 0.546578L5.00141 4.09604L8.76422 0.557869C9.08459 0.244537 9.54201 0.329403 9.79139 0.578788C10.112 0.899434 10.0277 1.36122 9.77668 1.61224L9.76644 1.62248L5.81552 5.33722C5.36257 5.74249 4.6445 5.7544 4.19352 5.32924C4.19327 5.32901 4.19377 5.32948 4.19352 5.32924L0.225953 1.61241C0.102762 1.48922 -4.20186e-08 1.31674 -3.20269e-08 1.08816C-2.40601e-08 0.905899 0.0780105 0.712197 0.211421 0.578787C0.494701 0.295506 0.935574 0.297138 1.21836 0.539529L1.22659 0.546578ZM4.51598 4.98632C4.78076 5.23639 5.22206 5.23639 5.50155 4.98632L9.44383 1.27939C9.5468 1.17642 9.56151 1.01461 9.45854 0.911642C9.35557 0.808672 9.19376 0.793962 9.09079 0.896932L5.14851 4.60386C5.06025 4.67741 4.92785 4.67741 4.85431 4.60386L0.912022 0.896932C0.809051 0.808672 0.647241 0.808672 0.54427 0.911642C0.500141 0.955772 0.47072 1.02932 0.47072 1.08816C0.47072 1.16171 0.50014 1.22055 0.558981 1.27939L4.51598 4.98632Z"
                        fill="#637381"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-2">
              <ChartThree />
            </div>
            <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
              <div className="w-full px-8 sm:w-1/2">
                <div className="flex w-full items-center">
                  <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#6577F3]"></span>
                  <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                    <span> Desktop </span>
                    <span> 65% </span>
                  </p>
                </div>
              </div>
              <div className="w-full px-8 sm:w-1/2">
                <div className="flex w-full items-center">
                  <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#6577F3]"></span>
                  <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                    <span> Tablet </span>
                    <span> 34% </span>
                  </p>
                </div>
              </div>
              <div className="w-full px-8 sm:w-1/2">
                <div className="flex w-full items-center">
                  <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#8FD0EF]"></span>
                  <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                    <span> Mobile </span>
                    <span> 45% </span>
                  </p>
                </div>
              </div>
              <div className="w-full px-8 sm:w-1/2">
                <div className="flex w-full items-center">
                  <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#0FADCF]"></span>
                  <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                    <span> Unknown </span>
                    <span> 12% </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*-------Chart four Started-----*/}
        </div>
        {/* ========= */}
      </div>
    </Layout>
  );
};

export default BasicChart;
