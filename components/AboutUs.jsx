import Image from "next/image";
import {motion, useMotionValue, useTransform} from "framer-motion"

export default function AboutUs() {
    const rotate = useMotionValue(0)
    const circularMotion = useTransform(rotate, value => `rotate(${value}deg)`)

    return (
       <div className={"sm:w-10/12 w-11/12 sm:h-64 mx-auto mt-16 sm:flex justify-center items-center relative rounded-full shadow-2xl mb-8"}>
           <div className={"sm:h-64 h-[70vh] sm:w-9/12  bg-gradient-to-r from-slate-50 to-blue-500 rounded-3xl shadow-2xl flex flex-col justify-center items-center"}>
             <h1 className={"mb-4"}>About Us</h1>
             <p className={"w-10/12 mx-auto"}>
                 Kentronix Tech International Ltd is a leading technology and IT solutions provider specializing in software
                 development, business process automation, system support, consultancy, networking, and wireless solutions.
                 We are a team of visionary and talented professionals ready to deliver bleeding-edge yet stable solutions
                 for your business and or personal needs. We offer service with a human touch, ensuring that our solutions
                 are personalized and customized to meet your particular needs.
             </p>
         </div>
           <div className={"sm:max-h-64 h-[70vh] sm:w-3/12 w-[90vw] sm:static absolute top-0 sm:z-0 z-[100] sm:opacity-100 opacity-50"}>
               <motion.div className={"relative sm:h-full h-full sm:w-full w-[50vw]"}
                           animate={{ rotate: 360, scale: [0.9, 0.9, 0.8, 0.7, 0.7, 0.8, 0.9, 0.9] }}
                           transition={{ duration: 4, repeat: Infinity }}
                           style={{
                               style: { transform: circularMotion}
                           }}
                   >
                   <Image
                       src={"/favicon.png"}
                       fill
                       objectFit={"contain"}
                       layout={"raw"}
                       alt={"logo"}
                       className={"drop-shadow-lg"}
                   />
               </motion.div>
           </div>

       </div>
    );
}