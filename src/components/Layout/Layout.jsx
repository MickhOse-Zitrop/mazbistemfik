import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import Footer from '../Footer/Footer';

import './Layout.css';

export default function Layout() {
    const [header, setHeader] = useState(window.location.pathname);
    const [headerSide, setHeaderSide] = useState(true);

    return (
        <>
            <Header header={header} setHeaderSide={(e) => setHeaderSide(e)} />
            <SideBar setHeader={(e) => setHeader(e)} headerSide={headerSide} />
            <main className={`main`}>
                <div className="main-container">
                    <Outlet />
                </div>
                <Footer />
            </main>
        </>
    );
}
