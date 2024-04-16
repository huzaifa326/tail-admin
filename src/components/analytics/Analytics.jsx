import Layout from "../Layout";
import AnalyticsCard from "./AnalyticsCard";
import ChartThree from "../ecommerce/charts/ChartThree";
import AnalyticsDropdown from "./AnalyticsDropdown";
import ChartFour from "./ChartFour";
import MapTwo from "./MapTwo";
import Calender from "./Calender";

const Analytics = () => {
  return (
    <Layout>
      <main>
        <div
          className={`mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-[#F1F5F9] dark:bg-[#1A222C]`}
        >
          <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-[1.875rem]">
            {/* ===================Header=============== */}
            <div className="col-span-12 flex flex-wrap items-center justify-between gap-3">
             
              <Calender/>

              <div className="relative z-20 inline-block rounded bg-white shadow-card-2 dark:bg-boxdark">
                <select
                  name=""
                  id=""
                  className="text-general-gray dark:text-dark-general-gray relative z-20 inline-flex appearance-none rounded border border-stroke bg-transparent py-2 pl-4 pr-9 text-sm outline-none dark:border-strokedark"
                >
                  <option value="">Yearly</option>
                  <option value="">Monthly</option>
                </select>
                <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.96967 6.21967C4.26256 5.92678 4.73744 5.92678 5.03033 6.21967L9 10.1893L12.9697 6.21967C13.2626 5.92678 13.7374 5.92678 14.0303 6.21967C14.3232 6.51256 14.3232 6.98744 14.0303 7.28033L9.53033 11.7803C9.23744 12.0732 8.76256 12.0732 8.46967 11.7803L3.96967 7.28033C3.67678 6.98744 3.67678 6.51256 3.96967 6.21967Z"
                      fill="#64748B"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
            {/* ===================Chart Start=============== */}
            <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-[1.875rem] shadow-default dark:border-strokedark dark:bg-boxdark sm:px-[1.875rem]">
              <h3 className="text-xl font-bold text-black dark:text-white">
                Visitors Analytics
              </h3>
              <ChartFour />
            </div>
            {/* ===================Data Stats Start=============== */}
            <div className="col-span-12 rounded-sm border border-stroke bg-white p-[1.875rem] shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-0">
                <AnalyticsCard
                  color="meta-3"
                  per="18%"
                  h4="$4,350"
                  text="Unique Visitors"
                  icon="/images/analytics-card/arrow-up.svg"
                />
                <AnalyticsCard
                  color="meta-3"
                  per="25%"
                  h4="55.9K"
                  text="Total Pageviews"
                  icon="/images/analytics-card/arrow-up.svg"
                />
                <AnalyticsCard
                  color="meta-8"
                  per="7%"
                  h4="54%"
                  text="Bounce Rate"
                  icon="/images/analytics-card/arrow-down.svg"
                />
                <AnalyticsCard
                  color="meta-3"
                  per="12%"
                  h4="2m 56s"
                  text="Visit Duration"
                  icon="/images/analytics-card/arrow-up.svg"
                />
              </div>
            </div>
            {/* ===================Map Two Start=============== */}
            <div className="col-span-12 overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-6">
              <div className="p-4 md:p-6 xl:p-[1.875rem]">
                {/* === */}
                <div className="mb-7.5 justify-between sm:flex">
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-boxdark dark:text-white">
                      Sessions by country
                    </h3>
                  </div>
                  <div className="mb-2">
                    <div className="relative z-20 inline-block rounded bg-gray-2 dark:bg-boxdark">
                      <select
                        name=""
                        id=""
                        className="relative z-20 inline-flex appearance-none rounded border border-stroke bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none dark:border-strokedark"
                      >
                        <option value="">Last 7 days</option>
                        <option value="">Last 15 days</option>
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
                {/* === */}
                <MapTwo />
                {/* === */}
              </div>
              {/* === */}
              <div className="space-y-2.5 border-t border-stroke p-4 dark:border-strokedark md:p-6 xl:p-[1.875rem]">
                <div className="items-center sm:flex  ">
                  <div className="flex w-full max-w-[10.625rem] items-center gap-3.5">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/countries/country-01.svg`}
                      alt="usa"
                    />
                    <p className=" font-medium text-black dark:text-white ">
                      United States
                    </p>
                  </div>
                  <div className="relative block h-[1.125rem] w-full rounded bg-meta-9 dark:bg-meta-4">
                    <div className="absolute left-0 top-0 flex h-full w-[35%] items-center justify-center rounded bg-primary text-xs font-medium text-white">
                      35%
                    </div>
                  </div>
                </div>
                <div className="items-center sm:flex">
                  <div className="flex w-full max-w-[10.625rem] items-center gap-3.5">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/countries/country-02.svg`}
                      alt="canada"
                    />
                    <p className="font-medium text-black dark:text-white">
                      Canada
                    </p>
                  </div>
                  <div className="relative block h-[1.125rem] w-full rounded bg-meta-9 dark:bg-meta-4">
                    <div className="absolute left-0 top-0 flex h-full w-[26%] items-center justify-center rounded bg-primary text-xs font-medium text-white">
                      26%
                    </div>
                  </div>
                </div>
                <div className="items-center sm:flex">
                  <div className="flex w-full max-w-[10.625rem] items-center gap-3.5">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/countries/country-03.svg`}
                      alt="france"
                    />
                    <p className="font-medium text-black dark:text-white">
                      France
                    </p>
                  </div>
                  <div className="relative block h-[1.125rem] w-full rounded bg-meta-9 dark:bg-meta-4">
                    <div className="absolute left-0 top-0 flex h-full w-[18%] items-center justify-center rounded bg-primary text-xs font-medium text-white">
                      18%
                    </div>
                  </div>
                </div>
                <div className="items-center sm:flex">
                  <div className="flex w-full max-w-[10.625rem] items-center gap-3.5">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/countries/country-04.svg`}
                      alt="italy"
                    />
                    <p className="font-medium text-black dark:text-white">
                      Italy
                    </p>
                  </div>
                  <div className="relative block h-[1.125rem] w-full rounded bg-meta-9 dark:bg-meta-4">
                    <div className="absolute left-0 top-0 flex h-full w-[14%] items-center justify-center rounded bg-primary text-xs font-medium text-white">
                      14%
                    </div>
                  </div>
                </div>
                <div className="items-center sm:flex">
                  <div className="flex w-full max-w-[10.625rem] items-center gap-3.5">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/countries/country-05.svg`}
                      alt="australia"
                    />
                    <p className="font-medium text-black dark:text-white">
                      Australia
                    </p>
                  </div>
                  <div className="relative block h-[1.125rem] w-full rounded bg-meta-9 dark:bg-meta-4">
                    <div className="absolute left-0 top-0 flex h-full w-[10%] items-center justify-center rounded bg-primary text-xs font-medium text-white">
                      10%
                    </div>
                  </div>
                </div>
                <div className="items-center sm:flex">
                  <div className="flex w-full max-w-[10.625rem] items-center gap-3.5">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/countries/country-06.svg`}
                      alt="india"
                    />
                    <p className="font-medium text-black dark:text-white">
                      India
                    </p>
                  </div>
                  <div className="relative block h-[1.125rem] w-full rounded bg-meta-9 dark:bg-meta-4">
                    <div className="absolute left-0 top-0 flex h-full w-[7%] items-center justify-center rounded bg-primary text-xs font-medium text-white">
                      7%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ===================Top Section Start=============== */}
            <div className="col-span-12 xl:col-span-6">
              <div className="mb-4 rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:mb-6 md:p-6 xl:p-[1.875rem] 2xl:mb-7.5">
                <div className="mb-7 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-boxdark dark:text-white">
                      Top Content
                    </h3>
                  </div>
                  <AnalyticsDropdown />
                </div>

                <div className="flex flex-col gap-2">
                  <div className="grid grid-cols-10 py-2">
                    <div className="col-span-6">
                      <p className="text-sm font-medium">URL</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-center text-sm font-medium">Views</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-right text-sm font-medium">Uniques</p>
                    </div>
                  </div>
                  <div className="relative z-1 grid grid-cols-10 py-2">
                    <span className="absolute left-0 top-0 -z-1 h-full w-[74%] rounded bg-gray dark:bg-meta-4"></span>
                    <div className="col-span-6 pl-3.5 relative z-[2]">
                      <p className="text-sm font-medium">/</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-center text-sm font-medium relative z-[2]">
                        2.5k
                      </p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-right text-sm font-medium">2.1k</p>
                    </div>
                  </div>
                  <div className="relative z-1 grid grid-cols-10 py-2">
                    <span className="absolute left-0 top-0 -z-1 h-full w-[38%] rounded bg-gray dark:bg-meta-4"></span>
                    <div className="col-span-6 pl-3.5 relative z-[2] ">
                      <p className="text-sm font-medium">/blog/</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-center text-sm font-medium">376</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-right text-sm font-medium">139</p>
                    </div>
                  </div>
                  <div className="relative z-1 grid grid-cols-10 py-2">
                    <span className="absolute left-0 top-0 -z-1 h-full w-[55%] rounded bg-gray dark:bg-meta-4"></span>
                    <div className="col-span-6 pl-3.5 relative z-[2]">
                      <p className="text-sm font-medium">/reserve/success</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-center text-sm font-medium">468</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-right text-sm font-medium">290</p>
                    </div>
                  </div>
                  <div className="relative z-1 grid grid-cols-10 py-2">
                    <span className="absolute left-0 top-0 -z-1 h-full w-[20%] rounded bg-gray dark:bg-meta-4"></span>
                    <div className="col-span-6 pl-3.5 relative z-[2]">
                      <p className="text-sm font-medium">
                        /product/product-details
                      </p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-center text-sm font-medium">298</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-right text-sm font-medium">176</p>
                    </div>
                  </div>
                  <div className="relative z-1 grid grid-cols-10 py-2">
                    <span className="absolute left-0 top-0 -z-1 h-full w-[27%] rounded bg-gray dark:bg-meta-4"></span>
                    <div className="col-span-6 pl-3.5 relative z-[2]">
                      <p className="text-sm font-medium">
                        /blog/digital-marketing
                      </p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-center text-sm font-medium">179</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-right text-sm font-medium">57</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- ====== Top Content End -->

                <!-- ====== Top Channels Start --> */}
              <div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-[1.875rem]">
                <div className="mb-7 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-boxdark dark:text-white">
                      Top Channels
                    </h3>
                  </div>
                  <AnalyticsDropdown />
                </div>

                <div className="flex flex-col gap-2">
                  <div className="grid grid-cols-10 py-2">
                    <div className="col-span-6">
                      <p className="text-sm font-medium">URL</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-center text-sm font-medium">Views</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-right text-sm font-medium">Uniques</p>
                    </div>
                  </div>
                  <div className="relative z-1 grid grid-cols-10 py-2">
                    <span className="absolute left-0 top-0 -z-1 h-full w-[74%] rounded bg-gray dark:bg-meta-4"></span>
                    <div className="col-span-6 pl-3.5 relative z-[2]">
                      <p className="text-sm font-medium">Google</p>
                    </div>
                    <div className="col-span-2 z-[2] ">
                      <p className="text-center text-sm font-medium">4.2k</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-right text-sm font-medium">3.9k</p>
                    </div>
                  </div>
                  <div className="relative z-1 grid grid-cols-10 py-2">
                    <span className="absolute left-0 top-0 -z-1 h-full w-[66%] rounded bg-gray dark:bg-meta-4"></span>
                    <div className="col-span-6 pl-3.5 relative z-[2]">
                      <p className="text-sm font-medium">Github</p>
                    </div>
                    <div className="col-span-2 z-[2]">
                      <p className="text-center text-sm font-medium ">1.9k</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-right text-sm font-medium">509</p>
                    </div>
                  </div>
                  <div className="relative z-1 grid grid-cols-10 py-2">
                    <span className="absolute left-0 top-0 -z-1 h-full w-[58%] rounded bg-gray dark:bg-meta-4"></span>
                    <div className="col-span-6 pl-3.5 relative z-[2]">
                      <p className="text-sm font-medium">Producthunt</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-center text-sm font-medium">1.5k</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-right text-sm font-medium">986</p>
                    </div>
                  </div>
                  <div className="relative z-1 grid grid-cols-10 py-2">
                    <span className="absolute left-0 top-0 -z-1 h-full w-[48%] rounded bg-gray dark:bg-meta-4"></span>
                    <div className="col-span-6 pl-3.5 relative z-[2]">
                      <p className="text-sm font-medium">Facebook</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-center text-sm font-medium">974</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-right text-sm font-medium">639</p>
                    </div>
                  </div>
                  <div className="relative z-1 grid grid-cols-10 py-2">
                    <span className="absolute left-0 top-0 -z-1 h-full w-[39%] rounded bg-gray dark:bg-meta-4"></span>
                    <div className="col-span-6 pl-3.5 relative z-[2]">
                      <p className="text-sm font-medium">Twitter</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-center text-sm font-medium">179</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-right text-sm font-medium">57</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ===================Donut Chart Start=============== */}
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
            {/* ===================Top Products Start=============== */}
            <div className="col-span-12 xl:col-span-7">
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="px-4 py-6 md:px-6 xl:px-[1.875rem]">
                  <h4 className="text-xl font-bold text-black dark:text-white ">
                    Top Products
                  </h4>
                </div>

                <div className="grid grid-cols-6 border-t border-stroke px-4 py-[1.125rem] dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-[1.875rem]">
                  <div className="col-span-3 flex items-center">
                    <p className="font-medium ">Product Name</p>
                  </div>
                  <div className="col-span-2 hidden items-center sm:flex">
                    <p className="font-medium">Category</p>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <p className="font-medium">Price</p>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <p className="font-medium">Sold</p>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <p className="font-medium">Profit</p>
                  </div>
                </div>

                <div className="grid grid-cols-6 border-t border-stroke px-4 py-[1.125rem] dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-[1.875rem]">
                  <div className="col-span-3 flex items-center ">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center ">
                      <div className="h-[3.125rem] w-[3.75rem] rounded-md">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/top-product/product-01.png`}
                          alt="Product"
                        />
                      </div>
                      <p className="text-sm font-medium text-black dark:text-white">
                        Apple Watch Series 7
                      </p>
                    </div>
                  </div>
                  <div className="col-span-2 hidden items-center sm:flex">
                    <p className="text-sm font-medium text-black dark:text-white">
                      Electronics
                    </p>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <p className="text-sm font-medium text-black dark:text-white">
                      $269
                    </p>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <p className="text-sm font-medium text-black dark:text-white">
                      22
                    </p>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <p className="text-sm font-medium text-meta-3">$45</p>
                  </div>
                </div>
                <div className="grid grid-cols-6 border-t border-stroke px-4 py-[1.125rem] dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-[1.875rem]">
                  <div className="col-span-3 flex items-center">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                      <div className="h-[3.125rem] w-[3.75rem] rounded-md">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/top-product/product-02.png`}
                          alt="Product"
                        />
                      </div>
                      <p className="text-sm font-medium text-black dark:text-white">
                        Macbook Pro M1
                      </p>
                    </div>
                  </div>
                  <div className="col-span-2 hidden items-center sm:flex">
                    <p className="text-sm font-medium text-black dark:text-white">
                      Electronics
                    </p>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <p className="text-sm font-medium text-black dark:text-white">
                      $546
                    </p>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <p className="text-sm font-medium text-black dark:text-white">
                      34
                    </p>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <p className="text-sm font-medium text-meta-3">$125</p>
                  </div>
                </div>
                <div className="grid grid-cols-6 border-t border-stroke px-4 py-[1.125rem] dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-[1.875rem]">
                  <div className="col-span-3 flex items-center">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                      <div className="h-[3.125rem] w-[3.75rem] rounded-md">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/top-product/product-03.png`}
                          alt="Product"
                        />
                      </div>
                      <p className="text-sm font-medium text-black dark:text-white">
                        Dell Inspiron 15
                      </p>
                    </div>
                  </div>
                  <div className="col-span-2 hidden items-center sm:flex">
                    <p className="text-sm font-medium text-black dark:text-white">
                      Electronics
                    </p>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <p className="text-sm font-medium text-black dark:text-white">
                      $443
                    </p>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <p className="text-sm font-medium text-black dark:text-white">
                      64
                    </p>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <p className="text-sm font-medium text-meta-3">$247</p>
                  </div>
                </div>
                <div className="grid grid-cols-6 border-t border-stroke px-4 py-[1.125rem] dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-[1.875rem]">
                  <div className="col-span-3 flex items-center">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                      <div className="h-[3.125rem] w-[3.75rem] rounded-md">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/top-product/product-04.png`}
                          alt="Product"
                        />
                      </div>
                      <p className="text-sm font-medium text-black dark:text-white">
                        HP Probook 450
                      </p>
                    </div>
                  </div>
                  <div className="col-span-2 hidden items-center sm:flex">
                    <p className="text-sm font-medium text-black dark:text-white">
                      Electronics
                    </p>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <p className="text-sm font-medium text-black dark:text-white">
                      $499
                    </p>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <p className="text-sm font-medium text-black dark:text-white">
                      72
                    </p>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <p className="text-sm font-medium text-meta-3">$103</p>
                  </div>
                </div>
              </div>
            </div>
            {/* ===================Top Products Start=============== */}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Analytics;
