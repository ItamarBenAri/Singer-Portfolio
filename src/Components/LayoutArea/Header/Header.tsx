import { useState, useEffect } from "react";
import "./Header.css";
import { NavLink } from 'react-router-dom';
import { Divider } from "@mui/material";
import logo from "../../../Assets/Icons/music-cd.svg";

function Header(): JSX.Element {

    const pages = [ // App pages
        { name: "דף הבית", link: "/Singer-Portfolio/home", },
        { name: "הסיפור שלי", link: "/Singer-Portfolio/my-story"  },
        { name: "הופעות קרובות", link: "/Singer-Portfolio/shows" },
        { name: "סרטונים מהרשת", link: "/Singer-Portfolio/social-media-videos" },
        { name: "צור קשר", link: "/Singer-Portfolio/contact-me"}
    ];

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (!(event.target as HTMLElement).closest('.Header')) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div>
            <nav className="Header">
                <div className="logo">
                    <NavLink to="/" className="logoName">אביתר ידעי</NavLink>
                    <img src={logo} className="logoImage" alt="Logo of website" />
                </div>
                <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span />
                    <span />
                    <span />
                </div>
                <div className={`menu ${isOpen ? 'open' : ''}`}>
                    {pages.map(p => (
                        <NavLink key={p.name} to={p.link} className={({ isActive }) => isActive ? "menu-link active" : "menu-link"} onClick={() => setIsOpen(false)}>{p.name}</NavLink>
                    ))}
                </div>
            </nav>
            <Divider variant="middle" />
        </div>
    );
}

export default Header;
