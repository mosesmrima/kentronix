import Link from "next/link";
import Image from "next/image"
import logo from "/public/logo.svg"
import {AiOutlineMenu}  from "react-icons/ai";

export const NavBar = () => {
    return (
        <div className={" height-2 bg-gradient-to-r from-slate-50 to-blue-500  rounded-b-xl fixed top-0 left-0 w-full z-10 duration-300"}>
            <div className={"h-100 max-w-full m-auto flex justify-between items-center p-4"}>
                <Image
                    src={logo}
                    width={300}
                    height={0}
                    alt={"logo"}
                />
                <ul className={"sm:flex hidden text-2xl gap-4 mr-8 font-semibold"}>
                    <li><Link href="/">HOME</Link></li>
                    <li><Link href={"#about"}>ABOUT</Link></li>
                </ul>
                {/* Mobile Button*/}
                <div className={"block sm:hidden z-10 mx-2"}>
                    <AiOutlineMenu size={20}/>
                </div>
                {/* Mobile Menu*/}
                <div className={"sm:hidden absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center w-full h-screen bg-black ease-in duration-300"}>
                    <ul className={"text-2xl gap-4 mr-8 font-semibold text-white "}>
                        <li><Link href="/">HOME</Link></li>
                        <li><Link href={"#about"}>ABOUT</Link></li>
                    </ul>
                </div>
            </div>

        </div>
    );
}