import Layout from "../Layout";
import { NavLink } from "react-router-dom";
import ChartFour from "../analytics/ChartFour";
import ChartSeven from "../crm/ChartSeven";
import ChartEight from "../crm/ChartEight";
import ChartNine from "../crm/ChartNine";
import AnalyticsDropdown from "../analytics/AnalyticsDropdown";
import ChartSix from "../marketing/ChartSix";
import ChartThirteen from "../stocks/ChartThirteen";

const AdvancedChart = () => {
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
                <NavLink
                  to="/"
                  className="font-medium text-general-gray dark:text-dark-general-gray"
                >
                  Dashboard /
                </NavLink>
              </li>
              <li className="font-medium text-primary">Chart</li>
            </ol>
          </nav>
        </div>
        {/* ========= */}
         <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-[1.875rem]">
           {/* ===================Chart Four Start=============== */}
           <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-[1.875rem] shadow-default dark:border-strokedark dark:bg-boxdark sm:px-[1.875rem]">
              <h3 className="text-xl font-bold text-black dark:text-white">
                Visitors Analytics
              </h3>
              <ChartFour />
            </div>
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
          {/* ======Compaign Visiotors -2 ======== */}
          <div className="col-span-12 xl:col-span-7">
            <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-[1.875rem] shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <h4 className="text-[22px] leading-[28px] font-bold text-black dark:text-white">
                    Campaign Visitors
                  </h4>
                  <div className="mt-2.5 flex gap-2.5">
                    <h3 className="mb-1.5 text-[28px] leading-[35px] font-bold text-black dark:text-white">
                      $560.93
                    </h3>
                    <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_554_43030)">
                          <path
                            d="M13.4731 5.62415H9.95118C9.68868 5.62415 9.46993 5.8429 9.46993 6.1054C9.46993 6.3679 9.68868 6.58665 9.95118 6.58665H12.1168L9.3168 8.4679C9.20743 8.5554 9.0543 8.5554 8.92305 8.4679L6.03555 6.56477C5.57618 6.25852 5.00743 6.25852 4.54805 6.56477L1.1793 8.8179C0.960552 8.97102 0.894927 9.27727 1.04805 9.49602C1.13555 9.62727 1.28868 9.71477 1.46368 9.71477C1.55118 9.71477 1.66055 9.6929 1.72618 9.62727L5.1168 7.37415C5.22618 7.28665 5.3793 7.28665 5.51055 7.37415L8.39805 9.29915C8.85743 9.6054 9.42618 9.6054 9.88555 9.29915L12.9699 7.22102V9.64915C12.9699 9.91165 13.1887 10.1304 13.4512 10.1304C13.7137 10.1304 13.9324 9.91165 13.9324 9.64915V6.1054C13.9762 5.8429 13.7356 5.62415 13.4731 5.62415Z"
                            fill="#10B981"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_554_43030">
                            <rect
                              width="14"
                              height="14"
                              fill="white"
                              transform="translate(0.45752 0.877319)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                      +2.5%
                    </span>
                  </div>
                  <span className="mt-1 block font-medium text-general-gray dark:text-dark-general-gray">
                    Average cost per interaction
                  </span>
                </div>
                <AnalyticsDropdown />
              </div>
              <ChartSix/>
            </div>
          </div>
           {/* ====Compaigns=== */}
           <div className="col-span-12 xl:col-span-5">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="flex flex-col gap-2 border-b border-stroke px-6 py-5 dark:border-strokedark sm:flex-row sm:justify-between">
                <div>
                  <h2 className="text-[26px] leading-[30px] font-bold text-black dark:text-white">
                    Campaigns
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

              <div className="px-6 pt-4">
                <ChartNine />
              </div>
            </div>
          </div>
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
            <ChartThirteen/>
          </div>
          {/* ==========My Stocks============ */}
         </div>
        {/* ========= */}
      </div>
    </Layout>
  );
};

export default AdvancedChart;
