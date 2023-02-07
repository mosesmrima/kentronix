import Image from "next/image";
import logo from "../public/favicon.png";

export default function AboutUs() {
    return (
        <div>
            <div className={"p-10 flex flex-row flex-wrap-reverse justify-center items-center mx-auto"}>
                <div className={"w-1/2 min-w-[400px] text-[#101C2E]"}>
                    <h1 id={"about"} className={"text-center text-4xl font-extrabold"}>About Us</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                </div>
                <div className={'w-3/12 min-w-250px]'}>
                    <Image src={logo} alt={"logo"}/>
                </div>
            </div>

        </div>
    );
}