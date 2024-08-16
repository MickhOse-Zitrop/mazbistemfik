import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import icon from '/images/icon.png';

import './Header.css';

export default function Header({ header, setHeaderSide }) {
    const navigate = useNavigate();
    const [headerVisible, setHeaderVisible] = useState(true);

    var headerTitle = 'Main';
    const indexOfSlash = () => {
        let slash = header.slice(1, header.length).indexOf('/') + 1;

        if (slash) {
            return slash;
        } else {
            return header.length;
        }
    };

    if (header != '/mazbistemfik')
        switch (header.slice(0, indexOfSlash())) {
            case '/':
                headerTitle = 'Main';
                break;
            case '/history':
                headerTitle = 'History';
                break;
            case '/founders':
                headerTitle = 'Founders';
                break;
            case '/members':
                headerTitle = 'Members';
                break;
            case '/contacts':
                headerTitle = 'Contacts';
                break;
            default:
                headerTitle = '404 Not Found';
                break;
        }

    useEffect(() => {
        const defaultOffset = 0;
        const scrollPosition = () =>
            window.scrollY || document.documentElement.scrollTop;

        window.addEventListener('scroll', () => {
            if (headerVisible && scrollPosition() > defaultOffset) {
                setHeaderVisible(false);
                setHeaderSide(false);
            } else {
                setHeaderVisible(true);
                setHeaderSide(true);
            }
        });
    }, []);

    return (
        <header className={!headerVisible ? 'hidden' : null}>
            <div className="header-image" onClick={() => navigate('/')}>
                <img
                    className="header-image-link-image"
                    src={icon}
                    alt="Image"
                />
            </div>
            <h1 className="header-title-text">{headerTitle}</h1>
        </header>
    );
}
