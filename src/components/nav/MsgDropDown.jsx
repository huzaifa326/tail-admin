import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";

export default function MsgDropDown() {
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
                className={`cursor-pointer relative rounded-full flex items-center justify-center h-[34px] w-[34px] sm:h-[37px] sm:w-[37px]
                 
                     dark:bg-[#313d4a]  dark:border-strokedark
                     bg-[rgba(239,244,251,1)] border-stroke
                }`}
              >
                <span
                  class={` ${
                    isOpen ? "hidden" : "block"
                  } absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-red inline `}
                >
                  <span class="absolute -z-1 right-0 inline-flex h-full w-full animate-ping rounded-full bg-red opacity-75"></span>
                </span>
                <img
                  className="w-[18px] h-[18px] "
                  src={`${process.env.PUBLIC_URL}/images/nav/message.svg`}
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
            className={`overflow-y-auto px-1 py-1 mt-[10px]  -right-27 flex h-[22.5rem] w-[18.75rem] flex-col rounded-sm border  shadow-default sm:right-0 sm:w-80 absolute right-0 origin-top-right divide-y divide-gray-100  ring-1 ring-black/5 focus:outline-none  h-90 w-75  border-stroke  dark:border-strokedark dark:bg-boxdark  bg-white`}
          >
            <div className="px-1 py-1 ">
              <div className="px-4.5 py-3">
                <h5 className={` text-sm font-medium text-bodydark2`}>
                  Messages
                </h5>
              </div>

              <ul className="flex h-auto flex-col overflow-y-auto">
                <li>
                  <NavLink
                    to="/messages"
                    className="flex gap-[1.125rem] border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                  >
                    <div className="h-[50px] w-[50px] rounded-full">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/dashboard/user-1.png`}
                        alt="User"
                      />
                    </div>

                    <div>
                      <h6
                        className={`dark:text-white text-black text-sm font-medium`}
                      >
                        Mariya Desoja
                      </h6>
                      <p className={`dark:text-[#aeb7c0] text-black text-sm`}>
                        I like your confidence 💪
                      </p>
                      <p className={`dark:text-[#aeb7c0] text-black text-xs`}>
                        2min ago
                      </p>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/messages"
                    className="flex gap-[1.125rem]  border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                  >
                    <div className="h-[50px] w-[50px] rounded-full">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/dashboard/user-2.png`}
                        alt="User"
                      />
                    </div>

                    <div>
                      <h6
                        className={`dark:text-white text-black text-sm font-medium`}
                      >
                        Robert Jhon
                      </h6>
                      <p className={`dark:text-[#aeb7c0] text-black text-sm`}>
                        Can you share your offer?
                      </p>
                      <p className={`dark:text-[#aeb7c0] text-black text-xs`}>
                        10min ago
                      </p>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/messages"
                    className="flex gap-[1.125rem]  border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                  >
                    <div className="h-[50px] w-[50px] rounded-full">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/dashboard/user-3.png`}
                        alt="User"
                      />
                    </div>

                    <div>
                      <h6
                        className={`dark:text-white text-black text-sm font-medium`}
                      >
                        Henry Dholi
                      </h6>
                      <p className={`dark:text-[#aeb7c0] text-black text-sm`}>
                        I cam across your profile and...
                      </p>
                      <p className={`dark:text-[#aeb7c0] text-black text-xs`}>
                        1day ago
                      </p>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/messages"
                    className="flex gap-[1.125rem]  border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                  >
                    <div className="h-[50px] w-[50px] rounded-full">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/dashboard/user-4.png`}
                        alt="User"
                      />
                    </div>

                    <div>
                      <h6
                        className={`dark:text-white text-black text-sm font-medium`}
                      >
                        Cody Fisher
                      </h6>
                      <p className={`dark:text-[#aeb7c0] text-black text-sm`}>
                        I’m waiting for you response!
                      </p>
                      <p className={`dark:text-[#aeb7c0] text-black text-xs`}>
                        5days ago
                      </p>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/messages"
                    className="flex gap-[1.125rem] border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                  >
                    <div className="h-[50px] w-[50px] rounded-full">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/dashboard/user-1.png`}
                        alt="User"
                      />
                    </div>

                    <div>
                      <h6
                        className={`dark:text-white text-black text-sm font-medium`}
                      >
                        Mariya Desoja
                      </h6>
                      <p className={`dark:text-[#aeb7c0] text-black text-sm`}>
                        I like your confidence 💪
                      </p>
                      <p className={`dark:text-[#aeb7c0] text-black text-xs`}>
                        2min ago
                      </p>
                    </div>
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
