import { Link } from "react-router-dom";

const Varfication = () => {
  return (
      <section className="overflow-hidden px-4 sm:px-8 bg-[#F1F5F9] ">
        <div className="flex h-screen flex-col items-center justify-center overflow-hidden">
          <div className="no-scrollbar overflow-y-auto py-20">
            <div className="mx-auto w-full max-w-[480px]">
              <div className="text-center">
                <Link to="/" className="mx-auto mb-10 inline-flex">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/side-bar/logo-light.svg`}
                    alt="logo"
                    className="dark:hidden"
                  />
                  <img
                    src={`${process.env.PUBLIC_URL}/images/side-bar/logo.svg`}
                    alt="logo"
                    className="hidden dark:block"
                  />
                </Link>

                <div className="rounded-xl bg-white p-4 shadow-xl dark:bg-boxdark lg:p-[1.875rem] xl:p-[3.125rem]">
                  <h1 className="mb-2.5 text-3xl font-black leading-[48px] text-black dark:text-white">
                    Verify Your Account
                  </h1>

                  <p className="mb-[1.875rem] font-medium text-general-gray ">
                    Enter the 4 digit code sent to the registered email id.
                  </p>

                  <form>
                    <div className="flex items-center gap-[1.125rem] ">
                      <input
                        type="text"
                        className="w-full rounded-md border-[1.5px] border-stroke bg-transparent p-3 font-medium text-2xl text-center text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />

                      <input
                        type="text"
                        className="w-full rounded-md border-[1.5px] border-stroke bg-transparent p-3 font-medium text-2xl text-center text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />

                      <input
                        type="text"
                        className="w-full rounded-md border-[1.5px] border-stroke bg-transparent p-3 font-medium text-2xl text-center text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />

                      <input
                        type="text"
                        className="w-full rounded-md border-[1.5px] border-stroke bg-transparent p-3 font-medium text-2xl text-center text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>

                    <p className="mb-5 mt-4 text-left font-medium text-black dark:text-white">
                      Did not receive a code?
                      <button className="text-primary ms-[5px] ">Resend</button>
                    </p>

                    <button className="flex w-full justify-center rounded-md bg-primary p-[13px] font-bold text-gray hover:bg-opacity-90">
                      Verify
                    </button>

                    <span className="mt-5 block text-red">
                      Don’t share the verification code with anyone!
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Varfication;
