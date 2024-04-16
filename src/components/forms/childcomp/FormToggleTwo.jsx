import { useState } from 'react'
import { Switch } from '@headlessui/react'

function FormToggleTwo() {
  const [enabled, setEnabled] = useState(false)

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`
      bg-[#E5E7EB] dark:bg-[#5A616B]
    } relative inline-flex h-[20px] w-[60px] items-center rounded-full`}
    >
      <span
        className={`${
          enabled ? 'translate-x-[35px] bg-blue-600 dark:bg-white ' : 'translate-x-0 bg-white'
        } inline-block shadow-lg h-[30px] w-[30px] transform rounded-full  transition`}
      />
    </Switch>
  )
}

export default FormToggleTwo
