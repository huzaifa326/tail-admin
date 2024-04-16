import Layout from "../Layout";
import { Link } from "react-router-dom";

const ResetPass = () => {
  return (
    <Layout>
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-[#F1F5F9] dark:bg-[#1A222C]">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-[26px] leading-[30px] font-bold text-black dark:text-white">
            Reset Password
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
              <li className="font-medium text-primary">reset Password</li>
            </ol>
          </nav>
        </div>
        {/* ========= */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="flex flex-wrap items-center">
            <div className="hidden w-full border-stroke dark:border-strokedark xl:block xl:w-1/2 xl:border-r-2">
              <div className="px-[6.5rem] py-[4.375rem] text-center">
                <Link className="mb-[1.375rem] inline-block" to="/">
                  <img
                    className="hidden dark:block"
                    src={`${process.env.PUBLIC_URL}/images/side-bar/logo.svg`}
                    alt="Logo"
                  />
                  <img
                    className="dark:hidden"
                    src={`${process.env.PUBLIC_URL}/images/side-bar/logo-light.svg`}
                    alt="Logo"
                  />
                </Link>

                <p className="font-medium 2xl:px-20 text-general-gray dark:text-dark-general-gray ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  suspendisse.
                </p>

                <span className="mt-[3.75rem] inline-block">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/authentication/illustration-03.svg`}
                    alt="illustration"
                  />
                </span>
              </div>
            </div>
            <div className="w-full xl:w-1/2">
              <div className="w-full p-4 sm:p-[3.125rem] xl:p-[4.375rem]">
                <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-[33px] leading-[45px]  ">
                  Reset Password
                </h2>
                <p className="mb-[1.875rem] font-medium text-general-gray dark:text-dark-general-gray">
                  Enter your email address to receive a password reset link.
                </p>

                <form>
                  <div className="mb-6">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />

                      <span className="absolute right-4 top-4">
                        <svg
                          className="fill-current"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.5">
                            <path
                              d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                              fill=""
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div>
                    <input
                      type="submit"
                      value="Send Password Reset Link"
                      className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 font-medium text-white transition hover:bg-opacity-90"
                    />
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

export default ResetPass;
