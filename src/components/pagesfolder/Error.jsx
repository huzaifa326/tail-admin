import Layout from "../Layout";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Layout>
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-[#F1F5F9] dark:bg-[#1A222C]">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-[26px] leading-[30px] font-bold text-black dark:text-white">
            Error Page
          </h2>

          <nav>
            <ol className="flex items-center gap-2">
              <li className="text-general-gray dark:text-dark-general-gray">
                <Link
                  className="font-medium text-general-gray dark:text-dark-general-gray "
                  to="/"
                >
                  Dashboard /
                </Link>
              </li>
              <li className="font-medium text-primary">Error Page</li>
            </ol>
          </nav>
        </div>
        {/* ========= */}
        <div className="rounded-sm border border-stroke bg-white px-5 py-10 shadow-default dark:border-strokedark dark:bg-boxdark sm:py-20">
          <div className="mx-auto max-w-[410px]">
            <img
             src={`${process.env.PUBLIC_URL}/images/pages/illustration-01.svg`}
              alt="illustration"
            />

            <div className="mt-[1.875rem] text-center">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white">
                Sorry, the page can’t be found
              </h2>
              <p className="font-medium text-general-gray dark:text-dark-general-gray">
                The page you were looking for appears to have been moved,
                deleted or does not exist.
              </p>
              <Link
                to="/"
                className="mt-[1.875rem] inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-white hover:bg-opacity-90"
              >
                <svg
                  className="fill-current"
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.7492 6.38125H2.73984L7.52109 1.51562C7.77422 1.2625 7.77422 0.86875 7.52109 0.615625C7.26797 0.3625 6.87422 0.3625 6.62109 0.615625L0.799219 6.52187C0.546094 6.775 0.546094 7.16875 0.799219 7.42188L6.62109 13.3281C6.73359 13.4406 6.90234 13.525 7.07109 13.525C7.23984 13.525 7.38047 13.4687 7.52109 13.3562C7.77422 13.1031 7.77422 12.7094 7.52109 12.4563L2.76797 7.64687H14.7492C15.0867 7.64687 15.368 7.36562 15.368 7.02812C15.368 6.6625 15.0867 6.38125 14.7492 6.38125Z"
                    fill=""
                  ></path>
                </svg>
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
        {/* ========= */}
      </div>
    </Layout>
  );
};

export default Error;
