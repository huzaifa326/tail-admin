import React from "react";
import Layout from "../Layout";
import AnalyticsDropdown from "../analytics/AnalyticsDropdown";
import ChartSeven from "./ChartSeven";
import ChartEight from "./ChartEight";
import ChartNine from "./ChartNine";

const CRM = () => {
  return (
    <Layout>
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-[#F1F5F9] dark:bg-[#1A222C]">
        {/* ==Header=== */}
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-[22px] leading-[28px] font-bold text-black dark:text-white">
              This Week’s Overview
            </h2>
          </div>

          <div className="flex items-center">
            <p className="font-medium uppercase text-black dark:text-white">
              Short by:
            </p>
            <div className="relative z-20 inline-block text-general-gray dark:text-dark-general-gray">
              <select
                name="#"
                id="#"
                className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 font-medium outline-none"
              >
                <option
                  className="px-2 py-2 hover:text-white hover-bg-blue "
                  value=""
                >
                  Current Week
                </option>
                <option
                  className="px-2 py-2 hover:text-white hover-bg-blue"
                  value=""
                >
                  Last Week
                </option>
              </select>
              <span className="cursor-pointer absolute right-1 top-1/2 z-10 -translate-y-1/2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.99995 12.8249C8.8312 12.8249 8.69058 12.7687 8.54995 12.6562L2.0812 6.2999C1.82808 6.04678 1.82808 5.65303 2.0812 5.3999C2.33433 5.14678 2.72808 5.14678 2.9812 5.3999L8.99995 11.278L15.0187 5.34365C15.2718 5.09053 15.6656 5.09053 15.9187 5.34365C16.1718 5.59678 16.1718 5.99053 15.9187 6.24365L9.44995 12.5999C9.30933 12.7405 9.1687 12.8249 8.99995 12.8249Z"
                    fill="#64748B"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        {/* ==Card=== */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-[1.875rem]">
          <div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-[1.875rem]">
            <div className="flex items-end justify-between">
              <div>
                <h3 className="mb-4 text-[28px] leading-[35px] font-bold text-black dark:text-white">
                  197
                </h3>
                <p className="font-medium text-general-gray dark:text-dark-general-gray ">
                  Clients Added
                </p>
                <span className="mt-2 flex items-center gap-2">
                  <span className="flex items-center gap-1 rounded-md bg-meta-3 p-1 text-xs font-medium text-white">
                    <svg
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.0155 5.24683H9.49366C9.23116 5.24683 9.01241 5.46558 9.01241 5.72808C9.01241 5.99058 9.23116 6.20933 9.49366 6.20933H11.6593L8.85928 8.09058C8.74991 8.17808 8.59678 8.17808 8.46553 8.09058L5.57803 6.18745C5.11866 5.8812 4.54991 5.8812 4.09053 6.18745L0.721783 8.44058C0.503033 8.5937 0.437408 8.89995 0.590533 9.1187C0.678033 9.24995 0.831157 9.33745 1.00616 9.33745C1.09366 9.33745 1.20303 9.31558 1.26866 9.24995L4.65928 6.99683C4.76866 6.90933 4.92178 6.90933 5.05303 6.99683L7.94053 8.92183C8.39991 9.22808 8.96866 9.22808 9.42803 8.92183L12.5124 6.8437V9.27183C12.5124 9.53433 12.7312 9.75308 12.9937 9.75308C13.2562 9.75308 13.4749 9.53433 13.4749 9.27183V5.72808C13.5187 5.46558 13.278 5.24683 13.0155 5.24683Z"
                        fill="white"
                      ></path>
                    </svg>
                    <span>+2.5%</span>
                  </span>

                  <span className="text-sm font-medium text-general-gray dark:text-dark-general-gray">
                    Since last week
                  </span>
                </span>
              </div>

              <div x-data="{percent : 60}">
                <svg className="h-[4.375rem] w-[4.375rem] -rotate-90 transform">
                  <circle
                    className="text-stroke dark:text-strokedark"
                    stroke-width="10"
                    stroke="currentColor"
                    fill="transparent"
                    r="30"
                    cx="35"
                    cy="35"
                  ></circle>
                  <circle
                    className="text-primary"
                    stroke-width="10"
                    stroke-linecap=""
                    stroke="currentColor"
                    fill="transparent"
                    r="30"
                    cx="35"
                    cy="35"
                    stroke-dasharray="188.49555921538757"
                    stroke-dashoffset="75.39822368615502"
                  ></circle>
                </svg>
              </div>
            </div>
          </div>

          <div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-[1.875rem]">
            <div className="flex items-end justify-between">
              <div>
                <h3 className="mb-4 text-[28px] leading-[35px] font-bold text-black dark:text-white">
                  745
                </h3>
                <p className="font-medium text-general-gray dark:text-dark-general-gray">
                  Contracts Signed
                </p>
                <span className="mt-2 flex items-center gap-2">
                  <span className="flex items-center gap-1 rounded-md bg-[#FB5454] p-1 text-xs font-medium text-white">
                    <svg
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.0157 5.24683C12.7532 5.24683 12.5344 5.46558 12.5344 5.72808V8.1562L9.40631 6.07808C8.94693 5.77183 8.37818 5.77183 7.91881 6.07808L5.0313 8.00308C4.92193 8.09058 4.7688 8.09058 4.63755 8.00308L1.24693 5.74995C1.02818 5.59683 0.721929 5.66245 0.568804 5.8812C0.415679 6.09995 0.481304 6.4062 0.700054 6.55933L4.09068 8.81245C4.55005 9.1187 5.1188 9.1187 5.57818 8.81245L8.46568 6.88745C8.57506 6.79995 8.72818 6.79995 8.85943 6.88745L11.6594 8.7687H9.4938C9.23131 8.7687 9.01256 8.98745 9.01256 9.24995C9.01256 9.51245 9.23131 9.7312 9.4938 9.7312H13.0157C13.2782 9.7312 13.4969 9.51245 13.4969 9.24995V5.72808C13.5188 5.46558 13.2782 5.24683 13.0157 5.24683Z"
                        fill="white"
                      ></path>
                    </svg>
                    <span>+1.5%</span>
                  </span>

                  <span className="text-sm font-medium text-general-gray dark:text-dark-general-gray">
                    Since last week
                  </span>
                </span>
              </div>

              <div x-data="{percent : 30}">
                <svg className="h-[4.375rem] w-[4.375rem] -rotate-90 transform">
                  <circle
                    className="text-stroke dark:text-strokedark"
                    stroke-width="10"
                    stroke="currentColor"
                    fill="transparent"
                    r="30"
                    cx="35"
                    cy="35"
                  ></circle>
                  <circle
                    className="text-primary"
                    stroke-width="10"
                    stroke-linecap=""
                    stroke="currentColor"
                    fill="transparent"
                    r="30"
                    cx="35"
                    cy="35"
                    stroke-dasharray="188.49555921538757"
                    stroke-dashoffset="131.9468914507713"
                  ></circle>
                </svg>
              </div>
            </div>
          </div>

          <div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-[1.875rem]">
            <div className="flex items-end justify-between">
              <div>
                <h3 className="mb-4 text-[28px] leading-[35px] font-bold text-black dark:text-white">
                  512
                </h3>
                <p className="font-medium text-general-gray dark:text-dark-general-gray">
                  Invoice Sent
                </p>
                <span className="mt-2 flex items-center gap-2">
                  <span className="flex items-center gap-1 rounded-md bg-meta-3 p-1 text-xs font-medium text-white">
                    <svg
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.0155 5.24683H9.49366C9.23116 5.24683 9.01241 5.46558 9.01241 5.72808C9.01241 5.99058 9.23116 6.20933 9.49366 6.20933H11.6593L8.85928 8.09058C8.74991 8.17808 8.59678 8.17808 8.46553 8.09058L5.57803 6.18745C5.11866 5.8812 4.54991 5.8812 4.09053 6.18745L0.721783 8.44058C0.503033 8.5937 0.437408 8.89995 0.590533 9.1187C0.678033 9.24995 0.831157 9.33745 1.00616 9.33745C1.09366 9.33745 1.20303 9.31558 1.26866 9.24995L4.65928 6.99683C4.76866 6.90933 4.92178 6.90933 5.05303 6.99683L7.94053 8.92183C8.39991 9.22808 8.96866 9.22808 9.42803 8.92183L12.5124 6.8437V9.27183C12.5124 9.53433 12.7312 9.75308 12.9937 9.75308C13.2562 9.75308 13.4749 9.53433 13.4749 9.27183V5.72808C13.5187 5.46558 13.278 5.24683 13.0155 5.24683Z"
                        fill="white"
                      ></path>
                    </svg>
                    <span>+0.5%</span>
                  </span>

                  <span className="text-sm font-medium text-general-gray dark:text-dark-general-gray">
                    Since last week
                  </span>
                </span>
              </div>

              <div x-data="{percent : 70}">
                <svg className="h-[4.375rem] w-[4.375rem] -rotate-90 transform">
                  <circle
                    className="text-stroke dark:text-strokedark"
                    stroke-width="10"
                    stroke="currentColor"
                    fill="transparent"
                    r="30"
                    cx="35"
                    cy="35"
                  ></circle>
                  <circle
                    className="text-primary"
                    stroke-width="10"
                    stroke-linecap=""
                    stroke="currentColor"
                    fill="transparent"
                    r="30"
                    cx="35"
                    cy="35"
                    stroke-dasharray="188.49555921538757"
                    stroke-dashoffset="56.548667764616255"
                  ></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* ==Card End=== */}

        <div className="mt-[1.875rem] grid grid-cols-12 gap-4 md:gap-6 2xl:gap-[1.875rem]">
          {/* ====Payment Overview=== */}
          <div className="col-span-12 xl:col-span-7">
            <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-[1.875rem] shadow-default dark:border-strokedark dark:bg-boxdark sm:px-[1.875rem] xl:col-span-8">
              <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h4 className="text-[22px] leading-[28px] font-bold text-black dark:text-white">
                    Payments Overview
                  </h4>
                </div>
                <div className="flex items-center">
                  <p className="font-medium uppercase text-black dark:text-white">
                    Short by:
                  </p>
                  <div className="relative z-20 inline-block text-general-gray dark:text-dark-general-gray">
                    <select
                      name="#"
                      id="#"
                      className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 font-medium outline-none"
                    >
                      <option value="">Monthly</option>
                      <option value="">Weekly</option>
                    </select>
                    <span className="absolute right-1 top-1/2 z-10 -translate-y-1/2">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.99995 12.8249C8.8312 12.8249 8.69058 12.7687 8.54995 12.6562L2.0812 6.2999C1.82808 6.04678 1.82808 5.65303 2.0812 5.3999C2.33433 5.14678 2.72808 5.14678 2.9812 5.3999L8.99995 11.278L15.0187 5.34365C15.2718 5.09053 15.6656 5.09053 15.9187 5.34365C16.1718 5.59678 16.1718 5.99053 15.9187 6.24365L9.44995 12.5999C9.30933 12.7405 9.1687 12.8249 8.99995 12.8249Z"
                          fill="#64748B"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              <ChartSeven />
              <div className="flex flex-col text-center sm:flex-row">
                <div className="border-stroke py-2 dark:border-strokedark sm:w-1/2 sm:border-r">
                  <p className="font-medium text-general-gray dark:text-dark-general-gray">
                    Received Amount
                  </p>
                  <h4 className="mt-1 text-[20px] leading-[26px] font-bold text-black dark:text-white">
                    $45,070.00
                  </h4>
                </div>
                <div className="py-2 sm:w-1/2">
                  <p className="font-medium text-general-gray dark:text-dark-general-gray">
                    Due Amount
                  </p>
                  <h4 className="mt-1 text-[20px] leading-[26px] font-bold text-black dark:text-white">
                    $32,400.00
                  </h4>
                </div>
              </div>
            </div>
          </div>
          {/* ====Used Devices=== */}
          <div className="col-span-12 xl:col-span-5">
            <div className="rounded-sm border border-stroke bg-white px-5 pb-5 pt-[1.875rem] shadow-default dark:border-strokedark dark:bg-boxdark sm:px-[1.875rem]">
              <div className="mb-3 justify-between gap-4 sm:flex">
                <div>
                  <h4 className="text-[22px] leading-[28px] font-bold text-black dark:text-white">
                    Used Devices
                  </h4>
                </div>
                <div className="mt-2 flex items-center sm:mt-0">
                  <p className="font-medium uppercase text-black dark:text-white">
                    Short by:
                  </p>
                  <div className="relative z-20 inline-block text-general-gray dark:text-dark-general-gray">
                    <select
                      name="#"
                      id="#"
                      className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 font-medium outline-none"
                    >
                      <option value="">Monthly</option>
                      <option value="">Weekly</option>
                    </select>
                    <span className="absolute right-1 top-1/2 z-10 -translate-y-1/2">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.99995 12.8249C8.8312 12.8249 8.69058 12.7687 8.54995 12.6562L2.0812 6.2999C1.82808 6.04678 1.82808 5.65303 2.0812 5.3999C2.33433 5.14678 2.72808 5.14678 2.9812 5.3999L8.99995 11.278L15.0187 5.34365C15.2718 5.09053 15.6656 5.09053 15.9187 5.34365C16.1718 5.59678 16.1718 5.99053 15.9187 6.24365L9.44995 12.5999C9.30933 12.7405 9.1687 12.8249 8.99995 12.8249Z"
                          fill="#64748B"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <ChartEight />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="block h-4 w-4 rounded-full border-4 border-primary"></span>
                    <span className="font-medium text-black-2 dark:text-white">
                      Mobile
                    </span>
                  </div>

                  <span className="inline-block rounded-md bg-primary px-1.5 py-0.5 text-xs font-medium text-white">
                    10%
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="block h-4 w-4 rounded-full border-4 border-[#80CAEE]"></span>
                    <span className="font-medium text-black-2 dark:text-white">
                      Tablet
                    </span>
                  </div>

                  <span className="inline-block rounded-md bg-[#80CAEE] px-1.5 py-0.5 text-xs font-medium text-white">
                    20%
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="block h-4 w-4 rounded-full border-4 border-[#0FADCF]"></span>
                    <span className="font-medium text-black-2 dark:text-white">
                      Desktop
                    </span>
                  </div>

                  <span className="inline-block rounded-md bg-[#0FADCF] px-1.5 py-0.5 text-xs font-medium text-white">
                    70%
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* ====Lead Reports=== */}
          <div className="col-span-12">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark text-general-gray dark:text-dark-general-gray">
              <div className="p-4 md:p-6 xl:p-[1.875rem]">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-[22px] leading-[28px] font-bold text-black dark:text-white">
                      Leads Report
                    </h2>
                  </div>
                  <AnalyticsDropdown />
                </div>
              </div>

              <div className="border-b border-stroke px-4 pb-5 dark:border-strokedark md:px-6 xl:px-[1.875rem] ">
                <div className="flex items-center gap-3">
                  <div className="w-2/12 xl:w-3/12">
                    <span className="font-medium">Name</span>
                  </div>
                  <div className="w-6/12 sm:w-5/12 md:w-3/12">
                    <span className="font-medium">Email</span>
                  </div>
                  <div className="hidden w-4/12 md:block xl:w-3/12">
                    <span className="font-medium">Project</span>
                  </div>
                  <div className="hidden w-1/12 xl:block">
                    <span className="font-medium">Duration</span>
                  </div>
                  <div className="w-4/12 sm:w-3/12 md:w-2/12 xl:w-1/12">
                    <span className="font-medium">Status</span>
                  </div>
                  <div className="hidden w-2/12 text-center sm:block md:w-1/12">
                    <span className="font-medium">Actions</span>
                  </div>
                </div>
              </div>

              <div className="p-4 md:p-6 xl:p-[1.875rem]">
                <div className="flex flex-col gap-7">
                  <div className="flex items-center gap-3">
                    <div className="w-2/12 xl:w-3/12">
                      <div className="flex items-center gap-4">
                        <div className="h-[44px] w-full max-w-[44px] rounded-full">
                          <img
                            src={`${process.env.PUBLIC_URL}/images/user/user-17.png`}
                            alt="User"
                          />
                        </div>
                        <span className="hidden font-medium xl:block">
                          Charlie Donin
                        </span>
                      </div>
                    </div>
                    <div className="w-6/12 sm:w-5/12 md:w-3/12">
                      <span className="font-medium">wdavis@aol.com</span>
                    </div>
                    <div className="hidden w-4/12 md:block xl:w-3/12">
                      <span className="font-medium">
                        25 Dec 2024 - 28 Dec 2024
                      </span>
                    </div>
                    <div className="hidden w-1/12 xl:block">
                      <span className="font-medium">3 Days</span>
                    </div>
                    <div className="w-4/12 sm:w-3/12 md:w-2/12 xl:w-1/12">
                      <span className="inline-block rounded bg-[#FFF2F2] px-2.5 py-0.5 text-sm font-medium text-[#FB5954] dark:bg-[#353341]">
                        Lost Lead
                      </span>
                    </div>
                    <div className="hidden w-2/12 sm:block md:w-1/12">
                      <button className="mx-auto block hover:text-meta-1">
                        <svg
                          className="mx-auto fill-current"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.8094 3.02498H14.1625V2.4406C14.1625 1.40935 13.3375 0.584351 12.3062 0.584351H9.65935C8.6281 0.584351 7.8031 1.40935 7.8031 2.4406V3.02498H5.15623C4.15935 3.02498 3.33435 3.84998 3.33435 4.84685V5.8781C3.33435 6.63435 3.78123 7.2531 4.43435 7.5281L4.98435 18.9062C5.0531 20.3156 6.22185 21.4156 7.63123 21.4156H14.3C15.7093 21.4156 16.8781 20.3156 16.9469 18.9062L17.5312 7.49372C18.1844 7.21872 18.6312 6.5656 18.6312 5.84373V4.81248C18.6312 3.84998 17.8062 3.02498 16.8094 3.02498ZM9.38435 2.4406C9.38435 2.26873 9.52185 2.13123 9.69373 2.13123H12.3406C12.5125 2.13123 12.65 2.26873 12.65 2.4406V3.02498H9.41873V2.4406H9.38435ZM4.9156 4.84685C4.9156 4.70935 5.01873 4.57185 5.1906 4.57185H16.8094C16.9469 4.57185 17.0844 4.67498 17.0844 4.84685V5.8781C17.0844 6.0156 16.9812 6.1531 16.8094 6.1531H5.1906C5.0531 6.1531 4.9156 6.04998 4.9156 5.8781V4.84685V4.84685ZM14.3344 19.8687H7.6656C7.08123 19.8687 6.59998 19.4218 6.5656 18.8031L6.04998 7.6656H15.9844L15.4687 18.8031C15.4 19.3875 14.9187 19.8687 14.3344 19.8687Z"
                            fill=""
                          ></path>
                          <path
                            d="M11 11.1375C10.5875 11.1375 10.2094 11.4812 10.2094 11.9281V16.2937C10.2094 16.7062 10.5531 17.0843 11 17.0843C11.4125 17.0843 11.7906 16.7406 11.7906 16.2937V11.9281C11.7906 11.4812 11.4125 11.1375 11 11.1375Z"
                            fill=""
                          ></path>
                          <path
                            d="M13.7499 11.825C13.303 11.7906 12.9593 12.1 12.9249 12.5469L12.7187 15.5719C12.6843 15.9844 12.9937 16.3625 13.4405 16.3969C13.4749 16.3969 13.4749 16.3969 13.5093 16.3969C13.9218 16.3969 14.2655 16.0875 14.2655 15.675L14.4718 12.65C14.4718 12.2031 14.1624 11.8594 13.7499 11.825Z"
                            fill=""
                          ></path>
                          <path
                            d="M8.21558 11.825C7.80308 11.8594 7.45933 12.2375 7.49371 12.65L7.73433 15.675C7.76871 16.0875 8.11246 16.3969 8.49058 16.3969C8.52496 16.3969 8.52496 16.3969 8.55933 16.3969C8.97183 16.3625 9.31558 15.9844 9.28121 15.5719L9.04058 12.5469C9.04058 12.1 8.66246 11.7906 8.21558 11.825Z"
                            fill=""
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-2/12 xl:w-3/12">
                      <div className="flex items-center gap-4">
                        <div className="h-[44px] w-full max-w-[44px] rounded-full">
                          <img
                            src={`${process.env.PUBLIC_URL}/images/user/user-18.png`}
                            alt="User"
                          />
                        </div>
                        <span className="hidden font-medium xl:block">
                          Makenna Carder
                        </span>
                      </div>
                    </div>
                    <div className="w-6/12 sm:w-5/12 md:w-3/12">
                      <span className="font-medium">ltorres@aol.com</span>
                    </div>
                    <div className="hidden w-4/12 md:block xl:w-3/12">
                      <span className="font-medium">
                        25 Dec 2024 - 28 Dec 2024
                      </span>
                    </div>
                    <div className="hidden w-1/12 xl:block">
                      <span className="font-medium">3 Days</span>
                    </div>
                    <div className="w-4/12 sm:w-3/12 md:w-2/12 xl:w-1/12">
                      <span className="inline-block rounded bg-meta-3/[0.08] px-2.5 py-0.5 text-sm font-medium text-meta-3">
                        Active
                      </span>
                    </div>
                    <div className="hidden w-2/12 sm:block md:w-1/12">
                      <button className="mx-auto block hover:text-meta-1">
                        <svg
                          className="mx-auto fill-current"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.8094 3.02498H14.1625V2.4406C14.1625 1.40935 13.3375 0.584351 12.3062 0.584351H9.65935C8.6281 0.584351 7.8031 1.40935 7.8031 2.4406V3.02498H5.15623C4.15935 3.02498 3.33435 3.84998 3.33435 4.84685V5.8781C3.33435 6.63435 3.78123 7.2531 4.43435 7.5281L4.98435 18.9062C5.0531 20.3156 6.22185 21.4156 7.63123 21.4156H14.3C15.7093 21.4156 16.8781 20.3156 16.9469 18.9062L17.5312 7.49372C18.1844 7.21872 18.6312 6.5656 18.6312 5.84373V4.81248C18.6312 3.84998 17.8062 3.02498 16.8094 3.02498ZM9.38435 2.4406C9.38435 2.26873 9.52185 2.13123 9.69373 2.13123H12.3406C12.5125 2.13123 12.65 2.26873 12.65 2.4406V3.02498H9.41873V2.4406H9.38435ZM4.9156 4.84685C4.9156 4.70935 5.01873 4.57185 5.1906 4.57185H16.8094C16.9469 4.57185 17.0844 4.67498 17.0844 4.84685V5.8781C17.0844 6.0156 16.9812 6.1531 16.8094 6.1531H5.1906C5.0531 6.1531 4.9156 6.04998 4.9156 5.8781V4.84685V4.84685ZM14.3344 19.8687H7.6656C7.08123 19.8687 6.59998 19.4218 6.5656 18.8031L6.04998 7.6656H15.9844L15.4687 18.8031C15.4 19.3875 14.9187 19.8687 14.3344 19.8687Z"
                            fill=""
                          ></path>
                          <path
                            d="M11 11.1375C10.5875 11.1375 10.2094 11.4812 10.2094 11.9281V16.2937C10.2094 16.7062 10.5531 17.0843 11 17.0843C11.4125 17.0843 11.7906 16.7406 11.7906 16.2937V11.9281C11.7906 11.4812 11.4125 11.1375 11 11.1375Z"
                            fill=""
                          ></path>
                          <path
                            d="M13.7499 11.825C13.303 11.7906 12.9593 12.1 12.9249 12.5469L12.7187 15.5719C12.6843 15.9844 12.9937 16.3625 13.4405 16.3969C13.4749 16.3969 13.4749 16.3969 13.5093 16.3969C13.9218 16.3969 14.2655 16.0875 14.2655 15.675L14.4718 12.65C14.4718 12.2031 14.1624 11.8594 13.7499 11.825Z"
                            fill=""
                          ></path>
                          <path
                            d="M8.21558 11.825C7.80308 11.8594 7.45933 12.2375 7.49371 12.65L7.73433 15.675C7.76871 16.0875 8.11246 16.3969 8.49058 16.3969C8.52496 16.3969 8.52496 16.3969 8.55933 16.3969C8.97183 16.3625 9.31558 15.9844 9.28121 15.5719L9.04058 12.5469C9.04058 12.1 8.66246 11.7906 8.21558 11.825Z"
                            fill=""
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-2/12 xl:w-3/12">
                      <div className="flex items-center gap-4">
                        <div className="h-[44px] w-full max-w-[44px] rounded-full">
                          <img
                            src={`${process.env.PUBLIC_URL}/images/user/user-19.png`}
                            alt="User"
                          />
                        </div>
                        <span className="hidden font-medium xl:block">
                          Talan Dokidis
                        </span>
                      </div>
                    </div>
                    <div className="w-6/12 sm:w-5/12 md:w-3/12">
                      <span className="font-medium">rtaylor@aol.com</span>
                    </div>
                    <div className="hidden w-4/12 md:block xl:w-3/12">
                      <span className="font-medium">
                        25 Dec 2024 - 28 Dec 2024
                      </span>
                    </div>
                    <div className="hidden w-1/12 xl:block">
                      <span className="font-medium">3 Days</span>
                    </div>
                    <div className="w-4/12 sm:w-3/12 md:w-2/12 xl:w-1/12">
                      <span className="inline-block rounded bg-meta-3/[0.08] px-2.5 py-0.5 text-sm font-medium text-meta-3">
                        Active
                      </span>
                    </div>
                    <div className="hidden w-2/12 sm:block md:w-1/12">
                      <button className="mx-auto block hover:text-meta-1">
                        <svg
                          className="mx-auto fill-current"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.8094 3.02498H14.1625V2.4406C14.1625 1.40935 13.3375 0.584351 12.3062 0.584351H9.65935C8.6281 0.584351 7.8031 1.40935 7.8031 2.4406V3.02498H5.15623C4.15935 3.02498 3.33435 3.84998 3.33435 4.84685V5.8781C3.33435 6.63435 3.78123 7.2531 4.43435 7.5281L4.98435 18.9062C5.0531 20.3156 6.22185 21.4156 7.63123 21.4156H14.3C15.7093 21.4156 16.8781 20.3156 16.9469 18.9062L17.5312 7.49372C18.1844 7.21872 18.6312 6.5656 18.6312 5.84373V4.81248C18.6312 3.84998 17.8062 3.02498 16.8094 3.02498ZM9.38435 2.4406C9.38435 2.26873 9.52185 2.13123 9.69373 2.13123H12.3406C12.5125 2.13123 12.65 2.26873 12.65 2.4406V3.02498H9.41873V2.4406H9.38435ZM4.9156 4.84685C4.9156 4.70935 5.01873 4.57185 5.1906 4.57185H16.8094C16.9469 4.57185 17.0844 4.67498 17.0844 4.84685V5.8781C17.0844 6.0156 16.9812 6.1531 16.8094 6.1531H5.1906C5.0531 6.1531 4.9156 6.04998 4.9156 5.8781V4.84685V4.84685ZM14.3344 19.8687H7.6656C7.08123 19.8687 6.59998 19.4218 6.5656 18.8031L6.04998 7.6656H15.9844L15.4687 18.8031C15.4 19.3875 14.9187 19.8687 14.3344 19.8687Z"
                            fill=""
                          ></path>
                          <path
                            d="M11 11.1375C10.5875 11.1375 10.2094 11.4812 10.2094 11.9281V16.2937C10.2094 16.7062 10.5531 17.0843 11 17.0843C11.4125 17.0843 11.7906 16.7406 11.7906 16.2937V11.9281C11.7906 11.4812 11.4125 11.1375 11 11.1375Z"
                            fill=""
                          ></path>
                          <path
                            d="M13.7499 11.825C13.303 11.7906 12.9593 12.1 12.9249 12.5469L12.7187 15.5719C12.6843 15.9844 12.9937 16.3625 13.4405 16.3969C13.4749 16.3969 13.4749 16.3969 13.5093 16.3969C13.9218 16.3969 14.2655 16.0875 14.2655 15.675L14.4718 12.65C14.4718 12.2031 14.1624 11.8594 13.7499 11.825Z"
                            fill=""
                          ></path>
                          <path
                            d="M8.21558 11.825C7.80308 11.8594 7.45933 12.2375 7.49371 12.65L7.73433 15.675C7.76871 16.0875 8.11246 16.3969 8.49058 16.3969C8.52496 16.3969 8.52496 16.3969 8.55933 16.3969C8.97183 16.3625 9.31558 15.9844 9.28121 15.5719L9.04058 12.5469C9.04058 12.1 8.66246 11.7906 8.21558 11.825Z"
                            fill=""
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-2/12 xl:w-3/12">
                      <div className="flex items-center gap-4">
                        <div className="h-[44px] w-full max-w-[44px] rounded-full">
                          <img
                            src={`${process.env.PUBLIC_URL}/images/user/user-20.png`}
                            alt="User"
                          />
                        </div>
                        <span className="hidden font-medium xl:block">
                          Cheyenne Levin
                        </span>
                      </div>
                    </div>
                    <div className="w-6/12 sm:w-5/12 md:w-3/12">
                      <span className="font-medium">ebrown@aol.com</span>
                    </div>
                    <div className="hidden w-4/12 md:block xl:w-3/12">
                      <span className="font-medium">
                        25 Dec 2024 - 28 Dec 2024
                      </span>
                    </div>
                    <div className="hidden w-1/12 xl:block">
                      <span className="font-medium">3 Days</span>
                    </div>
                    <div className="w-4/12 sm:w-3/12 md:w-2/12 xl:w-1/12">
                      <span className="inline-block rounded bg-meta-3/[0.08] px-2.5 py-0.5 text-sm font-medium text-meta-3">
                        Active
                      </span>
                    </div>
                    <div className="hidden w-2/12 sm:block md:w-1/12">
                      <button className="mx-auto block hover:text-meta-1">
                        <svg
                          className="mx-auto fill-current"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.8094 3.02498H14.1625V2.4406C14.1625 1.40935 13.3375 0.584351 12.3062 0.584351H9.65935C8.6281 0.584351 7.8031 1.40935 7.8031 2.4406V3.02498H5.15623C4.15935 3.02498 3.33435 3.84998 3.33435 4.84685V5.8781C3.33435 6.63435 3.78123 7.2531 4.43435 7.5281L4.98435 18.9062C5.0531 20.3156 6.22185 21.4156 7.63123 21.4156H14.3C15.7093 21.4156 16.8781 20.3156 16.9469 18.9062L17.5312 7.49372C18.1844 7.21872 18.6312 6.5656 18.6312 5.84373V4.81248C18.6312 3.84998 17.8062 3.02498 16.8094 3.02498ZM9.38435 2.4406C9.38435 2.26873 9.52185 2.13123 9.69373 2.13123H12.3406C12.5125 2.13123 12.65 2.26873 12.65 2.4406V3.02498H9.41873V2.4406H9.38435ZM4.9156 4.84685C4.9156 4.70935 5.01873 4.57185 5.1906 4.57185H16.8094C16.9469 4.57185 17.0844 4.67498 17.0844 4.84685V5.8781C17.0844 6.0156 16.9812 6.1531 16.8094 6.1531H5.1906C5.0531 6.1531 4.9156 6.04998 4.9156 5.8781V4.84685V4.84685ZM14.3344 19.8687H7.6656C7.08123 19.8687 6.59998 19.4218 6.5656 18.8031L6.04998 7.6656H15.9844L15.4687 18.8031C15.4 19.3875 14.9187 19.8687 14.3344 19.8687Z"
                            fill=""
                          ></path>
                          <path
                            d="M11 11.1375C10.5875 11.1375 10.2094 11.4812 10.2094 11.9281V16.2937C10.2094 16.7062 10.5531 17.0843 11 17.0843C11.4125 17.0843 11.7906 16.7406 11.7906 16.2937V11.9281C11.7906 11.4812 11.4125 11.1375 11 11.1375Z"
                            fill=""
                          ></path>
                          <path
                            d="M13.7499 11.825C13.303 11.7906 12.9593 12.1 12.9249 12.5469L12.7187 15.5719C12.6843 15.9844 12.9937 16.3625 13.4405 16.3969C13.4749 16.3969 13.4749 16.3969 13.5093 16.3969C13.9218 16.3969 14.2655 16.0875 14.2655 15.675L14.4718 12.65C14.4718 12.2031 14.1624 11.8594 13.7499 11.825Z"
                            fill=""
                          ></path>
                          <path
                            d="M8.21558 11.825C7.80308 11.8594 7.45933 12.2375 7.49371 12.65L7.73433 15.675C7.76871 16.0875 8.11246 16.3969 8.49058 16.3969C8.52496 16.3969 8.52496 16.3969 8.55933 16.3969C8.97183 16.3625 9.31558 15.9844 9.28121 15.5719L9.04058 12.5469C9.04058 12.1 8.66246 11.7906 8.21558 11.825Z"
                            fill=""
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-2/12 xl:w-3/12">
                      <div className="flex items-center gap-4">
                        <div className="h-[44px] w-full max-w-[44px] rounded-full">
                          <img
                            src={`${process.env.PUBLIC_URL}/images/user/user-21.png`}
                            alt="User"
                          />
                        </div>
                        <span className="hidden font-medium xl:block">
                          James Aminoff
                        </span>
                      </div>
                    </div>
                    <div className="w-6/12 sm:w-5/12 md:w-3/12">
                      <span className="font-medium">slee@aol.com</span>
                    </div>
                    <div className="hidden w-4/12 md:block xl:w-3/12">
                      <span className="font-medium">
                        25 Dec 2024 - 28 Dec 2024
                      </span>
                    </div>
                    <div className="hidden w-1/12 xl:block">
                      <span className="font-medium">3 Days</span>
                    </div>
                    <div className="w-4/12 sm:w-3/12 md:w-2/12 xl:w-1/12">
                      <span className="inline-block rounded px-2.5 py-0.5 text-sm font-medium bg-[#FFF2F2] text-[#FB5954] dark:bg-[#353341]">
                        Closed
                      </span>
                    </div>
                    <div className="hidden w-2/12 sm:block md:w-1/12">
                      <button className="mx-auto block hover:text-meta-1">
                        <svg
                          className="mx-auto fill-current"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.8094 3.02498H14.1625V2.4406C14.1625 1.40935 13.3375 0.584351 12.3062 0.584351H9.65935C8.6281 0.584351 7.8031 1.40935 7.8031 2.4406V3.02498H5.15623C4.15935 3.02498 3.33435 3.84998 3.33435 4.84685V5.8781C3.33435 6.63435 3.78123 7.2531 4.43435 7.5281L4.98435 18.9062C5.0531 20.3156 6.22185 21.4156 7.63123 21.4156H14.3C15.7093 21.4156 16.8781 20.3156 16.9469 18.9062L17.5312 7.49372C18.1844 7.21872 18.6312 6.5656 18.6312 5.84373V4.81248C18.6312 3.84998 17.8062 3.02498 16.8094 3.02498ZM9.38435 2.4406C9.38435 2.26873 9.52185 2.13123 9.69373 2.13123H12.3406C12.5125 2.13123 12.65 2.26873 12.65 2.4406V3.02498H9.41873V2.4406H9.38435ZM4.9156 4.84685C4.9156 4.70935 5.01873 4.57185 5.1906 4.57185H16.8094C16.9469 4.57185 17.0844 4.67498 17.0844 4.84685V5.8781C17.0844 6.0156 16.9812 6.1531 16.8094 6.1531H5.1906C5.0531 6.1531 4.9156 6.04998 4.9156 5.8781V4.84685V4.84685ZM14.3344 19.8687H7.6656C7.08123 19.8687 6.59998 19.4218 6.5656 18.8031L6.04998 7.6656H15.9844L15.4687 18.8031C15.4 19.3875 14.9187 19.8687 14.3344 19.8687Z"
                            fill=""
                          ></path>
                          <path
                            d="M11 11.1375C10.5875 11.1375 10.2094 11.4812 10.2094 11.9281V16.2937C10.2094 16.7062 10.5531 17.0843 11 17.0843C11.4125 17.0843 11.7906 16.7406 11.7906 16.2937V11.9281C11.7906 11.4812 11.4125 11.1375 11 11.1375Z"
                            fill=""
                          ></path>
                          <path
                            d="M13.7499 11.825C13.303 11.7906 12.9593 12.1 12.9249 12.5469L12.7187 15.5719C12.6843 15.9844 12.9937 16.3625 13.4405 16.3969C13.4749 16.3969 13.4749 16.3969 13.5093 16.3969C13.9218 16.3969 14.2655 16.0875 14.2655 15.675L14.4718 12.65C14.4718 12.2031 14.1624 11.8594 13.7499 11.825Z"
                            fill=""
                          ></path>
                          <path
                            d="M8.21558 11.825C7.80308 11.8594 7.45933 12.2375 7.49371 12.65L7.73433 15.675C7.76871 16.0875 8.11246 16.3969 8.49058 16.3969C8.52496 16.3969 8.52496 16.3969 8.55933 16.3969C8.97183 16.3625 9.31558 15.9844 9.28121 15.5719L9.04058 12.5469C9.04058 12.1 8.66246 11.7906 8.21558 11.825Z"
                            fill=""
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ====Compaigns=== */}
          <div className="col-span-12 xl:col-span-5">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div class="flex flex-col gap-2 border-b border-stroke px-6 py-5 dark:border-strokedark sm:flex-row sm:justify-between">
                <div>
                  <h2 class="text-[26px] leading-[30px] font-bold text-black dark:text-white">
                    Campaigns
                  </h2>
                </div>
                <div class="flex items-center">
                  <p class="font-medium uppercase text-black dark:text-white">
                    Short by:
                  </p>
                  <div class="relative z-20 inline-block text-general-gray dark:text-dark-general-gray">
                    <select
                      name="#"
                      id="#"
                      class="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 font-medium outline-none"
                    >
                      <option value="">Monthly</option>
                      <option value="">Weekly</option>
                    </select>
                    <span class="absolute right-1 top-1/2 z-10 -translate-y-1/2">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.99995 12.8249C8.8312 12.8249 8.69058 12.7687 8.54995 12.6562L2.0812 6.2999C1.82808 6.04678 1.82808 5.65303 2.0812 5.3999C2.33433 5.14678 2.72808 5.14678 2.9812 5.3999L8.99995 11.278L15.0187 5.34365C15.2718 5.09053 15.6656 5.09053 15.9187 5.34365C16.1718 5.59678 16.1718 5.99053 15.9187 6.24365L9.44995 12.5999C9.30933 12.7405 9.1687 12.8249 8.99995 12.8249Z"
                          fill="#64748B"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-6 pt-4">
                <ChartNine />
              </div>
            </div>
          </div>
          {/* ====Todo List=== */}
          <div class="col-span-12 xl:col-span-7">
            <div class="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div class="border-b border-stroke px-4 py-4 dark:border-strokedark md:px-6 md:py-6 xl:px-7.5">
                <div class="flex items-start justify-between">
                  <div>
                    <h2 class="text-[22px] leading-[28px] font-bold text-black dark:text-white">
                      To Do List
                    </h2>
                  </div>
                  <AnalyticsDropdown />
                </div>
              </div>

              <div class="px-4 py-4 md:px-6 md:py-6 xl:px-7.5">
                <div class="flex flex-col gap-6">
                  <div class="flex items-center justify-between">
                    <div class="flex flex-grow items-center gap-[1.125rem]">
                      <div class="hidden h-[3.75rem] w-full max-w-[3.75rem] items-center justify-center rounded-full border border-stroke bg-[#EFF4FB] dark:border-strokedark dark:bg-meta-4 sm:flex">
                        <svg
                          width="26"
                          height="20"
                          viewBox="0 0 26 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_605_15057)">
                            <path
                              d="M13.0842 5.33077V11.4067C13.0842 14.2371 11.3726 15.9467 8.778 15.9467C6.18312 15.9467 4.3615 14.2371 4.3615 11.4067V0H0V11.4067C0 16.5914 3.42261 19.8145 8.778 19.8145C14.1055 19.8145 17.4457 16.5914 17.4457 11.4067V0H17.3691C15.069 0.7498 13.3531 2.81913 13.0842 5.33077Z"
                              fill="url(#paint0_linear_605_15057)"
                            ></path>
                            <path
                              d="M21.1794 0H21.1045V19.6186H25.4661V5.33473C25.4249 3.15456 23.4808 0.750281 21.1794 0Z"
                              fill="url(#paint1_linear_605_15057)"
                            ></path>
                            <path
                              d="M13.0842 5.33077V11.4067C13.0842 11.4103 13.0839 11.414 13.0839 11.418C13.085 11.4784 13.0882 11.5383 13.0882 11.5992C13.0882 15.6912 10.0528 19.0615 6.14392 19.5207C6.95742 19.7131 7.83731 19.8145 8.778 19.8145C14.1055 19.8145 17.4457 16.5914 17.4457 11.4067V0H17.3691C15.069 0.7498 13.3531 2.81913 13.0842 5.33077Z"
                              fill="url(#paint2_linear_605_15057)"
                            ></path>
                          </g>
                          <defs>
                            <linearGradient
                              id="paint0_linear_605_15057"
                              x1="14.9261"
                              y1="17.8993"
                              x2="3.30015"
                              y2="-1.93446"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#2535C5"></stop>
                              <stop
                                offset="0.169697"
                                stop-color="#36409B"
                              ></stop>
                              <stop
                                offset="0.575758"
                                stop-color="#475BC6"
                              ></stop>
                              <stop offset="1" stop-color="#7075E4"></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_605_15057"
                              x1="23.2853"
                              y1="0"
                              x2="23.2853"
                              y2="19.6187"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#375AD8"></stop>
                              <stop
                                offset="0.472727"
                                stop-color="#3C56DD"
                              ></stop>
                              <stop offset="1" stop-color="#2A1A8F"></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint2_linear_605_15057"
                              x1="11.7948"
                              y1="0"
                              x2="11.7948"
                              y2="19.8146"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#233593"></stop>
                              <stop
                                offset="0.472727"
                                stop-color="#4957D7"
                              ></stop>
                              <stop
                                offset="0.890909"
                                stop-color="#5465FF"
                              ></stop>
                              <stop offset="1" stop-color="#6A67FF"></stop>
                            </linearGradient>
                            <clipPath id="clip0_605_15057">
                              <rect
                                width="25.7692"
                                height="20"
                                fill="white"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>

                      <div>
                        <h4 class="mb-2 font-medium text-black dark:text-white">
                          Uideck Yearly Meetings
                        </h4>

                        <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5 text-general-gray dark:text-dark-general-gray">
                          <span class="flex items-center gap-1.5">
                            <svg
                              class="fill-current"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.57495 2.99999V1.57499H9.92495C10.225 1.57499 10.5 1.32499 10.5 0.999988C10.5 0.674988 10.25 0.424988 9.92495 0.424988H6.09995C5.79995 0.424988 5.52495 0.674988 5.52495 0.999988C5.52495 1.32499 5.77495 1.57499 6.09995 1.57499H7.44995V2.99999C4.22495 3.29999 1.69995 5.99999 1.69995 9.27499C1.69995 12.75 4.52495 15.575 7.99995 15.575C11.475 15.575 14.3 12.75 14.3 9.27499C14.3 5.99999 11.775 3.29999 8.57495 2.99999ZM7.99995 14.45C5.14995 14.45 2.82495 12.125 2.82495 9.27499C2.82495 6.42499 5.14995 4.09999 7.99995 4.09999C10.85 4.09999 13.175 6.42499 13.175 9.27499C13.175 12.125 10.85 14.45 7.99995 14.45Z"
                                fill=""
                              ></path>
                              <path
                                d="M11.1749 8.69996H8.5749V6.09996C8.5749 5.79996 8.3249 5.52496 7.9999 5.52496C7.6999 5.52496 7.4249 5.77496 7.4249 6.09996V8.72496H6.7249C6.4249 8.72496 6.1499 8.97496 6.1499 9.29996C6.1499 9.62496 6.3999 9.87496 6.7249 9.87496H7.4249V10.575C7.4249 10.875 7.6749 11.15 7.9999 11.15C8.2999 11.15 8.5749 10.9 8.5749 10.575V9.87496H11.1999C11.4999 9.87496 11.7749 9.62496 11.7749 9.29996C11.7749 8.97496 11.4999 8.69996 11.1749 8.69996Z"
                                fill=""
                              ></path>
                            </svg>

                            <span class="text-xs font-medium ">
                              10:20 AM - 3:00 PM
                            </span>
                          </span>

                          <span class="flex items-center gap-1.5">
                            <svg
                              class="fill-current"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14 2.65002H12.7V2.10002C12.7 1.80002 12.45 1.52502 12.125 1.52502C11.8 1.52502 11.55 1.77502 11.55 2.10002V2.65002H4.42505V2.10002C4.42505 1.80002 4.17505 1.52502 3.85005 1.52502C3.52505 1.52502 3.27505 1.77502 3.27505 2.10002V2.65002H2.00005C1.15005 2.65002 0.425049 3.35002 0.425049 4.22502V12.925C0.425049 13.775 1.12505 14.5 2.00005 14.5H14C14.85 14.5 15.575 13.8 15.575 12.925V4.20002C15.575 3.35002 14.85 2.65002 14 2.65002ZM1.57505 7.30002H3.70005V9.77503H1.57505V7.30002ZM4.82505 7.30002H7.45005V9.77503H4.82505V7.30002ZM7.45005 10.9V13.35H4.82505V10.9H7.45005ZM8.57505 10.9H11.2V13.35H8.57505V10.9ZM8.57505 9.77503V7.30002H11.2V9.77503H8.57505ZM12.3 7.30002H14.425V9.77503H12.3V7.30002ZM2.00005 3.77502H3.30005V4.30002C3.30005 4.60002 3.55005 4.87502 3.87505 4.87502C4.20005 4.87502 4.45005 4.62502 4.45005 4.30002V3.77502H11.6V4.30002C11.6 4.60002 11.85 4.87502 12.175 4.87502C12.5 4.87502 12.75 4.62502 12.75 4.30002V3.77502H14C14.25 3.77502 14.45 3.97502 14.45 4.22502V6.17502H1.57505V4.22502C1.57505 3.97502 1.75005 3.77502 2.00005 3.77502ZM1.57505 12.9V10.875H3.70005V13.325H2.00005C1.75005 13.35 1.57505 13.15 1.57505 12.9ZM14 13.35H12.3V10.9H14.425V12.925C14.45 13.15 14.25 13.35 14 13.35Z"
                                fill=""
                              ></path>
                            </svg>

                            <span class="text-xs font-medium">
                              14 February,2025
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <span class="rounded bg-meta-3/[0.08] px-2.5 py-1.5 text-sm font-medium text-meta-3">
                      Completed
                    </span>
                  </div>

                  <div class="flex items-center justify-between">
                    <div class="flex flex-grow items-center gap-[1.125rem]">
                      <div class="hidden h-[3.75rem] w-full max-w-[3.75rem] items-center justify-center rounded-full border border-stroke bg-[#EFF4FB] dark:border-strokedark dark:bg-meta-4 sm:flex">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_605_15127)">
                            <path
                              d="M16 1.0625C24.25 1.0625 30.925 7.7375 30.925 15.975C30.925 24.2125 24.25 30.9 16 30.9C7.74995 30.9 1.07495 24.225 1.07495 15.9875C1.07495 7.75 7.74995 1.0625 16 1.0625Z"
                              fill="#E74D89"
                            ></path>
                            <path
                              d="M16 31.9625C7.175 31.9625 0 24.8 0 15.9875C0 7.1625 7.175 0 16 0C24.825 0 32 7.1625 32 15.975C32 24.7875 24.825 31.9625 16 31.9625ZM29.4875 18.1625C29.025 18.0125 25.2625 16.9 20.975 17.575C22.7625 22.475 23.4875 26.475 23.625 27.3C26.7 25.2375 28.8875 21.9625 29.4875 18.1625ZM21.3375 28.5625C21.1375 27.3625 20.3375 23.1875 18.425 18.2125C18.4 18.225 18.3625 18.2375 18.3375 18.2375C10.625 20.925 7.8625 26.2625 7.6125 26.7625C9.925 28.5625 12.8375 29.6375 16 29.6375C17.8875 29.65 19.7 29.2625 21.3375 28.5625ZM5.85 25.125C6.1625 24.6 9.9125 18.4 16.9625 16.1125C17.1375 16.05 17.325 16 17.5 15.95C17.1625 15.175 16.7875 14.4 16.3875 13.6375C9.5625 15.675 2.9375 15.5875 2.3375 15.575C2.3375 15.7125 2.325 15.85 2.325 15.9875C2.3375 19.5 3.6625 22.7 5.85 25.125ZM2.625 13.2C3.2375 13.2125 8.8625 13.2375 15.2625 11.5375C13 7.5125 10.55 4.1375 10.2 3.65C6.3625 5.45 3.5125 8.975 2.625 13.2ZM12.8 2.725C13.175 3.225 15.6625 6.6 17.9 10.7125C22.7625 8.8875 24.8125 6.1375 25.0625 5.7875C22.65 3.65 19.475 2.35 16 2.35C14.9 2.35 13.825 2.4875 12.8 2.725ZM26.575 7.3625C26.2875 7.75 24 10.6875 18.95 12.75C19.2625 13.4 19.575 14.0625 19.8625 14.725C19.9625 14.9625 20.0625 15.2 20.1625 15.425C24.7125 14.85 29.225 15.775 29.675 15.8625C29.6375 12.65 28.4875 9.6875 26.575 7.3625Z"
                              fill="#B2215A"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_605_15127">
                              <rect width="32" height="32" fill="white"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>

                      <div>
                        <h4 class="mb-2 font-medium text-black dark:text-white">
                          2025 Dribbble Meet Up
                        </h4>

                        <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5 text-general-gray dark:text-dark-general-gray">
                          <span class="flex items-center gap-1.5">
                            <svg
                              class="fill-current"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.57495 2.99999V1.57499H9.92495C10.225 1.57499 10.5 1.32499 10.5 0.999988C10.5 0.674988 10.25 0.424988 9.92495 0.424988H6.09995C5.79995 0.424988 5.52495 0.674988 5.52495 0.999988C5.52495 1.32499 5.77495 1.57499 6.09995 1.57499H7.44995V2.99999C4.22495 3.29999 1.69995 5.99999 1.69995 9.27499C1.69995 12.75 4.52495 15.575 7.99995 15.575C11.475 15.575 14.3 12.75 14.3 9.27499C14.3 5.99999 11.775 3.29999 8.57495 2.99999ZM7.99995 14.45C5.14995 14.45 2.82495 12.125 2.82495 9.27499C2.82495 6.42499 5.14995 4.09999 7.99995 4.09999C10.85 4.09999 13.175 6.42499 13.175 9.27499C13.175 12.125 10.85 14.45 7.99995 14.45Z"
                                fill=""
                              ></path>
                              <path
                                d="M11.1749 8.69996H8.5749V6.09996C8.5749 5.79996 8.3249 5.52496 7.9999 5.52496C7.6999 5.52496 7.4249 5.77496 7.4249 6.09996V8.72496H6.7249C6.4249 8.72496 6.1499 8.97496 6.1499 9.29996C6.1499 9.62496 6.3999 9.87496 6.7249 9.87496H7.4249V10.575C7.4249 10.875 7.6749 11.15 7.9999 11.15C8.2999 11.15 8.5749 10.9 8.5749 10.575V9.87496H11.1999C11.4999 9.87496 11.7749 9.62496 11.7749 9.29996C11.7749 8.97496 11.4999 8.69996 11.1749 8.69996Z"
                                fill=""
                              ></path>
                            </svg>

                            <span class="text-xs font-medium">
                              09:30 AM - 12:00 AM
                            </span>
                          </span>

                          <span class="flex items-center gap-1.5">
                            <svg
                              class="fill-current"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14 2.65002H12.7V2.10002C12.7 1.80002 12.45 1.52502 12.125 1.52502C11.8 1.52502 11.55 1.77502 11.55 2.10002V2.65002H4.42505V2.10002C4.42505 1.80002 4.17505 1.52502 3.85005 1.52502C3.52505 1.52502 3.27505 1.77502 3.27505 2.10002V2.65002H2.00005C1.15005 2.65002 0.425049 3.35002 0.425049 4.22502V12.925C0.425049 13.775 1.12505 14.5 2.00005 14.5H14C14.85 14.5 15.575 13.8 15.575 12.925V4.20002C15.575 3.35002 14.85 2.65002 14 2.65002ZM1.57505 7.30002H3.70005V9.77503H1.57505V7.30002ZM4.82505 7.30002H7.45005V9.77503H4.82505V7.30002ZM7.45005 10.9V13.35H4.82505V10.9H7.45005ZM8.57505 10.9H11.2V13.35H8.57505V10.9ZM8.57505 9.77503V7.30002H11.2V9.77503H8.57505ZM12.3 7.30002H14.425V9.77503H12.3V7.30002ZM2.00005 3.77502H3.30005V4.30002C3.30005 4.60002 3.55005 4.87502 3.87505 4.87502C4.20005 4.87502 4.45005 4.62502 4.45005 4.30002V3.77502H11.6V4.30002C11.6 4.60002 11.85 4.87502 12.175 4.87502C12.5 4.87502 12.75 4.62502 12.75 4.30002V3.77502H14C14.25 3.77502 14.45 3.97502 14.45 4.22502V6.17502H1.57505V4.22502C1.57505 3.97502 1.75005 3.77502 2.00005 3.77502ZM1.57505 12.9V10.875H3.70005V13.325H2.00005C1.75005 13.35 1.57505 13.15 1.57505 12.9ZM14 13.35H12.3V10.9H14.425V12.925C14.45 13.15 14.25 13.35 14 13.35Z"
                                fill=""
                              ></path>
                            </svg>

                            <span class="text-xs font-medium">
                              12 February,2025
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <span class="rounded bg-primary/[0.08] px-2.5 py-1.5 text-sm font-medium text-primary">
                      Upcoming
                    </span>
                  </div>

                  <div class="flex items-center justify-between">
                    <div class="flex flex-grow items-center gap-[1.125rem]">
                      <div class="hidden h-[3.75rem] w-full max-w-[3.75rem] items-center justify-center rounded-full border border-stroke bg-[#EFF4FB] dark:border-strokedark dark:bg-meta-4 sm:flex">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_605_15132)">
                            <path
                              d="M21.9381 0.375H2.10058C1.16309 0.375 0.413086 1.125 0.413086 2.0625V21.9375C0.413086 22.8375 1.16309 23.625 2.10058 23.625H21.8631C22.8006 23.625 23.5506 22.875 23.5506 21.9375V2.025C23.6256 1.125 22.8756 0.375 21.9381 0.375ZM7.2756 20.1375H3.8631V9.075H7.2756V20.1375ZM5.5506 7.5375C4.4256 7.5375 3.56308 6.6375 3.56308 5.55C3.56308 4.4625 4.4631 3.5625 5.5506 3.5625C6.6381 3.5625 7.5381 4.4625 7.5381 5.55C7.5381 6.6375 6.7131 7.5375 5.5506 7.5375ZM20.2131 20.1375H16.8006V14.775C16.8006 13.5 16.7631 11.8125 15.0006 11.8125C13.2006 11.8125 12.9381 13.2375 12.9381 14.6625V20.1375H9.5256V9.075H12.8631V10.6125H12.9006C13.3881 9.7125 14.4756 8.8125 16.1631 8.8125C19.6506 8.8125 20.2881 11.0625 20.2881 14.1375V20.1375H20.2131Z"
                              fill="#0B65C2"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_605_15132">
                              <rect width="24" height="24" fill="white"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>

                      <div>
                        <h4 class="mb-2 font-medium text-black dark:text-white">
                          2025 Linkedin Meet Up
                        </h4>

                        <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5 text-general-gray dark:text-dark-general-gray">
                          <span class="flex items-center gap-1.5">
                            <svg
                              class="fill-current"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.57495 2.99999V1.57499H9.92495C10.225 1.57499 10.5 1.32499 10.5 0.999988C10.5 0.674988 10.25 0.424988 9.92495 0.424988H6.09995C5.79995 0.424988 5.52495 0.674988 5.52495 0.999988C5.52495 1.32499 5.77495 1.57499 6.09995 1.57499H7.44995V2.99999C4.22495 3.29999 1.69995 5.99999 1.69995 9.27499C1.69995 12.75 4.52495 15.575 7.99995 15.575C11.475 15.575 14.3 12.75 14.3 9.27499C14.3 5.99999 11.775 3.29999 8.57495 2.99999ZM7.99995 14.45C5.14995 14.45 2.82495 12.125 2.82495 9.27499C2.82495 6.42499 5.14995 4.09999 7.99995 4.09999C10.85 4.09999 13.175 6.42499 13.175 9.27499C13.175 12.125 10.85 14.45 7.99995 14.45Z"
                                fill=""
                              ></path>
                              <path
                                d="M11.1749 8.69996H8.5749V6.09996C8.5749 5.79996 8.3249 5.52496 7.9999 5.52496C7.6999 5.52496 7.4249 5.77496 7.4249 6.09996V8.72496H6.7249C6.4249 8.72496 6.1499 8.97496 6.1499 9.29996C6.1499 9.62496 6.3999 9.87496 6.7249 9.87496H7.4249V10.575C7.4249 10.875 7.6749 11.15 7.9999 11.15C8.2999 11.15 8.5749 10.9 8.5749 10.575V9.87496H11.1999C11.4999 9.87496 11.7749 9.62496 11.7749 9.29996C11.7749 8.97496 11.4999 8.69996 11.1749 8.69996Z"
                                fill=""
                              ></path>
                            </svg>

                            <span class="text-xs font-medium">
                              10:30 AM - 11:00 PM
                            </span>
                          </span>

                          <span class="flex items-center gap-1.5">
                            <svg
                              class="fill-current"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14 2.65002H12.7V2.10002C12.7 1.80002 12.45 1.52502 12.125 1.52502C11.8 1.52502 11.55 1.77502 11.55 2.10002V2.65002H4.42505V2.10002C4.42505 1.80002 4.17505 1.52502 3.85005 1.52502C3.52505 1.52502 3.27505 1.77502 3.27505 2.10002V2.65002H2.00005C1.15005 2.65002 0.425049 3.35002 0.425049 4.22502V12.925C0.425049 13.775 1.12505 14.5 2.00005 14.5H14C14.85 14.5 15.575 13.8 15.575 12.925V4.20002C15.575 3.35002 14.85 2.65002 14 2.65002ZM1.57505 7.30002H3.70005V9.77503H1.57505V7.30002ZM4.82505 7.30002H7.45005V9.77503H4.82505V7.30002ZM7.45005 10.9V13.35H4.82505V10.9H7.45005ZM8.57505 10.9H11.2V13.35H8.57505V10.9ZM8.57505 9.77503V7.30002H11.2V9.77503H8.57505ZM12.3 7.30002H14.425V9.77503H12.3V7.30002ZM2.00005 3.77502H3.30005V4.30002C3.30005 4.60002 3.55005 4.87502 3.87505 4.87502C4.20005 4.87502 4.45005 4.62502 4.45005 4.30002V3.77502H11.6V4.30002C11.6 4.60002 11.85 4.87502 12.175 4.87502C12.5 4.87502 12.75 4.62502 12.75 4.30002V3.77502H14C14.25 3.77502 14.45 3.97502 14.45 4.22502V6.17502H1.57505V4.22502C1.57505 3.97502 1.75005 3.77502 2.00005 3.77502ZM1.57505 12.9V10.875H3.70005V13.325H2.00005C1.75005 13.35 1.57505 13.15 1.57505 12.9ZM14 13.35H12.3V10.9H14.425V12.925C14.45 13.15 14.25 13.35 14 13.35Z"
                                fill=""
                              ></path>
                            </svg>

                            <span class="text-xs font-medium">
                              05 February,2025
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <span class="rounded  px-2.5 py-1.5 text-sm font-medium bg-[#FFF2F2] text-[#FB5954] dark:bg-[#353341]">
                      Canceled
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ====Todo List end=== */}
        </div>
      </div>
    </Layout>
  );
};

export default CRM;
