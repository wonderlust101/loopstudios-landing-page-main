import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";

import './Home.scss'
import Hero from "./Hero/Hero.tsx";
import Feature from "./Feature/Feature.tsx";
import Creations from "./Creations/Creations.tsx";

export default function Home() {

    return (
        <div>
            <Header/>

            <main className="grid-bleed home">
                <Hero/>
                <Feature/>
                <Creations/>
            </main>

            <Footer/>
        </div>
    )
}