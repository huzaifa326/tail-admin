import Layout from "../Layout";
import { NavLink } from "react-router-dom";

const ProTables = () => {
  return (
    <Layout>
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-[#F1F5F9] dark:bg-[#1A222C]">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-[26px] leading-[30px] font-bold text-black dark:text-white">
            Pro Tables
          </h2>

          <nav>
            <ol className="flex items-center gap-2">
              <li className="text-general-gray dark:text-dark-general-gray">
                <NavLink   to="/"
                  className="font-medium text-general-gray dark:text-dark-general-gray "          
                >
                  Dashboard /
                </NavLink>
              </li>
              <li className="font-medium text-primary">Tables</li>
            </ol>
          </nav>
        </div>
        <div className="flex flex-col gap-10 ">
        {/* ==Table-1== */}
          <div className="overflow-hidden rounded-[10px]">
            <div className="max-w-full overflow-x-auto">
              <div className="min-w-[1170px]">
                <div className="grid grid-cols-12 bg-[#F9FAFB] px-5 py-4 dark:bg-meta-4 lg:px-7.5 2xl:px-11">
                  <div className="col-span-3">
                    <h5 className="font-medium text-[#637381] dark:text-dark-general-gray">
                      NAME
                    </h5>
                  </div>

                  <div className="col-span-3">
                    <h5 className="font-medium text-[#637381] dark:text-dark-general-gray">
                      TITLE
                    </h5>
                  </div>

                  <div className="col-span-3">
                    <h5 className="font-medium text-[#637381] dark:text-dark-general-gray">
                      EMAIL
                    </h5>
                  </div>

                  <div className="col-span-2">
                    <h5 className="font-medium text-[#637381] dark:text-dark-general-gray">
                      ROLE
                    </h5>
                  </div>
                </div>

                <div className="bg-white dark:bg-boxdark">
                  <div className="grid grid-cols-12 border-t border-[#EEEEEE] px-5 py-4 dark:border-strokedark lg:px-7.5 2xl:px-11">
                    <div className="col-span-3">
                      <p className="text-[#637381] dark:text-dark-general-gray">
                        Musharof Chowdhury
                      </p>
                    </div>

                    <div className="col-span-3">
                      <p className="text-[#637381] dark:text-dark-general-gray">
                        Multidisciplinary Web Entrepreneur
                      </p>
                    </div>

                    <div className="col-span-3">
                      <p className="text-[#637381] dark:text-dark-general-gray">
                        musharof@example.com
                      </p>
                    </div>

                    <div className="col-span-2">
                      <p className="text-[#637381] dark:text-dark-general-gray">Owner</p>
                    </div>

                    <div className="col-span-1">
                      <button className="float-right text-primary">Edit</button>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 border-t border-[#EEEEEE] px-5 py-4 dark:border-strokedark lg:px-7.5 2xl:px-11">
                    <div className="col-span-3">
                      <p className="text-[#637381] dark:text-dark-general-gray">
                        Naimur Rahman
                      </p>
                    </div>

                    <div className="col-span-3">
                      <p className="text-[#637381] dark:text-dark-general-gray">
                        Website Front-end Developer
                      </p>
                    </div>

                    <div className="col-span-3">
                      <p className="text-[#637381] dark:text-dark-general-gray">
                        naimurrahman@example.com
                      </p>
                    </div>

                    <div className="col-span-2">
                      <p className="text-[#637381] dark:text-dark-general-gray">Member</p>
                    </div>

                    <div className="col-span-1">
                      <button className="float-right text-primary">Edit</button>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 border-t border-[#EEEEEE] px-5 py-4 dark:border-strokedark lg:px-7.5 2xl:px-11">
                    <div className="col-span-3">
                      <p className="text-[#637381] dark:text-dark-general-gray">
                        Shafiq Hammad
                      </p>
                    </div>

                    <div className="col-span-3">
                      <p className="text-[#637381] dark:text-dark-general-gray">
                        Regional Paradigm Technician
                      </p>
                    </div>

                    <div className="col-span-3">
                      <p className="text-[#637381] dark:text-dark-general-gray">
                        shafiq.hd@example.com
                      </p>
                    </div>

                    <div className="col-span-2">
                      <p className="text-[#637381] dark:text-dark-general-gray">Moderator</p>
                    </div>

                    <div className="col-span-1">
                      <button className="float-right text-primary">Edit</button>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 border-t border-[#EEEEEE] px-5 py-4 dark:border-strokedark lg:px-7.5 2xl:px-11">
                    <div className="col-span-3">
                      <p className="text-[#637381] dark:text-dark-general-gray">
                        Alex Semuyel
                      </p>
                    </div>

                    <div className="col-span-3">
                      <p className="text-[#637381] dark:text-dark-general-gray">
                        Applications Engineer
                      </p>
                    </div>

                    <div className="col-span-3">
                      <p className="text-[#637381] dark:text-dark-general-gray">
                        alex.semuel@example.com
                      </p>
                    </div>

                    <div className="col-span-2">
                      <p className="text-[#637381] dark:text-dark-general-gray">Admin</p>
                    </div>

                    <div className="col-span-1">
                      <button className="float-right text-primary">Edit</button>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 border-t border-[#EEEEEE] px-5 py-4 dark:border-strokedark lg:px-7.5 2xl:px-11">
                    <div className="col-span-3">
                      <p className="text-[#637381] dark:text-dark-general-gray">
                        Sulium Keliym
                      </p>
                    </div>

                    <div className="col-span-3">
                      <p className="text-[#637381] dark:text-dark-general-gray">
                        Lead Implementation Liaison
                      </p>
                    </div>

                    <div className="col-span-3">
                      <p className="text-[#637381] dark:text-dark-general-gray">
                        suliym.info@example.com
                      </p>
                    </div>

                    <div className="col-span-2">
                      <p className="text-[#637381] dark:text-dark-general-gray">Member</p>
                    </div>

                    <div className="col-span-1">
                      <button className="float-right text-primary">Edit</button>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 border-t border-[#EEEEEE] px-5 py-4 dark:border-strokedark lg:px-7.5 2xl:px-11">
                    <div className="col-span-3">
                      <p className="text-[#637381] dark:text-dark-general-gray">
                        Jhon Smith
                      </p>
                    </div>

                    <div className="col-span-3">
                      <p className="text-[#637381] dark:text-dark-general-gray">
                        Regional Paradigm Technician
                      </p>
                    </div>

                    <div className="col-span-3">
                      <p className="text-[#637381] dark:text-dark-general-gray">
                        jhon.smith@example.com
                      </p>
                    </div>

                    <div className="col-span-2">
                      <p className="text-[#637381] dark:text-dark-general-gray">Admin</p>
                    </div>

                    <div className="col-span-1">
                      <button className="float-right text-primary">Edit</button>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 border-t border-[#EEEEEE] px-5 py-4 dark:border-strokedark lg:px-7.5 2xl:px-11">
                    <div className="col-span-3">
                      <p className="text-[#637381] dark:text-dark-general-gray">
                        Jenifer Lofess
                      </p>
                    </div>

                    <div className="col-span-3">
                      <p className="text-[#637381] dark:text-dark-general-gray">
                        Multidisciplinary Web Entrepreneur
                      </p>
                    </div>

                    <div className="col-span-3">
                      <p className="text-[#637381] dark:text-dark-general-gray">
                        loffes.cooper@example.com
                      </p>
                    </div>

                    <div className="col-span-2">
                      <p className="text-[#637381] dark:text-dark-general-gray">Member</p>
                    </div>

                    <div className="col-span-1">
                      <button className="float-right text-primary">Edit</button>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 border-t border-[#EEEEEE] px-5 py-4 dark:border-strokedark lg:px-7.5 2xl:px-11">
                    <div className="col-span-3">
                      <p className="text-[#637381] dark:text-dark-general-gray">
                        Devid Deekook
                      </p>
                    </div>

                    <div className="col-span-3">
                      <p className="text-[#637381] dark:text-dark-general-gray">
                        Central Security Manager
                      </p>
                    </div>

                    <div className="col-span-3">
                      <p className="text-[#637381] dark:text-dark-general-gray">
                        devid.decok@example.com
                      </p>
                    </div>

                    <div className="col-span-2">
                      <p className="text-[#637381] dark:text-dark-general-gray">Moderator</p>
                    </div>

                    <div className="col-span-1">
                      <button className="float-right text-primary">Edit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ==Table-2== */}
          <div className="w-full overflow-x-auto">
            <div className="min-w-[1170px]">
              <div className="grid grid-cols-12 rounded-t-[10px] bg-primary px-5 py-4 lg:px-7.5 2xl:px-11">
                <div className="col-span-3">
                  <h5 className="font-medium text-white">Name</h5>
                </div>

                <div className="col-span-3">
                  <h5 className="font-medium text-white">Position</h5>
                </div>

                <div className="col-span-3">
                  <h5 className="font-medium text-white">Email</h5>
                </div>

                <div className="col-span-2">
                  <h5 className="font-medium text-white">Role</h5>
                </div>

                <div className="col-span-1">
                  <h5 className="text-right font-medium text-white">Edit</h5>
                </div>
              </div>

              <div className="bg-white dark:bg-boxdark rounded-b-[10px]">
                <div className="grid grid-cols-12 border-t border-[#EEEEEE] px-5 py-4 dark:border-strokedark lg:px-7.5 2xl:px-11">
                  <div className="col-span-3">
                    <p className="text-[#637381] dark:text-dark-general-gray">
                      Musharof Chowdhury
                    </p>
                  </div>

                  <div className="col-span-3">
                    <p className="text-[#637381] dark:text-dark-general-gray">
                      Multidisciplinary Web Entrepreneur
                    </p>
                  </div>

                  <div className="col-span-3">
                    <p className="text-[#637381] dark:text-dark-general-gray">
                      musharof@example.com
                    </p>
                  </div>

                  <div className="col-span-2">
                    <p className="text-[#637381] dark:text-dark-general-gray">Owner</p>
                  </div>

                  <div className="col-span-1 relative">
                    <div x-data="{ isOpen: false }">
                      <button className="float-right inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm text-black shadow-11 hover:text-primary dark:bg-meta-4 dark:text-white dark:shadow-none">
                        Action
                        <svg
                          className="fill-current"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.00039 11.4C7.85039 11.4 7.72539 11.35 7.60039 11.25L1.85039 5.60005C1.62539 5.37505 1.62539 5.02505 1.85039 4.80005C2.07539 4.57505 2.42539 4.57505 2.65039 4.80005L8.00039 10.025L13.3504 4.75005C13.5754 4.52505 13.9254 4.52505 14.1504 4.75005C14.3754 4.97505 14.3754 5.32505 14.1504 5.55005L8.40039 11.2C8.27539 11.325 8.15039 11.4 8.00039 11.4Z"
                            fill=""
                          ></path>
                        </svg>
                      </button>

                      <div
                        x-show="isOpen"
                        className="absolute right-0 top-full z-1 mt-1 w-full max-w-39.5 rounded-[5px] bg-white py-2.5 shadow-12 dark:bg-boxdark"
                        style={{ display: "none" }}
                      >
                        <button className="flex w-full px-4 py-2 text-sm hover:bg-whiter hover:text-primary dark:hover:bg-meta-4">
                          Edit
                        </button>
                        <button className="flex w-full px-4 py-2 text-sm hover:bg-whiter hover:text-primary dark:hover:bg-meta-4">
                          Delete
                        </button>
                        <button className="flex w-full px-4 py-2 text-sm hover:bg-whiter hover:text-primary dark:hover:bg-meta-4">
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-12 border-t border-[#EEEEEE] px-5 py-4 dark:border-strokedark lg:px-7.5 2xl:px-11">
                  <div className="col-span-3">
                    <p className="text-[#637381] dark:text-dark-general-gray">
                      Naimur Rahman
                    </p>
                  </div>

                  <div className="col-span-3">
                    <p className="text-[#637381] dark:text-dark-general-gray">
                      Website Front-end Developer
                    </p>
                  </div>

                  <div className="col-span-3">
                    <p className="text-[#637381] dark:text-dark-general-gray">
                      naimurrahman@example.com
                    </p>
                  </div>

                  <div className="col-span-2">
                    <p className="text-[#637381] dark:text-dark-general-gray">Member</p>
                  </div>

                  <div className="col-span-1 relative">
                    <div x-data="{ isOpen: false }">
                      <button className="float-right inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm text-black shadow-11 hover:text-primary dark:bg-meta-4 dark:text-white dark:shadow-none">
                        Action
                        <svg
                          className="fill-current"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.00039 11.4C7.85039 11.4 7.72539 11.35 7.60039 11.25L1.85039 5.60005C1.62539 5.37505 1.62539 5.02505 1.85039 4.80005C2.07539 4.57505 2.42539 4.57505 2.65039 4.80005L8.00039 10.025L13.3504 4.75005C13.5754 4.52505 13.9254 4.52505 14.1504 4.75005C14.3754 4.97505 14.3754 5.32505 14.1504 5.55005L8.40039 11.2C8.27539 11.325 8.15039 11.4 8.00039 11.4Z"
                            fill=""
                          ></path>
                        </svg>
                      </button>

                      <div
                        x-show="isOpen"
                        className="absolute right-0 top-full z-1 mt-1 w-full max-w-39.5 rounded-[5px] bg-white py-2.5 shadow-12 dark:bg-boxdark"
                        style={{ display: "none" }}
                      >
                        <button className="flex w-full px-4 py-2 text-sm hover:bg-whiter hover:text-primary dark:hover:bg-meta-4">
                          Edit
                        </button>
                        <button className="flex w-full px-4 py-2 text-sm hover:bg-whiter hover:text-primary dark:hover:bg-meta-4">
                          Delete
                        </button>
                        <button className="flex w-full px-4 py-2 text-sm hover:bg-whiter hover:text-primary dark:hover:bg-meta-4">
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-12 border-t border-[#EEEEEE] px-5 py-4 dark:border-strokedark lg:px-7.5 2xl:px-11">
                  <div className="col-span-3">
                    <p className="text-[#637381] dark:text-dark-general-gray">
                      Shafiq Hammad
                    </p>
                  </div>

                  <div className="col-span-3">
                    <p className="text-[#637381] dark:text-dark-general-gray">
                      Regional Paradigm Technician
                    </p>
                  </div>

                  <div className="col-span-3">
                    <p className="text-[#637381] dark:text-dark-general-gray">
                      shafiq.hd@example.com
                    </p>
                  </div>

                  <div className="col-span-2">
                    <p className="text-[#637381] dark:text-dark-general-gray">Moderator</p>
                  </div>

                  <div className="col-span-1 relative">
                    <div x-data="{ isOpen: false }">
                      <button className="float-right inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm text-black shadow-11 hover:text-primary dark:bg-meta-4 dark:text-white dark:shadow-none">
                        Action
                        <svg
                          className="fill-current"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.00039 11.4C7.85039 11.4 7.72539 11.35 7.60039 11.25L1.85039 5.60005C1.62539 5.37505 1.62539 5.02505 1.85039 4.80005C2.07539 4.57505 2.42539 4.57505 2.65039 4.80005L8.00039 10.025L13.3504 4.75005C13.5754 4.52505 13.9254 4.52505 14.1504 4.75005C14.3754 4.97505 14.3754 5.32505 14.1504 5.55005L8.40039 11.2C8.27539 11.325 8.15039 11.4 8.00039 11.4Z"
                            fill=""
                          ></path>
                        </svg>
                      </button>

                      <div
                        x-show="isOpen"
                        className="absolute right-0 bottom-full z-1 mb-1 w-full max-w-39.5 rounded-[5px] bg-white py-2.5 shadow-12 dark:bg-boxdark"
                        style={{ display: "none" }}
                      >
                        <button className="flex w-full px-4 py-2 text-sm hover:bg-whiter hover:text-primary dark:hover:bg-meta-4">
                          Edit
                        </button>
                        <button className="flex w-full px-4 py-2 text-sm hover:bg-whiter hover:text-primary dark:hover:bg-meta-4">
                          Delete
                        </button>
                        <button className="flex w-full px-4 py-2 text-sm hover:bg-whiter hover:text-primary dark:hover:bg-meta-4">
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-12 border-t border-[#EEEEEE] px-5 py-4 dark:border-strokedark lg:px-7.5 2xl:px-11">
                  <div className="col-span-3">
                    <p className="text-[#637381] dark:text-dark-general-gray">
                      Alex Semuyel
                    </p>
                  </div>

                  <div className="col-span-3">
                    <p className="text-[#637381] dark:text-dark-general-gray">
                      Applications Engineer
                    </p>
                  </div>

                  <div className="col-span-3">
                    <p className="text-[#637381] dark:text-dark-general-gray">
                      alex.semuel@example.com
                    </p>
                  </div>

                  <div className="col-span-2">
                    <p className="text-[#637381] dark:text-dark-general-gray">Admin</p>
                  </div>

                  <div className="col-span-1 relative">
                    <div x-data="{ isOpen: false }">
                      <button className="float-right inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm text-black shadow-11 hover:text-primary dark:bg-meta-4 dark:text-white dark:shadow-none">
                        Action
                        <svg
                          className="fill-current"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.00039 11.4C7.85039 11.4 7.72539 11.35 7.60039 11.25L1.85039 5.60005C1.62539 5.37505 1.62539 5.02505 1.85039 4.80005C2.07539 4.57505 2.42539 4.57505 2.65039 4.80005L8.00039 10.025L13.3504 4.75005C13.5754 4.52505 13.9254 4.52505 14.1504 4.75005C14.3754 4.97505 14.3754 5.32505 14.1504 5.55005L8.40039 11.2C8.27539 11.325 8.15039 11.4 8.00039 11.4Z"
                            fill=""
                          ></path>
                        </svg>
                      </button>

                      <div
                        x-show="isOpen"
                        className="absolute right-0 bottom-full z-1 mb-1 w-full max-w-39.5 rounded-[5px] bg-white py-2.5 shadow-12 dark:bg-boxdark"
                        style={{ display: "none" }}
                      >
                        <button className="flex w-full px-4 py-2 text-sm hover:bg-whiter hover:text-primary dark:hover:bg-meta-4">
                          Edit
                        </button>
                        <button className="flex w-full px-4 py-2 text-sm hover:bg-whiter hover:text-primary dark:hover:bg-meta-4">
                          Delete
                        </button>
                        <button className="flex w-full px-4 py-2 text-sm hover:bg-whiter hover:text-primary dark:hover:bg-meta-4">
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ==Table-2 End== */}
        </div>
      </div>
    </Layout>
  );
};

export default ProTables;
