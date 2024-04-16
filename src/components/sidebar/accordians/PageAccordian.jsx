import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { NavLink } from "react-router-dom";

const PageAccordian = () => {
  return (
    <div className="w-full">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium cursor-pointer transition-all active:bg-[#333A48] hover:bg-[#333A48]  focus:outline-none ">
              <img
                className="w-[18px] h-[18px]"
                src={`${process.env.PUBLIC_URL}/images/side-bar/pages.svg`}
                alt=""
              />
              <div className="w-full flex justify-between items-center">
                <NavLink>Pages</NavLink>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-[#dee4ee] `}
                />
              </div>
            </Disclosure.Button>
            <Disclosure.Panel className="bg-[#1C2434]">
              <ul className="mb-5.5 pt-4 flex flex-col gap-2.5 pl-6 cursor-pointer">
                <li>
                  <NavLink
                    activeClassName="active"
                    to="/setting"
                    className="rounded-md px-4 font-medium duration-300 ease-in-out text-[#8a99af] hover:text-white"
                  >
                    Settings
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    activeClassName="active"
                    to="/filemanager"
                    className="relative flex items-center gap-2.5 rounded-md px-4 font-medium text-[#8a99af] duration-300 ease-in-out hover:text-white"
                  >
                    File Managaer
                    <span className="absolute right-4 block rounded bg-[#3C50E0] px-2 py-1 text-xs font-medium text-white">
                      Pro
                    </span>
                  </NavLink>
                </li>
                {/* <li><NavLink activeClassName="active" to="/datatables" className="relative flex items-center gap-2.5 rounded-md px-4 font-medium text-[#8a99af] duration-300 ease-in-out hover:text-white">Data Tables<span className="absolute right-4 block rounded bg-[#3C50E0] px-2 py-1 text-xs font-medium text-white">Pro</span></NavLink></li> */}
                <li>
                  <NavLink
                    activeClassName="active"
                    to="/pricingtable"
                    className="relative flex items-center gap-2.5 rounded-md px-4 font-medium text-[#8a99af] duration-300 ease-in-out hover:text-white"
                  >
                    Pricing Tables
                    <span className="absolute right-4 block rounded bg-[#3C50E0] px-2 py-1 text-xs font-medium text-white">
                      Pro
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="active"
                    to="/error"
                    className="relative flex items-center gap-2.5 rounded-md px-4 font-medium text-[#8a99af] duration-300 ease-in-out hover:text-white"
                  >
                    Error Page
                    <span className="absolute right-4 block rounded bg-[#3C50E0] px-2 py-1 text-xs font-medium text-white">
                      Pro
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="active"
                    to="/faqs"
                    className="relative flex items-center gap-2.5 rounded-md px-4 font-medium text-[#8a99af] duration-300 ease-in-out hover:text-white"
                  >
                    faq's
                    <span className="absolute right-4 block rounded bg-[#3C50E0] px-2 py-1 text-xs font-medium text-white">
                      Pro
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="active"
                    to="/team"
                    className="relative flex items-center gap-2.5 rounded-md px-4 font-medium text-[#8a99af] duration-300 ease-in-out hover:text-white"
                  >
                    Teams
                    <span className="absolute right-4 block rounded bg-[#3C50E0] px-2 py-1 text-xs font-medium text-white">
                      Pro
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="active"
                    to="/termscondition"
                    className="relative flex items-center gap-2.5 rounded-md px-4 font-medium text-[#8a99af] duration-300 ease-in-out hover:text-white"
                  >
                    Terms & Conditions
                    <span className="absolute right-4 block rounded bg-[#3C50E0] px-2 py-1 text-xs font-medium text-white">
                      Pro
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="active"
                    to="/mail"
                    className="relative flex items-center gap-2.5 rounded-md px-4 font-medium text-[#8a99af] duration-300 ease-in-out hover:text-white"
                  >
                    Mail Success
                    <span className="absolute right-4 block rounded bg-[#3C50E0] px-2 py-1 text-xs font-medium text-white">
                      Pro
                    </span>
                  </NavLink>
                </li>
              </ul>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default PageAccordian;
