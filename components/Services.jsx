import {motion} from "framer-motion"
import {useState, useRef, useEffect} from "react";
import Service from './Service'
import serviceData from "./serviceData";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Services() {
    const [width, setWidth] = useState(0)
    const carousel = useRef()
    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        AOS.init();
    }, [])
    return (
        <>
            <div  data-aos="flip-up" className={"mt-8 p-0 m-0 w-[100vw] h-[70vh] overflow-hidden flex flex-col justify-center items-center"}>
                <h1 className={"m-8"}>Services</h1>
                <motion.div ref={carousel} className={"carousel cursor-grab w-10/12 overflow-hidden flex sm:rounded-full sm:px-12"}>
                    <motion.div drag={"x"} dragConstraints={{right: 0, left: -width}} className={"inner-carousel flex flex-shrink-0  w-12/12 h-[400px] justify-center items-center "}>
                        {
                           serviceData.map((el, index) => (
                                <motion.div key={index} className={"p-8 rounded-3xl carousel-item sm:w-[30vw] w-[75vw] sm:h-[50vh] h-[50vh] min-w-28 bg-gradient-to-r from-blue-400 to-slate-300 m-4 flex-shrink-0 pointer-events-none"}>
                                    <Service title={el.title} services={el.services} />
                                </motion.div>
                            ))
                        }
                    </motion.div>

                </motion.div>
            </div>
        </>
    );
}