import React from 'react'

const Table = () => {
  return (
   
    <div className="col-span-12 xl:col-span-8">
    <div className={`rounded-sm border px-5 pb-2.5 pt-6 shadow-default sm:px-7.5 xl:pb-1 bg-white border-[rgba(226,232,240,1)] dark:bg-[#1C2434] dark:border-[rgba(46,58,71,1)]`}>
      <h4 className={`mb-6 text-xl font-bold text-[#1c2434] dark:text-white`}>Top Channels</h4>

      <div className="flex flex-col">
        <div className={`grid grid-cols-3 rounded-sm sm:grid-cols-5 bg-[#F7F9FC] text-[#64748b] dark:bg-[#313D4A] dark:text-[#aeb7c0]`}>
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Source
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Visitors
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Revenues
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Sales
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Conversion
            </h5>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-[rgba(226,232,240,1)] dark:border-strokedark sm:grid-cols-5">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <div className="flex-shrink-0">
              <img src={`${process.env.PUBLIC_URL}/images/dashboard/brand-01.svg`} alt="Brand" />
            </div>
            <p className={`hidden font-medium sm:block text-[#1c2434] dark:text-white`}>
              Google
            </p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className={`font-medium text-[#1c2434] dark:text-white`}>3.5K</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="font-medium text-[#10b981] ">$5,768</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className={`font-medium text-[#1c2434] dark:text-white`}>590</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="font-medium text-[#2598e6] ">4.8%</p>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-[rgba(226,232,240,1)] dark:border-strokedark sm:grid-cols-5">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <div className="flex-shrink-0">
            <img src={`${process.env.PUBLIC_URL}/images/dashboard/brand-02.svg`} alt="Brand" />
            </div>
            <p className={`hidden font-medium sm:block text-[#1c2434] dark:text-white`}>
              Twitter
            </p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className={`font-medium text-[#1c2434] dark:text-white`}>2.2K</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="font-medium text-[#10b981]">$4,635</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className={`font-medium text-[#1c2434] dark:text-white`}>467</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="font-medium text-[#2598e6]">4.3%</p>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-[rgba(226,232,240,1)] dark:border-strokedark sm:grid-cols-5">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <div className="flex-shrink-0">
            <img src={`${process.env.PUBLIC_URL}/images/dashboard/brand-03.svg`} alt="Brand" />
            </div>
            <p className={`hidden font-medium sm:block text-[#1c2434] dark:text-white`}>
              Github
            </p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className={`font-medium text-[#1c2434] dark:text-white`}>2.1K</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="font-medium text-[#10b981]">$4,290</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className={`font-medium text-[#1c2434] dark:text-white`}>420</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="font-medium text-[#2598e6]">3.7%</p>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-[rgba(226,232,240,1)] dark:border-strokedark sm:grid-cols-5">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <div className="flex-shrink-0">
            <img src={`${process.env.PUBLIC_URL}/images/dashboard/brand-04.svg`} alt="Brand" />
            </div>
            <p className={`hidden font-medium sm:block text-[#1c2434] dark:text-white`}>
              Vimeo
            </p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className={`font-medium text-[#1c2434] dark:text-white`}>1.5K</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="font-medium text-[#10b981]">$3,580</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className={`font-medium text-[#1c2434] dark:text-white`}>389</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="font-medium text-[#2598e6]">2.5%</p>
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-5">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <div className="flex-shrink-0">
            <img src={`${process.env.PUBLIC_URL}/images/dashboard/brand-05.svg`} alt="Brand" />
            </div>
            <p className={`hidden font-medium sm:block text-[#1c2434] dark:text-white`}>
              Facebook
            </p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className={`font-medium text-[#1c2434] dark:text-white`}>1.2K</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="font-medium text-[#10b981]">$2,740</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className={`font-medium text-[#1c2434] dark:text-white`}>230</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="font-medium text-[#2598e6]">1.9%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Table
