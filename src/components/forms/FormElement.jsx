import Layout from "../Layout";
import { NavLink } from "react-router-dom";
import FormToggleOne from "./childcomp/FormToggleOne";
import FormToggleTwo from "./childcomp/FormToggleTwo";
import FormToggleFour from "./childcomp/FormToggleFour";
import FormToggleThree from "./childcomp/FormToggleThree";
import { useState } from "react";
import BasicDatePicker from "./childcomp/BasicDatePicker";
import SelectDate from "./childcomp/SelectDate";

const FormElement = () => {
  const [checkboxStates, setCheckboxStates] = useState(
    new Array(5).fill(false)
  );

  const handleCheckboxChange = (index) => {
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = !newCheckboxStates[index];
    setCheckboxStates(newCheckboxStates);
  };
  return (
    <Layout>
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-[#F1F5F9] dark:bg-[#1A222C]">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-[26px] leading-[30px] font-bold text-black dark:text-white">
            Form Elements
          </h2>

          <nav>
            <ol className="flex items-center gap-2">
              <li className="text-general-gray dark:text-dark-general-gray">
                <NavLink  to="/" className="font-medium text-general-gray dark:text-dark-general-gray">
                  Dashboard /
                </NavLink>
              </li>
              <li className="font-medium text-primary">Form Elements</li>
            </ol>
          </nav>
        </div>
        {/* ========= */}
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
          <div className="flex flex-col gap-9">
            {/* <!-- Input Fields --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-[1.625rem] py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Input Fields
                </h3>
              </div>
              <div className="flex flex-col gap-[1.375rem] p-[1.625rem]">
                <div>
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Default Input
                  </label>
                  <input
                    type="text"
                    placeholder="Default Input"
                    className="dark:border-strokedark w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-[#1C2434] dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Active Input
                  </label>
                  <input
                    type="text"
                    placeholder="Active Input"
                    className="w-full rounded-lg border-[1.5px] border-primary bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-[#1C2434] dark:text-white"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Disabled label
                  </label>
                  <input
                    type="text"
                    placeholder="Disabled label"
                    disabled=""
                    className="dark:border-strokedark w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-[#1C2434] dark:text-white dark:focus:border-primary dark:disabled:bg-black"
                  />
                </div>
              </div>
            </div>

            {/* <!-- Toggle switch input --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-[1.625rem] py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Toggle switch input
                </h3>
              </div>
              <div className="flex flex-col gap-[1.375rem] p-[1.625rem]">
                <FormToggleOne />
                <FormToggleTwo />
                <FormToggleThree />
                <FormToggleFour />
              </div>
            </div>

            {/* <!-- Time and date --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-[1.625rem] py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Time and date
                </h3>
              </div>
              <div className="flex flex-col gap-[1.375rem] p-[1.625rem]">
                <div>
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Date picker
                  </label>
                  <BasicDatePicker />
{/*                   
                  <div className="relative">
                    <div className="flatpickr-wrapper">
                      <input
                        className="dark:border-strokedark form-datepicker w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-[#1C2434] dark:focus:border-primary flatpickr-input"
                        placeholder="mm/dd/yyyy"
                        data-className="flatpickr-right"
                        type="text"
                        readonly="readonly"
                      />
                      <div
                        className="flatpickr-calendar animate static"
                        tabindex="-1"
                      >
                        <div className="flatpickr-months">
                          <span className="flatpickr-prev-month">
                            <svg
                              className="fill-current"
                              width="7"
                              height="11"
                              viewBox="0 0 7 11"
                            >
                              <path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z"></path>
                            </svg>
                          </span>
                          <div className="flatpickr-month">
                            <div className="flatpickr-current-month">
                              <span className="cur-month">April </span>
                              <div className="numInputWrapper">
                                <input
                                  className="numInput cur-year"
                                  type="number"
                                  tabindex="-1"
                                  aria-label="Year"
                                />
                                <span className="arrowUp"></span>
                                <span className="arrowDown"></span>
                              </div>
                            </div>
                          </div>
                          <span className="flatpickr-next-month">
                            <svg
                              className="fill-current"
                              width="7"
                              height="11"
                              viewBox="0 0 7 11"
                            >
                              <path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z"></path>
                            </svg>
                          </span>
                        </div>
                        <div className="flatpickr-innerContainer">
                          <div className="flatpickr-rContainer">
                            <div className="flatpickr-weekdays">
                              <div className="flatpickr-weekdaycontainer">
                                <span className="flatpickr-weekday">Sun</span>
                                <span className="flatpickr-weekday">Mon</span>
                                <span className="flatpickr-weekday">Tue</span>
                                <span className="flatpickr-weekday">Wed</span>
                                <span className="flatpickr-weekday">Thu</span>
                                <span className="flatpickr-weekday">Fri</span>
                                <span className="flatpickr-weekday">Sat</span>
                              </div>
                            </div>
                            <div className="flatpickr-days" tabindex="-1">
                              <div className="dayContainer">
                                <span
                                  className="flatpickr-day prevMonthDay"
                                  aria-label="March 31, 2024"
                                  tabindex="-1"
                                >
                                  31
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 1, 2024"
                                  tabindex="-1"
                                >
                                  1
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 2, 2024"
                                  tabindex="-1"
                                >
                                  2
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 3, 2024"
                                  tabindex="-1"
                                >
                                  3
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 4, 2024"
                                  tabindex="-1"
                                >
                                  4
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 5, 2024"
                                  tabindex="-1"
                                >
                                  5
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 6, 2024"
                                  tabindex="-1"
                                >
                                  6
                                </span>
                                <span
                                  className="flatpickr-day today"
                                  aria-label="April 7, 2024"
                                  aria-current="date"
                                  tabindex="-1"
                                >
                                  7
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 8, 2024"
                                  tabindex="-1"
                                >
                                  8
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 9, 2024"
                                  tabindex="-1"
                                >
                                  9
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 10, 2024"
                                  tabindex="-1"
                                >
                                  10
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 11, 2024"
                                  tabindex="-1"
                                >
                                  11
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 12, 2024"
                                  tabindex="-1"
                                >
                                  12
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 13, 2024"
                                  tabindex="-1"
                                >
                                  13
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 14, 2024"
                                  tabindex="-1"
                                >
                                  14
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 15, 2024"
                                  tabindex="-1"
                                >
                                  15
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 16, 2024"
                                  tabindex="-1"
                                >
                                  16
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 17, 2024"
                                  tabindex="-1"
                                >
                                  17
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 18, 2024"
                                  tabindex="-1"
                                >
                                  18
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 19, 2024"
                                  tabindex="-1"
                                >
                                  19
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 20, 2024"
                                  tabindex="-1"
                                >
                                  20
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 21, 2024"
                                  tabindex="-1"
                                >
                                  21
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 22, 2024"
                                  tabindex="-1"
                                >
                                  22
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 23, 2024"
                                  tabindex="-1"
                                >
                                  23
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 24, 2024"
                                  tabindex="-1"
                                >
                                  24
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 25, 2024"
                                  tabindex="-1"
                                >
                                  25
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 26, 2024"
                                  tabindex="-1"
                                >
                                  26
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 27, 2024"
                                  tabindex="-1"
                                >
                                  27
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 28, 2024"
                                  tabindex="-1"
                                >
                                  28
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 29, 2024"
                                  tabindex="-1"
                                >
                                  29
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 30, 2024"
                                  tabindex="-1"
                                >
                                  30
                                </span>
                                <span
                                  className="flatpickr-day nextMonthDay"
                                  aria-label="May 1, 2024"
                                  tabindex="-1"
                                >
                                  1
                                </span>
                                <span
                                  className="flatpickr-day nextMonthDay"
                                  aria-label="May 2, 2024"
                                  tabindex="-1"
                                >
                                  2
                                </span>
                                <span
                                  className="flatpickr-day nextMonthDay"
                                  aria-label="May 3, 2024"
                                  tabindex="-1"
                                >
                                  3
                                </span>
                                <span
                                  className="flatpickr-day nextMonthDay"
                                  aria-label="May 4, 2024"
                                  tabindex="-1"
                                >
                                  4
                                </span>
                                <span
                                  className="flatpickr-day nextMonthDay"
                                  aria-label="May 5, 2024"
                                  tabindex="-1"
                                >
                                  5
                                </span>
                                <span
                                  className="flatpickr-day nextMonthDay"
                                  aria-label="May 6, 2024"
                                  tabindex="-1"
                                >
                                  6
                                </span>
                                <span
                                  className="flatpickr-day nextMonthDay"
                                  aria-label="May 7, 2024"
                                  tabindex="-1"
                                >
                                  7
                                </span>
                                <span
                                  className="flatpickr-day nextMonthDay"
                                  aria-label="May 8, 2024"
                                  tabindex="-1"
                                >
                                  8
                                </span>
                                <span
                                  className="flatpickr-day nextMonthDay"
                                  aria-label="May 9, 2024"
                                  tabindex="-1"
                                >
                                  9
                                </span>
                                <span
                                  className="flatpickr-day nextMonthDay"
                                  aria-label="May 10, 2024"
                                  tabindex="-1"
                                >
                                  10
                                </span>
                                <span
                                  className="flatpickr-day nextMonthDay"
                                  aria-label="May 11, 2024"
                                  tabindex="-1"
                                >
                                  11
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pointer-events-none absolute inset-0 left-auto right-5 flex items-center">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.7504 2.9812H14.2879V2.36245C14.2879 2.02495 14.0066 1.71558 13.641 1.71558C13.2754 1.71558 12.9941 1.99683 12.9941 2.36245V2.9812H4.97852V2.36245C4.97852 2.02495 4.69727 1.71558 4.33164 1.71558C3.96602 1.71558 3.68477 1.99683 3.68477 2.36245V2.9812H2.25039C1.29414 2.9812 0.478516 3.7687 0.478516 4.75308V14.5406C0.478516 15.4968 1.26602 16.3125 2.25039 16.3125H15.7504C16.7066 16.3125 17.5223 15.525 17.5223 14.5406V4.72495C17.5223 3.7687 16.7066 2.9812 15.7504 2.9812ZM1.77227 8.21245H4.16289V10.9968H1.77227V8.21245ZM5.42852 8.21245H8.38164V10.9968H5.42852V8.21245ZM8.38164 12.2625V15.0187H5.42852V12.2625H8.38164V12.2625ZM9.64727 12.2625H12.6004V15.0187H9.64727V12.2625ZM9.64727 10.9968V8.21245H12.6004V10.9968H9.64727ZM13.8379 8.21245H16.2285V10.9968H13.8379V8.21245ZM2.25039 4.24683H3.71289V4.83745C3.71289 5.17495 3.99414 5.48433 4.35977 5.48433C4.72539 5.48433 5.00664 5.20308 5.00664 4.83745V4.24683H13.0504V4.83745C13.0504 5.17495 13.3316 5.48433 13.6973 5.48433C14.0629 5.48433 14.3441 5.20308 14.3441 4.83745V4.24683H15.7504C16.0316 4.24683 16.2566 4.47183 16.2566 4.75308V6.94683H1.77227V4.75308C1.77227 4.47183 1.96914 4.24683 2.25039 4.24683ZM1.77227 14.5125V12.2343H4.16289V14.9906H2.25039C1.96914 15.0187 1.77227 14.7937 1.77227 14.5125ZM15.7504 15.0187H13.8379V12.2625H16.2285V14.5406C16.2566 14.7937 16.0316 15.0187 15.7504 15.0187Z"
                          fill="#64748B"
                        ></path>
                      </svg>
                    </div>
                  </div> */}
                  
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Select date
                  </label>
                  <SelectDate/>
{/* 
                  <div className="relative">
                    <div className="flatpickr-wrapper">
                      <input
                        className="dark:border-strokedark form-datepicker w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-[#1C2434] dark:focus:border-primary flatpickr-input"
                        placeholder="mm/dd/yyyy"
                        data-className="flatpickr-right"
                        type="text"
                        readonly="readonly"
                      />
                      <div
                        className="flatpickr-calendar animate static"
                        tabindex="-1"
                      >
                        <div className="flatpickr-months">
                          <span className="flatpickr-prev-month">
                            <svg
                              className="fill-current"
                              width="7"
                              height="11"
                              viewBox="0 0 7 11"
                            >
                              <path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z"></path>
                            </svg>
                          </span>
                          <div className="flatpickr-month">
                            <div className="flatpickr-current-month">
                              <span className="cur-month">April </span>
                              <div className="numInputWrapper">
                                <input
                                  className="numInput cur-year"
                                  type="number"
                                  tabindex="-1"
                                  aria-label="Year"
                                />
                                <span className="arrowUp"></span>
                                <span className="arrowDown"></span>
                              </div>
                            </div>
                          </div>
                          <span className="flatpickr-next-month">
                            <svg
                              className="fill-current"
                              width="7"
                              height="11"
                              viewBox="0 0 7 11"
                            >
                              <path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z"></path>
                            </svg>
                          </span>
                        </div>
                        <div className="flatpickr-innerContainer">
                          <div className="flatpickr-rContainer">
                            <div className="flatpickr-weekdays">
                              <div className="flatpickr-weekdaycontainer">
                                <span className="flatpickr-weekday">Sun</span>
                                <span className="flatpickr-weekday">Mon</span>
                                <span className="flatpickr-weekday">Tue</span>
                                <span className="flatpickr-weekday">Wed</span>
                                <span className="flatpickr-weekday">Thu</span>
                                <span className="flatpickr-weekday">Fri</span>
                                <span className="flatpickr-weekday">Sat</span>
                              </div>
                            </div>
                            <div className="flatpickr-days" tabindex="-1">
                              <div className="dayContainer">
                                <span
                                  className="flatpickr-day prevMonthDay"
                                  aria-label="March 31, 2024"
                                  tabindex="-1"
                                >
                                  31
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 1, 2024"
                                  tabindex="-1"
                                >
                                  1
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 2, 2024"
                                  tabindex="-1"
                                >
                                  2
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 3, 2024"
                                  tabindex="-1"
                                >
                                  3
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 4, 2024"
                                  tabindex="-1"
                                >
                                  4
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 5, 2024"
                                  tabindex="-1"
                                >
                                  5
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 6, 2024"
                                  tabindex="-1"
                                >
                                  6
                                </span>
                                <span
                                  className="flatpickr-day today"
                                  aria-label="April 7, 2024"
                                  aria-current="date"
                                  tabindex="-1"
                                >
                                  7
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 8, 2024"
                                  tabindex="-1"
                                >
                                  8
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 9, 2024"
                                  tabindex="-1"
                                >
                                  9
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 10, 2024"
                                  tabindex="-1"
                                >
                                  10
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 11, 2024"
                                  tabindex="-1"
                                >
                                  11
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 12, 2024"
                                  tabindex="-1"
                                >
                                  12
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 13, 2024"
                                  tabindex="-1"
                                >
                                  13
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 14, 2024"
                                  tabindex="-1"
                                >
                                  14
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 15, 2024"
                                  tabindex="-1"
                                >
                                  15
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 16, 2024"
                                  tabindex="-1"
                                >
                                  16
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 17, 2024"
                                  tabindex="-1"
                                >
                                  17
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 18, 2024"
                                  tabindex="-1"
                                >
                                  18
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 19, 2024"
                                  tabindex="-1"
                                >
                                  19
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 20, 2024"
                                  tabindex="-1"
                                >
                                  20
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 21, 2024"
                                  tabindex="-1"
                                >
                                  21
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 22, 2024"
                                  tabindex="-1"
                                >
                                  22
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 23, 2024"
                                  tabindex="-1"
                                >
                                  23
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 24, 2024"
                                  tabindex="-1"
                                >
                                  24
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 25, 2024"
                                  tabindex="-1"
                                >
                                  25
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 26, 2024"
                                  tabindex="-1"
                                >
                                  26
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 27, 2024"
                                  tabindex="-1"
                                >
                                  27
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 28, 2024"
                                  tabindex="-1"
                                >
                                  28
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 29, 2024"
                                  tabindex="-1"
                                >
                                  29
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="April 30, 2024"
                                  tabindex="-1"
                                >
                                  30
                                </span>
                                <span
                                  className="flatpickr-day nextMonthDay"
                                  aria-label="May 1, 2024"
                                  tabindex="-1"
                                >
                                  1
                                </span>
                                <span
                                  className="flatpickr-day nextMonthDay"
                                  aria-label="May 2, 2024"
                                  tabindex="-1"
                                >
                                  2
                                </span>
                                <span
                                  className="flatpickr-day nextMonthDay"
                                  aria-label="May 3, 2024"
                                  tabindex="-1"
                                >
                                  3
                                </span>
                                <span
                                  className="flatpickr-day nextMonthDay"
                                  aria-label="May 4, 2024"
                                  tabindex="-1"
                                >
                                  4
                                </span>
                                <span
                                  className="flatpickr-day nextMonthDay"
                                  aria-label="May 5, 2024"
                                  tabindex="-1"
                                >
                                  5
                                </span>
                                <span
                                  className="flatpickr-day nextMonthDay"
                                  aria-label="May 6, 2024"
                                  tabindex="-1"
                                >
                                  6
                                </span>
                                <span
                                  className="flatpickr-day nextMonthDay"
                                  aria-label="May 7, 2024"
                                  tabindex="-1"
                                >
                                  7
                                </span>
                                <span
                                  className="flatpickr-day nextMonthDay"
                                  aria-label="May 8, 2024"
                                  tabindex="-1"
                                >
                                  8
                                </span>
                                <span
                                  className="flatpickr-day nextMonthDay"
                                  aria-label="May 9, 2024"
                                  tabindex="-1"
                                >
                                  9
                                </span>
                                <span
                                  className="flatpickr-day nextMonthDay"
                                  aria-label="May 10, 2024"
                                  tabindex="-1"
                                >
                                  10
                                </span>
                                <span
                                  className="flatpickr-day nextMonthDay"
                                  aria-label="May 11, 2024"
                                  tabindex="-1"
                                >
                                  11
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pointer-events-none absolute inset-0 left-auto right-5 flex items-center">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.0002 12.8249C8.83145 12.8249 8.69082 12.7687 8.5502 12.6562L2.08145 6.2999C1.82832 6.04678 1.82832 5.65303 2.08145 5.3999C2.33457 5.14678 2.72832 5.14678 2.98145 5.3999L9.0002 11.278L15.0189 5.34365C15.2721 5.09053 15.6658 5.09053 15.9189 5.34365C16.1721 5.59678 16.1721 5.99053 15.9189 6.24365L9.45019 12.5999C9.30957 12.7405 9.16895 12.8249 9.0002 12.8249Z"
                          fill="#64748B"
                        ></path>
                      </svg>
                    </div>
                  </div> */}

                </div>
              </div>
            </div>

            {/* <!-- File upload --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-[1.625rem] py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  File upload
                </h3>
              </div>
              <div className="flex flex-col gap-[1.375rem] p-[1.625rem]">
                <div>
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Attach file
                  </label>
                  <input
                    type="file"
                    className="text-general-gray dark:text-dark-general-gray dark:border-strokedark w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-normal outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-[#1C2434] dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Attach file
                  </label>
                  <input
                    type="file"
                    className="text-general-gray dark:text-dark-general-gray dark:border-strokedark w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:px-2.5 file:py-1 file:text-sm file:font-normal focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-[#1C2434] dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-9">
            {/* <!-- Textarea Fields --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-[1.625rem] py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Textarea Fields
                </h3>
              </div>
              <div className="flex flex-col gap-[1.375rem] p-[1.625rem]">
                <div>
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Default textarea
                  </label>
                  <textarea
                    rows="6"
                    placeholder="Default textarea"
                    className="dark:border-strokedark w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-[#1C2434] dark:text-white dark:focus:border-primary"
                  ></textarea>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Active textarea
                  </label>
                  <textarea
                    rows="6"
                    placeholder="Active textarea"
                    className=" w-full rounded-lg border-[1.5px] border-primary bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-[#1C2434] dark:text-white"
                  ></textarea>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Disabled textarea
                  </label>
                  <textarea
                    rows="6"
                    disabled=""
                    placeholder="Disabled textarea"
                    className="dark:border-strokedark w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-[#1C2434] dark:text-white dark:focus:border-primary dark:disabled:bg-black"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* <!-- Checkbox and radio --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-[1.625rem] py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Checkbox and radio
                </h3>
              </div>
              <div className="flex flex-col gap-[1.375rem] p-[1.625rem]">
                {[1, 2, 3, 4, 5].map((index) => (
                  <div>
                    <label
                      key={index}
                      className="flex items-center gap-[17px] cursor-pointer text-general-gray dark:text-dark-general-gray text-sm font-medium "
                    >
                      <input
                        type="checkbox"
                        checked={checkboxStates[index - 1]}
                        onChange={() => handleCheckboxChange(index - 1)}
                        className=" w-[20px] h-[30px] "
                      />
                      Checkbox Text
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* <!-- Select input --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-[1.625rem] py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Select input
                </h3>
              </div>
              <div className="flex flex-col gap-[1.375rem] p-[1.625rem]">
                <div>
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Select Option
                  </label>
                  <div
                    x-data="{ isOptionSelected: false }"
                    className="relative z-20 bg-white dark:bg-[#1C2434]"
                  >
                    <select className="text-general-gray dark:text-dark-general-gray dark:border-strokedark relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 pl-5 pr-12 outline-none transition focus:border-primary active:border-primary dark:bg-[#1C2434]">
                      <option value="" className="text-body">
                        Option 1
                      </option>
                      <option value="" className="text-body">
                        Option 2
                      </option>
                      <option value="" className="text-body">
                        Option 3
                      </option>
                    </select>
                    <span className="absolute right-4 top-1/2 z-20 -translate-y-1/2">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.8">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                            fill="#637381"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Select Country
                  </label>
                  <div
                    x-data="{ isOptionSelected: false }"
                    className="relative z-20 bg-white dark:bg-[#1C2434]"
                  >
                    <span className="absolute left-4 top-1/2 z-30 -translate-y-1/2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.8">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.0007 2.50065C5.85852 2.50065 2.50065 5.85852 2.50065 10.0007C2.50065 14.1428 5.85852 17.5007 10.0007 17.5007C14.1428 17.5007 17.5007 14.1428 17.5007 10.0007C17.5007 5.85852 14.1428 2.50065 10.0007 2.50065ZM0.833984 10.0007C0.833984 4.93804 4.93804 0.833984 10.0007 0.833984C15.0633 0.833984 19.1673 4.93804 19.1673 10.0007C19.1673 15.0633 15.0633 19.1673 10.0007 19.1673C4.93804 19.1673 0.833984 15.0633 0.833984 10.0007Z"
                            fill="#637381"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0.833984 9.99935C0.833984 9.53911 1.20708 9.16602 1.66732 9.16602H18.334C18.7942 9.16602 19.1673 9.53911 19.1673 9.99935C19.1673 10.4596 18.7942 10.8327 18.334 10.8327H1.66732C1.20708 10.8327 0.833984 10.4596 0.833984 9.99935Z"
                            fill="#637381"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.50084 10.0008C7.55796 12.5632 8.4392 15.0301 10.0006 17.0418C11.5621 15.0301 12.4433 12.5632 12.5005 10.0008C12.4433 7.43845 11.5621 4.97153 10.0007 2.95982C8.4392 4.97153 7.55796 7.43845 7.50084 10.0008ZM10.0007 1.66749L9.38536 1.10547C7.16473 3.53658 5.90275 6.69153 5.83417 9.98346C5.83392 9.99503 5.83392 10.0066 5.83417 10.0182C5.90275 13.3101 7.16473 16.4651 9.38536 18.8962C9.54325 19.069 9.76655 19.1675 10.0007 19.1675C10.2348 19.1675 10.4581 19.069 10.6159 18.8962C12.8366 16.4651 14.0986 13.3101 14.1671 10.0182C14.1674 10.0066 14.1674 9.99503 14.1671 9.98346C14.0986 6.69153 12.8366 3.53658 10.6159 1.10547L10.0007 1.66749Z"
                            fill="#637381"
                          ></path>
                        </g>
                      </svg>
                    </span>
                    <select className="text-general-gray dark:text-dark-general-gray dark:border-strokedark relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-12 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-[#1C2434]">
                      <option value="" className="text-body">
                        USA
                      </option>
                      <option value="" className="text-body">
                        UK
                      </option>
                      <option value="" className="text-body">
                        Canada
                      </option>
                    </select>
                    <span className="absolute right-4 top-1/2 z-20 -translate-y-1/2">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.8">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                            fill="#637381"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Multiselect Dropdown
                  </label>
                  <div
                    x-data="{ isOptionSelected: false }"
                    className="relative z-20 bg-white dark:bg-[#1C2434]"
                  >
                    <select className="text-general-gray dark:text-dark-general-gray dark:border-strokedark relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 pl-5 pr-12 outline-none transition focus:border-primary active:border-primary dark:bg-[#1C2434]">
                    <option value="" className="text-body">
                        Select an option
                      </option>
                      <option value="" className="text-body">
                        Option 2
                      </option>
                      <option value="" className="text-body">
                        Option 3
                      </option>
                      <option value="" className="text-body">
                        Option 4
                      </option>
                    </select>
                    <span className="absolute right-4 top-1/2 z-20 -translate-y-1/2">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.8">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                            fill="#637381"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
{/* 
                <div>
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Multiselect Dropdown
                  </label>
                  <div
                    x-data="{ isOptionSelected: false }"
                    className="relative z-20 bg-white dark:bg-[#1C2434]"
                  >
                    <select
                      className="dark:border-strokedark hidden"
                      id="select"
                    >
                      <option value="1">Option 2</option>
                      <option value="2">Option 3</option>
                      <option value="3">Option 4</option>
                      <option value="4">Option 5</option>
                    </select>

                    <div
                      x-data="dropdown()"
                      x-init="loadOptions()"
                      className="flex flex-col items-center"
                    >
                      <input name="values" type="hidden" />
                      <div className="inline-block relative z-20 w-full">
                        <div className="flex flex-col items-center relative">
                          <div className="w-full">
                            <div className="mb-2 pl-3 pr-3 py-2 flex rounded border border-stroke outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-[#1C2434]">
                              <div className="flex gap-3 flex-auto flex-wrap">
                                <template x-for="(option,index) in selected">
                                  <div className="my-1.5 flex items-center justify-center rounded border-[.5px] border-stroke bg-gray px-2.5 py-1.5 text-sm font-medium dark:border-strokedark dark:bg-white/30">
                                    <div
                                      className="max-w-full flex-initial "
                                      x-model="options[option]"
                                      x-text="options[option].text"
                                    ></div>
                                    <div className="flex flex-auto flex-row-reverse">
                                      <div className="cursor-pointer pl-2 hover:text-danger">
                                        <svg
                                          className="fill-current"
                                          role="button"
                                          width="12"
                                          height="12"
                                          viewBox="0 0 12 12"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M9.35355 3.35355C9.54882 3.15829 9.54882 2.84171 9.35355 2.64645C9.15829 2.45118 8.84171 2.45118 8.64645 2.64645L6 5.29289L3.35355 2.64645C3.15829 2.45118 2.84171 2.45118 2.64645 2.64645C2.45118 2.84171 2.45118 3.15829 2.64645 3.35355L5.29289 6L2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L6 6.70711L8.64645 9.35355C8.84171 9.54882 9.15829 9.54882 9.35355 9.35355C9.54882 9.15829 9.54882 8.84171 9.35355 8.64645L6.70711 6L9.35355 3.35355Z"
                                            fill="currentColor"
                                          ></path>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </template>
                                <div
                                  x-show="selected.length == 0"
                                  className="flex-1"
                                >
                                  <input
                                    placeholder="Select a option"
                                    className="dark:border-strokedark bg-transparent p-1 px-2 appearance-none outline-none h-full w-full"
                                  />
                                </div>
                              </div>
                              <div className="w-8 py-1 pl-1 pr-1 flex items-center">
                                <button
                                  type="button"
                                  className="cursor-pointer w-6 h-6 outline-none focus:outline-none"
                                >
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g opacity="0.8">
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                        fill="#637381"
                                      ></path>
                                    </g>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="w-full px-4">
                            <div
                              className="absolute shadow top-full bg-white dark:bg-[#1C2434] z-40 w-full left-0 rounded max-h-select overflow-y-auto"
                              style={{ display: "none" }}
                            >
                              <div className="flex flex-col w-full">
                                <template>
                                  <div>
                                    <div className="cursor-pointer w-full border-stroke rounded-t border-b hover:bg-primary dark:border-form-strokedark">
                                      <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative">
                                        <div className="w-full items-center flex">
                                          <div
                                            className="mx-2 leading-6"
                                            x-model="option"
                                            x-text="option.text"
                                          ></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </template>
                                <div>
                                  <div className="cursor-pointer w-full border-stroke rounded-t border-b hover:bg-primary/5 dark:border-form-strokedark">
                                    <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative">
                                      <div className="w-full items-center flex">
                                        <div
                                          className="mx-2 leading-6"
                                          x-model="option"
                                          x-text="option.text"
                                        >
                                          Option 2
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="cursor-pointer w-full border-stroke rounded-t border-b hover:bg-primary/5 dark:border-form-strokedark">
                                    <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative">
                                      <div className="w-full items-center flex">
                                        <div
                                          className="mx-2 leading-6"
                                          x-model="option"
                                          x-text="option.text"
                                        >
                                          Option 3
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="cursor-pointer w-full border-stroke rounded-t border-b hover:bg-primary/5 dark:border-form-strokedark">
                                    <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative">
                                      <div className="w-full items-center flex">
                                        <div
                                          className="mx-2 leading-6"
                                          x-model="option"
                                          x-text="option.text"
                                        >
                                          Option 4
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="cursor-pointer w-full border-stroke rounded-t border-b hover:bg-primary/5 dark:border-form-strokedark">
                                    <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative">
                                      <div className="w-full items-center flex">
                                        <div
                                          className="mx-2 leading-6"
                                          x-model="option"
                                          x-text="option.text"
                                        >
                                          Option 5
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* ========= */}
      </div>
    </Layout>
  );
};

export default FormElement;
