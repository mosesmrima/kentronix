import Head from "next/head"
import AboutUs from "../components/AboutUs";
import Services from "../components/Services"
export default function Home() {

  return (
    <div className={"w-[100vw] flex flex-col justify-center items-center overflow-hidden"}>
        <Head>
            <title>Kentronix</title>
            <link rel={"icon"} href={"/favicon.png"}/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <AboutUs/>
        <Services/>
    </div>
  )
}
