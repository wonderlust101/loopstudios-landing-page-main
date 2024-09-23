import './Creations.scss'

import creationsJSON from '../../../data/creations.json'
import useWindowDimensions from "../../../hooks/useWindowDimensions.tsx";
import Button from "../../../components/Button/Button.tsx";

type creation = {
    title: string;
    img: string;
}

const creations: creation[] = creationsJSON;

export default function Creations() {
    const {width} = useWindowDimensions();

    return (
        <section className="creations">
            <h2 className="creations__header">Our Creations</h2>

            <Button className='button--black creations__button' destination='#'>See All</Button>

            <ul className="creations__grid">
                {creations.map((creation) => (
                    <li>
                        <a className="creations__creation"
                             style={{
                                 background: `url(./images/${width > 1024 ? 'desktop' : 'mobile'}/${creation.img}) no-repeat center`,
                                 backgroundSize: 'cover',
                             }}>

                            <h3 className="creations__creation-title">{creation.title}</h3>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    )
}