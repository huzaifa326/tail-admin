import React from "react";
import { NavLink } from "react-router-dom";
import DashboardAccordian from "./accordians/DashboardAccordian";
import TaskAccordian from "./accordians/TaskAccordian";
import FormAccordian from "./accordians/FormAccordian";
import TablesAccordian from "./accordians/TablesAccordian";
import PageAccordian from "./accordians/PageAccordian";
import ChartAccordian from "./accordians/ChartAccordian";
import UiAccordian from "./accordians/UiAccordian";
import AuthenicationAccordian from "./accordians/AuthenicationAccordian";

const SideBar = ({ toggle, setToggle }) => {
  const handleCross = () => {
    setToggle(!toggle);
  };
  return (
    <div
      className={`${
        toggle ? "left-[-360px]" : "left-[0]"
      } overflow-y-auto no-scrollbar absolute lg:static lg:left-0 top-0 z-[30001]  text-white bg-[#1C2434] max-w-[18.125rem] w-full h-screen  duration-300 ease-linear`}
    >
      <div
        onClick={handleCross}
        className="lg:hidden z-[3029] absolute top-[27px] right-[27px]"
      >
        <img
          className="w-[30px] h-[30px]"
          src={`${process.env.PUBLIC_URL}/images/side-bar/arrow-left.svg`}
          alt=""
        />
      </div>

      {/* ----------Sidebar header----------- */}
      <div className="px-6 py-[1.625rem] cursor-pointer">
        <NavLink to="/">
          <img
            className="w-[176px] h-[32px] block "
            src={`${process.env.PUBLIC_URL}/images/side-bar/logo.svg`}
            alt="logo"
          />
        </NavLink>
      </div>
      {/* -----------Siderbar Menu---------- */}
      <div className=" flex flex-col  overflow-y-auto duration-300 ease-linear ">
        <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6 ">
          {/* -----------Menu Group---------- */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-medium text-[#8a99af]">
              MENU
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5 text-[#dee4ee] ">
              <li>
                <DashboardAccordian />
              </li>

              <li className="flex items-center gap-2.5 cursor-pointer transition-all rounded-sm px-4 py-2 font-medium active:bg-[#333A48] hover:bg-[#333A48] ">
                <i className="fa-regular fa-calendar-days text-[18px] text-[#dee4ee] "></i>
                <NavLink to="/calender">
                  Calender
                </NavLink>
              </li>

              <li className="flex items-center gap-2.5 cursor-pointer transition-all rounded-sm px-4 py-2 font-medium active:bg-[#333A48] hover:bg-[#333A48] ">
                <img
                  className="w-[18px] h-[18px]"
                  src={`${process.env.PUBLIC_URL}/images/side-bar/user.svg`}
                  alt=""
                />
                <NavLink to="/profile" activeClassName="active-1" >
                  Profile
                </NavLink>
              </li>

              <li>
                <TaskAccordian />
              </li>
              <li>
                <FormAccordian />
              </li>
              <li>
                <TablesAccordian />
              </li>
              <li>
                <PageAccordian />
              </li>
            </ul>
          </div>
          {/* -----------Support Group---------- */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-medium text-[#8a99af]">
              SUPPORT
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5 text-[#dee4ee]">
              <li>
                <NavLink to='/messages' className=" relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium duration-300 ease-in-out cursor-pointer  active:bg-[#333A48] hover:bg-[#333A48]">
                  <i className="fa-regular fa-envelope text-[19px] text-[#dee4ee]"></i>
                  Messages
                  <span className="absolute right-14 top-1/2 -translate-y-1/2 rounded bg-[#3C50E0] px-2.5 py-1 text-xs font-medium text-white">
                    5
                  </span>
                  <span className="absolute right-4 block rounded bg-[#3C50E0] px-2 py-1 text-xs font-medium text-white">
                    Pro
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to='/inbox' className=" relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium duration-300 ease-in-out cursor-pointer  active:bg-[#333A48] hover:bg-[#333A48]">
                  <img
                    className="w-[18px] h-[19px]  "
                    src={`${process.env.PUBLIC_URL}/images/side-bar/inbox.svg`}
                    alt=""
                  />
                  Inbox
                  <span className="absolute right-4 block rounded bg-[#3C50E0] px-2 py-1 text-xs font-medium text-white">
                    Pro
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to='/invoice' className=" relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium duration-300 ease-in-out cursor-pointer  active:bg-[#333A48] hover:bg-[#333A48]">
                  <i className="fa-solid fa-file-invoice text-[19px] text-[#dee4ee]"></i>
                  Invoice
                  <span className="absolute right-4 block rounded bg-[#3C50E0] px-2 py-1 text-xs font-medium text-white">
                    Pro
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>

          {/* -----------Others Group Start---------- */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-medium text-[#8a99af]">
              OTHERS
            </h3>
            <ul className="mb-6 flex flex-col gap-1.5 text-[#dee4ee]">
              <li>
                <ChartAccordian />
              </li>
              <li>
                <UiAccordian />
              </li>
              <li>
                <AuthenicationAccordian />
              </li>
            </ul>
          </div>
          {/* -----------Others Group End---------- */}
        </nav>
        {/* -----------Promo Box---------- */}
        <div className="mx-auto mb-10 w-full max-w-60 rounded-sm border border-[#333A48] bg-[#333A48] px-4 py-6 text-center shadow-default">
          <h3 className="mb-1 font-semibold text-white">TailAdmin Pro</h3>
          <p className="mb-4 text-xs text-[#8a99af]">
            Get All Dashboards and 300+ UI Elements
          </p>
          <NavLink to='/pricing-page'
            
            className="flex items-center justify-center rounded-md bg-[#3C50E0] p-2 text-white hover:bg-opacity-95"
          >
            Purchase Now
          </NavLink>
        </div>
        {/* -----------Promo Box End---------- */}
      </div>

      {/* --------------------- */}
    </div>
  );
};

export default SideBar;
