import Image from "next/image"
import {motion} from "framer-motion"

export default function Services() {
    return (
        <>
            <div className={""}>
                <h1 className={"text-center text-4xl font-extrabold"}>Services</h1>
            </div>
            <motion.div className={"sm:h-[80vh] h-[100vh] w-10/12 flex justify-center items-center p-5 cursor-grab  overflow-hidden mb-"}>
                <motion.div className={"rounded-full h-[100%] width-10/12 flex justify-center items-center shrink-0"}
                            drag={"x"}
                            dragConstraints={{}}
                >
                    {
                        [1, 2, 3, 4, 5, 7].map((_, index) => (
                            <motion.div key={index} className={"rounded-3xl p-4 flex justify-center flex-col items-center mx-2 bg-gradient-to-r from-slate-100 to-blue-500 sm:max-w-[400px] max-w-[270px] h-[90%]"}
                            >
                                <Image
                                    src={"/favicon.png"}
                                    width={80}
                                    height={80}
                                    z-index={1}
                                />
                                <p className={"break-words"}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </motion.div>
                        ))
                    }
                </motion.div>
            </motion.div>
        </>
    );
}