import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { NavLink } from "react-router-dom";

const AuthenicationAccordian = () => {
  return (
    <div className="w-full">
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="w-full relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium cursor-pointer transition-all active:bg-[#333A48] hover:bg-[#333A48]  focus:outline-none ">
          <i className="text-[18px] fa-solid fa-arrow-right-to-bracket text-[#dee4ee]"></i>
          <div className="w-full flex justify-between items-center">
          <NavLink>Authentication</NavLink>
            <ChevronUpIcon
              className={`${
                open ? "rotate-180 transform" : ""
              } h-5 w-5 text-[#dee4ee] `}
            />
            </div>
          </Disclosure.Button>
          <Disclosure.Panel className="bg-[#1C2434]">
          <ul className="mb-5.5 pt-4 flex flex-col gap-2.5 pl-6 cursor-pointer">
           
            <li><NavLink activeClassName="active" to="/signin" className="rounded-md px-4 font-medium duration-300 ease-in-out text-[#8a99af] hover:text-white">Sign in</NavLink></li>
            <li><NavLink activeClassName="active" to="/signup" className="rounded-md px-4 font-medium duration-300 ease-in-out text-[#8a99af] hover:text-white">Sign up</NavLink></li>

            <li><NavLink activeClassName="active" to="/resetpassword" className="relative flex items-center gap-2.5 rounded-md px-4 font-medium text-[#8a99af] duration-300 ease-in-out hover:text-white">reset Password<span className="absolute right-4 block rounded bg-[#3C50E0] px-2 py-1 text-xs font-medium text-white">Pro</span></NavLink></li>
            <li><NavLink activeClassName="active" to="/commingsoon" className="relative flex items-center gap-2.5 rounded-md px-4 font-medium text-[#8a99af] duration-300 ease-in-out hover:text-white">Comming Soon<span className="absolute right-4 block rounded bg-[#3C50E0] px-2 py-1 text-xs font-medium text-white">Pro</span></NavLink></li>
            <li><NavLink activeClassName="active" to="/twostepvarification" className="relative flex items-center gap-2.5 rounded-md px-4 font-medium text-[#8a99af] duration-300 ease-in-out hover:text-white">2 Step Verification<span className="absolute right-4 block rounded bg-[#3C50E0] px-2 py-1 text-xs font-medium text-white">Pro</span></NavLink></li>
            <li><NavLink activeClassName="active" to="/undermaintenance" className="relative flex items-center gap-2.5 rounded-md px-4 font-medium text-[#8a99af] duration-300 ease-in-out hover:text-white">Under Maintenance<span className="absolute right-4 block rounded bg-[#3C50E0] px-2 py-1 text-xs font-medium text-white">Pro</span></NavLink></li>
          
          </ul>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  </div>
  )
}

export default AuthenicationAccordian
