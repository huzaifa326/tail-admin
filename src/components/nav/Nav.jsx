import MsgDropDown from './MsgDropDown';
import Dropdown from './Dropdown';
import AlertsDropDown from './AlertsDropDown';
import ToggleBtn from './ToggleBtn';

const Nav = ({ toggle, setToggle}) => {

  const handleClick = ()=>{setToggle(!toggle)}
  return (
    // -------------------------Header-Start--------------------

    <header className={`w-full sticky top-0 z-[30000] bg-white dark:bg-boxdark drop-shadow-1 dark:drop-shadow-none `}>
    
    <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        {/* // -------Header-Left----- */}
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <div onClick={handleClick} className="cursor-pointer rounded-sm border bg-white p-1.5 shadow-sm "><img className="w-[22px] h-[22px]" src={`${process.env.PUBLIC_URL}/images/nav/bars.svg`} alt="" /></div>
          <img className="w-[32px] h-[32px]" src={`${process.env.PUBLIC_URL}/images/nav/nav-logo.svg`}  alt="" />
        </div>
        {/* // -------Header-Center----- */}
        <div className="hidden sm:block">
          <form action="">
            <div className="relative">
              <img className="absolute top-[3px] w-[20px] h-[20px]" src={`${process.env.PUBLIC_URL}/images/nav/search.svg`} alt="" />
              <input className="w-full bg-transparent pl-9 pr-4 focus:outline-none xl:w-125" type="text" placeholder="Type to search..."/>
            </div>
          </form>
        </div>

        {/* // -------Header-Right----- */}
        <div className="flex items-center gap-3  sm:gap-5 2xsm:gap-7">
          <ul className="flex items-center gap-2 sm:gap-4 2xsm:gap-4">
            <li><ToggleBtn  /> </li>
            <AlertsDropDown />
            <MsgDropDown/>
          </ul>
          {/* // -------User- Area----- */}
          <Dropdown />
          {/* // -------User- Area End----- */}

        </div>
        {/* // -------Header-Complete----- */}
      </div>
    </header>
    // -------------------------Header-Start-------------------

  
  );
};

export default Nav;
