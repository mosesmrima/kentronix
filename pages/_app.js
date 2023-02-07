import '../styles/globals.css'
import '../components/NavBar'
import {NavBar} from "../components/NavBar";

export default function App({ Component, pageProps }) {
  return (
      <>
        <div  className={"w-screen bg-gradient-to-r from-slate-50 to-blue-500"}>
            <NavBar/>
            <Component {...pageProps} />
        </div>
      </>
  )
}
