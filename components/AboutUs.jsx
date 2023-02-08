import Image from "next/image";
import logo from "../public/favicon.png";

export default function AboutUs() {
    return (
        <div className={"w-11/12 sm:h-80 h-[70vh] sm:mx-0 ml-4 justify-center flex sm:flex-row flex-col sm:flex-shrink-0 sm:relative absolute items-center"}>
            <div className={"sm:mx-0 mx-auto rounded-full  bg-gradient-to-r from-slate-50 to-blue-500 z-100 sm:opacity-100 opacity-90 sm:w-6/12 w-12/12 sm:h-80 h-[55vh] px-4  flex flex-col justify-center items-center text-center"}>
                <h1>About Us</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className={" sm:w-4/12 w-12/12 sm:h-80 sm:z-0 z-[-200] sm:relative"}>
                <Image
                    src={"/favicon.png"}
                    fill
                    object-fit={"scale-down"}
                    alt={"logo"}
                />
            </div>
        </div>
    );
}