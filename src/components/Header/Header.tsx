import {useState} from "react";
import HeaderMenu from "./HeaderMenu/HeaderMenu.tsx";
import HeaderList from "./HeaderList/HeaderList.tsx";
import useWindowDimensions from "../../hooks/useWindowDimensions.tsx";
import Logo from '/images/logo.svg';
import menuIcon from '/images/menu-icon.svg';

import './Header.scss'


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

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const {height, width} = useWindowDimensions();

    function handleToggleMenu() {
        setIsOpen(!isOpen);
    }

    return (
        <header className="header grid-bleed">
            <div className="header__content">
                <img className="header__logo" src={Logo} alt="Loopstudios Logo"/>

                {width > 768 ? (<HeaderMenu links={navigationLinks}/>) : (
                    <>
                        {<HeaderList links={navigationLinks}
                                                onClick={handleToggleMenu}
                                                isOpen={isOpen}/>}
                        <img
                            className="header__menu-icon"
                            src={menuIcon}
                            alt={isOpen ? "Close Menu" : "Open Menu"}
                            onClick={handleToggleMenu}
                        />
                    </>
                )}
            </div>
        </header>
    )
}