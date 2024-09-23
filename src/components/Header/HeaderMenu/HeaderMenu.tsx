import './HeaderMenu.scss'

type link = {
    location: string;
    href: string;
}

type headerMenuProps = {
    links: link[];
}

export default function HeaderMenu({links}: headerMenuProps) {

    return (
        <nav>
            <ul className="header-menu__nav">
                {links.map((link, index) =>
                    <li key={index}>
                        <a className="header-menu__link" href={link.href}
                           aria-label={"Go to " + link.location + " Page"}>
                            {link.location}
                        </a>
                    </li>
                )}
            </ul>
        </nav>
    )
}