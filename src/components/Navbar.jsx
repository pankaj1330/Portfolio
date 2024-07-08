import { useState } from "react"
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

function Navbar({navlinks}) {
  const [showMenu,setShowMenu] = useState(false);
  function toggleMenu(){
    setShowMenu(prev => !prev);
    return;
  }

  return (
    <div className="border-b-2 border-gray-700 relative">
      <nav className="flex flex-row justify-between items-center p-2 py-6 max-w-[1200px] mx-auto">
        <div>
            <h2 className="text-2xl font-bold">Portfolio</h2>
        </div>
        <ul className={`absolute top-full left-0 sm:relative w-full sm:w-auto flex flex-col items-start overflow-hidden bg-purple-800 sm:bg-transparent sm:flex-row sm:gap-8 sm:items-center sm:h-auto ${showMenu ? `h-fit` : 'h-0'} transition-all duration-500`}>
            {
                navlinks.map(link => {
                    return <li key={link.id} className="p-4 bg-red-100 sm:bg-transparent text-purple-800 sm:text-white font-semibold sm:font-normal w-full"><a href={link.redirect} className="inline-block w-full">{link.name}</a></li>
                })
            }
        </ul>
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-xl">{!showMenu ? <HiOutlineMenuAlt3 /> : <IoCloseSharp />}</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
