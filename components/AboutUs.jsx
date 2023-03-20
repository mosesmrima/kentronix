import Image from "next/image";
import {motion, useMotionValue, useTransform} from "framer-motion"
import {useEffect} from "react";
import AOS from "aos";
import logo from "/public/images/favicon.svg"
import 'aos/dist/aos.css';
import ServiceCard from "./Service Card";
import serviceData from "./serviceData";

export default function AboutUs() {
    const rotate = useMotionValue(0)
    const circularMotion = useTransform(rotate, value => `rotate(${value}deg)`)
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <div  className={"bg-gradient-to-bl from-pink-400/50 to-sky-300/50 relative flex flex-col justify-center items-center w-screen p-8 min-h-screen mx-auto mt-16 relative -mt-0"}>

                <div className={"relative w-full max-w-lg"}>
                    <div
                        className="absolute top-20 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-lg opacity-70 animate-blob"></div>

                    <div
                        className="absolute top-20 -right-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-lg opacity-70 animate-blob animation-delay-4000"></div>
                </div>
                <div>
                    <h3 className={"m-4 "}>About Us</h3>
                </div>
                <div className={" flex flex-col sm:flex-row justify-center items-center gap-16"}>
                    <div className={"max-w-[600px] rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1"}>

                        <div className={"max-w-[450px] sm:max-w-[600px] bg-gradient-to-bl from-pink-400 to-sky-400 flex flex-col justify-center items-center"}>
                            <p className={"w-10/12 mx-auto p-4 text-lg sm:text-xl text-center"}>
                                Kentronix Tech International Ltd is a leading technology and IT solutions provider specializing in software
                                development, business process automation, system support, consultancy, networking, and wireless solutions.
                                We are a team of visionary and talented professionals ready to deliver bleeding-edge yet stable solutions
                                for your business and or personal needs. We offer service with a human touch, ensuring that our solutions
                                are personalized and customized to meet your particular needs.
                            </p>
                        </div>
                    </div>
                    <div className={"max-w-[300px] sm:max-w-[400px]"}>
                        <Image className={"bg-white bg-opacity-20 backdrop-blur-lg rounded-full"} src={logo} alt={""}/>
                    </div>
                </div>
            </div>
            <div className={"bg-about bg-no-repeat bg-cover "}>
               <div className={"relative"}>
                   <div className={"m-2 mt-4 flex justify-center items-center"}>
                       <h3>Services</h3>
                   </div>
                   <div className=" py-4 flex flex-wrap sm:flex-row flex-col gap-4 w-screen justify-center items-center ">
                       {serviceData.map((el, i) => (
                           <ServiceCard key={i} heading={el.title} description={el.services} pictureUrl={logo}/>
                       ))}
                   </div>
               </div>
            </div>
        </>
    );
}