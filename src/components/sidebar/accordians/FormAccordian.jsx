import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { NavLink } from "react-router-dom";

const FormAccordian = () => {
  return (
    <div className="w-full">
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="w-full relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium cursor-pointer transition-all active:bg-[#333A48] hover:bg-[#333A48]  focus:outline-none ">
          <img className="w-[18px] h-[18px]" src={`${process.env.PUBLIC_URL}/images/side-bar/forms.svg`} alt="" />
          <div className="w-full flex justify-between items-center">
          <NavLink>Forms</NavLink>
            <ChevronUpIcon
              className={`${
                open ? "rotate-180 transform" : ""
              } h-5 w-5 text-[#dee4ee] `}
            />
            </div>
          </Disclosure.Button>
          <Disclosure.Panel className="bg-[#1C2434]">
          <ul className="mb-5.5 pt-4 flex flex-col gap-2.5 pl-6 cursor-pointer">
           
            <li><NavLink activeClassName="active" to="/formelement" className="rounded-md px-4 font-medium duration-300 ease-in-out text-[#8a99af] hover:text-white">Form Elements</NavLink></li>

            <li>
              <NavLink activeClassName="active" to="/proformelement" className="relative flex items-center gap-2.5 rounded-md px-4 font-medium text-[#8a99af] duration-300 ease-in-out hover:text-white">Pro Form Elements
                <span className="absolute right-4 block rounded bg-[#3C50E0] px-2 py-1 text-xs font-medium text-white">Pro</span></NavLink>
            </li>

            <li><NavLink activeClassName="active" to="/formlayout" className="rounded-md px-4 font-medium duration-300 ease-in-out text-[#8a99af] hover:text-white">Form Layout</NavLink></li>

            <li>
              <NavLink activeClassName="active" to="/proformlayout" className="relative flex items-center gap-2.5 rounded-md px-4 font-medium text-[#8a99af] duration-300 ease-in-out hover:text-white">Pro Form Layouts
                <span className="absolute right-4 block rounded bg-[#3C50E0] px-2 py-1 text-xs font-medium text-white">Pro</span></NavLink>
            </li>
          
          </ul>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  </div>
  )
}

export default FormAccordian
