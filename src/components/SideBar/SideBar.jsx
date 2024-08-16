import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { pages } from '../../data/data';

import './SideBar.css';

export default function SideBar({ setHeader, headerSide }) {
    const [menu, setMenu] = useState(false);

    function handleTheme() {}

    function handleLanguage() {}

    function windowOnTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

    return (
        <div className={`sidebar ${menu && 'full'} ${headerSide && 'scroll'}`}>
            <div className="sidebar-title">
                <button
                    className="sidebar-title-handle"
                    onClick={() => setMenu(!menu)}
                >
                    <i className={`fa-solid fa-${menu ? 'xmark' : 'bars'}`} />
                </button>
                <h4 className="sidebar-title-text">Mazbistemfik</h4>
            </div>
            <nav className="sidebar-navigation">
                {pages.map((page) => (
                    <section className="sidebar-navigation-item" key={page.id}>
                        <NavLink
                            to={page.id}
                            target={page.target}
                            onClick={() => {
                                window.scrollTo({
                                    top: 0,
                                    left: 0,
                                    behavior: 'smooth',
                                });
                                page.id.slice(0, 1) == '/' &&
                                    setHeader(page.id);
                            }}
                            className="sidebar-navigation-item-link"
                        >
                            <i className={page.icon} />
                            <span className="sidebar-navigation-item-link-text">
                                {page.title}
                            </span>
                        </NavLink>
                        {!menu && (
                            <span className="sidebar-navigation-item-span">
                                {page.title}
                            </span>
                        )}
                    </section>
                ))}
            </nav>
            <div className="sidebar-navigation">
                <section className="sidebar-navigation-item">
                    <a
                        className="sidebar-navigation-item-link"
                        onClick={handleTheme}
                    >
                        <i className="fa-solid fa-sun" />
                        <span className="sidebar-navigation-item-link-text">
                            Theme
                        </span>
                    </a>
                    {!menu && (
                        <span className="sidebar-navigation-item-span">
                            Theme
                        </span>
                    )}
                </section>
                <section className="sidebar-navigation-item">
                    <a
                        className="sidebar-navigation-item-link"
                        onClick={handleLanguage}
                    >
                        <i>En</i>
                        <span className="sidebar-navigation-item-link-text">
                            Language
                        </span>
                    </a>
                    {!menu && (
                        <span className="sidebar-navigation-item-span">
                            Language
                        </span>
                    )}
                </section>
            </div>
        </div>
    );
}
