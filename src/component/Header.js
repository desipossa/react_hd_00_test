import { useEffect, useRef, useState } from "react";
import TopBanner from "./TopBanner";
import Gnb from "./Gnb"
const Header = () => {
    const WC = useRef(null);
    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            console.log(window.scrollY);
            window.scrollY > 0
                ? WC.current.classList.add('on')
                : WC.current.classList.remove('on')
        });
        return () => {
            window.removeEventListener('scroll', () => {

            })
        }

    }, [])
    return (
        <header className="Header row" ref={WC}>
            <TopBanner />
            <Gnb />
        </header>
    )
}

export default Header;