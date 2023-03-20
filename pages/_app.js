import '../styles/globals.css'
import '../components/NavBar'

export default function App({ Component, pageProps }) {
  return (
      <>
        <div  className={"w-screen "}>
            <Component {...pageProps} />
        </div>
      </>
  )
}
