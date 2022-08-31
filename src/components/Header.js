import React from "react"
import menu from "../images/icon-hamburger.svg"
import close from "../images/icon-close.svg"

export default function Header() {
    const [openMenu, setOpenMenu] = React.useState(false)
    function handleClick() {
        setOpenMenu(prevState => !prevState)
    }

    const hide = {
        display: "none"
    }
    const show = {
        display: "block"
    }
    const backColor = {
        backgroundColor: "black"
    }
    return (
       <div>
            <header className="desktop--header">
                <h1 className="logo--text">loopstudios</h1>
                <ul className="nav--list">
                    <li>About</li>
                    <li>Careers</li>
                    <li>Events</li>
                    <li>Products</li>
                    <li>Support</li>
                </ul>
            </header>
            <header className="mobile--header" style={!openMenu ? null : backColor}>
                <h1 className="logo--text"><a href="index.html">loopstudios</a></h1>
                {!openMenu && <img className="menu" alt="" src={menu} onClick={handleClick}/>}
                {openMenu && <img className="close" alt="" src={close} onClick={handleClick}/>}
                <div className="dropdown" style={openMenu ? show : hide}>
                    <ul className="mobnav--list">
                        <li>About</li>
                        <li>Careers</li>
                        <li>Events</li>
                        <li>Products</li>
                        <li>Support</li>
                    </ul>
                </div>
            </header>
       </div>
    )
}