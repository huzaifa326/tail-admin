import Layout from "../Layout";
import { Link } from "react-router-dom";

const DataTables = () => {
  return (
    <Layout>
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-[#F1F5F9] dark:bg-[#1A222C]">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-[26px] leading-[30px] font-bold text-black dark:text-white">
            Data Tables
          </h2>

          <nav>
            <ol className="flex items-center gap-2">
              <li className="text-general-gray dark:text-dark-general-gray">
                <Link to="/" className="font-medium text-general-gray dark:text-dark-general-gray">
                  Dashboard /
                </Link>
              </li>
              <li className="font-medium text-primary">Data Tables</li>
            </ol>
          </nav>
        </div>
        {/* ========= */}
        <div className="flex flex-col gap-5 md:gap-7 2xl:gap-10">
          {/* <!-- ====== Data Table One Start --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="data-table-common data-table-one max-w-full overflow-x-auto">
              <div className="datatable-wrapper datatable-loading no-footer sortable searchable fixed-columns">
                <div className="datatable-top">
                  <div className="datatable-dropdown">
                    <label>
                      <select className="datatable-selector">
                        <option value="5">5</option>
                        <option value="10" selected="">
                          10
                        </option>
                        <option value="15">15</option>
                        <option value="-1">All</option>
                      </select>{" "}
                      entries per page
                    </label>
                  </div>
                  <div className="datatable-search">
                    <input
                      className="datatable-input"
                      placeholder="Search..."
                      type="search"
                      title="Search within table"
                      aria-controls="dataTableOne"
                    />
                  </div>
                </div>
                <div className="datatable-container">
                  <table
                    className="table w-full table-auto datatable-table"
                    id="dataTableOne"
                  >
                    <thead>
                      <tr>
                        <th
                          data-sortable="true"
                          style={{ width: "17.83387622149837%" }}
                        >
                          <Link to="#" className="datatable-sorter">
                            <div className="flex items-center gap-1.5">
                              <p>Name/ID</p>
                              <div className="inline-flex flex-col space-y-[2px]">
                                <span className="inline-block">
                                  <svg
                                    className="fill-current"
                                    width="10"
                                    height="5"
                                    viewBox="0 0 10 5"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M5 0L0 5H10L5 0Z" fill=""></path>
                                  </svg>
                                </span>
                                <span className="inline-block">
                                  <svg
                                    className="fill-current"
                                    width="10"
                                    height="5"
                                    viewBox="0 0 10 5"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                                      fill=""
                                    ></path>
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </Link>
                        </th>
                        <th
                          data-sortable="true"
                          style={{ width: "15.960912052117262%" }}
                        >
                          <Link to="#" className="datatable-sorter">
                            <div className="flex items-center gap-1.5">
                              <p>Position</p>
                              <div className="inline-flex flex-col space-y-[2px]">
                                <span className="inline-block">
                                  <svg
                                    className="fill-current"
                                    width="10"
                                    height="5"
                                    viewBox="0 0 10 5"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M5 0L0 5H10L5 0Z" fill=""></path>
                                  </svg>
                                </span>
                                <span className="inline-block">
                                  <svg
                                    className="fill-current"
                                    width="10"
                                    height="5"
                                    viewBox="0 0 10 5"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                                      fill=""
                                    ></path>
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </Link>
                        </th>
                        <th
                          data-sortable="true"
                          style={{ width: "15.798045602605862%" }}
                        >
                          <Link to="#" className="datatable-sorter">
                            <div className="flex items-center gap-1.5">
                              <p>BDay</p>
                              <div className="inline-flex flex-col space-y-[2px]">
                                <span className="inline-block">
                                  <svg
                                    className="fill-current"
                                    width="10"
                                    height="5"
                                    viewBox="0 0 10 5"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M5 0L0 5H10L5 0Z" fill=""></path>
                                  </svg>
                                </span>
                                <span className="inline-block">
                                  <svg
                                    className="fill-current"
                                    width="10"
                                    height="5"
                                    viewBox="0 0 10 5"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                                      fill=""
                                    ></path>
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </Link>
                        </th>
                        <th
                          data-sortable="true"
                          style={{ width: "16.775244299674267%" }}
                        >
                          <Link to="#" className="datatable-sorter">
                            <div className="flex items-center gap-1.5">
                              <p>Email/Phone</p>
                              <div className="inline-flex flex-col space-y-[2px]">
                                <span className="inline-block">
                                  <svg
                                    className="fill-current"
                                    width="10"
                                    height="5"
                                    viewBox="0 0 10 5"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M5 0L0 5H10L5 0Z" fill=""></path>
                                  </svg>
                                </span>
                                <span className="inline-block">
                                  <svg
                                    className="fill-current"
                                    width="10"
                                    height="5"
                                    viewBox="0 0 10 5"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                                      fill=""
                                    ></path>
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </Link>
                        </th>
                        <th
                          data-sortable="true"
                          className="red"
                          style={{ width: "15.960912052117262%" }}
                        >
                          <Link to="#" className="datatable-sorter">
                            <div className="flex items-center gap-1.5">
                              <p>Address</p>
                              <div className="inline-flex flex-col space-y-[2px]">
                                <span className="inline-block">
                                  <svg
                                    className="fill-current"
                                    width="10"
                                    height="5"
                                    viewBox="0 0 10 5"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M5 0L0 5H10L5 0Z" fill=""></path>
                                  </svg>
                                </span>
                                <span className="inline-block">
                                  <svg
                                    className="fill-current"
                                    width="10"
                                    height="5"
                                    viewBox="0 0 10 5"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                                      fill=""
                                    ></path>
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </Link>
                        </th>
                        <th
                          data-sortable="true"
                          style={{ width: "17.67100977198697%" }}
                        >
                          <Link to="#" className="datatable-sorter">
                            <div className="flex items-center gap-1.5">
                              <p>Status</p>
                              <div className="inline-flex flex-col space-y-[2px]">
                                <span className="inline-block">
                                  <svg
                                    className="fill-current"
                                    width="10"
                                    height="5"
                                    viewBox="0 0 10 5"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M5 0L0 5H10L5 0Z" fill=""></path>
                                  </svg>
                                </span>
                                <span className="inline-block">
                                  <svg
                                    className="fill-current"
                                    width="10"
                                    height="5"
                                    viewBox="0 0 10 5"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                                      fill=""
                                    ></path>
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </Link>
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <input
                            className="datatable-input"
                            type="search"
                            data-columns="[0]"
                          />
                        </th>
                        <th>
                          <input
                            className="datatable-input"
                            type="search"
                            data-columns="[1]"
                          />
                        </th>
                        <th>
                          <input
                            className="datatable-input"
                            type="search"
                            data-columns="[2]"
                          />
                        </th>
                        <th>
                          <input
                            className="datatable-input"
                            type="search"
                            data-columns="[3]"
                          />
                        </th>
                        <th>
                          <input
                            className="datatable-input"
                            type="search"
                            data-columns="[4]"
                          />
                        </th>
                        <th>
                          <input
                            className="datatable-input"
                            type="search"
                            data-columns="[5]"
                          />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr data-index="0">
                        <td>Andrio Maksim</td>
                        <td>Designer</td>
                        <td>25 Nov, 1989</td>
                        <td>maksim45@gmail.com</td>
                        <td className="green">Block A, Demo Park</td>
                        <td>Full-time</td>
                      </tr>
                      <tr data-index="1">
                        <td>Brielle Kuphal</td>
                        <td>Developer</td>
                        <td>25 Nov, 1977</td>
                        <td>Brielle45@gmail.com</td>
                        <td className="green">Block A, Demo Park</td>
                        <td>Full-time</td>
                      </tr>
                      <tr data-index="2">
                        <td>Barney Murray</td>
                        <td>Designer</td>
                        <td>25 Nov, 1966</td>
                        <td>Barney@gmail.com</td>
                        <td className="green">Block A, Demo Park</td>
                        <td>Part-time</td>
                      </tr>
                      <tr data-index="3">
                        <td>Ressie Ruecker</td>
                        <td>Designer</td>
                        <td>25 Nov, 1955</td>
                        <td>Ressie@gmail.com</td>
                        <td className="green">Block A, Demo Park</td>
                        <td>Full-time</td>
                      </tr>
                      <tr data-index="4">
                        <td>Teresa Mertz</td>
                        <td>Designer</td>
                        <td>25 Nov, 1979</td>
                        <td>Teresa@gmail.com</td>
                        <td className="green">Block A, Demo Park</td>
                        <td>Part-time</td>
                      </tr>
                      <tr data-index="5">
                        <td>Chelsey Hackett</td>
                        <td>Designer</td>
                        <td>25 Nov, 1969</td>
                        <td>Chelsey@gmail.com</td>
                        <td className="green">Block A, Demo Park</td>
                        <td>Full-time</td>
                      </tr>
                      <tr data-index="6">
                        <td>Tatyana Metz</td>
                        <td>Designer</td>
                        <td>25 Nov, 1989</td>
                        <td>Tatyana@gmail.com</td>
                        <td className="green">Block A, Demo Park</td>
                        <td>Part-time</td>
                      </tr>
                      <tr data-index="7">
                        <td>Oleta Harvey</td>
                        <td>Designer</td>
                        <td>25 Nov, 1979</td>
                        <td>Oleta@gmail.com</td>
                        <td className="green">Block A, Demo Park</td>
                        <td>Full-time</td>
                      </tr>
                      <tr data-index="8">
                        <td>Bette Haag</td>
                        <td>Designer</td>
                        <td>25 Nov, 1979</td>
                        <td>Bette@gmail.com</td>
                        <td className="green">Block A, Demo Park</td>
                        <td>Part-time</td>
                      </tr>
                      <tr data-index="9">
                        <td>Meda Ebert</td>
                        <td>Designer</td>
                        <td>25 Nov, 1945</td>
                        <td>Meda@gmail.com</td>
                        <td className="green">Block A, Demo Park</td>
                        <td>Full-time</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="datatable-bottom">
                  <div className="datatable-info">
                    Showing 1 to 10 of 16 entries
                  </div>
                  <nav className="datatable-pagination">
                    <ul className="datatable-pagination-list">
                      <li className="datatable-pagination-list-item datatable-hidden datatable-disabled">
                        <Link
                          data-page="1"
                          className="datatable-pagination-list-item-link"
                        >
                          ‹
                        </Link>
                      </li>
                      <li className="datatable-pagination-list-item datatable-active">
                        <Link
                          data-page="1"
                          className="datatable-pagination-list-item-link"
                        >
                          1
                        </Link>
                      </li>
                      <li className="datatable-pagination-list-item">
                        <Link
                          data-page="2"
                          className="datatable-pagination-list-item-link"
                        >
                          2
                        </Link>
                      </li>
                      <li className="datatable-pagination-list-item">
                        <Link
                          data-page="2"
                          className="datatable-pagination-list-item-link"
                        >
                          ›
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- ====== Data Table One End --> */}

          {/* <!-- ====== Data Table Two Start --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="data-table-common data-table-two max-w-full overflow-x-auto">
              <div className="datatable-wrapper datatable-loading no-footer sortable searchable fixed-columns">
                <div className="datatable-top">
                  <div className="datatable-dropdown">
                    <label>
                      <select className="datatable-selector">
                        <option value="5">5</option>
                        <option value="10" selected="">
                          10
                        </option>
                        <option value="15">15</option>
                        <option value="-1">All</option>
                      </select>{" "}
                      entries per page
                    </label>
                  </div>
                  <div className="datatable-search">
                    <input
                      className="datatable-input"
                      placeholder="Search..."
                      type="search"
                      title="Search within table"
                      aria-controls="dataTableTwo"
                    />
                  </div>
                </div>
                <div className="datatable-container">
                  <table
                    className="table w-full table-auto datatable-table"
                    id="dataTableTwo"
                  >
                    <thead>
                      <tr>
                        <th
                          data-sortable="true"
                          style={{ width: "21.335504885993487%" }}
                        >
                          <Link to="#" className="datatable-sorter">
                            <div className="flex items-center justify-between gap-1.5">
                              <p>Name</p>
                              <div className="inline-flex flex-col space-y-[2px]">
                                <span className="inline-block">
                                  <svg
                                    className="fill-current"
                                    width="10"
                                    height="5"
                                    viewBox="0 0 10 5"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M5 0L0 5H10L5 0Z" fill=""></path>
                                  </svg>
                                </span>
                                <span className="inline-block">
                                  <svg
                                    className="fill-current"
                                    width="10"
                                    height="5"
                                    viewBox="0 0 10 5"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                                      fill=""
                                    ></path>
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </Link>
                        </th>
                        <th
                          data-sortable="true"
                          style={{ width: "26.95439739413681%" }}
                        >
                          <Link to="#" className="datatable-sorter">
                            <div className="flex items-center justify-between gap-1.5">
                              <p>Position</p>
                              <div className="inline-flex flex-col space-y-[2px]">
                                <span className="inline-block">
                                  <svg
                                    className="fill-current"
                                    width="10"
                                    height="5"
                                    viewBox="0 0 10 5"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M5 0L0 5H10L5 0Z" fill=""></path>
                                  </svg>
                                </span>
                                <span className="inline-block">
                                  <svg
                                    className="fill-current"
                                    width="10"
                                    height="5"
                                    viewBox="0 0 10 5"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                                      fill=""
                                    ></path>
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </Link>
                        </th>
                        <th
                          data-sortable="true"
                          style={{ width: "15.798045602605862%" }}
                        >
                          <Link to="#" className="datatable-sorter">
                            <div className="flex items-center justify-between gap-1.5">
                              <p>Office</p>
                              <div className="inline-flex flex-col space-y-[2px]">
                                <span className="inline-block">
                                  <svg
                                    className="fill-current"
                                    width="10"
                                    height="5"
                                    viewBox="0 0 10 5"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M5 0L0 5H10L5 0Z" fill=""></path>
                                  </svg>
                                </span>
                                <span className="inline-block">
                                  <svg
                                    className="fill-current"
                                    width="10"
                                    height="5"
                                    viewBox="0 0 10 5"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                                      fill=""
                                    ></path>
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </Link>
                        </th>
                        <th
                          data-sortable="true"
                          style={{ width: "7.899022801302931%" }}
                        >
                          <Link to="#" className="datatable-sorter">
                            <div className="flex items-center justify-between gap-1.5">
                              <p>Age</p>
                              <div className="inline-flex flex-col space-y-[2px]">
                                <span className="inline-block">
                                  <svg
                                    className="fill-current"
                                    width="10"
                                    height="5"
                                    viewBox="0 0 10 5"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M5 0L0 5H10L5 0Z" fill=""></path>
                                  </svg>
                                </span>
                                <span className="inline-block">
                                  <svg
                                    className="fill-current"
                                    width="10"
                                    height="5"
                                    viewBox="0 0 10 5"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                                      fill=""
                                    ></path>
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </Link>
                        </th>
                        <th
                          data-sortable="true"
                          className="red"
                          style={{ width: "13.925081433224756%" }}
                        >
                          <Link to="#" className="datatable-sorter">
                            <div className="flex items-center justify-between gap-1.5">
                              <p>Start Date</p>
                              <div className="inline-flex flex-col space-y-[2px]">
                                <span className="inline-block">
                                  <svg
                                    className="fill-current"
                                    width="10"
                                    height="5"
                                    viewBox="0 0 10 5"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M5 0L0 5H10L5 0Z" fill=""></path>
                                  </svg>
                                </span>
                                <span className="inline-block">
                                  <svg
                                    className="fill-current"
                                    width="10"
                                    height="5"
                                    viewBox="0 0 10 5"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                                      fill=""
                                    ></path>
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </Link>
                        </th>
                        <th
                          data-sortable="true"
                          style={{ width: "14.087947882736158%" }}
                        >
                          <Link to="#" className="datatable-sorter">
                            <div className="flex items-center justify-between gap-1.5">
                              <p>Salary</p>
                              <div className="inline-flex flex-col space-y-[2px]">
                                <span className="inline-block">
                                  <svg
                                    className="fill-current"
                                    width="10"
                                    height="5"
                                    viewBox="0 0 10 5"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M5 0L0 5H10L5 0Z" fill=""></path>
                                  </svg>
                                </span>
                                <span className="inline-block">
                                  <svg
                                    className="fill-current"
                                    width="10"
                                    height="5"
                                    viewBox="0 0 10 5"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                                      fill=""
                                    ></path>
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </Link>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr data-index="0">
                        <td>Cedric Kelly</td>
                        <td>Senior Javascript Developer</td>
                        <td>Edinburgh</td>
                        <td>22</td>
                        <td className="green">2012/03/29</td>
                        <td>$433,060</td>
                      </tr>
                      <tr data-index="1">
                        <td>Brielle Kuphal</td>
                        <td>Senior Javascript Developer</td>
                        <td>Edinburgh</td>
                        <td>25</td>
                        <td className="green">2012/03/29</td>
                        <td>$433,060</td>
                      </tr>
                      <tr data-index="2">
                        <td>Barney Murray</td>
                        <td>Senior Backend Developer</td>
                        <td>amsterdam</td>
                        <td>29</td>
                        <td className="green">2010/05/01</td>
                        <td>$424,785</td>
                      </tr>
                      <tr data-index="3">
                        <td>Ressie Ruecker</td>
                        <td>Senior Frontend Developer</td>
                        <td>Jakarta</td>
                        <td>27</td>
                        <td className="green">2013/07/01</td>
                        <td>$785,210</td>
                      </tr>
                      <tr data-index="4">
                        <td>Teresa Mertz</td>
                        <td>Senior Designer</td>
                        <td>New Caledonia</td>
                        <td>25</td>
                        <td className="green">2014/05/30</td>
                        <td>$532,126</td>
                      </tr>
                      <tr data-index="5">
                        <td>Chelsey Hackett</td>
                        <td>Product Manager</td>
                        <td>NewYork</td>
                        <td>26</td>
                        <td className="green">2011/09/30</td>
                        <td>$421,541</td>
                      </tr>
                      <tr data-index="6">
                        <td>Tatyana Metz</td>
                        <td>Senior Product Manager</td>
                        <td>NewYork</td>
                        <td>28</td>
                        <td className="green">2009/09/30</td>
                        <td>$852,541</td>
                      </tr>
                      <tr data-index="7">
                        <td>Oleta Harvey</td>
                        <td>Junior Product Manager</td>
                        <td>California</td>
                        <td>25</td>
                        <td className="green">2015/10/30</td>
                        <td>$654,444</td>
                      </tr>
                      <tr data-index="8">
                        <td>Bette Haag</td>
                        <td>Junior Product Manager</td>
                        <td>California</td>
                        <td>29</td>
                        <td className="green">2017/12/31</td>
                        <td>$541,111</td>
                      </tr>
                      <tr data-index="9">
                        <td>Meda Ebert</td>
                        <td>Junior Web Developer</td>
                        <td>Amsterdam</td>
                        <td>27</td>
                        <td className="green">2015/10/31</td>
                        <td>$651,456</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="datatable-bottom">
                  <div className="datatable-info">
                    Showing 1 to 10 of 26 entries
                  </div>
                  <nav className="datatable-pagination">
                    <ul className="datatable-pagination-list">
                      <li className="datatable-pagination-list-item datatable-hidden datatable-disabled">
                        <Link
                          data-page="1"
                          className="datatable-pagination-list-item-link"
                        >
                          ‹
                        </Link>
                      </li>
                      <li className="datatable-pagination-list-item datatable-active">
                        <Link
                          data-page="1"
                          className="datatable-pagination-list-item-link"
                        >
                          1
                        </Link>
                      </li>
                      <li className="datatable-pagination-list-item">
                        <Link
                          data-page="2"
                          className="datatable-pagination-list-item-link"
                        >
                          2
                        </Link>
                      </li>
                      <li className="datatable-pagination-list-item">
                        <Link
                          data-page="3"
                          className="datatable-pagination-list-item-link"
                        >
                          3
                        </Link>
                      </li>
                      <li className="datatable-pagination-list-item">
                        <Link
                          data-page="2"
                          className="datatable-pagination-list-item-link"
                        >
                          ›
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- ====== Data Table Two End --> */}
        </div>
        {/* ========= */}
      </div>
    </Layout>
  );
};

export default DataTables;
