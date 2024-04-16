import { useState } from 'react'
import { Switch } from '@headlessui/react'

function FormToggleFour() {
  const [enabled, setEnabled] = useState(false)

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? 'bg-blue-600' : 'bg-black dark:bg-[#24303F]'
      } relative inline-flex h-[30px] w-[60px] items-center rounded-full`}
    >
      <span
        className={`${
          enabled ? 'translate-x-[35px]' : 'translate-x-1'
        } inline-block h-[20px] w-[20px] transform rounded-full bg-white transition`}
      />
    </Switch>
  )
}

export default FormToggleFour
