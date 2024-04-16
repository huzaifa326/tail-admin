import Layout from "../Layout";
import { Link } from "react-router-dom";
import { useState } from "react";

const FormLayout = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <Layout>
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-[#F1F5F9] dark:bg-[#1A222C]">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-[26px] leading-[30px] font-bold text-black dark:text-white">
            Form Laoyut
          </h2>

          <nav>
            <ol className="flex items-center gap-2">
              <li className="text-general-gray dark:text-dark-general-gray">
                <Link  to="/" className="font-medium text-general-gray dark:text-dark-general-gray">
                  Dashboard /
                </Link>
              </li>
              <li className="font-medium text-primary">Form Laoyut</li>
            </ol>
          </nav>
        </div>
        {/* ========= */}
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
          <div className="flex flex-col gap-9">
            {/* <!-- Contact Form --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-[1.625rem] py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Contact Form
                </h3>
              </div>
              <form action="#">
                <div className="p-[1.625rem]">
                  <div className="mb-[1.125rem] flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        First name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your first name"
                        className="dark:border-strokedark w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
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

                  <div className="mb-[1.125rem]">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Email <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="dark:border-strokedark w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="mb-[1.125rem]">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Select subject"
                      className="dark:border-strokedark w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="mb-[1.125rem]">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Subject
                    </label>
                    <div
                      x-data="{ isOptionSelected: false }"
                      className="relative z-20 bg-transparent dark:bg-form-input text-general-gray dark:text-dark-general-gray"
                    >
                      <select className=" dark:border-strokedark relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary  dark:bg-[#1C2434] dark:focus:border-primary">
                        <option value="" className="text-body">
                          Type your subject
                        </option>
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

          <div className="flex flex-col gap-9">
            {/* <!-- Sign In Form --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-[1.625rem] py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Sign In Form
                </h3>
              </div>
              <form action="#">
                <div className="p-[1.625rem]">
                  <div className="mb-[1.125rem]">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="dark:border-strokedark w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter password"
                      autocomplete="new-password"
                      className="dark:border-strokedark w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="mb-[1.375rem] mt-5 flex items-center justify-between">
                      <div className="relative pt-0.5">
                        <label className="flex items-center gap-[10px] cursor-pointer text-general-gray dark:text-dark-general-gray ">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            className=" w-[20px] h-[30px] "
                          />
                          Remember me
                        </label>
                      </div>

                    <Link to="#" className="text-sm text-primary hover:underline">
                      Forget password?
                    </Link>
                  </div>

                  <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                    Sign In
                  </button>
                </div>
              </form>
            </div>

            {/* <!-- Sign Up Form --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-[1.625rem] py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Sign Up Form
                </h3>
              </div>
              <form action="#">
                <div className="p-[1.625rem]">
                  <div className="mb-[1.125rem]">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="dark:border-strokedark w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="mb-[1.125rem]">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="dark:border-strokedark w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="mb-[1.125rem]">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter password"
                      autocomplete="password"
                      className="dark:border-strokedark w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="mb-[1.375rem]">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Re-type Password
                    </label>
                    <input
                      type="password"
                      placeholder="Re-enter password"
                      autocomplete="re-enter-password"
                      className="dark:border-strokedark w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* ========= */}
      </div>
    </Layout>
  );
};

export default FormLayout;
