import Layout from "../Layout";
import { Link } from "react-router-dom";
const Team = () => {
  return (
    <Layout>
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-[#F1F5F9] dark:bg-[#1A222C]">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-[26px] leading-[30px] font-bold text-black dark:text-white">
            Team
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
              <li className="font-medium text-primary">Team</li>
            </ol>
          </nav>
        </div>
        {/* ========= */}
        <div className="flex flex-col gap-[1.875rem]">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-9">
              <h3 className="font-medium text-black dark:text-white">
                Style 1
              </h3>
            </div>

            <div className="p-4 sm:p-6 xl:p-9">
              <div className="grid grid-cols-1 gap-15 py-4 sm:grid-cols-2 sm:py-6 xl:grid-cols-4 xl:py-[1.875rem] 2xl:py-15">
                <div>
                  <div className="relative z-1 mx-auto h-[170px] w-full max-w-[170px] rounded-full">
                    <img
                      className="rounded-full relative z-[2]"
                      src={`${process.env.PUBLIC_URL}/images/team/team-01.png`}
                      alt="team"
                    />

                    <span className="absolute left-0 top-0 z-[1]">
                      <svg
                        width="71"
                        height="82"
                        viewBox="0 0 71 82"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="1.29337"
                          cy="80.7066"
                          r="1.29337"
                          transform="rotate(-90 1.29337 80.7066)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="12.6762"
                          cy="80.7066"
                          r="1.29337"
                          transform="rotate(-90 12.6762 80.7066)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="24.059"
                          cy="80.7066"
                          r="1.29337"
                          transform="rotate(-90 24.059 80.7066)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="35.4379"
                          cy="80.7066"
                          r="1.29337"
                          transform="rotate(-90 35.4379 80.7066)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="46.8207"
                          cy="80.7066"
                          r="1.29337"
                          transform="rotate(-90 46.8207 80.7066)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="68.809"
                          cy="80.7066"
                          r="1.29337"
                          transform="rotate(-90 68.809 80.7066)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="57.9457"
                          cy="80.7066"
                          r="1.29337"
                          transform="rotate(-90 57.9457 80.7066)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="1.29337"
                          cy="69.3249"
                          r="1.29337"
                          transform="rotate(-90 1.29337 69.3249)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="12.6762"
                          cy="69.3249"
                          r="1.29337"
                          transform="rotate(-90 12.6762 69.3249)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="24.059"
                          cy="69.3249"
                          r="1.29337"
                          transform="rotate(-90 24.059 69.3249)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="35.4379"
                          cy="69.3249"
                          r="1.29337"
                          transform="rotate(-90 35.4379 69.3249)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="46.8207"
                          cy="69.325"
                          r="1.29337"
                          transform="rotate(-90 46.8207 69.325)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="68.809"
                          cy="69.325"
                          r="1.29337"
                          transform="rotate(-90 68.809 69.325)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="57.9418"
                          cy="69.325"
                          r="1.29337"
                          transform="rotate(-90 57.9418 69.325)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="1.29337"
                          cy="57.9433"
                          r="1.29337"
                          transform="rotate(-90 1.29337 57.9433)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="1.29337"
                          cy="24.0568"
                          r="1.29337"
                          transform="rotate(-90 1.29337 24.0568)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="12.6762"
                          cy="57.9433"
                          r="1.29337"
                          transform="rotate(-90 12.6762 57.9433)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="12.6762"
                          cy="24.0568"
                          r="1.29337"
                          transform="rotate(-90 12.6762 24.0568)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="24.059"
                          cy="57.9433"
                          r="1.29337"
                          transform="rotate(-90 24.059 57.9433)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="24.059"
                          cy="24.0568"
                          r="1.29337"
                          transform="rotate(-90 24.059 24.0568)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="35.4379"
                          cy="57.9433"
                          r="1.29337"
                          transform="rotate(-90 35.4379 57.9433)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="35.4379"
                          cy="24.0568"
                          r="1.29337"
                          transform="rotate(-90 35.4379 24.0568)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="46.8207"
                          cy="57.9431"
                          r="1.29337"
                          transform="rotate(-90 46.8207 57.9431)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="46.8207"
                          cy="24.0567"
                          r="1.29337"
                          transform="rotate(-90 46.8207 24.0567)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="68.809"
                          cy="57.9431"
                          r="1.29337"
                          transform="rotate(-90 68.809 57.9431)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="68.809"
                          cy="24.0567"
                          r="1.29337"
                          transform="rotate(-90 68.809 24.0567)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="57.9418"
                          cy="57.9431"
                          r="1.29337"
                          transform="rotate(-90 57.9418 57.9431)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="57.9457"
                          cy="24.0567"
                          r="1.29337"
                          transform="rotate(-90 57.9457 24.0567)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="1.29337"
                          cy="46.5615"
                          r="1.29337"
                          transform="rotate(-90 1.29337 46.5615)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="1.29337"
                          cy="12.675"
                          r="1.29337"
                          transform="rotate(-90 1.29337 12.675)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="12.6762"
                          cy="46.5615"
                          r="1.29337"
                          transform="rotate(-90 12.6762 46.5615)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="12.6762"
                          cy="12.675"
                          r="1.29337"
                          transform="rotate(-90 12.6762 12.675)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="24.059"
                          cy="46.5615"
                          r="1.29337"
                          transform="rotate(-90 24.059 46.5615)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="24.059"
                          cy="12.675"
                          r="1.29337"
                          transform="rotate(-90 24.059 12.675)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="35.4379"
                          cy="46.5615"
                          r="1.29337"
                          transform="rotate(-90 35.4379 46.5615)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="35.4379"
                          cy="12.6751"
                          r="1.29337"
                          transform="rotate(-90 35.4379 12.6751)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="46.8207"
                          cy="46.5615"
                          r="1.29337"
                          transform="rotate(-90 46.8207 46.5615)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="46.8207"
                          cy="12.6751"
                          r="1.29337"
                          transform="rotate(-90 46.8207 12.6751)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="68.809"
                          cy="46.5615"
                          r="1.29337"
                          transform="rotate(-90 68.809 46.5615)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="68.809"
                          cy="12.6751"
                          r="1.29337"
                          transform="rotate(-90 68.809 12.6751)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="57.9418"
                          cy="46.5615"
                          r="1.29337"
                          transform="rotate(-90 57.9418 46.5615)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="57.9457"
                          cy="12.6751"
                          r="1.29337"
                          transform="rotate(-90 57.9457 12.6751)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="1.29337"
                          cy="35.1798"
                          r="1.29337"
                          transform="rotate(-90 1.29337 35.1798)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="1.29337"
                          cy="1.2933"
                          r="1.29337"
                          transform="rotate(-90 1.29337 1.2933)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="12.6762"
                          cy="35.1798"
                          r="1.29337"
                          transform="rotate(-90 12.6762 35.1798)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="12.6762"
                          cy="1.2933"
                          r="1.29337"
                          transform="rotate(-90 12.6762 1.2933)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="24.059"
                          cy="35.1798"
                          r="1.29337"
                          transform="rotate(-90 24.059 35.1798)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="24.059"
                          cy="1.29342"
                          r="1.29337"
                          transform="rotate(-90 24.059 1.29342)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="35.4379"
                          cy="35.1798"
                          r="1.29337"
                          transform="rotate(-90 35.4379 35.1798)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="35.4379"
                          cy="1.29342"
                          r="1.29337"
                          transform="rotate(-90 35.4379 1.29342)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="46.8207"
                          cy="35.18"
                          r="1.29337"
                          transform="rotate(-90 46.8207 35.18)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="46.8207"
                          cy="1.29354"
                          r="1.29337"
                          transform="rotate(-90 46.8207 1.29354)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="68.809"
                          cy="35.18"
                          r="1.29337"
                          transform="rotate(-90 68.809 35.18)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="68.809"
                          cy="1.29354"
                          r="1.29337"
                          transform="rotate(-90 68.809 1.29354)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="57.9457"
                          cy="35.18"
                          r="1.29337"
                          transform="rotate(-90 57.9457 35.18)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="57.9457"
                          cy="1.29354"
                          r="1.29337"
                          transform="rotate(-90 57.9457 1.29354)"
                          fill="#3C50E0"
                        ></circle>
                      </svg>
                    </span>

                    <span className="absolute bottom-0 right-0 -z-1">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.5 21.5L0.505701 21.5C0.767606 10.023 10.023 0.767604 21.5 0.505697L21.5 21.5Z"
                          stroke="#10B981"
                        ></path>
                      </svg>
                    </span>
                  </div>

                  <div className="my-[1.375rem] text-center">
                    <h4 className="mb-0.5 text-lg font-bold text-black dark:text-white">
                      Adveen Desuza
                    </h4>
                    <p className="text-xs font-medium text-general-gray dark:text-dark-general-gray ">
                      Ui Designer
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-[1.375rem]">
                    <Link to="#" className="text-bodydark2 hover:text-primary">
                      <svg
                        className="fill-current"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.8125 8.0625H13.0625H12.4375V7.4375V5.5V4.875H13.0625H14.375C14.7188 4.875 15 4.625 15 4.25V0.9375C15 0.59375 14.75 0.3125 14.375 0.3125H12.0938C9.625 0.3125 7.90625 2.0625 7.90625 4.65625V7.375V8H7.28125H5.15625C4.71875 8 4.3125 8.34375 4.3125 8.84375V11.0938C4.3125 11.5312 4.65625 11.9375 5.15625 11.9375H7.21875H7.84375V12.5625V18.8438C7.84375 19.2812 8.1875 19.6875 8.6875 19.6875H11.625C11.8125 19.6875 11.9688 19.5938 12.0938 19.4688C12.2188 19.3438 12.3125 19.125 12.3125 18.9375V12.5938V11.9688H12.9688H14.375C14.7812 11.9688 15.0938 11.7188 15.1562 11.3438V11.3125V11.2812L15.5938 9.125C15.625 8.90625 15.5938 8.65625 15.4062 8.40625C15.3438 8.25 15.0625 8.09375 14.8125 8.0625Z"
                          fill=""
                        ></path>
                      </svg>
                    </Link>

                    <Link to="#" className="text-bodydark2 hover:text-primary">
                      <svg
                        className="fill-current"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.2955 5.37507C18.4069 5.24521 18.2616 5.07552 18.0968 5.1363C17.729 5.27197 17.3928 5.36147 16.8956 5.41671C17.5071 5.07621 17.7915 4.58953 18.0229 3.99345C18.0786 3.84967 17.9104 3.71921 17.7655 3.78789C17.1769 4.06697 16.5418 4.27402 15.874 4.39635C15.2139 3.74216 14.273 3.33337 13.2321 3.33337C11.2335 3.33337 9.61272 4.84068 9.61272 6.69935C9.61272 6.96322 9.64505 7.22024 9.70605 7.46633C6.83301 7.33247 4.27114 6.10345 2.49128 4.21888C2.36929 4.08972 2.14793 4.10687 2.07198 4.2644C1.86934 4.6847 1.75638 5.15095 1.75638 5.64184C1.75638 6.80941 2.39514 7.83957 3.36616 8.44321C2.93078 8.43012 2.51442 8.34529 2.13072 8.20132C1.9439 8.13124 1.72975 8.25441 1.75485 8.44279C1.94754 9.88937 3.11873 11.0828 4.63046 11.3648C4.32688 11.442 4.00713 11.483 3.67635 11.483C3.59615 11.483 3.51664 11.4805 3.43786 11.4757C3.23738 11.4633 3.07445 11.6426 3.1604 11.8142C3.72749 12.946 4.952 13.7362 6.37696 13.7608C5.13838 14.6638 3.57785 15.2018 1.88207 15.2018C1.67298 15.2018 1.58328 15.4706 1.76878 15.5618C3.20147 16.266 4.83302 16.6667 6.56661 16.6667C13.2241 16.6667 16.864 11.5378 16.864 7.08967C16.864 6.94407 16.8604 6.79847 16.8538 6.65423C17.3941 6.29121 17.8799 5.85953 18.2955 5.37507Z"
                          fill=""
                        ></path>
                      </svg>
                    </Link>

                    <Link to="#" className="text-bodydark2 hover:text-primary">
                      <svg
                        className="fill-current"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.0284 13.1184C11.7506 13.1184 13.1467 11.7223 13.1467 10.0001C13.1467 8.27794 11.7506 6.88184 10.0284 6.88184C8.30626 6.88184 6.91016 8.27794 6.91016 10.0001C6.91016 11.7223 8.30626 13.1184 10.0284 13.1184Z"
                          fill=""
                        ></path>
                        <path
                          d="M13.4153 1.66663H6.58732C3.87227 1.66663 1.66797 3.87093 1.66797 6.58598V13.3602C1.66797 16.129 3.87227 18.3333 6.58732 18.3333H13.3615C16.1303 18.3333 18.3346 16.129 18.3346 13.4139V6.58598C18.3346 3.87093 16.1303 1.66663 13.4153 1.66663ZM10.0282 14.086C7.74324 14.086 5.94216 12.2311 5.94216 9.99996C5.94216 7.76878 7.77012 5.91394 10.0282 5.91394C12.2594 5.91394 14.0873 7.76878 14.0873 9.99996C14.0873 12.2311 12.2862 14.086 10.0282 14.086ZM15.6733 6.29028C15.4045 6.58598 15.0013 6.74727 14.5443 6.74727C14.1411 6.74727 13.7379 6.58598 13.4153 6.29028C13.1196 5.99458 12.9583 5.61824 12.9583 5.16125C12.9583 4.70426 13.1196 4.3548 13.4153 4.03222C13.711 3.70964 14.0873 3.54835 14.5443 3.54835C14.9475 3.54835 15.3776 3.70964 15.6733 4.00534C15.9422 4.3548 16.1303 4.75802 16.1303 5.18813C16.1035 5.61824 15.9422 5.99458 15.6733 6.29028Z"
                          fill=""
                        ></path>
                        <path
                          d="M14.5709 4.51587C14.2215 4.51587 13.9258 4.81157 13.9258 5.16103C13.9258 5.51049 14.2215 5.80619 14.5709 5.80619C14.9204 5.80619 15.2161 5.51049 15.2161 5.16103C15.2161 4.81157 14.9473 4.51587 14.5709 4.51587Z"
                          fill=""
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>

                <div>
                  <div className="relative z-1 mx-auto h-[170px] w-full max-w-[170px] rounded-full">
                    <img
                      className="rounded-full relative z-[2]"
                      src={`${process.env.PUBLIC_URL}/images/team/team-02.png`}
                      alt="team"
                    />

                    <span className="absolute left-0 top-0 z-[2]">
                      <svg
                        width="71"
                        height="82"
                        viewBox="0 0 71 82"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="1.29337"
                          cy="80.7066"
                          r="1.29337"
                          transform="rotate(-90 1.29337 80.7066)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="12.6762"
                          cy="80.7066"
                          r="1.29337"
                          transform="rotate(-90 12.6762 80.7066)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="24.059"
                          cy="80.7066"
                          r="1.29337"
                          transform="rotate(-90 24.059 80.7066)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="35.4379"
                          cy="80.7066"
                          r="1.29337"
                          transform="rotate(-90 35.4379 80.7066)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="46.8207"
                          cy="80.7066"
                          r="1.29337"
                          transform="rotate(-90 46.8207 80.7066)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="68.809"
                          cy="80.7066"
                          r="1.29337"
                          transform="rotate(-90 68.809 80.7066)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="57.9457"
                          cy="80.7066"
                          r="1.29337"
                          transform="rotate(-90 57.9457 80.7066)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="1.29337"
                          cy="69.3249"
                          r="1.29337"
                          transform="rotate(-90 1.29337 69.3249)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="12.6762"
                          cy="69.3249"
                          r="1.29337"
                          transform="rotate(-90 12.6762 69.3249)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="24.059"
                          cy="69.3249"
                          r="1.29337"
                          transform="rotate(-90 24.059 69.3249)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="35.4379"
                          cy="69.3249"
                          r="1.29337"
                          transform="rotate(-90 35.4379 69.3249)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="46.8207"
                          cy="69.325"
                          r="1.29337"
                          transform="rotate(-90 46.8207 69.325)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="68.809"
                          cy="69.325"
                          r="1.29337"
                          transform="rotate(-90 68.809 69.325)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="57.9418"
                          cy="69.325"
                          r="1.29337"
                          transform="rotate(-90 57.9418 69.325)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="1.29337"
                          cy="57.9433"
                          r="1.29337"
                          transform="rotate(-90 1.29337 57.9433)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="1.29337"
                          cy="24.0568"
                          r="1.29337"
                          transform="rotate(-90 1.29337 24.0568)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="12.6762"
                          cy="57.9433"
                          r="1.29337"
                          transform="rotate(-90 12.6762 57.9433)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="12.6762"
                          cy="24.0568"
                          r="1.29337"
                          transform="rotate(-90 12.6762 24.0568)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="24.059"
                          cy="57.9433"
                          r="1.29337"
                          transform="rotate(-90 24.059 57.9433)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="24.059"
                          cy="24.0568"
                          r="1.29337"
                          transform="rotate(-90 24.059 24.0568)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="35.4379"
                          cy="57.9433"
                          r="1.29337"
                          transform="rotate(-90 35.4379 57.9433)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="35.4379"
                          cy="24.0568"
                          r="1.29337"
                          transform="rotate(-90 35.4379 24.0568)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="46.8207"
                          cy="57.9431"
                          r="1.29337"
                          transform="rotate(-90 46.8207 57.9431)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="46.8207"
                          cy="24.0567"
                          r="1.29337"
                          transform="rotate(-90 46.8207 24.0567)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="68.809"
                          cy="57.9431"
                          r="1.29337"
                          transform="rotate(-90 68.809 57.9431)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="68.809"
                          cy="24.0567"
                          r="1.29337"
                          transform="rotate(-90 68.809 24.0567)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="57.9418"
                          cy="57.9431"
                          r="1.29337"
                          transform="rotate(-90 57.9418 57.9431)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="57.9457"
                          cy="24.0567"
                          r="1.29337"
                          transform="rotate(-90 57.9457 24.0567)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="1.29337"
                          cy="46.5615"
                          r="1.29337"
                          transform="rotate(-90 1.29337 46.5615)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="1.29337"
                          cy="12.675"
                          r="1.29337"
                          transform="rotate(-90 1.29337 12.675)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="12.6762"
                          cy="46.5615"
                          r="1.29337"
                          transform="rotate(-90 12.6762 46.5615)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="12.6762"
                          cy="12.675"
                          r="1.29337"
                          transform="rotate(-90 12.6762 12.675)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="24.059"
                          cy="46.5615"
                          r="1.29337"
                          transform="rotate(-90 24.059 46.5615)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="24.059"
                          cy="12.675"
                          r="1.29337"
                          transform="rotate(-90 24.059 12.675)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="35.4379"
                          cy="46.5615"
                          r="1.29337"
                          transform="rotate(-90 35.4379 46.5615)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="35.4379"
                          cy="12.6751"
                          r="1.29337"
                          transform="rotate(-90 35.4379 12.6751)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="46.8207"
                          cy="46.5615"
                          r="1.29337"
                          transform="rotate(-90 46.8207 46.5615)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="46.8207"
                          cy="12.6751"
                          r="1.29337"
                          transform="rotate(-90 46.8207 12.6751)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="68.809"
                          cy="46.5615"
                          r="1.29337"
                          transform="rotate(-90 68.809 46.5615)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="68.809"
                          cy="12.6751"
                          r="1.29337"
                          transform="rotate(-90 68.809 12.6751)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="57.9418"
                          cy="46.5615"
                          r="1.29337"
                          transform="rotate(-90 57.9418 46.5615)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="57.9457"
                          cy="12.6751"
                          r="1.29337"
                          transform="rotate(-90 57.9457 12.6751)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="1.29337"
                          cy="35.1798"
                          r="1.29337"
                          transform="rotate(-90 1.29337 35.1798)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="1.29337"
                          cy="1.2933"
                          r="1.29337"
                          transform="rotate(-90 1.29337 1.2933)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="12.6762"
                          cy="35.1798"
                          r="1.29337"
                          transform="rotate(-90 12.6762 35.1798)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="12.6762"
                          cy="1.2933"
                          r="1.29337"
                          transform="rotate(-90 12.6762 1.2933)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="24.059"
                          cy="35.1798"
                          r="1.29337"
                          transform="rotate(-90 24.059 35.1798)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="24.059"
                          cy="1.29342"
                          r="1.29337"
                          transform="rotate(-90 24.059 1.29342)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="35.4379"
                          cy="35.1798"
                          r="1.29337"
                          transform="rotate(-90 35.4379 35.1798)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="35.4379"
                          cy="1.29342"
                          r="1.29337"
                          transform="rotate(-90 35.4379 1.29342)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="46.8207"
                          cy="35.18"
                          r="1.29337"
                          transform="rotate(-90 46.8207 35.18)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="46.8207"
                          cy="1.29354"
                          r="1.29337"
                          transform="rotate(-90 46.8207 1.29354)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="68.809"
                          cy="35.18"
                          r="1.29337"
                          transform="rotate(-90 68.809 35.18)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="68.809"
                          cy="1.29354"
                          r="1.29337"
                          transform="rotate(-90 68.809 1.29354)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="57.9457"
                          cy="35.18"
                          r="1.29337"
                          transform="rotate(-90 57.9457 35.18)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="57.9457"
                          cy="1.29354"
                          r="1.29337"
                          transform="rotate(-90 57.9457 1.29354)"
                          fill="#3C50E0"
                        ></circle>
                      </svg>
                    </span>

                    <span className="absolute bottom-0 right-0 -z-1">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.5 21.5L0.505701 21.5C0.767606 10.023 10.023 0.767604 21.5 0.505697L21.5 21.5Z"
                          stroke="#10B981"
                        ></path>
                      </svg>
                    </span>
                  </div>

                  <div className="my-[1.375rem] text-center">
                    <h4 className="mb-0.5 text-lg font-bold text-black dark:text-white">
                      Jezmin uniya
                    </h4>
                    <p className="text-xs font-medium text-general-gray dark:text-dark-general-gray ">
                      Product Designer
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-[1.375rem]">
                    <Link to="#" className="text-bodydark2 hover:text-primary">
                      <svg
                        className="fill-current"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.8125 8.0625H13.0625H12.4375V7.4375V5.5V4.875H13.0625H14.375C14.7188 4.875 15 4.625 15 4.25V0.9375C15 0.59375 14.75 0.3125 14.375 0.3125H12.0938C9.625 0.3125 7.90625 2.0625 7.90625 4.65625V7.375V8H7.28125H5.15625C4.71875 8 4.3125 8.34375 4.3125 8.84375V11.0938C4.3125 11.5312 4.65625 11.9375 5.15625 11.9375H7.21875H7.84375V12.5625V18.8438C7.84375 19.2812 8.1875 19.6875 8.6875 19.6875H11.625C11.8125 19.6875 11.9688 19.5938 12.0938 19.4688C12.2188 19.3438 12.3125 19.125 12.3125 18.9375V12.5938V11.9688H12.9688H14.375C14.7812 11.9688 15.0938 11.7188 15.1562 11.3438V11.3125V11.2812L15.5938 9.125C15.625 8.90625 15.5938 8.65625 15.4062 8.40625C15.3438 8.25 15.0625 8.09375 14.8125 8.0625Z"
                          fill=""
                        ></path>
                      </svg>
                    </Link>

                    <Link to="#" className="text-bodydark2 hover:text-primary">
                      <svg
                        className="fill-current"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.2955 5.37507C18.4069 5.24521 18.2616 5.07552 18.0968 5.1363C17.729 5.27197 17.3928 5.36147 16.8956 5.41671C17.5071 5.07621 17.7915 4.58953 18.0229 3.99345C18.0786 3.84967 17.9104 3.71921 17.7655 3.78789C17.1769 4.06697 16.5418 4.27402 15.874 4.39635C15.2139 3.74216 14.273 3.33337 13.2321 3.33337C11.2335 3.33337 9.61272 4.84068 9.61272 6.69935C9.61272 6.96322 9.64505 7.22024 9.70605 7.46633C6.83301 7.33247 4.27114 6.10345 2.49128 4.21888C2.36929 4.08972 2.14793 4.10687 2.07198 4.2644C1.86934 4.6847 1.75638 5.15095 1.75638 5.64184C1.75638 6.80941 2.39514 7.83957 3.36616 8.44321C2.93078 8.43012 2.51442 8.34529 2.13072 8.20132C1.9439 8.13124 1.72975 8.25441 1.75485 8.44279C1.94754 9.88937 3.11873 11.0828 4.63046 11.3648C4.32688 11.442 4.00713 11.483 3.67635 11.483C3.59615 11.483 3.51664 11.4805 3.43786 11.4757C3.23738 11.4633 3.07445 11.6426 3.1604 11.8142C3.72749 12.946 4.952 13.7362 6.37696 13.7608C5.13838 14.6638 3.57785 15.2018 1.88207 15.2018C1.67298 15.2018 1.58328 15.4706 1.76878 15.5618C3.20147 16.266 4.83302 16.6667 6.56661 16.6667C13.2241 16.6667 16.864 11.5378 16.864 7.08967C16.864 6.94407 16.8604 6.79847 16.8538 6.65423C17.3941 6.29121 17.8799 5.85953 18.2955 5.37507Z"
                          fill=""
                        ></path>
                      </svg>
                    </Link>

                    <Link to="#" className="text-bodydark2 hover:text-primary">
                      <svg
                        className="fill-current"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.0284 13.1184C11.7506 13.1184 13.1467 11.7223 13.1467 10.0001C13.1467 8.27794 11.7506 6.88184 10.0284 6.88184C8.30626 6.88184 6.91016 8.27794 6.91016 10.0001C6.91016 11.7223 8.30626 13.1184 10.0284 13.1184Z"
                          fill=""
                        ></path>
                        <path
                          d="M13.4153 1.66663H6.58732C3.87227 1.66663 1.66797 3.87093 1.66797 6.58598V13.3602C1.66797 16.129 3.87227 18.3333 6.58732 18.3333H13.3615C16.1303 18.3333 18.3346 16.129 18.3346 13.4139V6.58598C18.3346 3.87093 16.1303 1.66663 13.4153 1.66663ZM10.0282 14.086C7.74324 14.086 5.94216 12.2311 5.94216 9.99996C5.94216 7.76878 7.77012 5.91394 10.0282 5.91394C12.2594 5.91394 14.0873 7.76878 14.0873 9.99996C14.0873 12.2311 12.2862 14.086 10.0282 14.086ZM15.6733 6.29028C15.4045 6.58598 15.0013 6.74727 14.5443 6.74727C14.1411 6.74727 13.7379 6.58598 13.4153 6.29028C13.1196 5.99458 12.9583 5.61824 12.9583 5.16125C12.9583 4.70426 13.1196 4.3548 13.4153 4.03222C13.711 3.70964 14.0873 3.54835 14.5443 3.54835C14.9475 3.54835 15.3776 3.70964 15.6733 4.00534C15.9422 4.3548 16.1303 4.75802 16.1303 5.18813C16.1035 5.61824 15.9422 5.99458 15.6733 6.29028Z"
                          fill=""
                        ></path>
                        <path
                          d="M14.5709 4.51587C14.2215 4.51587 13.9258 4.81157 13.9258 5.16103C13.9258 5.51049 14.2215 5.80619 14.5709 5.80619C14.9204 5.80619 15.2161 5.51049 15.2161 5.16103C15.2161 4.81157 14.9473 4.51587 14.5709 4.51587Z"
                          fill=""
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>

                <div>
                  <div className="relative z-1 mx-auto h-[170px] w-full max-w-[170px] rounded-full">
                    <img
                      className="rounded-full relative z-[2]"
                      src={`${process.env.PUBLIC_URL}/images/team/team-03.png`}
                      alt="team"
                    />

                    <span className="absolute left-0 top-0 z-[1] ">
                      <svg
                        width="71"
                        height="82"
                        viewBox="0 0 71 82"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="1.29337"
                          cy="80.7066"
                          r="1.29337"
                          transform="rotate(-90 1.29337 80.7066)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="12.6762"
                          cy="80.7066"
                          r="1.29337"
                          transform="rotate(-90 12.6762 80.7066)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="24.059"
                          cy="80.7066"
                          r="1.29337"
                          transform="rotate(-90 24.059 80.7066)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="35.4379"
                          cy="80.7066"
                          r="1.29337"
                          transform="rotate(-90 35.4379 80.7066)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="46.8207"
                          cy="80.7066"
                          r="1.29337"
                          transform="rotate(-90 46.8207 80.7066)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="68.809"
                          cy="80.7066"
                          r="1.29337"
                          transform="rotate(-90 68.809 80.7066)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="57.9457"
                          cy="80.7066"
                          r="1.29337"
                          transform="rotate(-90 57.9457 80.7066)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="1.29337"
                          cy="69.3249"
                          r="1.29337"
                          transform="rotate(-90 1.29337 69.3249)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="12.6762"
                          cy="69.3249"
                          r="1.29337"
                          transform="rotate(-90 12.6762 69.3249)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="24.059"
                          cy="69.3249"
                          r="1.29337"
                          transform="rotate(-90 24.059 69.3249)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="35.4379"
                          cy="69.3249"
                          r="1.29337"
                          transform="rotate(-90 35.4379 69.3249)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="46.8207"
                          cy="69.325"
                          r="1.29337"
                          transform="rotate(-90 46.8207 69.325)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="68.809"
                          cy="69.325"
                          r="1.29337"
                          transform="rotate(-90 68.809 69.325)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="57.9418"
                          cy="69.325"
                          r="1.29337"
                          transform="rotate(-90 57.9418 69.325)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="1.29337"
                          cy="57.9433"
                          r="1.29337"
                          transform="rotate(-90 1.29337 57.9433)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="1.29337"
                          cy="24.0568"
                          r="1.29337"
                          transform="rotate(-90 1.29337 24.0568)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="12.6762"
                          cy="57.9433"
                          r="1.29337"
                          transform="rotate(-90 12.6762 57.9433)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="12.6762"
                          cy="24.0568"
                          r="1.29337"
                          transform="rotate(-90 12.6762 24.0568)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="24.059"
                          cy="57.9433"
                          r="1.29337"
                          transform="rotate(-90 24.059 57.9433)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="24.059"
                          cy="24.0568"
                          r="1.29337"
                          transform="rotate(-90 24.059 24.0568)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="35.4379"
                          cy="57.9433"
                          r="1.29337"
                          transform="rotate(-90 35.4379 57.9433)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="35.4379"
                          cy="24.0568"
                          r="1.29337"
                          transform="rotate(-90 35.4379 24.0568)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="46.8207"
                          cy="57.9431"
                          r="1.29337"
                          transform="rotate(-90 46.8207 57.9431)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="46.8207"
                          cy="24.0567"
                          r="1.29337"
                          transform="rotate(-90 46.8207 24.0567)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="68.809"
                          cy="57.9431"
                          r="1.29337"
                          transform="rotate(-90 68.809 57.9431)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="68.809"
                          cy="24.0567"
                          r="1.29337"
                          transform="rotate(-90 68.809 24.0567)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="57.9418"
                          cy="57.9431"
                          r="1.29337"
                          transform="rotate(-90 57.9418 57.9431)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="57.9457"
                          cy="24.0567"
                          r="1.29337"
                          transform="rotate(-90 57.9457 24.0567)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="1.29337"
                          cy="46.5615"
                          r="1.29337"
                          transform="rotate(-90 1.29337 46.5615)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="1.29337"
                          cy="12.675"
                          r="1.29337"
                          transform="rotate(-90 1.29337 12.675)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="12.6762"
                          cy="46.5615"
                          r="1.29337"
                          transform="rotate(-90 12.6762 46.5615)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="12.6762"
                          cy="12.675"
                          r="1.29337"
                          transform="rotate(-90 12.6762 12.675)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="24.059"
                          cy="46.5615"
                          r="1.29337"
                          transform="rotate(-90 24.059 46.5615)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="24.059"
                          cy="12.675"
                          r="1.29337"
                          transform="rotate(-90 24.059 12.675)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="35.4379"
                          cy="46.5615"
                          r="1.29337"
                          transform="rotate(-90 35.4379 46.5615)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="35.4379"
                          cy="12.6751"
                          r="1.29337"
                          transform="rotate(-90 35.4379 12.6751)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="46.8207"
                          cy="46.5615"
                          r="1.29337"
                          transform="rotate(-90 46.8207 46.5615)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="46.8207"
                          cy="12.6751"
                          r="1.29337"
                          transform="rotate(-90 46.8207 12.6751)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="68.809"
                          cy="46.5615"
                          r="1.29337"
                          transform="rotate(-90 68.809 46.5615)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="68.809"
                          cy="12.6751"
                          r="1.29337"
                          transform="rotate(-90 68.809 12.6751)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="57.9418"
                          cy="46.5615"
                          r="1.29337"
                          transform="rotate(-90 57.9418 46.5615)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="57.9457"
                          cy="12.6751"
                          r="1.29337"
                          transform="rotate(-90 57.9457 12.6751)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="1.29337"
                          cy="35.1798"
                          r="1.29337"
                          transform="rotate(-90 1.29337 35.1798)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="1.29337"
                          cy="1.2933"
                          r="1.29337"
                          transform="rotate(-90 1.29337 1.2933)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="12.6762"
                          cy="35.1798"
                          r="1.29337"
                          transform="rotate(-90 12.6762 35.1798)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="12.6762"
                          cy="1.2933"
                          r="1.29337"
                          transform="rotate(-90 12.6762 1.2933)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="24.059"
                          cy="35.1798"
                          r="1.29337"
                          transform="rotate(-90 24.059 35.1798)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="24.059"
                          cy="1.29342"
                          r="1.29337"
                          transform="rotate(-90 24.059 1.29342)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="35.4379"
                          cy="35.1798"
                          r="1.29337"
                          transform="rotate(-90 35.4379 35.1798)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="35.4379"
                          cy="1.29342"
                          r="1.29337"
                          transform="rotate(-90 35.4379 1.29342)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="46.8207"
                          cy="35.18"
                          r="1.29337"
                          transform="rotate(-90 46.8207 35.18)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="46.8207"
                          cy="1.29354"
                          r="1.29337"
                          transform="rotate(-90 46.8207 1.29354)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="68.809"
                          cy="35.18"
                          r="1.29337"
                          transform="rotate(-90 68.809 35.18)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="68.809"
                          cy="1.29354"
                          r="1.29337"
                          transform="rotate(-90 68.809 1.29354)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="57.9457"
                          cy="35.18"
                          r="1.29337"
                          transform="rotate(-90 57.9457 35.18)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="57.9457"
                          cy="1.29354"
                          r="1.29337"
                          transform="rotate(-90 57.9457 1.29354)"
                          fill="#3C50E0"
                        ></circle>
                      </svg>
                    </span>

                    <span className="absolute bottom-0 right-0 -z-1">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.5 21.5L0.505701 21.5C0.767606 10.023 10.023 0.767604 21.5 0.505697L21.5 21.5Z"
                          stroke="#10B981"
                        ></path>
                      </svg>
                    </span>
                  </div>

                  <div className="my-[1.375rem] text-center">
                    <h4 className="mb-0.5 text-lg font-bold text-black dark:text-white">
                      Andrieo Gloree
                    </h4>
                    <p className="text-xs font-medium text-general-gray dark:text-dark-general-gray ">
                      App Developer
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-[1.375rem]">
                    <Link to="#" className="text-bodydark2 hover:text-primary">
                      <svg
                        className="fill-current"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.8125 8.0625H13.0625H12.4375V7.4375V5.5V4.875H13.0625H14.375C14.7188 4.875 15 4.625 15 4.25V0.9375C15 0.59375 14.75 0.3125 14.375 0.3125H12.0938C9.625 0.3125 7.90625 2.0625 7.90625 4.65625V7.375V8H7.28125H5.15625C4.71875 8 4.3125 8.34375 4.3125 8.84375V11.0938C4.3125 11.5312 4.65625 11.9375 5.15625 11.9375H7.21875H7.84375V12.5625V18.8438C7.84375 19.2812 8.1875 19.6875 8.6875 19.6875H11.625C11.8125 19.6875 11.9688 19.5938 12.0938 19.4688C12.2188 19.3438 12.3125 19.125 12.3125 18.9375V12.5938V11.9688H12.9688H14.375C14.7812 11.9688 15.0938 11.7188 15.1562 11.3438V11.3125V11.2812L15.5938 9.125C15.625 8.90625 15.5938 8.65625 15.4062 8.40625C15.3438 8.25 15.0625 8.09375 14.8125 8.0625Z"
                          fill=""
                        ></path>
                      </svg>
                    </Link>

                    <Link to="#" className="text-bodydark2 hover:text-primary">
                      <svg
                        className="fill-current"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.2955 5.37507C18.4069 5.24521 18.2616 5.07552 18.0968 5.1363C17.729 5.27197 17.3928 5.36147 16.8956 5.41671C17.5071 5.07621 17.7915 4.58953 18.0229 3.99345C18.0786 3.84967 17.9104 3.71921 17.7655 3.78789C17.1769 4.06697 16.5418 4.27402 15.874 4.39635C15.2139 3.74216 14.273 3.33337 13.2321 3.33337C11.2335 3.33337 9.61272 4.84068 9.61272 6.69935C9.61272 6.96322 9.64505 7.22024 9.70605 7.46633C6.83301 7.33247 4.27114 6.10345 2.49128 4.21888C2.36929 4.08972 2.14793 4.10687 2.07198 4.2644C1.86934 4.6847 1.75638 5.15095 1.75638 5.64184C1.75638 6.80941 2.39514 7.83957 3.36616 8.44321C2.93078 8.43012 2.51442 8.34529 2.13072 8.20132C1.9439 8.13124 1.72975 8.25441 1.75485 8.44279C1.94754 9.88937 3.11873 11.0828 4.63046 11.3648C4.32688 11.442 4.00713 11.483 3.67635 11.483C3.59615 11.483 3.51664 11.4805 3.43786 11.4757C3.23738 11.4633 3.07445 11.6426 3.1604 11.8142C3.72749 12.946 4.952 13.7362 6.37696 13.7608C5.13838 14.6638 3.57785 15.2018 1.88207 15.2018C1.67298 15.2018 1.58328 15.4706 1.76878 15.5618C3.20147 16.266 4.83302 16.6667 6.56661 16.6667C13.2241 16.6667 16.864 11.5378 16.864 7.08967C16.864 6.94407 16.8604 6.79847 16.8538 6.65423C17.3941 6.29121 17.8799 5.85953 18.2955 5.37507Z"
                          fill=""
                        ></path>
                      </svg>
                    </Link>

                    <Link to="#" className="text-bodydark2 hover:text-primary">
                      <svg
                        className="fill-current"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.0284 13.1184C11.7506 13.1184 13.1467 11.7223 13.1467 10.0001C13.1467 8.27794 11.7506 6.88184 10.0284 6.88184C8.30626 6.88184 6.91016 8.27794 6.91016 10.0001C6.91016 11.7223 8.30626 13.1184 10.0284 13.1184Z"
                          fill=""
                        ></path>
                        <path
                          d="M13.4153 1.66663H6.58732C3.87227 1.66663 1.66797 3.87093 1.66797 6.58598V13.3602C1.66797 16.129 3.87227 18.3333 6.58732 18.3333H13.3615C16.1303 18.3333 18.3346 16.129 18.3346 13.4139V6.58598C18.3346 3.87093 16.1303 1.66663 13.4153 1.66663ZM10.0282 14.086C7.74324 14.086 5.94216 12.2311 5.94216 9.99996C5.94216 7.76878 7.77012 5.91394 10.0282 5.91394C12.2594 5.91394 14.0873 7.76878 14.0873 9.99996C14.0873 12.2311 12.2862 14.086 10.0282 14.086ZM15.6733 6.29028C15.4045 6.58598 15.0013 6.74727 14.5443 6.74727C14.1411 6.74727 13.7379 6.58598 13.4153 6.29028C13.1196 5.99458 12.9583 5.61824 12.9583 5.16125C12.9583 4.70426 13.1196 4.3548 13.4153 4.03222C13.711 3.70964 14.0873 3.54835 14.5443 3.54835C14.9475 3.54835 15.3776 3.70964 15.6733 4.00534C15.9422 4.3548 16.1303 4.75802 16.1303 5.18813C16.1035 5.61824 15.9422 5.99458 15.6733 6.29028Z"
                          fill=""
                        ></path>
                        <path
                          d="M14.5709 4.51587C14.2215 4.51587 13.9258 4.81157 13.9258 5.16103C13.9258 5.51049 14.2215 5.80619 14.5709 5.80619C14.9204 5.80619 15.2161 5.51049 15.2161 5.16103C15.2161 4.81157 14.9473 4.51587 14.5709 4.51587Z"
                          fill=""
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>

                <div>
                  <div className="relative z-1 mx-auto h-[170px] w-full max-w-[170px] rounded-full">
                    <img
                      className="rounded-full relative z-[2]"
                      src={`${process.env.PUBLIC_URL}/images/team/team-04.png`}
                      alt="team"
                    />

                    <span className="absolute left-0 top-0 z-[1]">
                      <svg
                        width="71"
                        height="82"
                        viewBox="0 0 71 82"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="1.29337"
                          cy="80.7066"
                          r="1.29337"
                          transform="rotate(-90 1.29337 80.7066)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="12.6762"
                          cy="80.7066"
                          r="1.29337"
                          transform="rotate(-90 12.6762 80.7066)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="24.059"
                          cy="80.7066"
                          r="1.29337"
                          transform="rotate(-90 24.059 80.7066)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="35.4379"
                          cy="80.7066"
                          r="1.29337"
                          transform="rotate(-90 35.4379 80.7066)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="46.8207"
                          cy="80.7066"
                          r="1.29337"
                          transform="rotate(-90 46.8207 80.7066)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="68.809"
                          cy="80.7066"
                          r="1.29337"
                          transform="rotate(-90 68.809 80.7066)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="57.9457"
                          cy="80.7066"
                          r="1.29337"
                          transform="rotate(-90 57.9457 80.7066)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="1.29337"
                          cy="69.3249"
                          r="1.29337"
                          transform="rotate(-90 1.29337 69.3249)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="12.6762"
                          cy="69.3249"
                          r="1.29337"
                          transform="rotate(-90 12.6762 69.3249)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="24.059"
                          cy="69.3249"
                          r="1.29337"
                          transform="rotate(-90 24.059 69.3249)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="35.4379"
                          cy="69.3249"
                          r="1.29337"
                          transform="rotate(-90 35.4379 69.3249)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="46.8207"
                          cy="69.325"
                          r="1.29337"
                          transform="rotate(-90 46.8207 69.325)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="68.809"
                          cy="69.325"
                          r="1.29337"
                          transform="rotate(-90 68.809 69.325)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="57.9418"
                          cy="69.325"
                          r="1.29337"
                          transform="rotate(-90 57.9418 69.325)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="1.29337"
                          cy="57.9433"
                          r="1.29337"
                          transform="rotate(-90 1.29337 57.9433)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="1.29337"
                          cy="24.0568"
                          r="1.29337"
                          transform="rotate(-90 1.29337 24.0568)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="12.6762"
                          cy="57.9433"
                          r="1.29337"
                          transform="rotate(-90 12.6762 57.9433)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="12.6762"
                          cy="24.0568"
                          r="1.29337"
                          transform="rotate(-90 12.6762 24.0568)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="24.059"
                          cy="57.9433"
                          r="1.29337"
                          transform="rotate(-90 24.059 57.9433)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="24.059"
                          cy="24.0568"
                          r="1.29337"
                          transform="rotate(-90 24.059 24.0568)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="35.4379"
                          cy="57.9433"
                          r="1.29337"
                          transform="rotate(-90 35.4379 57.9433)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="35.4379"
                          cy="24.0568"
                          r="1.29337"
                          transform="rotate(-90 35.4379 24.0568)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="46.8207"
                          cy="57.9431"
                          r="1.29337"
                          transform="rotate(-90 46.8207 57.9431)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="46.8207"
                          cy="24.0567"
                          r="1.29337"
                          transform="rotate(-90 46.8207 24.0567)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="68.809"
                          cy="57.9431"
                          r="1.29337"
                          transform="rotate(-90 68.809 57.9431)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="68.809"
                          cy="24.0567"
                          r="1.29337"
                          transform="rotate(-90 68.809 24.0567)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="57.9418"
                          cy="57.9431"
                          r="1.29337"
                          transform="rotate(-90 57.9418 57.9431)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="57.9457"
                          cy="24.0567"
                          r="1.29337"
                          transform="rotate(-90 57.9457 24.0567)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="1.29337"
                          cy="46.5615"
                          r="1.29337"
                          transform="rotate(-90 1.29337 46.5615)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="1.29337"
                          cy="12.675"
                          r="1.29337"
                          transform="rotate(-90 1.29337 12.675)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="12.6762"
                          cy="46.5615"
                          r="1.29337"
                          transform="rotate(-90 12.6762 46.5615)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="12.6762"
                          cy="12.675"
                          r="1.29337"
                          transform="rotate(-90 12.6762 12.675)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="24.059"
                          cy="46.5615"
                          r="1.29337"
                          transform="rotate(-90 24.059 46.5615)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="24.059"
                          cy="12.675"
                          r="1.29337"
                          transform="rotate(-90 24.059 12.675)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="35.4379"
                          cy="46.5615"
                          r="1.29337"
                          transform="rotate(-90 35.4379 46.5615)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="35.4379"
                          cy="12.6751"
                          r="1.29337"
                          transform="rotate(-90 35.4379 12.6751)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="46.8207"
                          cy="46.5615"
                          r="1.29337"
                          transform="rotate(-90 46.8207 46.5615)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="46.8207"
                          cy="12.6751"
                          r="1.29337"
                          transform="rotate(-90 46.8207 12.6751)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="68.809"
                          cy="46.5615"
                          r="1.29337"
                          transform="rotate(-90 68.809 46.5615)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="68.809"
                          cy="12.6751"
                          r="1.29337"
                          transform="rotate(-90 68.809 12.6751)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="57.9418"
                          cy="46.5615"
                          r="1.29337"
                          transform="rotate(-90 57.9418 46.5615)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="57.9457"
                          cy="12.6751"
                          r="1.29337"
                          transform="rotate(-90 57.9457 12.6751)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="1.29337"
                          cy="35.1798"
                          r="1.29337"
                          transform="rotate(-90 1.29337 35.1798)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="1.29337"
                          cy="1.2933"
                          r="1.29337"
                          transform="rotate(-90 1.29337 1.2933)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="12.6762"
                          cy="35.1798"
                          r="1.29337"
                          transform="rotate(-90 12.6762 35.1798)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="12.6762"
                          cy="1.2933"
                          r="1.29337"
                          transform="rotate(-90 12.6762 1.2933)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="24.059"
                          cy="35.1798"
                          r="1.29337"
                          transform="rotate(-90 24.059 35.1798)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="24.059"
                          cy="1.29342"
                          r="1.29337"
                          transform="rotate(-90 24.059 1.29342)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="35.4379"
                          cy="35.1798"
                          r="1.29337"
                          transform="rotate(-90 35.4379 35.1798)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="35.4379"
                          cy="1.29342"
                          r="1.29337"
                          transform="rotate(-90 35.4379 1.29342)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="46.8207"
                          cy="35.18"
                          r="1.29337"
                          transform="rotate(-90 46.8207 35.18)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="46.8207"
                          cy="1.29354"
                          r="1.29337"
                          transform="rotate(-90 46.8207 1.29354)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="68.809"
                          cy="35.18"
                          r="1.29337"
                          transform="rotate(-90 68.809 35.18)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="68.809"
                          cy="1.29354"
                          r="1.29337"
                          transform="rotate(-90 68.809 1.29354)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="57.9457"
                          cy="35.18"
                          r="1.29337"
                          transform="rotate(-90 57.9457 35.18)"
                          fill="#3C50E0"
                        ></circle>
                        <circle
                          cx="57.9457"
                          cy="1.29354"
                          r="1.29337"
                          transform="rotate(-90 57.9457 1.29354)"
                          fill="#3C50E0"
                        ></circle>
                      </svg>
                    </span>

                    <span className="absolute bottom-0 right-0 -z-1">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.5 21.5L0.505701 21.5C0.767606 10.023 10.023 0.767604 21.5 0.505697L21.5 21.5Z"
                          stroke="#10B981"
                        ></path>
                      </svg>
                    </span>
                  </div>

                  <div className="my-[1.375rem] text-center">
                    <h4 className="mb-0.5 text-lg font-bold text-black dark:text-white">
                      Jackie Sanders
                    </h4>
                    <p className="text-xs font-medium text-general-gray dark:text-dark-general-gray ">
                      Content Writer
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-[1.375rem]">
                    <Link to="#" className="text-bodydark2 hover:text-primary">
                      <svg
                        className="fill-current"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.8125 8.0625H13.0625H12.4375V7.4375V5.5V4.875H13.0625H14.375C14.7188 4.875 15 4.625 15 4.25V0.9375C15 0.59375 14.75 0.3125 14.375 0.3125H12.0938C9.625 0.3125 7.90625 2.0625 7.90625 4.65625V7.375V8H7.28125H5.15625C4.71875 8 4.3125 8.34375 4.3125 8.84375V11.0938C4.3125 11.5312 4.65625 11.9375 5.15625 11.9375H7.21875H7.84375V12.5625V18.8438C7.84375 19.2812 8.1875 19.6875 8.6875 19.6875H11.625C11.8125 19.6875 11.9688 19.5938 12.0938 19.4688C12.2188 19.3438 12.3125 19.125 12.3125 18.9375V12.5938V11.9688H12.9688H14.375C14.7812 11.9688 15.0938 11.7188 15.1562 11.3438V11.3125V11.2812L15.5938 9.125C15.625 8.90625 15.5938 8.65625 15.4062 8.40625C15.3438 8.25 15.0625 8.09375 14.8125 8.0625Z"
                          fill=""
                        ></path>
                      </svg>
                    </Link>

                    <Link to="#" className="text-bodydark2 hover:text-primary">
                      <svg
                        className="fill-current"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.2955 5.37507C18.4069 5.24521 18.2616 5.07552 18.0968 5.1363C17.729 5.27197 17.3928 5.36147 16.8956 5.41671C17.5071 5.07621 17.7915 4.58953 18.0229 3.99345C18.0786 3.84967 17.9104 3.71921 17.7655 3.78789C17.1769 4.06697 16.5418 4.27402 15.874 4.39635C15.2139 3.74216 14.273 3.33337 13.2321 3.33337C11.2335 3.33337 9.61272 4.84068 9.61272 6.69935C9.61272 6.96322 9.64505 7.22024 9.70605 7.46633C6.83301 7.33247 4.27114 6.10345 2.49128 4.21888C2.36929 4.08972 2.14793 4.10687 2.07198 4.2644C1.86934 4.6847 1.75638 5.15095 1.75638 5.64184C1.75638 6.80941 2.39514 7.83957 3.36616 8.44321C2.93078 8.43012 2.51442 8.34529 2.13072 8.20132C1.9439 8.13124 1.72975 8.25441 1.75485 8.44279C1.94754 9.88937 3.11873 11.0828 4.63046 11.3648C4.32688 11.442 4.00713 11.483 3.67635 11.483C3.59615 11.483 3.51664 11.4805 3.43786 11.4757C3.23738 11.4633 3.07445 11.6426 3.1604 11.8142C3.72749 12.946 4.952 13.7362 6.37696 13.7608C5.13838 14.6638 3.57785 15.2018 1.88207 15.2018C1.67298 15.2018 1.58328 15.4706 1.76878 15.5618C3.20147 16.266 4.83302 16.6667 6.56661 16.6667C13.2241 16.6667 16.864 11.5378 16.864 7.08967C16.864 6.94407 16.8604 6.79847 16.8538 6.65423C17.3941 6.29121 17.8799 5.85953 18.2955 5.37507Z"
                          fill=""
                        ></path>
                      </svg>
                    </Link>

                    <Link to="#" className="text-bodydark2 hover:text-primary">
                      <svg
                        className="fill-current"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.0284 13.1184C11.7506 13.1184 13.1467 11.7223 13.1467 10.0001C13.1467 8.27794 11.7506 6.88184 10.0284 6.88184C8.30626 6.88184 6.91016 8.27794 6.91016 10.0001C6.91016 11.7223 8.30626 13.1184 10.0284 13.1184Z"
                          fill=""
                        ></path>
                        <path
                          d="M13.4153 1.66663H6.58732C3.87227 1.66663 1.66797 3.87093 1.66797 6.58598V13.3602C1.66797 16.129 3.87227 18.3333 6.58732 18.3333H13.3615C16.1303 18.3333 18.3346 16.129 18.3346 13.4139V6.58598C18.3346 3.87093 16.1303 1.66663 13.4153 1.66663ZM10.0282 14.086C7.74324 14.086 5.94216 12.2311 5.94216 9.99996C5.94216 7.76878 7.77012 5.91394 10.0282 5.91394C12.2594 5.91394 14.0873 7.76878 14.0873 9.99996C14.0873 12.2311 12.2862 14.086 10.0282 14.086ZM15.6733 6.29028C15.4045 6.58598 15.0013 6.74727 14.5443 6.74727C14.1411 6.74727 13.7379 6.58598 13.4153 6.29028C13.1196 5.99458 12.9583 5.61824 12.9583 5.16125C12.9583 4.70426 13.1196 4.3548 13.4153 4.03222C13.711 3.70964 14.0873 3.54835 14.5443 3.54835C14.9475 3.54835 15.3776 3.70964 15.6733 4.00534C15.9422 4.3548 16.1303 4.75802 16.1303 5.18813C16.1035 5.61824 15.9422 5.99458 15.6733 6.29028Z"
                          fill=""
                        ></path>
                        <path
                          d="M14.5709 4.51587C14.2215 4.51587 13.9258 4.81157 13.9258 5.16103C13.9258 5.51049 14.2215 5.80619 14.5709 5.80619C14.9204 5.80619 15.2161 5.51049 15.2161 5.16103C15.2161 4.81157 14.9473 4.51587 14.5709 4.51587Z"
                          fill=""
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-9">
              <h3 className="font-medium text-black dark:text-white">
                Style 2
              </h3>
            </div>

            <div className="p-4 sm:p-6 xl:p-9 2xl:p-15">
              <div className="mx-auto w-full max-w-[1170px]">
                <div className="grid grid-cols-1 gap-[1.875rem] sm:grid-cols-2 xl:grid-cols-4">
                  <div className="group rounded-[10px] border border-stroke px-4 pb-10 pt-12 dark:border-strokedark">
                    <div className="relative z-1 mx-auto h-[7.5rem] w-full max-w-[7.5rem] rounded-full">
                      <img
                        className="rounded-full relative z-[2]"
                        src={`${process.env.PUBLIC_URL}/images/team/team-05.png`}
                        alt="team"
                      />

                      <span className="absolute right-0 top-0 z-[1] opacity-0 transition-all group-hover:opacity-100">
                        <svg
                          width="55"
                          height="53"
                          viewBox="0 0 55 53"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.5114 3.1009C13.3677 3.1009 14.0618 2.40674 14.0618 1.55045C14.0618 0.69416 13.3677 0 12.5114 0C11.6551 0 10.9609 0.69416 10.9609 1.55045C10.9609 2.40674 11.6551 3.1009 12.5114 3.1009Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22.5036 3.1009C23.3599 3.1009 24.054 2.40674 24.054 1.55045C24.054 0.69416 23.3599 0 22.5036 0C21.6473 0 20.9531 0.69416 20.9531 1.55045C20.9531 2.40674 21.6473 3.1009 22.5036 3.1009Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M32.4958 3.1009C33.3521 3.1009 34.0462 2.40674 34.0462 1.55045C34.0462 0.69416 33.3521 0 32.4958 0C31.6395 0 30.9453 0.69416 30.9453 1.55045C30.9453 2.40674 31.6395 3.1009 32.4958 3.1009Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M42.4879 3.1009C43.3442 3.1009 44.0384 2.40674 44.0384 1.55045C44.0384 0.69416 43.3442 0 42.4879 0C41.6317 0 40.9375 0.69416 40.9375 1.55045C40.9375 2.40674 41.6317 3.1009 42.4879 3.1009Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M52.4801 3.1009C53.3364 3.1009 54.0306 2.40674 54.0306 1.55045C54.0306 0.69416 53.3364 0 52.4801 0C51.6238 0 50.9297 0.69416 50.9297 1.55045C50.9297 2.40674 51.6238 3.1009 52.4801 3.1009Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.5192 13.0804C3.37549 13.0804 4.06965 12.3862 4.06965 11.5299C4.06965 10.6737 3.37549 9.97949 2.5192 9.97949C1.66291 9.97949 0.96875 10.6737 0.96875 11.5299C0.96875 12.3862 1.66291 13.0804 2.5192 13.0804Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.5114 13.0804C13.3677 13.0804 14.0618 12.3862 14.0618 11.5299C14.0618 10.6737 13.3677 9.97949 12.5114 9.97949C11.6551 9.97949 10.9609 10.6737 10.9609 11.5299C10.9609 12.3862 11.6551 13.0804 12.5114 13.0804Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22.5036 13.0804C23.3599 13.0804 24.054 12.3862 24.054 11.5299C24.054 10.6737 23.3599 9.97949 22.5036 9.97949C21.6473 9.97949 20.9531 10.6737 20.9531 11.5299C20.9531 12.3862 21.6473 13.0804 22.5036 13.0804Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M32.4958 13.0804C33.3521 13.0804 34.0462 12.3862 34.0462 11.5299C34.0462 10.6737 33.3521 9.97949 32.4958 9.97949C31.6395 9.97949 30.9453 10.6737 30.9453 11.5299C30.9453 12.3862 31.6395 13.0804 32.4958 13.0804Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M42.4879 13.0804C43.3442 13.0804 44.0384 12.3862 44.0384 11.5299C44.0384 10.6737 43.3442 9.97949 42.4879 9.97949C41.6317 9.97949 40.9375 10.6737 40.9375 11.5299C40.9375 12.3862 41.6317 13.0804 42.4879 13.0804Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M52.4801 13.0804C53.3364 13.0804 54.0306 12.3862 54.0306 11.5299C54.0306 10.6737 53.3364 9.97949 52.4801 9.97949C51.6238 9.97949 50.9297 10.6737 50.9297 11.5299C50.9297 12.3862 51.6238 13.0804 52.4801 13.0804Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.5192 23.0604C3.37549 23.0604 4.06965 22.3662 4.06965 21.5099C4.06965 20.6536 3.37549 19.9595 2.5192 19.9595C1.66291 19.9595 0.96875 20.6536 0.96875 21.5099C0.96875 22.3662 1.66291 23.0604 2.5192 23.0604Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.5114 23.0604C13.3677 23.0604 14.0618 22.3662 14.0618 21.5099C14.0618 20.6536 13.3677 19.9595 12.5114 19.9595C11.6551 19.9595 10.9609 20.6536 10.9609 21.5099C10.9609 22.3662 11.6551 23.0604 12.5114 23.0604Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22.5036 23.0604C23.3599 23.0604 24.054 22.3662 24.054 21.5099C24.054 20.6536 23.3599 19.9595 22.5036 19.9595C21.6473 19.9595 20.9531 20.6536 20.9531 21.5099C20.9531 22.3662 21.6473 23.0604 22.5036 23.0604Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M32.4958 23.0604C33.3521 23.0604 34.0462 22.3662 34.0462 21.5099C34.0462 20.6536 33.3521 19.9595 32.4958 19.9595C31.6395 19.9595 30.9453 20.6536 30.9453 21.5099C30.9453 22.3662 31.6395 23.0604 32.4958 23.0604Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M42.4879 23.0604C43.3442 23.0604 44.0384 22.3662 44.0384 21.5099C44.0384 20.6536 43.3442 19.9595 42.4879 19.9595C41.6317 19.9595 40.9375 20.6536 40.9375 21.5099C40.9375 22.3662 41.6317 23.0604 42.4879 23.0604Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M52.4801 23.0604C53.3364 23.0604 54.0306 22.3662 54.0306 21.5099C54.0306 20.6536 53.3364 19.9595 52.4801 19.9595C51.6238 19.9595 50.9297 20.6536 50.9297 21.5099C50.9297 22.3662 51.6238 23.0604 52.4801 23.0604Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.5192 33.0404C3.37549 33.0404 4.06965 32.3462 4.06965 31.4899C4.06965 30.6336 3.37549 29.9395 2.5192 29.9395C1.66291 29.9395 0.96875 30.6336 0.96875 31.4899C0.96875 32.3462 1.66291 33.0404 2.5192 33.0404Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.5114 33.0404C13.3677 33.0404 14.0618 32.3462 14.0618 31.4899C14.0618 30.6336 13.3677 29.9395 12.5114 29.9395C11.6551 29.9395 10.9609 30.6336 10.9609 31.4899C10.9609 32.3462 11.6551 33.0404 12.5114 33.0404Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22.5036 33.0404C23.3599 33.0404 24.054 32.3462 24.054 31.4899C24.054 30.6336 23.3599 29.9395 22.5036 29.9395C21.6473 29.9395 20.9531 30.6336 20.9531 31.4899C20.9531 32.3462 21.6473 33.0404 22.5036 33.0404Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M32.4958 33.0404C33.3521 33.0404 34.0462 32.3462 34.0462 31.4899C34.0462 30.6336 33.3521 29.9395 32.4958 29.9395C31.6395 29.9395 30.9453 30.6336 30.9453 31.4899C30.9453 32.3462 31.6395 33.0404 32.4958 33.0404Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M42.4879 33.0404C43.3442 33.0404 44.0384 32.3462 44.0384 31.4899C44.0384 30.6336 43.3442 29.9395 42.4879 29.9395C41.6317 29.9395 40.9375 30.6336 40.9375 31.4899C40.9375 32.3462 41.6317 33.0404 42.4879 33.0404Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M52.4801 33.0404C53.3364 33.0404 54.0306 32.3462 54.0306 31.4899C54.0306 30.6336 53.3364 29.9395 52.4801 29.9395C51.6238 29.9395 50.9297 30.6336 50.9297 31.4899C50.9297 32.3462 51.6238 33.0404 52.4801 33.0404Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.5192 43.0203C3.37549 43.0203 4.06965 42.3262 4.06965 41.4699C4.06965 40.6136 3.37549 39.9194 2.5192 39.9194C1.66291 39.9194 0.96875 40.6136 0.96875 41.4699C0.96875 42.3262 1.66291 43.0203 2.5192 43.0203Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.5114 43.0203C13.3677 43.0203 14.0618 42.3262 14.0618 41.4699C14.0618 40.6136 13.3677 39.9194 12.5114 39.9194C11.6551 39.9194 10.9609 40.6136 10.9609 41.4699C10.9609 42.3262 11.6551 43.0203 12.5114 43.0203Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22.5036 43.0203C23.3599 43.0203 24.054 42.3262 24.054 41.4699C24.054 40.6136 23.3599 39.9194 22.5036 39.9194C21.6473 39.9194 20.9531 40.6136 20.9531 41.4699C20.9531 42.3262 21.6473 43.0203 22.5036 43.0203Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M32.4958 43.0203C33.3521 43.0203 34.0462 42.3262 34.0462 41.4699C34.0462 40.6136 33.3521 39.9194 32.4958 39.9194C31.6395 39.9194 30.9453 40.6136 30.9453 41.4699C30.9453 42.3262 31.6395 43.0203 32.4958 43.0203Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M42.4879 43.0203C43.3442 43.0203 44.0384 42.3262 44.0384 41.4699C44.0384 40.6136 43.3442 39.9194 42.4879 39.9194C41.6317 39.9194 40.9375 40.6136 40.9375 41.4699C40.9375 42.3262 41.6317 43.0203 42.4879 43.0203Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M52.4801 43.0203C53.3364 43.0203 54.0306 42.3262 54.0306 41.4699C54.0306 40.6136 53.3364 39.9194 52.4801 39.9194C51.6238 39.9194 50.9297 40.6136 50.9297 41.4699C50.9297 42.3262 51.6238 43.0203 52.4801 43.0203Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.5192 53.0001C3.37549 53.0001 4.06965 52.3059 4.06965 51.4496C4.06965 50.5933 3.37549 49.8992 2.5192 49.8992C1.66291 49.8992 0.96875 50.5933 0.96875 51.4496C0.96875 52.3059 1.66291 53.0001 2.5192 53.0001Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.5114 53.0001C13.3677 53.0001 14.0618 52.3059 14.0618 51.4496C14.0618 50.5933 13.3677 49.8992 12.5114 49.8992C11.6551 49.8992 10.9609 50.5933 10.9609 51.4496C10.9609 52.3059 11.6551 53.0001 12.5114 53.0001Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22.5036 53.0001C23.3599 53.0001 24.054 52.3059 24.054 51.4496C24.054 50.5933 23.3599 49.8992 22.5036 49.8992C21.6473 49.8992 20.9531 50.5933 20.9531 51.4496C20.9531 52.3059 21.6473 53.0001 22.5036 53.0001Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M32.4958 53.0001C33.3521 53.0001 34.0462 52.3059 34.0462 51.4496C34.0462 50.5933 33.3521 49.8992 32.4958 49.8992C31.6395 49.8992 30.9453 50.5933 30.9453 51.4496C30.9453 52.3059 31.6395 53.0001 32.4958 53.0001Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M42.4879 53.0001C43.3442 53.0001 44.0384 52.3059 44.0384 51.4496C44.0384 50.5933 43.3442 49.8992 42.4879 49.8992C41.6317 49.8992 40.9375 50.5933 40.9375 51.4496C40.9375 52.3059 41.6317 53.0001 42.4879 53.0001Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M52.4801 53.0001C53.3364 53.0001 54.0306 52.3059 54.0306 51.4496C54.0306 50.5933 53.3364 49.8992 52.4801 49.8992C51.6238 49.8992 50.9297 50.5933 50.9297 51.4496C50.9297 52.3059 51.6238 53.0001 52.4801 53.0001Z"
                            fill="#3C50E0"
                          ></path>
                        </svg>
                      </span>

                      <span className="absolute bottom-0 left-0 -z-1 h-[2.375rem] w-[2.375rem] rounded-full bg-meta-3 opacity-0 transition-all group-hover:opacity-100"></span>
                    </div>

                    <div className="my-5 text-center">
                      <h4 className="mb-0.5 text-lg font-bold text-black dark:text-white">
                        Matheus Ferrero
                      </h4>
                      <p className="text-xs font-medium text-general-gray dark:text-dark-general-gray ">
                        Marketing Expert
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-[1.375rem]">
                      <Link
                        to="#"
                        className="text-bodydark2 hover:text-primary"
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.3328 7.25625H11.7578H11.1953V6.69375V4.95V4.3875H11.7578H12.9391C13.2484 4.3875 13.5016 4.1625 13.5016 3.825V0.84375C13.5016 0.534375 13.2766 0.28125 12.9391 0.28125H10.8859C8.66406 0.28125 7.11719 1.85625 7.11719 4.19062V6.6375V7.2H6.55469H4.64219C4.24844 7.2 3.88281 7.50937 3.88281 7.95937V9.98438C3.88281 10.3781 4.19219 10.7438 4.64219 10.7438H6.49844H7.06094V11.3063V16.9594C7.06094 17.3531 7.37031 17.7188 7.82031 17.7188H10.4641C10.6328 17.7188 10.7734 17.6344 10.8859 17.5219C10.9984 17.4094 11.0828 17.2125 11.0828 17.0437V11.3344V10.7719H11.6734H12.9391C13.3047 10.7719 13.5859 10.5469 13.6422 10.2094V10.1813V10.1531L14.0359 8.2125C14.0641 8.01562 14.0359 7.79063 13.8672 7.56562C13.8109 7.425 13.5578 7.28437 13.3328 7.25625Z"
                            fill=""
                          ></path>
                        </svg>
                      </Link>

                      <Link
                        to="#"
                        className="text-bodydark2 hover:text-primary"
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.4647 4.83752C16.565 4.72065 16.4343 4.56793 16.2859 4.62263C15.9549 4.74474 15.6523 4.82528 15.2049 4.875C15.7552 4.56855 16.0112 4.13054 16.2194 3.59407C16.2696 3.46467 16.1182 3.34725 15.9877 3.40907C15.458 3.66023 14.8864 3.84658 14.2854 3.95668C13.6913 3.3679 12.8445 3 11.9077 3C10.1089 3 8.65027 4.35658 8.65027 6.02938C8.65027 6.26686 8.67937 6.49818 8.73427 6.71966C6.14854 6.59919 3.84286 5.49307 2.24098 3.79696C2.13119 3.68071 1.93197 3.69614 1.86361 3.83792C1.68124 4.21619 1.57957 4.63582 1.57957 5.07762C1.57957 6.12843 2.15446 7.05557 3.02837 7.59885C2.63653 7.58707 2.2618 7.51073 1.91647 7.38116C1.74834 7.31808 1.5556 7.42893 1.57819 7.59847C1.75162 8.9004 2.80568 9.97447 4.16624 10.2283C3.89302 10.2978 3.60524 10.3347 3.30754 10.3347C3.23536 10.3347 3.16381 10.3324 3.0929 10.3281C2.91247 10.3169 2.76583 10.4783 2.84319 10.6328C3.35357 11.6514 4.45563 12.3625 5.73809 12.3847C4.62337 13.1974 3.21889 13.6816 1.69269 13.6816C1.50451 13.6816 1.42378 13.9235 1.59073 14.0056C2.88015 14.6394 4.34854 15 5.90878 15C11.9005 15 15.1765 10.384 15.1765 6.38067C15.1765 6.24963 15.1732 6.11858 15.1672 5.98877C15.6535 5.66205 16.0907 5.27354 16.4647 4.83752Z"
                            fill=""
                          ></path>
                        </svg>
                      </Link>

                      <Link
                        to="#"
                        className="text-bodydark2 hover:text-primary"
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.0252 11.8065C10.5752 11.8065 11.8317 10.55 11.8317 9.00005C11.8317 7.4501 10.5752 6.1936 9.0252 6.1936C7.47524 6.1936 6.21875 7.4501 6.21875 9.00005C6.21875 10.55 7.47524 11.8065 9.0252 11.8065Z"
                            fill=""
                          ></path>
                          <path
                            d="M12.0726 1.5H5.92742C3.48387 1.5 1.5 3.48387 1.5 5.92742V12.0242C1.5 14.5161 3.48387 16.5 5.92742 16.5H12.0242C14.5161 16.5 16.5 14.5161 16.5 12.0726V5.92742C16.5 3.48387 14.5161 1.5 12.0726 1.5ZM9.02419 12.6774C6.96774 12.6774 5.34677 11.0081 5.34677 9C5.34677 6.99194 6.99194 5.32258 9.02419 5.32258C11.0323 5.32258 12.6774 6.99194 12.6774 9C12.6774 11.0081 11.0565 12.6774 9.02419 12.6774ZM14.1048 5.66129C13.8629 5.92742 13.5 6.07258 13.0887 6.07258C12.7258 6.07258 12.3629 5.92742 12.0726 5.66129C11.8065 5.39516 11.6613 5.05645 11.6613 4.64516C11.6613 4.23387 11.8065 3.91935 12.0726 3.62903C12.3387 3.33871 12.6774 3.19355 13.0887 3.19355C13.4516 3.19355 13.8387 3.33871 14.1048 3.60484C14.3468 3.91935 14.5161 4.28226 14.5161 4.66935C14.4919 5.05645 14.3468 5.39516 14.1048 5.66129Z"
                            fill=""
                          ></path>
                          <path
                            d="M13.1119 4.06445C12.7974 4.06445 12.5312 4.33058 12.5312 4.6451C12.5312 4.95961 12.7974 5.22574 13.1119 5.22574C13.4264 5.22574 13.6925 4.95961 13.6925 4.6451C13.6925 4.33058 13.4506 4.06445 13.1119 4.06445Z"
                            fill=""
                          ></path>
                        </svg>
                      </Link>
                    </div>
                  </div>

                  <div className="group rounded-[10px] border border-stroke px-4 pb-10 pt-12 dark:border-strokedark">
                    <div className="relative z-1 mx-auto h-[7.5rem] w-full max-w-[7.5rem] rounded-full">
                      <img
                        className="rounded-full relative z-[2]"
                        src={`${process.env.PUBLIC_URL}/images/team/team-06.png`}
                        alt="team"
                      />

                      <span className="absolute right-0 top-0 z-[1] opacity-0 transition-all group-hover:opacity-100">
                        <svg
                          width="55"
                          height="53"
                          viewBox="0 0 55 53"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.5114 3.1009C13.3677 3.1009 14.0618 2.40674 14.0618 1.55045C14.0618 0.69416 13.3677 0 12.5114 0C11.6551 0 10.9609 0.69416 10.9609 1.55045C10.9609 2.40674 11.6551 3.1009 12.5114 3.1009Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22.5036 3.1009C23.3599 3.1009 24.054 2.40674 24.054 1.55045C24.054 0.69416 23.3599 0 22.5036 0C21.6473 0 20.9531 0.69416 20.9531 1.55045C20.9531 2.40674 21.6473 3.1009 22.5036 3.1009Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M32.4958 3.1009C33.3521 3.1009 34.0462 2.40674 34.0462 1.55045C34.0462 0.69416 33.3521 0 32.4958 0C31.6395 0 30.9453 0.69416 30.9453 1.55045C30.9453 2.40674 31.6395 3.1009 32.4958 3.1009Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M42.4879 3.1009C43.3442 3.1009 44.0384 2.40674 44.0384 1.55045C44.0384 0.69416 43.3442 0 42.4879 0C41.6317 0 40.9375 0.69416 40.9375 1.55045C40.9375 2.40674 41.6317 3.1009 42.4879 3.1009Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M52.4801 3.1009C53.3364 3.1009 54.0306 2.40674 54.0306 1.55045C54.0306 0.69416 53.3364 0 52.4801 0C51.6238 0 50.9297 0.69416 50.9297 1.55045C50.9297 2.40674 51.6238 3.1009 52.4801 3.1009Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.5192 13.0804C3.37549 13.0804 4.06965 12.3862 4.06965 11.5299C4.06965 10.6737 3.37549 9.97949 2.5192 9.97949C1.66291 9.97949 0.96875 10.6737 0.96875 11.5299C0.96875 12.3862 1.66291 13.0804 2.5192 13.0804Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.5114 13.0804C13.3677 13.0804 14.0618 12.3862 14.0618 11.5299C14.0618 10.6737 13.3677 9.97949 12.5114 9.97949C11.6551 9.97949 10.9609 10.6737 10.9609 11.5299C10.9609 12.3862 11.6551 13.0804 12.5114 13.0804Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22.5036 13.0804C23.3599 13.0804 24.054 12.3862 24.054 11.5299C24.054 10.6737 23.3599 9.97949 22.5036 9.97949C21.6473 9.97949 20.9531 10.6737 20.9531 11.5299C20.9531 12.3862 21.6473 13.0804 22.5036 13.0804Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M32.4958 13.0804C33.3521 13.0804 34.0462 12.3862 34.0462 11.5299C34.0462 10.6737 33.3521 9.97949 32.4958 9.97949C31.6395 9.97949 30.9453 10.6737 30.9453 11.5299C30.9453 12.3862 31.6395 13.0804 32.4958 13.0804Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M42.4879 13.0804C43.3442 13.0804 44.0384 12.3862 44.0384 11.5299C44.0384 10.6737 43.3442 9.97949 42.4879 9.97949C41.6317 9.97949 40.9375 10.6737 40.9375 11.5299C40.9375 12.3862 41.6317 13.0804 42.4879 13.0804Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M52.4801 13.0804C53.3364 13.0804 54.0306 12.3862 54.0306 11.5299C54.0306 10.6737 53.3364 9.97949 52.4801 9.97949C51.6238 9.97949 50.9297 10.6737 50.9297 11.5299C50.9297 12.3862 51.6238 13.0804 52.4801 13.0804Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.5192 23.0604C3.37549 23.0604 4.06965 22.3662 4.06965 21.5099C4.06965 20.6536 3.37549 19.9595 2.5192 19.9595C1.66291 19.9595 0.96875 20.6536 0.96875 21.5099C0.96875 22.3662 1.66291 23.0604 2.5192 23.0604Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.5114 23.0604C13.3677 23.0604 14.0618 22.3662 14.0618 21.5099C14.0618 20.6536 13.3677 19.9595 12.5114 19.9595C11.6551 19.9595 10.9609 20.6536 10.9609 21.5099C10.9609 22.3662 11.6551 23.0604 12.5114 23.0604Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22.5036 23.0604C23.3599 23.0604 24.054 22.3662 24.054 21.5099C24.054 20.6536 23.3599 19.9595 22.5036 19.9595C21.6473 19.9595 20.9531 20.6536 20.9531 21.5099C20.9531 22.3662 21.6473 23.0604 22.5036 23.0604Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M32.4958 23.0604C33.3521 23.0604 34.0462 22.3662 34.0462 21.5099C34.0462 20.6536 33.3521 19.9595 32.4958 19.9595C31.6395 19.9595 30.9453 20.6536 30.9453 21.5099C30.9453 22.3662 31.6395 23.0604 32.4958 23.0604Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M42.4879 23.0604C43.3442 23.0604 44.0384 22.3662 44.0384 21.5099C44.0384 20.6536 43.3442 19.9595 42.4879 19.9595C41.6317 19.9595 40.9375 20.6536 40.9375 21.5099C40.9375 22.3662 41.6317 23.0604 42.4879 23.0604Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M52.4801 23.0604C53.3364 23.0604 54.0306 22.3662 54.0306 21.5099C54.0306 20.6536 53.3364 19.9595 52.4801 19.9595C51.6238 19.9595 50.9297 20.6536 50.9297 21.5099C50.9297 22.3662 51.6238 23.0604 52.4801 23.0604Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.5192 33.0404C3.37549 33.0404 4.06965 32.3462 4.06965 31.4899C4.06965 30.6336 3.37549 29.9395 2.5192 29.9395C1.66291 29.9395 0.96875 30.6336 0.96875 31.4899C0.96875 32.3462 1.66291 33.0404 2.5192 33.0404Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.5114 33.0404C13.3677 33.0404 14.0618 32.3462 14.0618 31.4899C14.0618 30.6336 13.3677 29.9395 12.5114 29.9395C11.6551 29.9395 10.9609 30.6336 10.9609 31.4899C10.9609 32.3462 11.6551 33.0404 12.5114 33.0404Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22.5036 33.0404C23.3599 33.0404 24.054 32.3462 24.054 31.4899C24.054 30.6336 23.3599 29.9395 22.5036 29.9395C21.6473 29.9395 20.9531 30.6336 20.9531 31.4899C20.9531 32.3462 21.6473 33.0404 22.5036 33.0404Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M32.4958 33.0404C33.3521 33.0404 34.0462 32.3462 34.0462 31.4899C34.0462 30.6336 33.3521 29.9395 32.4958 29.9395C31.6395 29.9395 30.9453 30.6336 30.9453 31.4899C30.9453 32.3462 31.6395 33.0404 32.4958 33.0404Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M42.4879 33.0404C43.3442 33.0404 44.0384 32.3462 44.0384 31.4899C44.0384 30.6336 43.3442 29.9395 42.4879 29.9395C41.6317 29.9395 40.9375 30.6336 40.9375 31.4899C40.9375 32.3462 41.6317 33.0404 42.4879 33.0404Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M52.4801 33.0404C53.3364 33.0404 54.0306 32.3462 54.0306 31.4899C54.0306 30.6336 53.3364 29.9395 52.4801 29.9395C51.6238 29.9395 50.9297 30.6336 50.9297 31.4899C50.9297 32.3462 51.6238 33.0404 52.4801 33.0404Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.5192 43.0203C3.37549 43.0203 4.06965 42.3262 4.06965 41.4699C4.06965 40.6136 3.37549 39.9194 2.5192 39.9194C1.66291 39.9194 0.96875 40.6136 0.96875 41.4699C0.96875 42.3262 1.66291 43.0203 2.5192 43.0203Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.5114 43.0203C13.3677 43.0203 14.0618 42.3262 14.0618 41.4699C14.0618 40.6136 13.3677 39.9194 12.5114 39.9194C11.6551 39.9194 10.9609 40.6136 10.9609 41.4699C10.9609 42.3262 11.6551 43.0203 12.5114 43.0203Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22.5036 43.0203C23.3599 43.0203 24.054 42.3262 24.054 41.4699C24.054 40.6136 23.3599 39.9194 22.5036 39.9194C21.6473 39.9194 20.9531 40.6136 20.9531 41.4699C20.9531 42.3262 21.6473 43.0203 22.5036 43.0203Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M32.4958 43.0203C33.3521 43.0203 34.0462 42.3262 34.0462 41.4699C34.0462 40.6136 33.3521 39.9194 32.4958 39.9194C31.6395 39.9194 30.9453 40.6136 30.9453 41.4699C30.9453 42.3262 31.6395 43.0203 32.4958 43.0203Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M42.4879 43.0203C43.3442 43.0203 44.0384 42.3262 44.0384 41.4699C44.0384 40.6136 43.3442 39.9194 42.4879 39.9194C41.6317 39.9194 40.9375 40.6136 40.9375 41.4699C40.9375 42.3262 41.6317 43.0203 42.4879 43.0203Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M52.4801 43.0203C53.3364 43.0203 54.0306 42.3262 54.0306 41.4699C54.0306 40.6136 53.3364 39.9194 52.4801 39.9194C51.6238 39.9194 50.9297 40.6136 50.9297 41.4699C50.9297 42.3262 51.6238 43.0203 52.4801 43.0203Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.5192 53.0001C3.37549 53.0001 4.06965 52.3059 4.06965 51.4496C4.06965 50.5933 3.37549 49.8992 2.5192 49.8992C1.66291 49.8992 0.96875 50.5933 0.96875 51.4496C0.96875 52.3059 1.66291 53.0001 2.5192 53.0001Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.5114 53.0001C13.3677 53.0001 14.0618 52.3059 14.0618 51.4496C14.0618 50.5933 13.3677 49.8992 12.5114 49.8992C11.6551 49.8992 10.9609 50.5933 10.9609 51.4496C10.9609 52.3059 11.6551 53.0001 12.5114 53.0001Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22.5036 53.0001C23.3599 53.0001 24.054 52.3059 24.054 51.4496C24.054 50.5933 23.3599 49.8992 22.5036 49.8992C21.6473 49.8992 20.9531 50.5933 20.9531 51.4496C20.9531 52.3059 21.6473 53.0001 22.5036 53.0001Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M32.4958 53.0001C33.3521 53.0001 34.0462 52.3059 34.0462 51.4496C34.0462 50.5933 33.3521 49.8992 32.4958 49.8992C31.6395 49.8992 30.9453 50.5933 30.9453 51.4496C30.9453 52.3059 31.6395 53.0001 32.4958 53.0001Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M42.4879 53.0001C43.3442 53.0001 44.0384 52.3059 44.0384 51.4496C44.0384 50.5933 43.3442 49.8992 42.4879 49.8992C41.6317 49.8992 40.9375 50.5933 40.9375 51.4496C40.9375 52.3059 41.6317 53.0001 42.4879 53.0001Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M52.4801 53.0001C53.3364 53.0001 54.0306 52.3059 54.0306 51.4496C54.0306 50.5933 53.3364 49.8992 52.4801 49.8992C51.6238 49.8992 50.9297 50.5933 50.9297 51.4496C50.9297 52.3059 51.6238 53.0001 52.4801 53.0001Z"
                            fill="#3C50E0"
                          ></path>
                        </svg>
                      </span>

                      <span className="absolute bottom-0 left-0 -z-1 h-[2.375rem] w-[2.375rem] rounded-full bg-meta-3 opacity-0 transition-all group-hover:opacity-100"></span>
                    </div>

                    <div className="my-5 text-center">
                      <h4 className="mb-0.5 text-lg font-bold text-black dark:text-white">
                        Stuard Ferrel
                      </h4>
                      <p className="text-xs font-medium text-general-gray dark:text-dark-general-gray ">
                        Digital Marketer
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-[1.375rem]">
                      <Link
                        to="#"
                        className="text-bodydark2 hover:text-primary"
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.3328 7.25625H11.7578H11.1953V6.69375V4.95V4.3875H11.7578H12.9391C13.2484 4.3875 13.5016 4.1625 13.5016 3.825V0.84375C13.5016 0.534375 13.2766 0.28125 12.9391 0.28125H10.8859C8.66406 0.28125 7.11719 1.85625 7.11719 4.19062V6.6375V7.2H6.55469H4.64219C4.24844 7.2 3.88281 7.50937 3.88281 7.95937V9.98438C3.88281 10.3781 4.19219 10.7438 4.64219 10.7438H6.49844H7.06094V11.3063V16.9594C7.06094 17.3531 7.37031 17.7188 7.82031 17.7188H10.4641C10.6328 17.7188 10.7734 17.6344 10.8859 17.5219C10.9984 17.4094 11.0828 17.2125 11.0828 17.0437V11.3344V10.7719H11.6734H12.9391C13.3047 10.7719 13.5859 10.5469 13.6422 10.2094V10.1813V10.1531L14.0359 8.2125C14.0641 8.01562 14.0359 7.79063 13.8672 7.56562C13.8109 7.425 13.5578 7.28437 13.3328 7.25625Z"
                            fill=""
                          ></path>
                        </svg>
                      </Link>

                      <Link
                        to="#"
                        className="text-bodydark2 hover:text-primary"
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.4647 4.83752C16.565 4.72065 16.4343 4.56793 16.2859 4.62263C15.9549 4.74474 15.6523 4.82528 15.2049 4.875C15.7552 4.56855 16.0112 4.13054 16.2194 3.59407C16.2696 3.46467 16.1182 3.34725 15.9877 3.40907C15.458 3.66023 14.8864 3.84658 14.2854 3.95668C13.6913 3.3679 12.8445 3 11.9077 3C10.1089 3 8.65027 4.35658 8.65027 6.02938C8.65027 6.26686 8.67937 6.49818 8.73427 6.71966C6.14854 6.59919 3.84286 5.49307 2.24098 3.79696C2.13119 3.68071 1.93197 3.69614 1.86361 3.83792C1.68124 4.21619 1.57957 4.63582 1.57957 5.07762C1.57957 6.12843 2.15446 7.05557 3.02837 7.59885C2.63653 7.58707 2.2618 7.51073 1.91647 7.38116C1.74834 7.31808 1.5556 7.42893 1.57819 7.59847C1.75162 8.9004 2.80568 9.97447 4.16624 10.2283C3.89302 10.2978 3.60524 10.3347 3.30754 10.3347C3.23536 10.3347 3.16381 10.3324 3.0929 10.3281C2.91247 10.3169 2.76583 10.4783 2.84319 10.6328C3.35357 11.6514 4.45563 12.3625 5.73809 12.3847C4.62337 13.1974 3.21889 13.6816 1.69269 13.6816C1.50451 13.6816 1.42378 13.9235 1.59073 14.0056C2.88015 14.6394 4.34854 15 5.90878 15C11.9005 15 15.1765 10.384 15.1765 6.38067C15.1765 6.24963 15.1732 6.11858 15.1672 5.98877C15.6535 5.66205 16.0907 5.27354 16.4647 4.83752Z"
                            fill=""
                          ></path>
                        </svg>
                      </Link>

                      <Link
                        to="#"
                        className="text-bodydark2 hover:text-primary"
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.0252 11.8065C10.5752 11.8065 11.8317 10.55 11.8317 9.00005C11.8317 7.4501 10.5752 6.1936 9.0252 6.1936C7.47524 6.1936 6.21875 7.4501 6.21875 9.00005C6.21875 10.55 7.47524 11.8065 9.0252 11.8065Z"
                            fill=""
                          ></path>
                          <path
                            d="M12.0726 1.5H5.92742C3.48387 1.5 1.5 3.48387 1.5 5.92742V12.0242C1.5 14.5161 3.48387 16.5 5.92742 16.5H12.0242C14.5161 16.5 16.5 14.5161 16.5 12.0726V5.92742C16.5 3.48387 14.5161 1.5 12.0726 1.5ZM9.02419 12.6774C6.96774 12.6774 5.34677 11.0081 5.34677 9C5.34677 6.99194 6.99194 5.32258 9.02419 5.32258C11.0323 5.32258 12.6774 6.99194 12.6774 9C12.6774 11.0081 11.0565 12.6774 9.02419 12.6774ZM14.1048 5.66129C13.8629 5.92742 13.5 6.07258 13.0887 6.07258C12.7258 6.07258 12.3629 5.92742 12.0726 5.66129C11.8065 5.39516 11.6613 5.05645 11.6613 4.64516C11.6613 4.23387 11.8065 3.91935 12.0726 3.62903C12.3387 3.33871 12.6774 3.19355 13.0887 3.19355C13.4516 3.19355 13.8387 3.33871 14.1048 3.60484C14.3468 3.91935 14.5161 4.28226 14.5161 4.66935C14.4919 5.05645 14.3468 5.39516 14.1048 5.66129Z"
                            fill=""
                          ></path>
                          <path
                            d="M13.1119 4.06445C12.7974 4.06445 12.5312 4.33058 12.5312 4.6451C12.5312 4.95961 12.7974 5.22574 13.1119 5.22574C13.4264 5.22574 13.6925 4.95961 13.6925 4.6451C13.6925 4.33058 13.4506 4.06445 13.1119 4.06445Z"
                            fill=""
                          ></path>
                        </svg>
                      </Link>
                    </div>
                  </div>

                  <div className="group rounded-[10px] border border-stroke px-4 pb-10 pt-12 dark:border-strokedark">
                    <div className="relative z-1 mx-auto h-[7.5rem] w-full max-w-[7.5rem] rounded-full">
                      <img
                        className="rounded-full relative z-[2]"
                        src={`${process.env.PUBLIC_URL}/images/team/team-05.png`}
                        alt="team"
                      />

                      <span className="absolute right-0 top-0 z-[1] opacity-0 transition-all group-hover:opacity-100">
                        <svg
                          width="55"
                          height="53"
                          viewBox="0 0 55 53"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.5114 3.1009C13.3677 3.1009 14.0618 2.40674 14.0618 1.55045C14.0618 0.69416 13.3677 0 12.5114 0C11.6551 0 10.9609 0.69416 10.9609 1.55045C10.9609 2.40674 11.6551 3.1009 12.5114 3.1009Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22.5036 3.1009C23.3599 3.1009 24.054 2.40674 24.054 1.55045C24.054 0.69416 23.3599 0 22.5036 0C21.6473 0 20.9531 0.69416 20.9531 1.55045C20.9531 2.40674 21.6473 3.1009 22.5036 3.1009Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M32.4958 3.1009C33.3521 3.1009 34.0462 2.40674 34.0462 1.55045C34.0462 0.69416 33.3521 0 32.4958 0C31.6395 0 30.9453 0.69416 30.9453 1.55045C30.9453 2.40674 31.6395 3.1009 32.4958 3.1009Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M42.4879 3.1009C43.3442 3.1009 44.0384 2.40674 44.0384 1.55045C44.0384 0.69416 43.3442 0 42.4879 0C41.6317 0 40.9375 0.69416 40.9375 1.55045C40.9375 2.40674 41.6317 3.1009 42.4879 3.1009Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M52.4801 3.1009C53.3364 3.1009 54.0306 2.40674 54.0306 1.55045C54.0306 0.69416 53.3364 0 52.4801 0C51.6238 0 50.9297 0.69416 50.9297 1.55045C50.9297 2.40674 51.6238 3.1009 52.4801 3.1009Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.5192 13.0804C3.37549 13.0804 4.06965 12.3862 4.06965 11.5299C4.06965 10.6737 3.37549 9.97949 2.5192 9.97949C1.66291 9.97949 0.96875 10.6737 0.96875 11.5299C0.96875 12.3862 1.66291 13.0804 2.5192 13.0804Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.5114 13.0804C13.3677 13.0804 14.0618 12.3862 14.0618 11.5299C14.0618 10.6737 13.3677 9.97949 12.5114 9.97949C11.6551 9.97949 10.9609 10.6737 10.9609 11.5299C10.9609 12.3862 11.6551 13.0804 12.5114 13.0804Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22.5036 13.0804C23.3599 13.0804 24.054 12.3862 24.054 11.5299C24.054 10.6737 23.3599 9.97949 22.5036 9.97949C21.6473 9.97949 20.9531 10.6737 20.9531 11.5299C20.9531 12.3862 21.6473 13.0804 22.5036 13.0804Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M32.4958 13.0804C33.3521 13.0804 34.0462 12.3862 34.0462 11.5299C34.0462 10.6737 33.3521 9.97949 32.4958 9.97949C31.6395 9.97949 30.9453 10.6737 30.9453 11.5299C30.9453 12.3862 31.6395 13.0804 32.4958 13.0804Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M42.4879 13.0804C43.3442 13.0804 44.0384 12.3862 44.0384 11.5299C44.0384 10.6737 43.3442 9.97949 42.4879 9.97949C41.6317 9.97949 40.9375 10.6737 40.9375 11.5299C40.9375 12.3862 41.6317 13.0804 42.4879 13.0804Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M52.4801 13.0804C53.3364 13.0804 54.0306 12.3862 54.0306 11.5299C54.0306 10.6737 53.3364 9.97949 52.4801 9.97949C51.6238 9.97949 50.9297 10.6737 50.9297 11.5299C50.9297 12.3862 51.6238 13.0804 52.4801 13.0804Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.5192 23.0604C3.37549 23.0604 4.06965 22.3662 4.06965 21.5099C4.06965 20.6536 3.37549 19.9595 2.5192 19.9595C1.66291 19.9595 0.96875 20.6536 0.96875 21.5099C0.96875 22.3662 1.66291 23.0604 2.5192 23.0604Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.5114 23.0604C13.3677 23.0604 14.0618 22.3662 14.0618 21.5099C14.0618 20.6536 13.3677 19.9595 12.5114 19.9595C11.6551 19.9595 10.9609 20.6536 10.9609 21.5099C10.9609 22.3662 11.6551 23.0604 12.5114 23.0604Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22.5036 23.0604C23.3599 23.0604 24.054 22.3662 24.054 21.5099C24.054 20.6536 23.3599 19.9595 22.5036 19.9595C21.6473 19.9595 20.9531 20.6536 20.9531 21.5099C20.9531 22.3662 21.6473 23.0604 22.5036 23.0604Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M32.4958 23.0604C33.3521 23.0604 34.0462 22.3662 34.0462 21.5099C34.0462 20.6536 33.3521 19.9595 32.4958 19.9595C31.6395 19.9595 30.9453 20.6536 30.9453 21.5099C30.9453 22.3662 31.6395 23.0604 32.4958 23.0604Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M42.4879 23.0604C43.3442 23.0604 44.0384 22.3662 44.0384 21.5099C44.0384 20.6536 43.3442 19.9595 42.4879 19.9595C41.6317 19.9595 40.9375 20.6536 40.9375 21.5099C40.9375 22.3662 41.6317 23.0604 42.4879 23.0604Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M52.4801 23.0604C53.3364 23.0604 54.0306 22.3662 54.0306 21.5099C54.0306 20.6536 53.3364 19.9595 52.4801 19.9595C51.6238 19.9595 50.9297 20.6536 50.9297 21.5099C50.9297 22.3662 51.6238 23.0604 52.4801 23.0604Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.5192 33.0404C3.37549 33.0404 4.06965 32.3462 4.06965 31.4899C4.06965 30.6336 3.37549 29.9395 2.5192 29.9395C1.66291 29.9395 0.96875 30.6336 0.96875 31.4899C0.96875 32.3462 1.66291 33.0404 2.5192 33.0404Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.5114 33.0404C13.3677 33.0404 14.0618 32.3462 14.0618 31.4899C14.0618 30.6336 13.3677 29.9395 12.5114 29.9395C11.6551 29.9395 10.9609 30.6336 10.9609 31.4899C10.9609 32.3462 11.6551 33.0404 12.5114 33.0404Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22.5036 33.0404C23.3599 33.0404 24.054 32.3462 24.054 31.4899C24.054 30.6336 23.3599 29.9395 22.5036 29.9395C21.6473 29.9395 20.9531 30.6336 20.9531 31.4899C20.9531 32.3462 21.6473 33.0404 22.5036 33.0404Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M32.4958 33.0404C33.3521 33.0404 34.0462 32.3462 34.0462 31.4899C34.0462 30.6336 33.3521 29.9395 32.4958 29.9395C31.6395 29.9395 30.9453 30.6336 30.9453 31.4899C30.9453 32.3462 31.6395 33.0404 32.4958 33.0404Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M42.4879 33.0404C43.3442 33.0404 44.0384 32.3462 44.0384 31.4899C44.0384 30.6336 43.3442 29.9395 42.4879 29.9395C41.6317 29.9395 40.9375 30.6336 40.9375 31.4899C40.9375 32.3462 41.6317 33.0404 42.4879 33.0404Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M52.4801 33.0404C53.3364 33.0404 54.0306 32.3462 54.0306 31.4899C54.0306 30.6336 53.3364 29.9395 52.4801 29.9395C51.6238 29.9395 50.9297 30.6336 50.9297 31.4899C50.9297 32.3462 51.6238 33.0404 52.4801 33.0404Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.5192 43.0203C3.37549 43.0203 4.06965 42.3262 4.06965 41.4699C4.06965 40.6136 3.37549 39.9194 2.5192 39.9194C1.66291 39.9194 0.96875 40.6136 0.96875 41.4699C0.96875 42.3262 1.66291 43.0203 2.5192 43.0203Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.5114 43.0203C13.3677 43.0203 14.0618 42.3262 14.0618 41.4699C14.0618 40.6136 13.3677 39.9194 12.5114 39.9194C11.6551 39.9194 10.9609 40.6136 10.9609 41.4699C10.9609 42.3262 11.6551 43.0203 12.5114 43.0203Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22.5036 43.0203C23.3599 43.0203 24.054 42.3262 24.054 41.4699C24.054 40.6136 23.3599 39.9194 22.5036 39.9194C21.6473 39.9194 20.9531 40.6136 20.9531 41.4699C20.9531 42.3262 21.6473 43.0203 22.5036 43.0203Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M32.4958 43.0203C33.3521 43.0203 34.0462 42.3262 34.0462 41.4699C34.0462 40.6136 33.3521 39.9194 32.4958 39.9194C31.6395 39.9194 30.9453 40.6136 30.9453 41.4699C30.9453 42.3262 31.6395 43.0203 32.4958 43.0203Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M42.4879 43.0203C43.3442 43.0203 44.0384 42.3262 44.0384 41.4699C44.0384 40.6136 43.3442 39.9194 42.4879 39.9194C41.6317 39.9194 40.9375 40.6136 40.9375 41.4699C40.9375 42.3262 41.6317 43.0203 42.4879 43.0203Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M52.4801 43.0203C53.3364 43.0203 54.0306 42.3262 54.0306 41.4699C54.0306 40.6136 53.3364 39.9194 52.4801 39.9194C51.6238 39.9194 50.9297 40.6136 50.9297 41.4699C50.9297 42.3262 51.6238 43.0203 52.4801 43.0203Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.5192 53.0001C3.37549 53.0001 4.06965 52.3059 4.06965 51.4496C4.06965 50.5933 3.37549 49.8992 2.5192 49.8992C1.66291 49.8992 0.96875 50.5933 0.96875 51.4496C0.96875 52.3059 1.66291 53.0001 2.5192 53.0001Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.5114 53.0001C13.3677 53.0001 14.0618 52.3059 14.0618 51.4496C14.0618 50.5933 13.3677 49.8992 12.5114 49.8992C11.6551 49.8992 10.9609 50.5933 10.9609 51.4496C10.9609 52.3059 11.6551 53.0001 12.5114 53.0001Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22.5036 53.0001C23.3599 53.0001 24.054 52.3059 24.054 51.4496C24.054 50.5933 23.3599 49.8992 22.5036 49.8992C21.6473 49.8992 20.9531 50.5933 20.9531 51.4496C20.9531 52.3059 21.6473 53.0001 22.5036 53.0001Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M32.4958 53.0001C33.3521 53.0001 34.0462 52.3059 34.0462 51.4496C34.0462 50.5933 33.3521 49.8992 32.4958 49.8992C31.6395 49.8992 30.9453 50.5933 30.9453 51.4496C30.9453 52.3059 31.6395 53.0001 32.4958 53.0001Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M42.4879 53.0001C43.3442 53.0001 44.0384 52.3059 44.0384 51.4496C44.0384 50.5933 43.3442 49.8992 42.4879 49.8992C41.6317 49.8992 40.9375 50.5933 40.9375 51.4496C40.9375 52.3059 41.6317 53.0001 42.4879 53.0001Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M52.4801 53.0001C53.3364 53.0001 54.0306 52.3059 54.0306 51.4496C54.0306 50.5933 53.3364 49.8992 52.4801 49.8992C51.6238 49.8992 50.9297 50.5933 50.9297 51.4496C50.9297 52.3059 51.6238 53.0001 52.4801 53.0001Z"
                            fill="#3C50E0"
                          ></path>
                        </svg>
                      </span>

                      <span className="absolute bottom-0 left-0 -z-1 h-[2.375rem] w-[2.375rem] rounded-full bg-meta-3 opacity-0 transition-all group-hover:opacity-100"></span>
                    </div>

                    <div className="my-5 text-center">
                      <h4 className="mb-0.5 text-lg font-bold text-black dark:text-white">
                        Eva Hudson
                      </h4>
                      <p className="text-xs font-medium text-general-gray dark:text-dark-general-gray ">
                        Creative Designer
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-[1.375rem]">
                      <Link
                        to="#"
                        className="text-bodydark2 hover:text-primary"
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.3328 7.25625H11.7578H11.1953V6.69375V4.95V4.3875H11.7578H12.9391C13.2484 4.3875 13.5016 4.1625 13.5016 3.825V0.84375C13.5016 0.534375 13.2766 0.28125 12.9391 0.28125H10.8859C8.66406 0.28125 7.11719 1.85625 7.11719 4.19062V6.6375V7.2H6.55469H4.64219C4.24844 7.2 3.88281 7.50937 3.88281 7.95937V9.98438C3.88281 10.3781 4.19219 10.7438 4.64219 10.7438H6.49844H7.06094V11.3063V16.9594C7.06094 17.3531 7.37031 17.7188 7.82031 17.7188H10.4641C10.6328 17.7188 10.7734 17.6344 10.8859 17.5219C10.9984 17.4094 11.0828 17.2125 11.0828 17.0437V11.3344V10.7719H11.6734H12.9391C13.3047 10.7719 13.5859 10.5469 13.6422 10.2094V10.1813V10.1531L14.0359 8.2125C14.0641 8.01562 14.0359 7.79063 13.8672 7.56562C13.8109 7.425 13.5578 7.28437 13.3328 7.25625Z"
                            fill=""
                          ></path>
                        </svg>
                      </Link>

                      <Link
                        to="#"
                        className="text-bodydark2 hover:text-primary"
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.4647 4.83752C16.565 4.72065 16.4343 4.56793 16.2859 4.62263C15.9549 4.74474 15.6523 4.82528 15.2049 4.875C15.7552 4.56855 16.0112 4.13054 16.2194 3.59407C16.2696 3.46467 16.1182 3.34725 15.9877 3.40907C15.458 3.66023 14.8864 3.84658 14.2854 3.95668C13.6913 3.3679 12.8445 3 11.9077 3C10.1089 3 8.65027 4.35658 8.65027 6.02938C8.65027 6.26686 8.67937 6.49818 8.73427 6.71966C6.14854 6.59919 3.84286 5.49307 2.24098 3.79696C2.13119 3.68071 1.93197 3.69614 1.86361 3.83792C1.68124 4.21619 1.57957 4.63582 1.57957 5.07762C1.57957 6.12843 2.15446 7.05557 3.02837 7.59885C2.63653 7.58707 2.2618 7.51073 1.91647 7.38116C1.74834 7.31808 1.5556 7.42893 1.57819 7.59847C1.75162 8.9004 2.80568 9.97447 4.16624 10.2283C3.89302 10.2978 3.60524 10.3347 3.30754 10.3347C3.23536 10.3347 3.16381 10.3324 3.0929 10.3281C2.91247 10.3169 2.76583 10.4783 2.84319 10.6328C3.35357 11.6514 4.45563 12.3625 5.73809 12.3847C4.62337 13.1974 3.21889 13.6816 1.69269 13.6816C1.50451 13.6816 1.42378 13.9235 1.59073 14.0056C2.88015 14.6394 4.34854 15 5.90878 15C11.9005 15 15.1765 10.384 15.1765 6.38067C15.1765 6.24963 15.1732 6.11858 15.1672 5.98877C15.6535 5.66205 16.0907 5.27354 16.4647 4.83752Z"
                            fill=""
                          ></path>
                        </svg>
                      </Link>

                      <Link
                        to="#"
                        className="text-bodydark2 hover:text-primary"
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.0252 11.8065C10.5752 11.8065 11.8317 10.55 11.8317 9.00005C11.8317 7.4501 10.5752 6.1936 9.0252 6.1936C7.47524 6.1936 6.21875 7.4501 6.21875 9.00005C6.21875 10.55 7.47524 11.8065 9.0252 11.8065Z"
                            fill=""
                          ></path>
                          <path
                            d="M12.0726 1.5H5.92742C3.48387 1.5 1.5 3.48387 1.5 5.92742V12.0242C1.5 14.5161 3.48387 16.5 5.92742 16.5H12.0242C14.5161 16.5 16.5 14.5161 16.5 12.0726V5.92742C16.5 3.48387 14.5161 1.5 12.0726 1.5ZM9.02419 12.6774C6.96774 12.6774 5.34677 11.0081 5.34677 9C5.34677 6.99194 6.99194 5.32258 9.02419 5.32258C11.0323 5.32258 12.6774 6.99194 12.6774 9C12.6774 11.0081 11.0565 12.6774 9.02419 12.6774ZM14.1048 5.66129C13.8629 5.92742 13.5 6.07258 13.0887 6.07258C12.7258 6.07258 12.3629 5.92742 12.0726 5.66129C11.8065 5.39516 11.6613 5.05645 11.6613 4.64516C11.6613 4.23387 11.8065 3.91935 12.0726 3.62903C12.3387 3.33871 12.6774 3.19355 13.0887 3.19355C13.4516 3.19355 13.8387 3.33871 14.1048 3.60484C14.3468 3.91935 14.5161 4.28226 14.5161 4.66935C14.4919 5.05645 14.3468 5.39516 14.1048 5.66129Z"
                            fill=""
                          ></path>
                          <path
                            d="M13.1119 4.06445C12.7974 4.06445 12.5312 4.33058 12.5312 4.6451C12.5312 4.95961 12.7974 5.22574 13.1119 5.22574C13.4264 5.22574 13.6925 4.95961 13.6925 4.6451C13.6925 4.33058 13.4506 4.06445 13.1119 4.06445Z"
                            fill=""
                          ></path>
                        </svg>
                      </Link>
                    </div>
                  </div>

                  <div className="group rounded-[10px] border border-stroke px-4 pb-10 pt-12 dark:border-strokedark">
                    <div className="relative z-1 mx-auto h-[7.5rem] w-full max-w-[7.5rem] rounded-full">
                      <img
                        className="rounded-full relative z-[2]"
                        src={`${process.env.PUBLIC_URL}/images/team/team-08.png`}
                        alt="team"
                      />

                      <span className="absolute right-0 top-0 z-[1] opacity-0 transition-all group-hover:opacity-100">
                        <svg
                          width="55"
                          height="53"
                          viewBox="0 0 55 53"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.5114 3.1009C13.3677 3.1009 14.0618 2.40674 14.0618 1.55045C14.0618 0.69416 13.3677 0 12.5114 0C11.6551 0 10.9609 0.69416 10.9609 1.55045C10.9609 2.40674 11.6551 3.1009 12.5114 3.1009Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22.5036 3.1009C23.3599 3.1009 24.054 2.40674 24.054 1.55045C24.054 0.69416 23.3599 0 22.5036 0C21.6473 0 20.9531 0.69416 20.9531 1.55045C20.9531 2.40674 21.6473 3.1009 22.5036 3.1009Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M32.4958 3.1009C33.3521 3.1009 34.0462 2.40674 34.0462 1.55045C34.0462 0.69416 33.3521 0 32.4958 0C31.6395 0 30.9453 0.69416 30.9453 1.55045C30.9453 2.40674 31.6395 3.1009 32.4958 3.1009Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M42.4879 3.1009C43.3442 3.1009 44.0384 2.40674 44.0384 1.55045C44.0384 0.69416 43.3442 0 42.4879 0C41.6317 0 40.9375 0.69416 40.9375 1.55045C40.9375 2.40674 41.6317 3.1009 42.4879 3.1009Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M52.4801 3.1009C53.3364 3.1009 54.0306 2.40674 54.0306 1.55045C54.0306 0.69416 53.3364 0 52.4801 0C51.6238 0 50.9297 0.69416 50.9297 1.55045C50.9297 2.40674 51.6238 3.1009 52.4801 3.1009Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.5192 13.0804C3.37549 13.0804 4.06965 12.3862 4.06965 11.5299C4.06965 10.6737 3.37549 9.97949 2.5192 9.97949C1.66291 9.97949 0.96875 10.6737 0.96875 11.5299C0.96875 12.3862 1.66291 13.0804 2.5192 13.0804Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.5114 13.0804C13.3677 13.0804 14.0618 12.3862 14.0618 11.5299C14.0618 10.6737 13.3677 9.97949 12.5114 9.97949C11.6551 9.97949 10.9609 10.6737 10.9609 11.5299C10.9609 12.3862 11.6551 13.0804 12.5114 13.0804Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22.5036 13.0804C23.3599 13.0804 24.054 12.3862 24.054 11.5299C24.054 10.6737 23.3599 9.97949 22.5036 9.97949C21.6473 9.97949 20.9531 10.6737 20.9531 11.5299C20.9531 12.3862 21.6473 13.0804 22.5036 13.0804Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M32.4958 13.0804C33.3521 13.0804 34.0462 12.3862 34.0462 11.5299C34.0462 10.6737 33.3521 9.97949 32.4958 9.97949C31.6395 9.97949 30.9453 10.6737 30.9453 11.5299C30.9453 12.3862 31.6395 13.0804 32.4958 13.0804Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M42.4879 13.0804C43.3442 13.0804 44.0384 12.3862 44.0384 11.5299C44.0384 10.6737 43.3442 9.97949 42.4879 9.97949C41.6317 9.97949 40.9375 10.6737 40.9375 11.5299C40.9375 12.3862 41.6317 13.0804 42.4879 13.0804Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M52.4801 13.0804C53.3364 13.0804 54.0306 12.3862 54.0306 11.5299C54.0306 10.6737 53.3364 9.97949 52.4801 9.97949C51.6238 9.97949 50.9297 10.6737 50.9297 11.5299C50.9297 12.3862 51.6238 13.0804 52.4801 13.0804Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.5192 23.0604C3.37549 23.0604 4.06965 22.3662 4.06965 21.5099C4.06965 20.6536 3.37549 19.9595 2.5192 19.9595C1.66291 19.9595 0.96875 20.6536 0.96875 21.5099C0.96875 22.3662 1.66291 23.0604 2.5192 23.0604Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.5114 23.0604C13.3677 23.0604 14.0618 22.3662 14.0618 21.5099C14.0618 20.6536 13.3677 19.9595 12.5114 19.9595C11.6551 19.9595 10.9609 20.6536 10.9609 21.5099C10.9609 22.3662 11.6551 23.0604 12.5114 23.0604Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22.5036 23.0604C23.3599 23.0604 24.054 22.3662 24.054 21.5099C24.054 20.6536 23.3599 19.9595 22.5036 19.9595C21.6473 19.9595 20.9531 20.6536 20.9531 21.5099C20.9531 22.3662 21.6473 23.0604 22.5036 23.0604Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M32.4958 23.0604C33.3521 23.0604 34.0462 22.3662 34.0462 21.5099C34.0462 20.6536 33.3521 19.9595 32.4958 19.9595C31.6395 19.9595 30.9453 20.6536 30.9453 21.5099C30.9453 22.3662 31.6395 23.0604 32.4958 23.0604Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M42.4879 23.0604C43.3442 23.0604 44.0384 22.3662 44.0384 21.5099C44.0384 20.6536 43.3442 19.9595 42.4879 19.9595C41.6317 19.9595 40.9375 20.6536 40.9375 21.5099C40.9375 22.3662 41.6317 23.0604 42.4879 23.0604Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M52.4801 23.0604C53.3364 23.0604 54.0306 22.3662 54.0306 21.5099C54.0306 20.6536 53.3364 19.9595 52.4801 19.9595C51.6238 19.9595 50.9297 20.6536 50.9297 21.5099C50.9297 22.3662 51.6238 23.0604 52.4801 23.0604Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.5192 33.0404C3.37549 33.0404 4.06965 32.3462 4.06965 31.4899C4.06965 30.6336 3.37549 29.9395 2.5192 29.9395C1.66291 29.9395 0.96875 30.6336 0.96875 31.4899C0.96875 32.3462 1.66291 33.0404 2.5192 33.0404Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.5114 33.0404C13.3677 33.0404 14.0618 32.3462 14.0618 31.4899C14.0618 30.6336 13.3677 29.9395 12.5114 29.9395C11.6551 29.9395 10.9609 30.6336 10.9609 31.4899C10.9609 32.3462 11.6551 33.0404 12.5114 33.0404Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22.5036 33.0404C23.3599 33.0404 24.054 32.3462 24.054 31.4899C24.054 30.6336 23.3599 29.9395 22.5036 29.9395C21.6473 29.9395 20.9531 30.6336 20.9531 31.4899C20.9531 32.3462 21.6473 33.0404 22.5036 33.0404Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M32.4958 33.0404C33.3521 33.0404 34.0462 32.3462 34.0462 31.4899C34.0462 30.6336 33.3521 29.9395 32.4958 29.9395C31.6395 29.9395 30.9453 30.6336 30.9453 31.4899C30.9453 32.3462 31.6395 33.0404 32.4958 33.0404Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M42.4879 33.0404C43.3442 33.0404 44.0384 32.3462 44.0384 31.4899C44.0384 30.6336 43.3442 29.9395 42.4879 29.9395C41.6317 29.9395 40.9375 30.6336 40.9375 31.4899C40.9375 32.3462 41.6317 33.0404 42.4879 33.0404Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M52.4801 33.0404C53.3364 33.0404 54.0306 32.3462 54.0306 31.4899C54.0306 30.6336 53.3364 29.9395 52.4801 29.9395C51.6238 29.9395 50.9297 30.6336 50.9297 31.4899C50.9297 32.3462 51.6238 33.0404 52.4801 33.0404Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.5192 43.0203C3.37549 43.0203 4.06965 42.3262 4.06965 41.4699C4.06965 40.6136 3.37549 39.9194 2.5192 39.9194C1.66291 39.9194 0.96875 40.6136 0.96875 41.4699C0.96875 42.3262 1.66291 43.0203 2.5192 43.0203Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.5114 43.0203C13.3677 43.0203 14.0618 42.3262 14.0618 41.4699C14.0618 40.6136 13.3677 39.9194 12.5114 39.9194C11.6551 39.9194 10.9609 40.6136 10.9609 41.4699C10.9609 42.3262 11.6551 43.0203 12.5114 43.0203Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22.5036 43.0203C23.3599 43.0203 24.054 42.3262 24.054 41.4699C24.054 40.6136 23.3599 39.9194 22.5036 39.9194C21.6473 39.9194 20.9531 40.6136 20.9531 41.4699C20.9531 42.3262 21.6473 43.0203 22.5036 43.0203Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M32.4958 43.0203C33.3521 43.0203 34.0462 42.3262 34.0462 41.4699C34.0462 40.6136 33.3521 39.9194 32.4958 39.9194C31.6395 39.9194 30.9453 40.6136 30.9453 41.4699C30.9453 42.3262 31.6395 43.0203 32.4958 43.0203Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M42.4879 43.0203C43.3442 43.0203 44.0384 42.3262 44.0384 41.4699C44.0384 40.6136 43.3442 39.9194 42.4879 39.9194C41.6317 39.9194 40.9375 40.6136 40.9375 41.4699C40.9375 42.3262 41.6317 43.0203 42.4879 43.0203Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M52.4801 43.0203C53.3364 43.0203 54.0306 42.3262 54.0306 41.4699C54.0306 40.6136 53.3364 39.9194 52.4801 39.9194C51.6238 39.9194 50.9297 40.6136 50.9297 41.4699C50.9297 42.3262 51.6238 43.0203 52.4801 43.0203Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.5192 53.0001C3.37549 53.0001 4.06965 52.3059 4.06965 51.4496C4.06965 50.5933 3.37549 49.8992 2.5192 49.8992C1.66291 49.8992 0.96875 50.5933 0.96875 51.4496C0.96875 52.3059 1.66291 53.0001 2.5192 53.0001Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.5114 53.0001C13.3677 53.0001 14.0618 52.3059 14.0618 51.4496C14.0618 50.5933 13.3677 49.8992 12.5114 49.8992C11.6551 49.8992 10.9609 50.5933 10.9609 51.4496C10.9609 52.3059 11.6551 53.0001 12.5114 53.0001Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22.5036 53.0001C23.3599 53.0001 24.054 52.3059 24.054 51.4496C24.054 50.5933 23.3599 49.8992 22.5036 49.8992C21.6473 49.8992 20.9531 50.5933 20.9531 51.4496C20.9531 52.3059 21.6473 53.0001 22.5036 53.0001Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M32.4958 53.0001C33.3521 53.0001 34.0462 52.3059 34.0462 51.4496C34.0462 50.5933 33.3521 49.8992 32.4958 49.8992C31.6395 49.8992 30.9453 50.5933 30.9453 51.4496C30.9453 52.3059 31.6395 53.0001 32.4958 53.0001Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M42.4879 53.0001C43.3442 53.0001 44.0384 52.3059 44.0384 51.4496C44.0384 50.5933 43.3442 49.8992 42.4879 49.8992C41.6317 49.8992 40.9375 50.5933 40.9375 51.4496C40.9375 52.3059 41.6317 53.0001 42.4879 53.0001Z"
                            fill="#3C50E0"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M52.4801 53.0001C53.3364 53.0001 54.0306 52.3059 54.0306 51.4496C54.0306 50.5933 53.3364 49.8992 52.4801 49.8992C51.6238 49.8992 50.9297 50.5933 50.9297 51.4496C50.9297 52.3059 51.6238 53.0001 52.4801 53.0001Z"
                            fill="#3C50E0"
                          ></path>
                        </svg>
                      </span>

                      <span className="absolute bottom-0 left-0 -z-1 h-[2.375rem] w-[2.375rem] rounded-full bg-meta-3 opacity-0 transition-all group-hover:opacity-100"></span>
                    </div>

                    <div className="my-5 text-center">
                      <h4 className="mb-0.5 text-lg font-bold text-black dark:text-white">
                        Jackie Sanders
                      </h4>
                      <p className="text-xs font-medium text-general-gray dark:text-dark-general-gray ">
                        SEO Expert
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-[1.375rem]">
                      <Link
                        to="#"
                        className="text-bodydark2 hover:text-primary"
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.3328 7.25625H11.7578H11.1953V6.69375V4.95V4.3875H11.7578H12.9391C13.2484 4.3875 13.5016 4.1625 13.5016 3.825V0.84375C13.5016 0.534375 13.2766 0.28125 12.9391 0.28125H10.8859C8.66406 0.28125 7.11719 1.85625 7.11719 4.19062V6.6375V7.2H6.55469H4.64219C4.24844 7.2 3.88281 7.50937 3.88281 7.95937V9.98438C3.88281 10.3781 4.19219 10.7438 4.64219 10.7438H6.49844H7.06094V11.3063V16.9594C7.06094 17.3531 7.37031 17.7188 7.82031 17.7188H10.4641C10.6328 17.7188 10.7734 17.6344 10.8859 17.5219C10.9984 17.4094 11.0828 17.2125 11.0828 17.0437V11.3344V10.7719H11.6734H12.9391C13.3047 10.7719 13.5859 10.5469 13.6422 10.2094V10.1813V10.1531L14.0359 8.2125C14.0641 8.01562 14.0359 7.79063 13.8672 7.56562C13.8109 7.425 13.5578 7.28437 13.3328 7.25625Z"
                            fill=""
                          ></path>
                        </svg>
                      </Link>

                      <Link
                        to="#"
                        className="text-bodydark2 hover:text-primary"
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.4647 4.83752C16.565 4.72065 16.4343 4.56793 16.2859 4.62263C15.9549 4.74474 15.6523 4.82528 15.2049 4.875C15.7552 4.56855 16.0112 4.13054 16.2194 3.59407C16.2696 3.46467 16.1182 3.34725 15.9877 3.40907C15.458 3.66023 14.8864 3.84658 14.2854 3.95668C13.6913 3.3679 12.8445 3 11.9077 3C10.1089 3 8.65027 4.35658 8.65027 6.02938C8.65027 6.26686 8.67937 6.49818 8.73427 6.71966C6.14854 6.59919 3.84286 5.49307 2.24098 3.79696C2.13119 3.68071 1.93197 3.69614 1.86361 3.83792C1.68124 4.21619 1.57957 4.63582 1.57957 5.07762C1.57957 6.12843 2.15446 7.05557 3.02837 7.59885C2.63653 7.58707 2.2618 7.51073 1.91647 7.38116C1.74834 7.31808 1.5556 7.42893 1.57819 7.59847C1.75162 8.9004 2.80568 9.97447 4.16624 10.2283C3.89302 10.2978 3.60524 10.3347 3.30754 10.3347C3.23536 10.3347 3.16381 10.3324 3.0929 10.3281C2.91247 10.3169 2.76583 10.4783 2.84319 10.6328C3.35357 11.6514 4.45563 12.3625 5.73809 12.3847C4.62337 13.1974 3.21889 13.6816 1.69269 13.6816C1.50451 13.6816 1.42378 13.9235 1.59073 14.0056C2.88015 14.6394 4.34854 15 5.90878 15C11.9005 15 15.1765 10.384 15.1765 6.38067C15.1765 6.24963 15.1732 6.11858 15.1672 5.98877C15.6535 5.66205 16.0907 5.27354 16.4647 4.83752Z"
                            fill=""
                          ></path>
                        </svg>
                      </Link>

                      <Link
                        to="#"
                        className="text-bodydark2 hover:text-primary"
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.0252 11.8065C10.5752 11.8065 11.8317 10.55 11.8317 9.00005C11.8317 7.4501 10.5752 6.1936 9.0252 6.1936C7.47524 6.1936 6.21875 7.4501 6.21875 9.00005C6.21875 10.55 7.47524 11.8065 9.0252 11.8065Z"
                            fill=""
                          ></path>
                          <path
                            d="M12.0726 1.5H5.92742C3.48387 1.5 1.5 3.48387 1.5 5.92742V12.0242C1.5 14.5161 3.48387 16.5 5.92742 16.5H12.0242C14.5161 16.5 16.5 14.5161 16.5 12.0726V5.92742C16.5 3.48387 14.5161 1.5 12.0726 1.5ZM9.02419 12.6774C6.96774 12.6774 5.34677 11.0081 5.34677 9C5.34677 6.99194 6.99194 5.32258 9.02419 5.32258C11.0323 5.32258 12.6774 6.99194 12.6774 9C12.6774 11.0081 11.0565 12.6774 9.02419 12.6774ZM14.1048 5.66129C13.8629 5.92742 13.5 6.07258 13.0887 6.07258C12.7258 6.07258 12.3629 5.92742 12.0726 5.66129C11.8065 5.39516 11.6613 5.05645 11.6613 4.64516C11.6613 4.23387 11.8065 3.91935 12.0726 3.62903C12.3387 3.33871 12.6774 3.19355 13.0887 3.19355C13.4516 3.19355 13.8387 3.33871 14.1048 3.60484C14.3468 3.91935 14.5161 4.28226 14.5161 4.66935C14.4919 5.05645 14.3468 5.39516 14.1048 5.66129Z"
                            fill=""
                          ></path>
                          <path
                            d="M13.1119 4.06445C12.7974 4.06445 12.5312 4.33058 12.5312 4.6451C12.5312 4.95961 12.7974 5.22574 13.1119 5.22574C13.4264 5.22574 13.6925 4.95961 13.6925 4.6451C13.6925 4.33058 13.4506 4.06445 13.1119 4.06445Z"
                            fill=""
                          ></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ========= */}
      </div>
    </Layout>
  );
};

export default Team;
