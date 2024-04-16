import Layout from "../Layout";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";

const ProFormLayout = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <Layout>
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-[#F1F5F9] dark:bg-[#1A222C]">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-[26px] leading-[30px] font-bold text-black dark:text-white">
            Pro Form Layout
          </h2>

          <nav>
            <ol className="flex items-center gap-2">
              <li className="text-general-gray dark:text-dark-general-gray">
                <NavLink  to="/" className="font-medium text-general-gray dark:text-dark-general-gray">
                  Dashboard /
                </NavLink>
              </li>
              <li className="font-medium text-primary">Pro Form Layout</li>
            </ol>
          </nav>
        </div>
        {/* ========= */}
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
          <div className="flex flex-col gap-9">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-[1.625rem] py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Contact Form 2
                </h3>
              </div>
              <form action="">
                <div className="p-[1.625rem]">
                  <div className="mb-5 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        First name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your first name"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary dark:border-strokedark"
                      />
                    </div>

                    <div className="w-full xl:w-1/2">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Last name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your last name"
                        className="dark:border-strokedark w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="mb-[1.375rem] flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="yourmail@gmail.com"
                        className="dark:border-strokedark w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>

                    <div className="w-full xl:w-1/2">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Phone
                      </label>
                      <input
                        type="text"
                        placeholder="(321) 5555-0115"
                        className="dark:border-strokedark w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                  </div>
                  {/* --- */}
                  <div className="mb-[1.375rem]">
                    <label
                      for="roleSelect"
                      className="mb-[1.125rem] block text-sm font-medium text-black dark:text-white"
                    >
                      Select option
                    </label>
                    <div className=" flex flex-wrap items-center gap-[1.375rem] ">
                      <div>
                        <label className="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white">
                          <input
                            type="radio"
                            value="option1"
                            checked={selectedOption === "option1"}
                            onChange={handleOptionChange}
                            className="form-radio text-indigo-600 h-4 w-4"
                          />
                          Graphics Design
                        </label>
                      </div>
                      <div>
                        <label className="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white">
                          <input
                            type="radio"
                            value="option2"
                            checked={selectedOption === "option2"}
                            onChange={handleOptionChange}
                            className="form-radio text-indigo-600 h-4 w-4"
                          />
                          Web Development
                        </label>
                      </div>
                      <div>
                        <label className="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white">
                          <input
                            type="radio"
                            value="option3"
                            checked={selectedOption === "option3"}
                            onChange={handleOptionChange}
                            className="form-radio text-indigo-600 h-4 w-4"
                          />
                          Logo Design
                        </label>
                      </div>
                      <div>
                        <label className="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white">
                          <input
                            type="radio"
                            value="option4"
                            checked={selectedOption === "option4"}
                            onChange={handleOptionChange}
                            className="form-radio text-indigo-600 h-4 w-4"
                          />
                          Other
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* --- */}
                  <div className="mb-6">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Message
                    </label>
                    <textarea
                      rows="6"
                      placeholder="Type your message"
                      className="dark:border-strokedark w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    ></textarea>
                  </div>
                  <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* ========= */}
          <div className="flex flex-col gap-9">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-[1.625rem] py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Survey Form
                </h3>
              </div>
              <form action="">
                <div className="p-[1.625rem]">
                  <div className="mb-5">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="dark:border-strokedark w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div className="mb-5">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="dark:border-strokedark w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div className="mb-5">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Age
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your age"
                      className="dark:border-strokedark w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  {/* ---- */}
                  <div className="mb-[1.375rem]">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Which option best describes you?
                    </label>
                    <div
                      x-data="{ isOptionSelected: false }"
                      className="relative z-20 bg-transparent dark:bg-form-input"
                    >
                      <select className="dark:border-strokedark relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                        <option value="" className="text-body">
                          Type your subject
                        </option>
                        <option value="" className="text-body">
                          Student
                        </option>
                        <option value="" className="text-body">
                          UX/UI Designer
                        </option>
                        <option value="" className="text-body">
                          Web Developer
                        </option>
                      </select>
                      <span className="absolute right-4 top-1/2 z-30 -translate-y-1/2">
                        <svg
                          className="fill-current"
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
                              fill=""
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="mb-[1.375rem]">
                    <label className="mb-[1.125rem] block text-sm font-medium text-black dark:text-white">
                      Would you recommend our site to a friend?
                    </label>
                    <div className="flex flex-col gap-2.5">
                      <div>
                        <label className="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white">
                          <input
                            type="radio"
                            value="option4"
                            checked={selectedOption === "option4"}
                            onChange={handleOptionChange}
                            className="form-radio text-indigo-600 h-4 w-4"
                          />
                          Yes
                        </label>
                      </div>
                      <div>
                        <label className="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white">
                          <input
                            type="radio"
                            value="option5"
                            checked={selectedOption === "option5"}
                            onChange={handleOptionChange}
                            className="form-radio text-indigo-600 h-4 w-4"
                          />
                          No
                        </label>
                      </div>
                      <div>
                        <label className="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white">
                          <input
                            type="radio"
                            value="option6"
                            checked={selectedOption === "option6"}
                            onChange={handleOptionChange}
                            className="form-radio text-indigo-600 h-4 w-4"
                          />
                          May be
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="mb-[1.125rem] block text-sm font-medium text-black dark:text-white">
                      Which languages & frameworks you know?
                    </label>
                    <div className="flex flex-col gap-2.5">
                      <div>
                        <label className="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white">
                          <input
                            type="radio"
                            value="option7"
                            checked={selectedOption === "option7"}
                            onChange={handleOptionChange}
                            className="form-radio text-indigo-600 h-4 w-4"
                          />
                          C
                        </label>
                      </div>
                      <div>
                        <label className="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white">
                          <input
                            type="radio"
                            value="option8"
                            checked={selectedOption === "option8"}
                            onChange={handleOptionChange}
                            className="form-radio text-indigo-600 h-4 w-4"
                          />
                          C++
                        </label>
                      </div>
                      <div>
                        <label className="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white">
                          <input
                            type="radio"
                            value="option9"
                            checked={selectedOption === "option9"}
                            onChange={handleOptionChange}
                            className="form-radio text-indigo-600 h-4 w-4"
                          />
                          Java
                        </label>
                      </div>
                      <div>
                        <label className="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white">
                          <input
                            type="radio"
                            value="option10"
                            checked={selectedOption === "option10"}
                            onChange={handleOptionChange}
                            className="form-radio text-indigo-600 h-4 w-4"
                          />
                          Pyhton
                        </label>
                      </div>
                      <div>
                        <label className="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white">
                          <input
                            type="radio"
                            value="option11"
                            checked={selectedOption === "option11"}
                            onChange={handleOptionChange}
                            className="form-radio text-indigo-600 h-4 w-4"
                          />
                          Javascript
                        </label>
                      </div>
                      <div>
                        <label className="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white">
                          <input
                            type="radio"
                            value="option12"
                            checked={selectedOption === "option12"}
                            onChange={handleOptionChange}
                            className="form-radio text-indigo-600 h-4 w-4"
                          />
                          React
                        </label>
                      </div>
                      <div>
                        <label className="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white">
                          <input
                            type="radio"
                            value="option13"
                            checked={selectedOption === "option13"}
                            onChange={handleOptionChange}
                            className="form-radio text-indigo-600 h-4 w-4"
                          />
                          Angular
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* ---- */}
                  <div className="mb-[1.375rem]">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Any comments or suggestions?
                    </label>
                    <textarea
                      rows="6"
                      placeholder="Type here"
                      className="dark:border-strokedark w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    ></textarea>
                  </div>
                  <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* ========= */}
        </div>
        {/* ========= */}
      </div>
    </Layout>
  );
};

export default ProFormLayout;
