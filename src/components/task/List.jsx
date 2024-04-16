import Layout from "../Layout";
import { NavLink } from "react-router-dom";
import AnalyticsDropdown from "../analytics/AnalyticsDropdown";
// import TaskAccordian from "../sidebar/accordians/TaskAccordian";
import TaskCheckBox from "./TaskCheckBox";
import TaskCheckBoxTwo from "./TaskCheckBoxTwo";

const List = () => {
  return (
    <Layout>
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-[#F1F5F9] dark:bg-[#1A222C]">
        <div className="className=" mx-auto max-w-5xl>
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-[26px] leading-[30px] font-bold text-black dark:text-white">
              Task List
            </h2>

            <nav>
              <ol className="flex items-center gap-2">
                <li className="text-general-gray dark:text-dark-general-gray">
                  <NavLink
                    to="/"
                    className="font-medium text-general-gray dark:text-dark-general-gray"
                  >
                    Dashboard /
                  </NavLink>
                </li>
                <li className="font-medium text-primary">Task List</li>
              </ol>
            </nav>
          </div>
          {/* ========= */}
          <div className="flex flex-col gap-y-4 rounded-sm border border-stroke bg-white p-3 shadow-default dark:border-strokedark dark:bg-boxdark sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-[28px] leading-[35px] font-bold text-black dark:text-white">
                Tasks
              </h3>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex -space-x-2">
                <button className="h-9 w-9 rounded-full border-2 border-white dark:border-boxdark">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/task/user-07.png`}
                    alt="User"
                  />
                </button>
                <button className="h-9 w-9 rounded-full border-2 border-white dark:border-boxdark">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/task/user-08.png`}
                    alt="User"
                  />
                </button>
                <button className="h-9 w-9 rounded-full border-2 border-white dark:border-boxdark">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/task/user-09.png`}
                    alt="User"
                  />
                </button>
                <button className="h-9 w-9 rounded-full border-2 border-white dark:border-boxdark">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/task/user-10.png`}
                    alt="User"
                  />
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-full border border-stroke bg-white text-primary dark:border-strokedark dark:bg-boxdark">
                  <svg
                    className="fill-current"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 7H9V1C9 0.4 8.6 0 8 0C7.4 0 7 0.4 7 1V7H1C0.4 7 0 7.4 0 8C0 8.6 0.4 9 1 9H7V15C7 15.6 7.4 16 8 16C8.6 16 9 15.6 9 15V9H15C15.6 9 16 8.6 16 8C16 7.4 15.6 7 15 7Z"
                      fill=""
                    ></path>
                  </svg>
                </button>
              </div>

              <div x-data="{popupOpen: false}">
                <button className="flex items-center gap-2 rounded bg-primary px-[1.125rem] py-2 font-medium text-white hover:bg-opacity-80">
                  <svg
                    className="fill-current"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 7H9V1C9 0.4 8.6 0 8 0C7.4 0 7 0.4 7 1V7H1C0.4 7 0 7.4 0 8C0 8.6 0.4 9 1 9H7V15C7 15.6 7.4 16 8 16C8.6 16 9 15.6 9 15V9H15C15.6 9 16 8.6 16 8C16 7.4 15.6 7 15 7Z"
                      fill=""
                    ></path>
                  </svg>
                  Add task
                </button>
              </div>
            </div>
          </div>
          {/* ========= */}

          <div className="mt-9 flex flex-col gap-9">
            {/* <!-- Todo list --> */}
            <div className="swim-lane flex flex-col gap-[1.375rem]">
              <h4 className="text-xl font-bold text-black dark:text-white">
                To Do's (03)
              </h4>

              <div
                draggable="true"
                className="task relative flex cursor-move justify-between rounded-sm border border-stroke bg-white p-7 shadow-default dark:border-strokedark dark:bg-boxdark"
              >
                <div>
                  <h5 className="mb-4 text-lg font-medium text-black dark:text-white">
                    Task title
                  </h5>

                  <div className="flex flex-col gap-2">
                    <TaskCheckBox label="Here is task one" />
                    <TaskCheckBoxTwo label="Here is task two" />
                    <TaskCheckBox label="Here is task three" />
                  </div>
                </div>

                <div className="absolute right-4 top-4">
                  <AnalyticsDropdown />
                </div>
              </div>

              <div
                draggable="true"
                className="task relative flex cursor-move justify-between rounded-sm border border-stroke bg-white p-7 shadow-default dark:border-strokedark dark:bg-boxdark"
              >
                <div>
                  <h5 className="mb-4 text-lg font-medium text-black dark:text-white">
                    Task title
                  </h5>

                  <div className="flex flex-col gap-2">
                    <TaskCheckBox label="Here is task one" />
                    <TaskCheckBox label="Here is task two" />
                  </div>
                </div>

                <div className="absolute right-4 top-4">
                  <AnalyticsDropdown />
                </div>
              </div>

              <div
                draggable="true"
                className="task relative flex cursor-move justify-between rounded-sm border border-stroke bg-white p-7 shadow-default dark:border-strokedark dark:bg-boxdark"
              >
                <div>
                  <h5 className="mb-4 text-lg font-medium text-black dark:text-white">
                    Task title
                  </h5>

                  <div className="flex flex-col gap-2">
                    <TaskCheckBox label="Here is task one" />
                  </div>
                </div>

                <div className="absolute right-4 top-4">
                  <AnalyticsDropdown />
                </div>
              </div>
            </div>

            {/* <!-- Progress list --> */}
            <div className="swim-lane flex flex-col gap-[1.375rem]">
              <h4 className="text-xl font-bold text-black dark:text-white">
                In Progress (01)
              </h4>

              <div
                draggable="true"
                className="task relative flex cursor-move justify-between rounded-sm border border-stroke bg-white p-7 shadow-default dark:border-strokedark dark:bg-boxdark"
              >
                <div>
                  <h5 className="mb-4 text-lg font-medium text-black dark:text-white">
                    Task title
                  </h5>

                  <div className="flex flex-col gap-2">
                    <TaskCheckBox label="Here is task one" />
                  </div>
                </div>

                <div className="absolute right-4 top-4">
                  <AnalyticsDropdown />
                </div>
              </div>
            </div>

            {/* <!-- Completed list --> */}
            <div className="swim-lane flex flex-col gap-[1.375rem]">
              <h4 className="text-xl font-bold text-black dark:text-white">
                Completed (01)
              </h4>

              <div
                draggable="true"
                className="task relative flex cursor-move justify-between rounded-sm border border-stroke bg-white p-7 shadow-default dark:border-strokedark dark:bg-boxdark"
              >
                <div>
                  <h5 className="mb-4 text-lg font-medium text-black dark:text-white">
                    Task title
                  </h5>

                  <div className="flex flex-col gap-2">
                    <TaskCheckBoxTwo label="Here is task one" />
                    <TaskCheckBoxTwo label="Here is task two" />
                  </div>
                </div>

                <div className="absolute right-4 top-4">
                  <AnalyticsDropdown />
                </div>
              </div>
            </div>
          </div>
          {/* ========= */}
        </div>
      </div>
    </Layout>
  );
};

export default List;
