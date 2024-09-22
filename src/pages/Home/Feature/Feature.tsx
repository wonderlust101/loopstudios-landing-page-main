import './Feature.scss'

import featureImageMobile from '/images/desktop/image-interactive.jpg';
import featureImageDesktop from '/images/mobile/image-interactive.jpg';

export default function Feature() {

    return (
        <section className="feature">
            <picture className="feature__picture">
                <source className="feature__image" srcSet={featureImageDesktop} media="(min-width: 48rem)"/>
                <img className="feature__image" src={featureImageMobile} alt=""/>
            </picture>


            <div className="feature__text">
                <h2>The leader in interactive VR</h2>
                <p className="feature__body">Founded in 2011, Loopstudios has been producing world-class virtual
                    reality projects for some of the best companies around the globe. Our award-winning creations have
                    transformed businesses through digital experiences that bind to their brand.</p>
            </div>
        </section>
    )
}