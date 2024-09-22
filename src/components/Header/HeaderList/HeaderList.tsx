import React from "react";
import './HeaderList.scss'
import Logo from '/images/logo.svg';
import closeIcon from '/images/close-icon.svg';


type link = {
    location: string;
    href: string;
}

type headerListProps = {
    links: link[];
    onClick: React.MouseEventHandler<HTMLImageElement>;
    isOpen: boolean;
}

export default function HeaderList({links, onClick}: headerListProps) {

    return (
        <nav className="header-list">
            <div className="header-list__header">
                <img className="header__logo" src={Logo} alt="Loopstudios Logo"/>

                <img className="header__icon" src={closeIcon} alt="" role="presentation"
                     onClick={onClick}/>
            </div>

            <ul className="header-list__nav">
                {links.map((link, index) =>
                    <li key={index}>
                        <a className="header-list__link" href={link.href}
                           aria-label={"Go to " + link.location + " Page"}>
                            {link.location}
                        </a>
                    </li>
                )}
            </ul>
        </nav>
    )
}