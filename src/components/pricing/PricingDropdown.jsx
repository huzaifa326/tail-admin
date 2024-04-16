import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

export default function PricingDropdown() {
  return (
    <div className="w-full text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full items-center justify-center ">
            <div className="cursor-pointer inline-flex items-center gap-2 rounded-[10px] bg-black px-5 py-2.5 font-medium text-white hover:bg-opacity-95 dark:bg-white/20">
              Live Preview
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path d="M10.3088 13.196L15.6668 7.67064C16.0012 7.32586 15.7985 6.66675 15.3582 6.66675H4.642C4.20165 6.66675 3.99899 7.32586 4.33333 7.67064L9.69141 13.196C9.86903 13.3792 10.1311 13.3792 10.3088 13.196Z"></path>
                </svg>
              </span>
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
          <Menu.Items>
            <div className="mt-3 hidden w-[220px] max-w-max rounded-[10px] border-[0.5px] border-[rgba(229,231,235,1)] bg-white p-2.5 shadow-13 group-hover:block dark:border-box-dark dark:bg-box-dark lg:absolute">
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    target="_blank"
                    href="https://demo.tailadmin.com/"
                    className="nested-group flex items-center gap-2 rounded px-2.5 py-1.5 hover:bg-gray hover:text-black dark:hover:bg-meta-4"
                    >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.28376 16.3999L3 2H17.0999L15.8146 16.401L10.0465 18L4.28376 16.3999Z"
                        fill="#E64C18"
                      ></path>
                      <path
                        d="M10.05 3.177V16.7768L14.7142 15.4839L15.8131 3.177H10.05Z"
                        fill="#F36518"
                      ></path>
                      <path
                        d="M5.62659 4.94336L6.10264 10.2842H12.2241L12.0186 12.575L10.0477 13.1078L8.08045 12.5757L7.94892 11.1048H6.17613L6.42963 13.9403L10.0473 14.945L13.6695 13.9403L14.1551 8.51827H7.71796L7.55633 6.70965H14.3097H14.3151L14.4733 4.94336H5.62659Z"
                        fill="white"
                      ></path>
                      <path
                        d="M10.05 4.94336H5.62659L6.10264 10.2842H10.05V8.51827H7.71796L7.55633 6.70965H10.05V4.94336Z"
                        fill="#EBEBEB"
                      ></path>
                      <path
                        d="M10.05 13.1071L10.0477 13.1079L8.08047 12.5758L7.94894 11.1049H6.17615L6.42965 13.9403L10.0473 14.945L10.05 14.9443V13.1071Z"
                        fill="#EBEBEB"
                      ></path>
                    </svg>
                    Preview HTML
                    <span className="pl-[10px]">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current"
                      >
                        <g clip-path="url(#clip0_859_2899)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8.95697 0.9375H9.04303C10.7743 0.937491 12.1311 0.937483 13.1897 1.07981C14.2733 1.22549 15.1283 1.5295 15.7994 2.2006C16.4705 2.87171 16.7745 3.72673 16.9202 4.81028C17.0625 5.8689 17.0625 7.22567 17.0625 8.95697V9.04303C17.0625 10.7743 17.0625 12.1311 16.9202 13.1897C16.7745 14.2733 16.4705 15.1283 15.7994 15.7994C15.1283 16.4705 14.2733 16.7745 13.1897 16.9202C12.1311 17.0625 10.7743 17.0625 9.04303 17.0625H8.95697C7.22567 17.0625 5.8689 17.0625 4.81028 16.9202C3.72673 16.7745 2.87171 16.4705 2.2006 15.7994C1.5295 15.1283 1.22549 14.2733 1.07981 13.1897C0.937483 12.1311 0.937491 10.7743 0.9375 9.04303V8.95697C0.937491 7.22567 0.937483 5.86889 1.07981 4.81028C1.22549 3.72673 1.5295 2.87171 2.2006 2.2006C2.87171 1.5295 3.72673 1.22549 4.81028 1.07981C5.86889 0.937483 7.22567 0.937491 8.95697 0.9375ZM4.96018 2.19478C4.00138 2.32369 3.42334 2.56886 2.9961 2.9961C2.56886 3.42334 2.32369 4.00138 2.19478 4.96018C2.06369 5.93517 2.0625 7.21633 2.0625 9C2.0625 10.7837 2.06369 12.0648 2.19478 13.0398C2.32369 13.9986 2.56886 14.5767 2.9961 15.0039C3.42334 15.4311 4.00138 15.6763 4.96018 15.8052C5.93517 15.9363 7.21633 15.9375 9 15.9375C10.7837 15.9375 12.0648 15.9363 13.0398 15.8052C13.9986 15.6763 14.5767 15.4311 15.0039 15.0039C15.4311 14.5767 15.6763 13.9986 15.8052 13.0398C15.9363 12.0648 15.9375 10.7837 15.9375 9C15.9375 7.21633 15.9363 5.93517 15.8052 4.96018C15.6763 4.00138 15.4311 3.42334 15.0039 2.9961C14.5767 2.56886 13.9986 2.32369 13.0398 2.19478C12.0648 2.06369 10.7837 2.0625 9 2.0625C7.21633 2.0625 5.93517 2.06369 4.96018 2.19478ZM7.37684 6.87868C7.37684 6.56802 7.62868 6.31618 7.93934 6.31618H11.1213C11.432 6.31618 11.6838 6.56802 11.6838 6.87868V10.0607C11.6838 10.3713 11.432 10.6232 11.1213 10.6232C10.8107 10.6232 10.5588 10.3713 10.5588 10.0607V8.23667L7.27643 11.5191C7.05676 11.7387 6.7006 11.7387 6.48093 11.5191C6.26126 11.2994 6.26126 10.9432 6.48093 10.7236L9.76333 7.44118H7.93934C7.62868 7.44118 7.37684 7.18934 7.37684 6.87868Z"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_859_2899">
                            <rect width="18" height="18" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://react-demo.tailadmin.com/"
                    className="nested-group flex items-center gap-2 rounded px-2.5 py-1.5 hover:bg-gray hover:text-black dark:hover:bg-meta-4"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 9.741C20 8.41603 18.3408 7.16046 15.797 6.38181C16.384 3.78906 16.1232 1.72628 14.9735 1.06587C14.7085 0.910953 14.3987 0.837571 14.0603 0.837571V1.74667C14.2479 1.74667 14.3987 1.78335 14.5251 1.85266C15.0795 2.17063 15.3201 3.3814 15.1325 4.93866C15.0876 5.32187 15.0142 5.72547 14.9246 6.13721C14.1256 5.94152 13.2531 5.79071 12.3359 5.69282C11.7856 4.93866 11.2149 4.25379 10.64 3.65453C11.969 2.4193 13.2164 1.74258 14.0644 1.74258V0.833496C12.9433 0.833496 11.4758 1.63252 9.99189 3.01857C8.50798 1.64067 7.04034 0.849795 5.91927 0.849795V1.75889C6.76316 1.75889 8.01469 2.43154 9.34367 3.65861C8.7729 4.25789 8.2022 4.93866 7.65998 5.69282C6.73866 5.79071 5.86628 5.94152 5.06727 6.14126C4.9735 5.73361 4.9042 5.33816 4.85528 4.95906C4.66368 3.40177 4.90012 2.19102 5.45047 1.86896C5.57276 1.79558 5.73177 1.76297 5.91927 1.76297V0.853879C5.57685 0.853879 5.26702 0.927261 4.99796 1.08217C3.85242 1.74258 3.5956 3.80129 4.18671 6.38585C1.65104 7.16861 0 8.42013 0 9.741C0 11.0659 1.65919 12.3215 4.20302 13.1002C3.61598 15.6928 3.87688 17.7556 5.0265 18.416C5.29149 18.571 5.6013 18.6444 5.94376 18.6444C7.06483 18.6444 8.53242 17.8453 10.0163 16.4592C11.5003 17.8372 12.9678 18.6281 14.0889 18.6281C14.4313 18.6281 14.7411 18.5547 15.0102 18.3997C16.1557 17.7393 16.4126 15.6807 15.8214 13.0961C18.349 12.3174 20 11.0618 20 9.741ZM14.6923 7.02184C14.5414 7.54775 14.3539 8.08996 14.1418 8.63207C13.9747 8.306 13.7995 7.97984 13.6078 7.65377C13.4203 7.32757 13.2205 7.00959 13.0208 6.69978C13.5996 6.78541 14.1582 6.89138 14.6923 7.02184ZM12.8251 11.3634C12.5071 11.9138 12.181 12.4356 11.8427 12.9207C11.2353 12.9737 10.6197 13.0023 10 13.0023C9.38441 13.0023 8.76886 12.9737 8.16551 12.9248C7.82714 12.4397 7.49693 11.922 7.17895 11.3757C6.86913 10.8416 6.58785 10.2994 6.33101 9.75313C6.58375 9.20691 6.86913 8.6606 7.17491 8.1266C7.49288 7.57628 7.819 7.05443 8.15736 6.5693C8.76476 6.51632 9.3804 6.48778 10 6.48778C10.6156 6.48778 11.2312 6.51632 11.8345 6.56526C12.1728 7.05039 12.5031 7.56808 12.8211 8.11439C13.1309 8.64848 13.4121 9.19059 13.669 9.7369C13.4121 10.2831 13.1309 10.8294 12.8251 11.3634ZM14.1418 10.8335C14.362 11.3797 14.5495 11.9261 14.7045 12.456C14.1704 12.5865 13.6078 12.6965 13.0249 12.7821C13.2246 12.4683 13.4244 12.1462 13.6119 11.8159C13.7995 11.4899 13.9747 11.1596 14.1418 10.8335ZM10.0081 15.1832C9.62908 14.7919 9.24986 14.3557 8.87483 13.8787C9.24175 13.8951 9.61677 13.9073 9.9959 13.9073C10.3791 13.9073 10.7583 13.8992 11.1293 13.8787C10.7624 14.3557 10.3832 14.7919 10.0081 15.1832ZM6.97516 12.7821C6.39625 12.6965 5.83774 12.5905 5.30371 12.4601C5.45455 11.9342 5.64207 11.392 5.85403 10.8498C6.02119 11.1759 6.1965 11.5021 6.3881 11.8282C6.57971 12.1543 6.77535 12.4723 6.97516 12.7821ZM9.98779 4.29863C10.3669 4.68998 10.746 5.12622 11.1211 5.60315C10.7541 5.58685 10.3791 5.57461 10 5.57461C9.61677 5.57461 9.23774 5.58281 8.86668 5.60315C9.23364 5.12622 9.61267 4.68998 9.98779 4.29863ZM6.97106 6.69978C6.77131 7.01369 6.57156 7.33571 6.384 7.66589C6.1965 7.99205 6.02119 8.31822 5.85403 8.64438C5.63392 8.09807 5.44639 7.55185 5.29149 7.02184C5.82555 6.89548 6.3881 6.78541 6.97106 6.69978ZM3.2817 11.8037C1.83857 11.1881 0.905014 10.381 0.905014 9.741C0.905014 9.10089 1.83857 8.28968 3.2817 7.6782C3.63229 7.52733 4.01549 7.3928 4.41093 7.26643C4.64329 8.06544 4.94904 8.89707 5.32817 9.74912C4.95312 10.5971 4.65145 11.4246 4.42315 12.2196C4.01957 12.0931 3.63636 11.9546 3.2817 11.8037ZM5.47493 17.6292C4.9205 17.3113 4.67998 16.1005 4.86751 14.5432C4.91235 14.16 4.98573 13.7565 5.07542 13.3447C5.87443 13.5404 6.74686 13.6912 7.66408 13.789C8.21445 14.5432 8.78515 15.2281 9.35998 15.8274C8.03099 17.0626 6.78356 17.7393 5.93556 17.7393C5.75217 17.7353 5.59723 17.6986 5.47493 17.6292ZM15.1448 14.5229C15.3363 16.0801 15.0999 17.2909 14.5495 17.6129C14.4273 17.6863 14.2683 17.7189 14.0808 17.7189C13.2368 17.7189 11.9853 17.0463 10.6563 15.8192C11.2271 15.2199 11.7978 14.5392 12.34 13.785C13.2613 13.6871 14.1337 13.5364 14.9327 13.3365C15.0265 13.7483 15.0999 14.1437 15.1448 14.5229ZM16.7142 11.8037C16.3636 11.9546 15.9805 12.089 15.585 12.2155C15.3526 11.4165 15.0469 10.5848 14.6677 9.7328C15.0428 8.88485 15.3445 8.05732 15.5727 7.26233C15.9764 7.38875 16.3595 7.52733 16.7183 7.6782C18.1614 8.29369 19.095 9.10089 19.095 9.741C19.0909 10.381 18.1573 11.1922 16.7142 11.8037Z"
                        fill="#61DAFB"
                      ></path>
                      <path
                        d="M9.99599 11.6039C11.0249 11.6039 11.859 10.7697 11.859 9.74079C11.859 8.71189 11.0249 7.8778 9.99599 7.8778C8.96707 7.8778 8.13298 8.71189 8.13298 9.74079C8.13298 10.7697 8.96707 11.6039 9.99599 11.6039Z"
                        fill="#61DAFB"
                      ></path>
                    </svg>
                    Preview React
                    <span className="pl-[10px]">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current"
                      >
                        <g clip-path="url(#clip0_859_2899)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8.95697 0.9375H9.04303C10.7743 0.937491 12.1311 0.937483 13.1897 1.07981C14.2733 1.22549 15.1283 1.5295 15.7994 2.2006C16.4705 2.87171 16.7745 3.72673 16.9202 4.81028C17.0625 5.8689 17.0625 7.22567 17.0625 8.95697V9.04303C17.0625 10.7743 17.0625 12.1311 16.9202 13.1897C16.7745 14.2733 16.4705 15.1283 15.7994 15.7994C15.1283 16.4705 14.2733 16.7745 13.1897 16.9202C12.1311 17.0625 10.7743 17.0625 9.04303 17.0625H8.95697C7.22567 17.0625 5.8689 17.0625 4.81028 16.9202C3.72673 16.7745 2.87171 16.4705 2.2006 15.7994C1.5295 15.1283 1.22549 14.2733 1.07981 13.1897C0.937483 12.1311 0.937491 10.7743 0.9375 9.04303V8.95697C0.937491 7.22567 0.937483 5.86889 1.07981 4.81028C1.22549 3.72673 1.5295 2.87171 2.2006 2.2006C2.87171 1.5295 3.72673 1.22549 4.81028 1.07981C5.86889 0.937483 7.22567 0.937491 8.95697 0.9375ZM4.96018 2.19478C4.00138 2.32369 3.42334 2.56886 2.9961 2.9961C2.56886 3.42334 2.32369 4.00138 2.19478 4.96018C2.06369 5.93517 2.0625 7.21633 2.0625 9C2.0625 10.7837 2.06369 12.0648 2.19478 13.0398C2.32369 13.9986 2.56886 14.5767 2.9961 15.0039C3.42334 15.4311 4.00138 15.6763 4.96018 15.8052C5.93517 15.9363 7.21633 15.9375 9 15.9375C10.7837 15.9375 12.0648 15.9363 13.0398 15.8052C13.9986 15.6763 14.5767 15.4311 15.0039 15.0039C15.4311 14.5767 15.6763 13.9986 15.8052 13.0398C15.9363 12.0648 15.9375 10.7837 15.9375 9C15.9375 7.21633 15.9363 5.93517 15.8052 4.96018C15.6763 4.00138 15.4311 3.42334 15.0039 2.9961C14.5767 2.56886 13.9986 2.32369 13.0398 2.19478C12.0648 2.06369 10.7837 2.0625 9 2.0625C7.21633 2.0625 5.93517 2.06369 4.96018 2.19478ZM7.37684 6.87868C7.37684 6.56802 7.62868 6.31618 7.93934 6.31618H11.1213C11.432 6.31618 11.6838 6.56802 11.6838 6.87868V10.0607C11.6838 10.3713 11.432 10.6232 11.1213 10.6232C10.8107 10.6232 10.5588 10.3713 10.5588 10.0607V8.23667L7.27643 11.5191C7.05676 11.7387 6.7006 11.7387 6.48093 11.5191C6.26126 11.2994 6.26126 10.9432 6.48093 10.7236L9.76333 7.44118H7.93934C7.62868 7.44118 7.37684 7.18934 7.37684 6.87868Z"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_859_2899">
                            <rect width="18" height="18" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://nextjs-demo.tailadmin.com/"
                    className="nested-group flex items-center gap-2 rounded px-2.5 py-1.5 hover:bg-gray hover:text-black dark:hover:bg-meta-4"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_812_2872)">
                        <path
                          d="M9.34506 0.00538207C9.30205 0.00929157 9.1652 0.0229748 9.04203 0.0327485C6.20137 0.28882 3.54057 1.82134 1.85533 4.17681C0.916911 5.48649 0.316716 6.9721 0.0899316 8.54567C0.00977517 9.09496 0 9.2572 0 10.002C0 10.7467 0.00977517 10.909 0.0899316 11.4582C0.633431 15.2133 3.30596 18.3683 6.9306 19.5372C7.57967 19.7464 8.26393 19.8891 9.04203 19.9751C9.34506 20.0083 10.6549 20.0083 10.958 19.9751C12.3011 19.8265 13.4389 19.4942 14.5611 18.9215C14.7331 18.8335 14.7664 18.81 14.7429 18.7905C14.7273 18.7788 13.9941 17.7955 13.1144 16.607L11.5152 14.4471L9.51124 11.4817C8.4086 9.85144 7.50147 8.5183 7.49365 8.5183C7.48583 8.51635 7.47801 9.83385 7.4741 11.4426C7.46823 14.2594 7.46628 14.3728 7.43109 14.4392C7.38025 14.535 7.34115 14.5741 7.25904 14.6171C7.19648 14.6484 7.14174 14.6543 6.84653 14.6543H6.50831L6.41838 14.5976C6.35973 14.5604 6.31672 14.5116 6.28739 14.4549L6.24633 14.3669L6.25024 10.4476L6.25611 6.52642L6.31672 6.45018C6.348 6.40913 6.41447 6.35635 6.46139 6.33094C6.54154 6.29185 6.57282 6.28794 6.91105 6.28794C7.30987 6.28794 7.37634 6.30358 7.47996 6.41695C7.50929 6.44823 8.59433 8.0824 9.89247 10.0508C11.1906 12.0193 12.9658 14.707 13.8377 16.0265L15.4213 18.425L15.5015 18.3722C16.2111 17.9109 16.9619 17.2541 17.5562 16.5699C18.8211 15.1175 19.6364 13.3465 19.9101 11.4582C19.9902 10.909 20 10.7467 20 10.002C20 9.2572 19.9902 9.09496 19.9101 8.54567C19.3666 4.7906 16.694 1.63564 13.0694 0.466702C12.4301 0.259499 11.7498 0.116803 10.9873 0.0307938C10.7996 0.0112463 9.50733 -0.0102559 9.34506 0.00538207ZM13.4389 6.05337C13.5327 6.10028 13.609 6.1902 13.6364 6.28403C13.652 6.33485 13.6559 7.42169 13.652 9.87099L13.6461 13.3856L13.0264 12.4356L12.4047 11.4856V8.93076C12.4047 7.279 12.4125 6.35049 12.4242 6.30553C12.4555 6.19607 12.5239 6.11006 12.6178 6.05923C12.6979 6.01818 12.7273 6.01427 13.0342 6.01427C13.3236 6.01427 13.3744 6.01818 13.4389 6.05337Z"
                          fill="black"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_812_2872">
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    Preview Next
                    <span className="pl-[10px]">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current"
                      >
                        <g clip-path="url(#clip0_859_2899)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8.95697 0.9375H9.04303C10.7743 0.937491 12.1311 0.937483 13.1897 1.07981C14.2733 1.22549 15.1283 1.5295 15.7994 2.2006C16.4705 2.87171 16.7745 3.72673 16.9202 4.81028C17.0625 5.8689 17.0625 7.22567 17.0625 8.95697V9.04303C17.0625 10.7743 17.0625 12.1311 16.9202 13.1897C16.7745 14.2733 16.4705 15.1283 15.7994 15.7994C15.1283 16.4705 14.2733 16.7745 13.1897 16.9202C12.1311 17.0625 10.7743 17.0625 9.04303 17.0625H8.95697C7.22567 17.0625 5.8689 17.0625 4.81028 16.9202C3.72673 16.7745 2.87171 16.4705 2.2006 15.7994C1.5295 15.1283 1.22549 14.2733 1.07981 13.1897C0.937483 12.1311 0.937491 10.7743 0.9375 9.04303V8.95697C0.937491 7.22567 0.937483 5.86889 1.07981 4.81028C1.22549 3.72673 1.5295 2.87171 2.2006 2.2006C2.87171 1.5295 3.72673 1.22549 4.81028 1.07981C5.86889 0.937483 7.22567 0.937491 8.95697 0.9375ZM4.96018 2.19478C4.00138 2.32369 3.42334 2.56886 2.9961 2.9961C2.56886 3.42334 2.32369 4.00138 2.19478 4.96018C2.06369 5.93517 2.0625 7.21633 2.0625 9C2.0625 10.7837 2.06369 12.0648 2.19478 13.0398C2.32369 13.9986 2.56886 14.5767 2.9961 15.0039C3.42334 15.4311 4.00138 15.6763 4.96018 15.8052C5.93517 15.9363 7.21633 15.9375 9 15.9375C10.7837 15.9375 12.0648 15.9363 13.0398 15.8052C13.9986 15.6763 14.5767 15.4311 15.0039 15.0039C15.4311 14.5767 15.6763 13.9986 15.8052 13.0398C15.9363 12.0648 15.9375 10.7837 15.9375 9C15.9375 7.21633 15.9363 5.93517 15.8052 4.96018C15.6763 4.00138 15.4311 3.42334 15.0039 2.9961C14.5767 2.56886 13.9986 2.32369 13.0398 2.19478C12.0648 2.06369 10.7837 2.0625 9 2.0625C7.21633 2.0625 5.93517 2.06369 4.96018 2.19478ZM7.37684 6.87868C7.37684 6.56802 7.62868 6.31618 7.93934 6.31618H11.1213C11.432 6.31618 11.6838 6.56802 11.6838 6.87868V10.0607C11.6838 10.3713 11.432 10.6232 11.1213 10.6232C10.8107 10.6232 10.5588 10.3713 10.5588 10.0607V8.23667L7.27643 11.5191C7.05676 11.7387 6.7006 11.7387 6.48093 11.5191C6.26126 11.2994 6.26126 10.9432 6.48093 10.7236L9.76333 7.44118H7.93934C7.62868 7.44118 7.37684 7.18934 7.37684 6.87868Z"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_859_2899">
                            <rect width="18" height="18" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://vue-demo.tailadmin.com/"
                    className="nested-group flex items-center gap-2 rounded px-2.5 py-1.5 hover:bg-gray hover:text-black dark:hover:bg-meta-4"
                  >
                    <svg
                      width="21"
                      height="18"
                      viewBox="0 0 21 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.10242 0.478775L7.69648 0.480134L10.0459 4.37982L12.3869 0.480447L15.9779 0.479494L10.0638 10.7381L4.10242 0.478775Z"
                        fill="#41B883"
                        fill-opacity="0.4"
                      ></path>
                      <path
                        d="M0.182739 0.505879L4.0993 0.479145L10.0604 10.7382L15.9748 0.47977L19.8982 0.483879L10.0598 17.3683L0.182739 0.505879Z"
                        fill="#41B883"
                      ></path>
                    </svg>
                    Preview Vue
                    <span className="pl-[10px]">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current"
                      >
                        <g clip-path="url(#clip0_859_2899)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8.95697 0.9375H9.04303C10.7743 0.937491 12.1311 0.937483 13.1897 1.07981C14.2733 1.22549 15.1283 1.5295 15.7994 2.2006C16.4705 2.87171 16.7745 3.72673 16.9202 4.81028C17.0625 5.8689 17.0625 7.22567 17.0625 8.95697V9.04303C17.0625 10.7743 17.0625 12.1311 16.9202 13.1897C16.7745 14.2733 16.4705 15.1283 15.7994 15.7994C15.1283 16.4705 14.2733 16.7745 13.1897 16.9202C12.1311 17.0625 10.7743 17.0625 9.04303 17.0625H8.95697C7.22567 17.0625 5.8689 17.0625 4.81028 16.9202C3.72673 16.7745 2.87171 16.4705 2.2006 15.7994C1.5295 15.1283 1.22549 14.2733 1.07981 13.1897C0.937483 12.1311 0.937491 10.7743 0.9375 9.04303V8.95697C0.937491 7.22567 0.937483 5.86889 1.07981 4.81028C1.22549 3.72673 1.5295 2.87171 2.2006 2.2006C2.87171 1.5295 3.72673 1.22549 4.81028 1.07981C5.86889 0.937483 7.22567 0.937491 8.95697 0.9375ZM4.96018 2.19478C4.00138 2.32369 3.42334 2.56886 2.9961 2.9961C2.56886 3.42334 2.32369 4.00138 2.19478 4.96018C2.06369 5.93517 2.0625 7.21633 2.0625 9C2.0625 10.7837 2.06369 12.0648 2.19478 13.0398C2.32369 13.9986 2.56886 14.5767 2.9961 15.0039C3.42334 15.4311 4.00138 15.6763 4.96018 15.8052C5.93517 15.9363 7.21633 15.9375 9 15.9375C10.7837 15.9375 12.0648 15.9363 13.0398 15.8052C13.9986 15.6763 14.5767 15.4311 15.0039 15.0039C15.4311 14.5767 15.6763 13.9986 15.8052 13.0398C15.9363 12.0648 15.9375 10.7837 15.9375 9C15.9375 7.21633 15.9363 5.93517 15.8052 4.96018C15.6763 4.00138 15.4311 3.42334 15.0039 2.9961C14.5767 2.56886 13.9986 2.32369 13.0398 2.19478C12.0648 2.06369 10.7837 2.0625 9 2.0625C7.21633 2.0625 5.93517 2.06369 4.96018 2.19478ZM7.37684 6.87868C7.37684 6.56802 7.62868 6.31618 7.93934 6.31618H11.1213C11.432 6.31618 11.6838 6.56802 11.6838 6.87868V10.0607C11.6838 10.3713 11.432 10.6232 11.1213 10.6232C10.8107 10.6232 10.5588 10.3713 10.5588 10.0607V8.23667L7.27643 11.5191C7.05676 11.7387 6.7006 11.7387 6.48093 11.5191C6.26126 11.2994 6.26126 10.9432 6.48093 10.7236L9.76333 7.44118H7.93934C7.62868 7.44118 7.37684 7.18934 7.37684 6.87868Z"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_859_2899">
                            <rect width="18" height="18" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
