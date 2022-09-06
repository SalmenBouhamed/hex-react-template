import "./menu-bar.scss"

function MenuBar() {
    return (
        <nav className="MenuBar">
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