import { useEffect } from "react";
import "./menu-bar.scss"

function MenuBar() {
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    const isSticky = (event: any) => {
        const header: any = document.querySelector('.MenuBar');
        const scrollTop = window.scrollY;
        scrollTop > 0 ? header.classList.remove('unfixed') : header.classList.add('unfixed')
    };

    return (
        <nav className="MenuBar unfixed">
            <div className="nav-bar">
                <a className="menuLinkLogo">
                    <img src="https://hex.com/_assets/img/wordmark.svg" alt="Hexy Logo svg" />
                </a>
                <a className="menuLink menuLinkFlex" href="#">How it works</a>
                <a className="menuLink menuLinkFlex">How it works</a>
                <a className="menuLink menuLinkFlex">How it works</a>
                <a className="menuLink menuLinkBuyButton">How to buy</a>
            </div>
        </nav>
    );
};
export default MenuBar