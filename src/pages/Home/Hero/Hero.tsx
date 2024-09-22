import './Hero.scss'

import heroImageMobile from '/images/mobile/image-hero.jpg';
import heroImageDesktop from '/images/desktop/image-hero.jpg';


export default function Hero() {

    return (
        <section className="hero">
            <h1 className="hero__text">Immersive experiences that deliver</h1>
            
            <picture>
                <source srcSet={heroImageDesktop} media="(min-width: 48rem)"/>
                <img className="hero__image" src={heroImageMobile} alt="" role="presentation"/>
            </picture>
        </section>
    )
}