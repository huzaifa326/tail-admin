import React from 'react'

const AnalyticsCard = ({h4 , text , per , color, icon}) => {
  return (
    <div className="flex items-center justify-center gap-2 border-b border-stroke pb-5 dark:border-strokedark xl:border-b-0 xl:border-r xl:pb-0">
    <div>
      <h4 className="mb-0.5 text-xl font-bold text-boxdark dark:text-white md:text-[28px] leading-[35px] ">
        {h4}
      </h4>
      <p className="text-sm font-medium text-general-gray dark:dark-general-gray ">{text}</p>
    </div>
    <div className="flex items-center gap-1">
     <img className='w-[19px] h-[19px] ' src={`${process.env.PUBLIC_URL + icon}`} alt="" />
      <span className={`text-sm font-medium text-${color}`}>{per}</span>
    </div>
  </div>
  )
}

export default AnalyticsCard
