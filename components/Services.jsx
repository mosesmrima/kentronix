import {motion} from "framer-motion"
import {useState, useRef, useEffect} from "react";

export default function Services() {
    const [width, setWidth] = useState(0)
    const carousel = useRef()
    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])
    return (
        <>
            <div className={"p-0 m-0 w-[100vw] h-[70vh] overflow-hidden flex flex-col justify-center items-center"}>
                <h1>Services</h1>
                <motion.div ref={carousel} className={"carousel cursor-grab w-10/12 overflow-hidden flex rounded-full sm:px-12"}>
                    <motion.div drag={"x"} dragConstraints={{right: 0, left: -width}} className={"inner-carousel flex flex-shrink-0  w-12/12 h-[400px] justify-center items-center "}>
                        {
                            [1,2,3,4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((el) => (
                                <motion.div key={el} className={"p-8 rounded-3xl carousel-item sm:w-[30vw] w-[70vw] sm:h-[50vh] h-[30vh] min-w-28 bg-gradient-to-r from-blue-400 to-slate-300 m-4 flex-shrink-0 pointer-events-none"}>
                                    {el}
                                </motion.div>
                            ))
                        }
                    </motion.div>

                </motion.div>
            </div>
        </>
    );
}