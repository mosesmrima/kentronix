import Image from "next/image";
import {motion, useMotionValue, useTransform} from "framer-motion"

export default function AboutUs() {
    const rotate = useMotionValue(0)
    const circularMotion = useTransform(rotate, value => `rotate(${value}deg)`)

    return (
       <div className={"sm:w-10/12 w-11/12 sm:max-h-[50rem] mx-auto mt-16 sm:flex relative rounded-full shadow-2xl"}>
           <div className={"sm:h-12/12 h-11/12 sm:w-9/12  bg-gradient-to-r from-slate-50 to-blue-500 rounded-3xl shadow-2xl"}>
             <h1 className={"text-center text-4xl font-extrabold"}>About Us</h1>
             <p className={"w-10/12 mx-auto"}>
                 Kentronix is a leading technology and solutions provider specializing in software development,
                 systems support and I.T  consultancy. Our expertise spans software design  and development, project
                 management, systems audit, business process automation, scalable E-business  systems, networking and wireless
                 solutions. We can help you streamline your business operations and transform your organization. We employ
                 proven best practices and process to improve efficiency throughout your enterprise by improving services and
                 cutting down operations costs there by increasing your profit margins. The force behind our success is a team
                 of talented and proficient professionals who deliver a pool of extra ordinary expertise in both I.C.T and management
                 fields.
             </p>
         </div>
           <div className={"sm:max-h-80 h-96 sm:w-5/12 w-[70vw] sm:static absolute top-0 sm:z-0 z-[100] sm:opacity-100 opacity-50"}>
               <motion.div className={"relative sm:h-full h-full sm:w-full w-full"}
                           animate={{ rotate: 360, scale: [0.9, 0.9, 0.8, 0.7, 0.7, 0.8, 0.9, 0.9] }}
                           transition={{ duration: 4, repeat: Infinity }}
                           style={{
                               style: { transform: circularMotion}
                           }}
                   >
                   <Image
                       src={"/favicon.png"}
                       fill
                       layout={"raw"}
                       alt={"logo"}
                       className={"drop-shadow-lg"}
                   />
               </motion.div>
           </div>

       </div>
    );
}