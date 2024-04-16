import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { NavLink } from "react-router-dom";

const UiAccordian = () => {
  return (
    <div className="w-full">
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="w-full relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium cursor-pointer transition-all active:bg-[#333A48] hover:bg-[#333A48]  focus:outline-none ">
          <img className="w-[18px] h-[18px]" src={`${process.env.PUBLIC_URL}/images/side-bar/pages.svg`} alt="" />
          <div className="w-full flex justify-between items-center">
          <NavLink >UI Elements</NavLink>
            <ChevronUpIcon
              className={`${
                open ? "rotate-180 transform" : ""
              } h-5 w-5 text-[#dee4ee] `}
            />
            </div>
          </Disclosure.Button>
          <Disclosure.Panel className="bg-[#1C2434]">
          <ul className="mb-5.5 pt-4 flex flex-col gap-2.5 pl-6 cursor-pointer">
            <li><NavLink activeClassName="active" to="/" className="relative flex items-center gap-2.5 rounded-md px-4 font-medium text-[#8a99af] duration-300 ease-in-out hover:text-white">Accordian<span className="absolute right-4 block rounded bg-[#3C50E0] px-2 py-1 text-xs font-medium text-white">Pro</span></NavLink></li>
            
            <li><NavLink activeClassName="active" to="/" className="rounded-md px-4 font-medium duration-300 ease-in-out text-[#8a99af] hover:text-white">Alerts</NavLink></li>
            <li><NavLink activeClassName="active" to="/" className="relative flex items-center gap-2.5 rounded-md px-4 font-medium text-[#8a99af] duration-300 ease-in-out hover:text-white">avatars<span className="absolute right-4 block rounded bg-[#3C50E0] px-2 py-1 text-xs font-medium text-white">Pro</span></NavLink></li>
            <li><NavLink activeClassName="active" to="/" className="relative flex items-center gap-2.5 rounded-md px-4 font-medium text-[#8a99af] duration-300 ease-in-out hover:text-white">Badge<span className="absolute right-4 block rounded bg-[#3C50E0] px-2 py-1 text-xs font-medium text-white">Pro</span></NavLink></li>
            <li><NavLink activeClassName="active" to="/" className="relative flex items-center gap-2.5 rounded-md px-4 font-medium text-[#8a99af] duration-300 ease-in-out hover:text-white">Breadcrumb<span className="absolute right-4 block rounded bg-[#3C50E0] px-2 py-1 text-xs font-medium text-white">Pro</span></NavLink></li>
            
            <li><NavLink activeClassName="active" to="/" className="rounded-md px-4 font-medium duration-300 ease-in-out text-[#8a99af] hover:text-white">Buttons </NavLink></li>

            <li><NavLink activeClassName="active" to="/" className="relative flex items-center gap-2.5 rounded-md px-4 font-medium text-[#8a99af] duration-300 ease-in-out hover:text-white">Buttons Group<span className="absolute right-4 block rounded bg-[#3C50E0] px-2 py-1 text-xs font-medium text-white">Pro</span></NavLink></li>
            <li><NavLink activeClassName="active" to="/" className="relative flex items-center gap-2.5 rounded-md px-4 font-medium text-[#8a99af] duration-300 ease-in-out hover:text-white">Cards<span className="absolute right-4 block rounded bg-[#3C50E0] px-2 py-1 text-xs font-medium text-white">Pro</span></NavLink></li>
            <li><NavLink activeClassName="active" to="/" className="relative flex items-center gap-2.5 rounded-md px-4 font-medium text-[#8a99af] duration-300 ease-in-out hover:text-white">Carousel<span className="absolute right-4 block rounded bg-[#3C50E0] px-2 py-1 text-xs font-medium text-white">Pro</span></NavLink></li>
            <li><NavLink activeClassName="active" to="/" className="relative flex items-center gap-2.5 rounded-md px-4 font-medium text-[#8a99af] duration-300 ease-in-out hover:text-white">Dropdowns<span className="absolute right-4 block rounded bg-[#3C50E0] px-2 py-1 text-xs font-medium text-white">Pro</span></NavLink></li>
            <li><NavLink activeClassName="active" to="/" className="relative flex items-center gap-2.5 rounded-md px-4 font-medium text-[#8a99af] duration-300 ease-in-out hover:text-white">Images<span className="absolute right-4 block rounded bg-[#3C50E0] px-2 py-1 text-xs font-medium text-white">Pro</span></NavLink></li>
            <li><NavLink activeClassName="active" to="/" className="relative flex items-center gap-2.5 rounded-md px-4 font-medium text-[#8a99af] duration-300 ease-in-out hover:text-white">List<span className="absolute right-4 block rounded bg-[#3C50E0] px-2 py-1 text-xs font-medium text-white">Pro</span></NavLink></li>
            <li><NavLink activeClassName="active" to="/" className="relative flex items-center gap-2.5 rounded-md px-4 font-medium text-[#8a99af] duration-300 ease-in-out hover:text-white">Modals<span className="absolute right-4 block rounded bg-[#3C50E0] px-2 py-1 text-xs font-medium text-white">Pro</span></NavLink></li>
            <li><NavLink activeClassName="active" to="/" className="relative flex items-center gap-2.5 rounded-md px-4 font-medium text-[#8a99af] duration-300 ease-in-out hover:text-white">Notifications<span className="absolute right-4 block rounded bg-[#3C50E0] px-2 py-1 text-xs font-medium text-white">Pro</span></NavLink></li>
            <li><NavLink activeClassName="active" to="/" className="relative flex items-center gap-2.5 rounded-md px-4 font-medium text-[#8a99af] duration-300 ease-in-out hover:text-white">Pagination<span className="absolute right-4 block rounded bg-[#3C50E0] px-2 py-1 text-xs font-medium text-white">Pro</span></NavLink></li>
            <li><NavLink activeClassName="active" to="/" className="relative flex items-center gap-2.5 rounded-md px-4 font-medium text-[#8a99af] duration-300 ease-in-out hover:text-white">Popovers<span className="absolute right-4 block rounded bg-[#3C50E0] px-2 py-1 text-xs font-medium text-white">Pro</span></NavLink></li>
            <li><NavLink activeClassName="active" to="/" className="relative flex items-center gap-2.5 rounded-md px-4 font-medium text-[#8a99af] duration-300 ease-in-out hover:text-white">Progress<span className="absolute right-4 block rounded bg-[#3C50E0] px-2 py-1 text-xs font-medium text-white">Pro</span></NavLink></li>
            <li><NavLink activeClassName="active" to="/" className="relative flex items-center gap-2.5 rounded-md px-4 font-medium text-[#8a99af] duration-300 ease-in-out hover:text-white">Spinners<span className="absolute right-4 block rounded bg-[#3C50E0] px-2 py-1 text-xs font-medium text-white">Pro</span></NavLink></li>
            <li><NavLink activeClassName="active" to="/" className="relative flex items-center gap-2.5 rounded-md px-4 font-medium text-[#8a99af] duration-300 ease-in-out hover:text-white">Tabs<span className="absolute right-4 block rounded bg-[#3C50E0] px-2 py-1 text-xs font-medium text-white">Pro</span></NavLink></li>
            <li><NavLink activeClassName="active" to="/" className="relative flex items-center gap-2.5 rounded-md px-4 font-medium text-[#8a99af] duration-300 ease-in-out hover:text-white">Tooltips<span className="absolute right-4 block rounded bg-[#3C50E0] px-2 py-1 text-xs font-medium text-white">Pro</span></NavLink></li>
            <li><NavLink activeClassName="active" to="/" className="relative flex items-center gap-2.5 rounded-md px-4 font-medium text-[#8a99af] duration-300 ease-in-out hover:text-white">Videos<span className="absolute right-4 block rounded bg-[#3C50E0] px-2 py-1 text-xs font-medium text-white">Pro</span></NavLink></li>
            
          </ul>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  </div>
  )
}

export default UiAccordian
