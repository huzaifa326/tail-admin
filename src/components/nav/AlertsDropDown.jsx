import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";

export default function AlertsDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };
  return (
    <div className="w-full text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            onClick={handleClick}
            className="inline-flex w-full items-center justify-center  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
          >
            <div className="relative">
              <li
                className={ `cursor-pointer relative rounded-full flex items-center justify-center h-[34px] w-[34px] sm:h-[37px] sm:w-[37px] dark:bg-[#313d4a]  dark:border-strokedark bg-[rgba(239,244,251,1)] border-stroke`}
              >
                <span class={` ${
                    isOpen ? "hidden" : "block"
                  } absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-red inline `}>
                  <span class="absolute -z-1 right-0 inline-flex h-full w-full animate-ping rounded-full bg-red opacity-75"></span>
                </span>

                <img
                  className="w-[18px] h-[18px] "
                  src={`${process.env.PUBLIC_URL}/images/nav/notification.svg`}
                  alt=""
                />
              </li>
            </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={`bg-white overflow-y-auto px-1 py-1 mt-[10px] -right-27 flex h-[22.5rem] w-[18.75rem] flex-col rounded-sm border border-stroke  shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80 absolute right-0 origin-top-right divide-y divide-gray-100  ring-1 ring-black/5 focus:outline-none `}
          >
            <div className="px-1 py-1 h-[22.5rem]  ">
              <div className="px-4.5 py-3">
                <h5
                  className={`
                      text-sm font-medium text-black dark:text-bodydark2`}
                >
                  Notification
                </h5>
              </div>

              <ul className="flex h-auto flex-col overflow-y-auto">
                <li>
                  <NavLink className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4">
                    <p className={`text-black dark:text-[#aeb7c0] text-sm`}>
                      <span
                        className={` text-black dark:text-white  mr-[4px] `}
                      >
                        Edit your information in a swipe{" "}
                      </span>
                      Sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim.
                    </p>

                    <p className={`text-black dark:text-[#aeb7c0] text-xs`}>
                      12 May, 2025
                    </p>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4">
                    <p className={`text-black dark:text-[#aeb7c0] text-sm`}>
                      <span
                        className={` text-black dark:text-white  mr-[5px] `}
                      >
                        It is a long established fact
                      </span>
                      that a reader will be distracted by the readable.
                    </p>

                    <p className={`text-black dark:text-[#aeb7c0] text-xs`}>
                      24 Feb, 2025
                    </p>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4">
                    <p className={`text-black dark:text-[#aeb7c0] text-sm`}>
                      <span
                        className={` text-black dark:text-white  mr-[5px] `}
                      >
                        There are many variations
                      </span>
                      of passages of Lorem Ipsum available, but the majority
                      have suffered
                    </p>

                    <p className={`text-black dark:text-[#aeb7c0] text-xs`}>
                      04 Jan, 2025
                    </p>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4">
                    <p className={`text-black dark:text-[#aeb7c0] text-sm`}>
                      <span
                        className={` text-black dark:text-white  mr-[5px] `}
                      >
                        There are many variations
                      </span>
                      of passages of Lorem Ipsum available, but the majority
                      have suffered
                    </p>

                    <p className={`text-black dark:text-[#aeb7c0] text-xs`}>
                      01 Dec, 2024
                    </p>
                  </NavLink>
                </li>
              </ul>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
