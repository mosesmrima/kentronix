import Head from "next/head"
import AboutUs from "../components/AboutUs";
import {NavBar} from "../components/NavBar";
import Services from "../components/Services";
import Contact from "../components/Contact";
import GetQuotation from "../components/GetQuotation";
import { SocialIcon } from 'react-social-icons';
import photo from "/public/img.png"
import Image from "next/image";

export default function Home() {

  return (
    <div className={"w-screen m-0 p-0 flex flex-col justify-center items-center overflow-hidden"}>
        <Head>
            <title>Kentronix</title>
            <link rel={"icon"} href={"/favicon.png"}/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        </Head>
        <NavBar/>

        <div className="relative flex w-screen sm:min-h-screen  mt-24 sm:mt-12 flex-col justify-center overflow-hidden bg-gradient-to-bl from-pink-400 to-sky-300">
            <img src="/images/circuit.svg" alt=""
                 className="absolute top-1/2 left-1/2  max-w-none w-[100vw] -translate-x-1/2 -translate-y-1/2 "/>

            <div className="sm:max-w-auto relative px-10 pt-24 pb-24 z-0 sm:mx-auto sm:rounded-lg sm:px-20">
                <div className="mx-auto">
                    <h1 className="flex flex-col gap-2 text-center text-6xl font-black md:flex-row lg:tracking-tight xl:text-9xl">
                        <span
                            className="before:absolute before:-z-10 before:text-black before:content-[attr(data-text)]"
                            data-text="Secure."><span
                            className="animate-gradient-1 bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">Secure. </span> </span>

                        <span
                            className="before:absolute before:-z-10 before:text-black before:content-[attr(data-text)]"
                            data-text="Reliable."><span
                            className="animate-gradient-2 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"> Reliable. </span> </span>

                        <span
                            className="before:absolute before:-z-10 before:text-black before:content-[attr(data-text)]"
                            data-text="Smart."><span
                            className="animate-gradient-3 bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">Smart.</span> </span>
                    </h1>
                    <h3 className={"text-black bg-clip-text text-transparent text-center text-2xl sm:text-3xl max-w-[400px] mx-auto"}>Bringing Secure, reliable and Smarter solutions to the corporate world</h3>
                </div>
            </div>
        </div>

        <AboutUs/>
       <div className={" p-12 relative flex flex-col justify-center items-center sm:flex-row pb-12"}>
           <GetQuotation/>
           <Contact/>
       </div>
    </div>
  )
}
