import { NavLink } from "react-router-dom";

const Chat = () => {
  return (
   
    <div className={`col-span-12 rounded-sm border  py-6 shadow-default xl:col-span-4 bg-white border-[rgba(226,232,240,1)] dark:bg-[#1C2434] dark:border-[rgba(46,58,71,1)]`}>
    <h4 className={`mb-6 px-6 text-xl font-bold text-[#1c2434] dark:text-white`}>Chats</h4>

    <div>
      <NavLink  className="flex items-center gap-5 px-6 py-3 hover:bg-[rgba(250,250,250,1)] dark:hover:bg-meta-4 ">
        <div className="relative h-14 w-14 rounded-full ">
          <img src={`${process.env.PUBLIC_URL}/images/dashboard/user-1.png`} alt="User" />
          <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#10b981] "></span>
        </div>

        <div className="flex items-center justify-between">
          <div className={`text-black dark:text-white`}>
            <h5 className="font-medium">Devid Heilo</h5>
            <p>
              <span className="text-sm font-medium  dark:text-white">Hello, how are you?</span>
              <span className="text-xs text-[#64748b] "> . 12 min</span>
            </p>
          </div>
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#3c50e0] ">
            <span className="text-sm font-medium text-white">3</span>
          </div>
        </div>
      </NavLink>
      <NavLink
        
        className="flex items-center gap-5 px-6 py-3 hover:bg-[rgba(250,250,250,1)] dark:hover:bg-meta-4 "
      >
        <div className="relative h-14 w-14 rounded-full">
        <img src={`${process.env.PUBLIC_URL}/images/dashboard/user-2.png`} alt="User" />
          <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#10b981] "></span>
        </div>

        <div className="flex items-center justify-between">
        <div className={`text-black dark:text-[#aeb7c0]`}>
            <h5 className="font-medium">Henry Fisher</h5>
            <p>
              <span className="text-sm font-medium">
                I am waiting for you
              </span>
              <span className="text-xs text-[#64748b]"> . 5:54 PM</span>
            </p>
          </div>
        </div>
      </NavLink>
      <NavLink
        
        className="flex items-center gap-5 px-6 py-3 hover:bg-[rgba(250,250,250,1)] dark:hover:bg-meta-4 "
      >
        <div className="relative h-14 w-14 rounded-full">
        <img src={`${process.env.PUBLIC_URL}/images/dashboard/user-3.png`} alt="User" />
          <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#ffba00] "></span>
        </div>

        <div className="flex items-center justify-between">
        <div className={`text-black dark:text-[#aeb7c0]`}>
            <h5 className="font-medium">Wilium Smith</h5>
            <p>
              <span className="text-sm font-medium">
                Where are you now?
              </span>
              <span className="text-xs text-[#64748b]"> . 10:12 PM</span>
            </p>
          </div>
        </div>
      </NavLink>
      <NavLink
        
        className="flex items-center gap-5 px-6 py-3 hover:bg-[rgba(250,250,250,1)] dark:hover:bg-meta-4 "
      >
        <div className="relative h-14 w-14 rounded-full">
        <img src={`${process.env.PUBLIC_URL}/images/dashboard/user-4.png`} alt="User" />
          <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#10b981] "></span>
        </div>

        <div className="flex items-center justify-between">
        <div className={`text-black dark:text-white`}>
            <h5 className="font-medium  ">
              Henry Deco
            </h5>
            <p>
              <span className="text-sm font-medium  ">
                Thank you so much!
              </span>
              <span className="text-xs text-[#64748b]"> . Sun</span>
            </p>
          </div>
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#3c50e0]">
            <span className="text-sm font-medium text-white">2</span>
          </div>
        </div>
      </NavLink>
      <NavLink
        
        className="flex items-center gap-5 px-6 py-3 hover:bg-[rgba(250,250,250,1)] dark:hover:bg-meta-4 "
      >
        <div className="relative h-14 w-14 rounded-full">
        <img src={`${process.env.PUBLIC_URL}/images/dashboard/user-5.png`} alt="User" />
          <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#ff6766] "></span>
        </div>

        <div className="flex items-center justify-between">
        <div className={`text-black dark:text-[#aeb7c0]`}>
            <h5 className="font-medium">Jubin Jack</h5>
            <p>
              <span className="text-sm font-medium">
                I really love that!
              </span>
              <span className="text-xs text-[#64748b]"> . Oct 23</span>
            </p>
          </div>
        </div>
      </NavLink>
      <NavLink
        
        className="flex items-center gap-5 px-6 py-3 hover:bg-[rgba(250,250,250,1)] dark:hover:bg-meta-4 "
      >
        <div className="relative h-14 w-14 rounded-full">
        <img src={`${process.env.PUBLIC_URL}/images/dashboard/user-3.png`} alt="User" />
          <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#ffba00]"></span>
        </div>

        <div className="flex items-center justify-between">
        <div className={`text-black dark:text-[#aeb7c0]`}>
            <h5 className="font-medium">Wilium Smith</h5>
            <p>
              <span className="text-sm font-medium">
                Where are you now?
              </span>
              <span className="text-xs text-[#64748b]"> . Sep 20</span>
            </p>
          </div>
        </div>
      </NavLink>
    </div>
  </div>
  )
}

export default Chat
