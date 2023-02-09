import Head from "next/head"
import AboutUs from "../components/AboutUs";
import {NavBar} from "../components/NavBar";
import Services from "../components/Services";
export default function Home() {

  return (
    <div className={"w-[100vw] m-0 p-0 flex flex-col justify-center items-center overflow-hidden"}>
        <Head>
            <title>Kentronix</title>
            <link rel={"icon"} href={"/favicon.png"}/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <NavBar/>
        <div className={"sm:mt-0 mt-28 p-8"}>
            <AboutUs/>
            <Services/>
        </div>
    </div>
  )
}
