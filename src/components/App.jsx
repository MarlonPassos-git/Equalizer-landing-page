import { Header } from "./Header/";
import { Main } from "./Main";
import { Footer } from "./Footer";
import './style.scss'
import bgDesktop from "../assets/bg-main-desktop.png";


export default function App() {
  return (
    <>
        <Header />
        <Main />
        <Footer />
    </>
  )
}