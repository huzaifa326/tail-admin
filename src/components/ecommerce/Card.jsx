import React from 'react'

const Card = ({heading , text , rating , icon ,iconClr , reacticon}) => {

  return (
    <div className={`rounded-sm border px-7 py-6 shadow-default bg-white dark:bg-[#1C2434] border-stroke dark:border-[rgba(46,58,71,1)] `}>

       <div className={`flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#eff2f7] dark:bg-[#313d4a] `}>
       {reacticon}
       </div>

       <div className="mt-4 flex items-end justify-between">
                  <div>
                    <h4 className={`text-[24px] font-bold text-black dark:text-white  `}>{heading}</h4>
                    <span className={`text-sm font-medium text-[#64748b] dark:text-[#aeb7c0]  `}>{text}</span>
                  </div>

                  <span className={`flex items-center gap-1 text-sm font-medium text-${iconClr} `}>{rating}
                  <img className="w-[18px] h-[17px]" src={`${process.env.PUBLIC_URL + icon}`} alt="" />
                
                  </span>

        </div>
    </div>
  )
}

export default Card
