import Link from "next/link";
import Image from "next/image"
import logo from "/public/logo.svg"
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import {useState} from "react";

export const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => setShowMenu(!showMenu)

    return (
        <div className={" height-4 shadow-2xl rounded-b-xl top-0 left-0 w-full z-10 duration-300"}>
            <div className={"h-100 max-w-full m-auto flex justify-between items-center p-4"}>
                <Image
                    src={logo}
                    width={250}
                    height={0}
                    alt={"logo"}
                />
                <ul className={"sm:flex hidden text-2xl gap-4 mr-8 font-semibold"}>
                    <li><Link href="/">HOME</Link></li>
                    <li><Link href={"#about"}>ABOUT</Link></li>
                </ul>
                {/* Mobile Button*/}
                <div className={"block sm:hidden z-10 w-full fixed top-0 right-2"} onClick={toggleMenu}>
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

        </div>
    );
}