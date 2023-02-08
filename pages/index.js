import Head from "next/head"
import AboutUs from "../components/AboutUs";
import {NavBar} from "../components/NavBar";
export default function Home() {

  return (
    <div className={"w-[100vw] m-0 p-0 flex flex-col justify-center items-center overflow-hidden"}>
        <Head>
            <title>Kentronix</title>
            <link rel={"icon"} href={"/favicon.png"}/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <NavBar/>
        <div className={"sm:mt-0 mt-28"}>
            <AboutUs/>
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

            {/*<Services/>*/}
        </div>
    </div>
  )
}
