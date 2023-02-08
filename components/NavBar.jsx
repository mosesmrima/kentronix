import Link from "next/link";
import Image from "next/image"
import logo from "/public/logo.svg"
import {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

export const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => setShowMenu(!showMenu)

    return (
        <div className={"w-full sm:h-32 h-28 shadow-2xl rounded-b-xl z-10 flex justify-between items-center sm:relative fixed top-0 bg-gradient-to-r from-slate-50 to-blue-500 z-[1000]"}>
             <div className={"sm:w-4/12 w-7/12 relative sm:h-28 h-24 flex justify-start"}>
                 <Image
                     src={"/logo.svg"}
                     fill
                     object-fit={"contain"}
                     alt={"logo"}
                     className={"px-4"}
                 />
             </div>
            <ul className={"w-4/12 sm:flex hidden gap-4 justify-end px-12"}>
                <li><Link href="/">HOME</Link></li>
                <li><Link href={"#about"}>ABOUT</Link></li>
            </ul>

            {/* Mobile Button*/}
            <div className={"block sm:hidden w-4/12 z-10 p-4 overflow-hidden"} onClick={toggleMenu}>
                {showMenu?<AiOutlineClose size={25} className={"text-blue-400 hover:cursor-pointer ml-auto transition duration-300"}/>:<AiOutlineMenu size={25} className={"ml-auto transition duration-300"}/>}
            </div>
            {/* Mobile Menu*/}
            <div className={showMenu?"sm:hidden fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center w-full h-screen bg-black opacity-90 ease-in duration-300":
                "sm:hidden absolute top-0 bottom-0 right-0 left-[-100%] flex justify-center items-center w-full h-screen bg-black opacity-90 ease-in duration-300"}>
                <ul className={"text-2xl gap-4 mr-8 font-semibold text-white flex flex-col justify-center items-center"}>
                    <li onClick={toggleMenu}><Link href="/">HOME</Link></li>
                    <li onClick={toggleMenu}><Link href={"#about"}>ABOUT</Link></li>
                </ul>
            </div>
        </div>
    );
}