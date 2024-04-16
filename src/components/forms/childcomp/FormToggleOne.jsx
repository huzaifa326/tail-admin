import { useState } from 'react'
import { Switch } from '@headlessui/react'

function FormToggleOne() {
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
        } inline-block h-[20px] w-[20px] transform rounded-full bg-white transition`}
      />
    </Switch>
  )
}

export default FormToggleOne
