import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";

function FormToggleThree() {
  const [enabled, setEnabled] = useState(false)

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`
      bg-[#E5E7EB] dark:bg-[#5A616B]
    } relative inline-flex h-[30px] w-[60px] items-center rounded-full`}
    >
      <span
        className={`${
          enabled ? 'translate-x-[35px] bg-blue-600 dark:bg-white ' : 'translate-x-1 bg-white'
        } flex items-center justify-center h-[20px] w-[20px] transform rounded-full bg-white transition`}
      >
        {enabled ? <TiTick className=' text-white dark:text-black ' /> : <RxCross2 className='text-black' />}
      </span>
    </Switch>
  )
}

export default FormToggleThree
