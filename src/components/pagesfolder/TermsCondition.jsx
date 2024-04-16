import Layout from "../Layout";
import { NavLink } from "react-router-dom";

const TermsCondition = () => {
  return (
    <Layout>
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-[#F1F5F9] dark:bg-[#1A222C]">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-[26px] leading-[30px] font-bold text-black dark:text-white">
            Terms & Conditions
          </h2>

          <nav>
            <ol className="flex items-center gap-2">
              <li className="text-general-gray dark:text-dark-general-gray">
                <NavLink
                  className="font-medium text-general-gray dark:text-dark-general-gray "
                  to="/"
                >
                  Dashboard /
                </NavLink>
              </li>
              <li className="font-medium text-primary">Terms & Conditions</li>
            </ol>
          </nav>
        </div>
        {/* ========= */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark text-general-gray dark:text-dark-general-gray ">
          <div className="flex flex-col gap-[1.875rem] p-4 sm:p-6 xl:p-9">
            <div>
              <h3 className="mb-5 text-[26px] leading-[30px] font-bold text-black dark:text-white">
                Terms &amp; Services
              </h3>

              <p className="font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis quis ligula id molestie. Ut ultricies nulla sed mi
                elementum eleifend. Vivamus interdum mollis metus. Sed vitae
                orci porta, interdum nisi ac, vestibulum massa. Curabitur lorem
                sem, scelerisque ut lectus.
              </p>

              <p className="mt-[1.125rem] font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis quis ligula id molestie.
              </p>
            </div>

            <div>
              <h4 className="mb-5 text-[22px] font-bold leading-[30px] text-black dark:text-white">
                Lorem ipsum 1
              </h4>

              <p className="font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis quis ligula id molestie. Ut ultricies nulla sed mi
                elementum eleifend. Vivamus interdum mollis metus. Sed vitae
                orci porta, interdum nisi ac, vestibulum massa. Curabitur lorem
                sem, scelerisque ut lectus Aliquam erat volutpat. Ut a diam
                ultrices, pellentesque magna iaculis, pellentesque lacus. Nulla
                at luctus ligula. Donec nibh est, elementum in tincidunt ac,
                luctus ut ipsum. In hac habitasse platea dictumst.
              </p>

              <p className="mt-[1.125rem] font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis quis ligula id molestie. Ut ultricies nulla sed mi
                elementum eleifend. Vivamus interdum mollis metus. Sed vitae
                orci porta, interdum nisi ac, vestibulum massa. Curabitur lorem
                sem.
              </p>

              <p className="mt-[1.125rem] font-medium">
                Curabitur lorem sem, scelerisque ut lectus Aliquam erat
                volutpat. Ut a diam ultrices, pellentesque magna iaculis,
                pellentesque lacus. Nulla at luctus ligula. Donec nibh est,
                elementum in tincidunt ac, luctus ut ipsum. In hac habitasse
                platea dictumst Curabitur lorem sem, scelerisque erat volutpat.
              </p>
            </div>

            <div>
              <h4 className="mb-5 text-[22px] font-bold leading-[30px] text-black dark:text-white">
                Lorem ipsum 2
              </h4>

              <p className="font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis quis ligula id molestie. Ut ultricies nulla sed mi
                elementum eleifend. Vivamus interdum mollis metus. Sed vitae
                orci porta, interdum nisi ac, vestibulum massa. Curabitur lorem
                sem.
              </p>

              <p className="mt-[1.125rem] font-medium">
                Curabitur lorem sem, scelerisque ut lectus Aliquam erat
                volutpat. Ut a diam ultrices, pellentesque magna iaculis,
                pellentesque lacus. Nulla at luctus ligula. Donec nibh est,
                elementum in tincidunt ac, luctus ut ipsum. In hac habitasse
                platea dictumst Curabitur lorem sem, scelerisque erat volutpat.
              </p>
            </div>

            <div>
              <h4 className="mb-5 text-[22px] font-bold leading-[30px] text-black dark:text-white">
                Important Links
              </h4>

              <ul className="flex flex-col gap-2.5">
                <li className="font-medium text-primary underline">
                  Lorem ipsum dolor sit amet,
                </li>
                <li className="font-medium text-primary underline">
                  Curabitur lorem sem scelerisque erat volutpat.
                </li>
                <li className="font-medium text-primary underline">
                  Scelerisque erat volutpat.
                </li>
                <li className="font-medium text-primary underline">
                  elementum eleifend
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* ========= */}
      </div>
    </Layout>
  );
};

export default TermsCondition;
