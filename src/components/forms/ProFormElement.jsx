import Layout from "../Layout";
import { NavLink } from "react-router-dom";
import Slider from "@mui/material/Slider";
import React, { useState } from "react";

const ProFormElement = () => {
  const [value, setValue] = useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Layout>
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-[#F1F5F9] dark:bg-[#1A222C]">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-[26px] leading-[30px] font-bold text-black dark:text-white">
            Pro Form Elements
          </h2>

          <nav>
            <ol className="flex items-center gap-2">
              <li className="text-general-gray dark:text-dark-general-gray">
                <NavLink  to="/" className="font-medium text-general-gray dark:text-dark-general-gray">
                  Dashboard /
                </NavLink>
              </li>
              <li className="font-medium text-primary">Pro Form Elements</li>
            </ol>
          </nav>
        </div>
        {/* ========= */}
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
          <div className="flex flex-col gap-9">
            {/* <!-- Range Slider --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-[1.625rem] py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Range Slider
                </h3>
              </div>
              <div className="flex flex-col gap-[1.375rem] p-[1.875rem]">
                <Slider
                 
                  value={value}
                  onChange={handleChange}
                />
                <Slider
                 
                  value={value}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-9">
            {/* <!-- File Drop Zone --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-[1.625rem] py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  File Drop Zone
                </h3>
              </div>
              <div className="p-[1.625rem]">
                <form
                  className="dropzone rounded-md border-dashed border-bodydark1 bg-gray hover:border-primary dark:border-strokedark dark:bg-graydark dark:hover:border-primary dz-clickable"
                  id="demo-upload"
                  action="/upload"
                >
                  <div className="dz-message text-center py-[3em] ">
                    <div className="mb-2.5 flex justify-center">
                      <div className="flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-full bg-white text-black shadow-10 dark:bg-black dark:text-white">
                        <svg
                          className="fill-current"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_1867_11682)">
                            <path
                              d="M18.75 13.75C18.375 13.75 18.0313 14.0625 18.0313 14.4687V17.25C18.0313 17.5312 17.8125 17.75 17.5312 17.75H2.46875C2.1875 17.75 1.96875 17.5312 1.96875 17.25V14.4687C1.96875 14.0625 1.625 13.75 1.25 13.75C0.875 13.75 0.53125 14.0625 0.53125 14.4687V17.25C0.53125 18.3125 1.375 19.1562 2.4375 19.1562H17.5312C18.5938 19.1562 19.4375 18.3125 19.4375 17.25V14.4687C19.4688 14.0625 19.125 13.75 18.75 13.75Z"
                              fill=""
                            ></path>
                            <path
                              d="M5.96875 6.46875L9.3125 3.21875V14.0313C9.3125 14.4063 9.625 14.75 10.0312 14.75C10.4062 14.75 10.75 14.4375 10.75 14.0313V3.21875L14.0937 6.46875C14.2187 6.59375 14.4062 6.65625 14.5938 6.65625C14.7812 6.65625 14.9688 6.59375 15.0938 6.4375C15.375 6.15625 15.3438 5.71875 15.0938 5.4375L10.5 1.0625C10.2187 0.8125 9.78125 0.8125 9.53125 1.0625L4.96875 5.46875C4.6875 5.75 4.6875 6.1875 4.96875 6.46875C5.25 6.71875 5.6875 6.75 5.96875 6.46875Z"
                              fill=""
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_1867_11682">
                              <rect width="20" height="20" fill="white"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <span className="font-medium text-black dark:text-white">
                      Drop files here to upload
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* ========= */}
      </div>
    </Layout>
  );
};

export default ProFormElement;
