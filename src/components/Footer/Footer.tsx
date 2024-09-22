import './Footer.scss'
import Logo from '/images/logo.svg';

type link = {
    location: string;
    href: string;
}

const navigationLinks: link[] = [
    {
        "location": "About",
        "href": "#"
    },
    {
        "location": "Careers",
        "href": "#"
    },
    {
        "location": "Events",
        "href": "#"
    },
    {
        "location": "Products",
        "href": "#"
    },
    {
        "location": "Support",
        "href": "#"
    },
]

const socials: string[] = [
    'facebook',
    'twitter',
    'pinterest',
    'instagram',
]

export default function Footer() {

    return (
        <footer className="footer grid-bleed">
            <div className="footer__content">
                <div className="footer__top">
                    <img className="footer__logo" src={Logo} alt="Loopstudios Logo"/>

                    <ul className="footer__links">
                        {navigationLinks.map((link, index) =>
                            <li key={index}>
                                <a className="footer__link" href={link.href}
                                   aria-label={"Go to " + link.location + " Page"}>{link.location}</a>
                            </li>
                        )}
                    </ul>
                </div>

                <div className="footer__bottom">
                    <ul className="footer__socials">
                        {socials.map((socials, index) => (
                            <li key={index}>
                                <a href="#" aria-label={'Go to Loopstudio ' + socials + " page"}>
                                    <i className={`footer__icon fa-brands fa-${socials}`}></i>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <p className="footer__copyright">© 2021 Loopstudios. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}