import { Switch } from '@headlessui/react'
import { useTheme } from 'next-themes'

export default function ToggleBtn() {
  const { theme, setTheme } = useTheme()

  const handleTheme =(state)=>{
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
      <Switch
        checked={theme}
        onChange={handleTheme}
        className={` dark:bg-[rgba(60,80,224,1)]  bg-[rgba(226,232,240,1)] '}
          relative inline-flex h-[30px] w-[56px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <span className="sr-only">Use setting</span>
        <span
        aria-hidden="true"
        className={` dark:translate-x-[1.7rem]  translate-x-0'}
          flex items-center justify-center pointer-events-none h-[25px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
      >
        <img className='w-[17px] h-[17px]' src={theme === 'dark' ? `${process.env.PUBLIC_URL}/images/nav/moon.svg` : `${process.env.PUBLIC_URL}/images/nav/sun.svg`} alt="" />        
      </span>
      </Switch>
  )
}
