import Link from "next/link";
import Image from "next/image"
import logo from "/public/logo.svg"
import {AiOutlineMenu}  from "react-icons/ai";

export const NavBar = () => {
    return (
        <div className={"fixed top-0 left-0 w-full z-10 duration-300"}>
            <div className={"h-100 max-w-full m-auto flex justify-between items-center p-4"}>
                <ul className={"flex justify-evenly items-center"}>
                    <li className={"left-0"}><Link href={"/"}>
                        <Image
                            src={logo}
                            width={300}
                            height={0}
                            alt={"logo"}
                        />
                    </Link></li>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href={"#about"}>About</Link></li>
                </ul>
            </div>
            {/* Mobile Button*/}
            <AiOutlineMenu size={20}/>
            {/* Mobile Menu*/}
            <ul>
                <li><Link href={"/"}>
                    <Image
                        src="/logo.png"
                        width={100}
                        height={100}
                        alt={"logo"}
                    />
                </Link></li>
                <li><Link href="/">Home</Link></li>
                <li><Link href={"#about"}>About</Link></li>
            </ul>
        </div>
    );
}