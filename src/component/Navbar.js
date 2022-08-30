import React from 'react'
import logo from "../assets/asset 0.png"
import { Link } from "react-router-dom";
import Style from "../static/navbar.module.css"
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    return (
        <div className={Style.navbar}>
            <div className={Style.logo}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={Style.links}>
                <ul className={Style.link}>
                    <li><Link className={Style.li} to='/'>About</Link></li>
                    <li><Link className={Style.li} to='/'>Skill</Link></li>
                    <li><Link className={Style.li} to='/'>Contact</Link></li>
                </ul>
            </div>
            <div className="buttons" style={{padding:"0 5rem"}}>
                <button className={Style.btn}>Contact</button>
                <button className={Style.btn}>Sign In</button>
            </div>
            <GiHamburgerMenu className={Style.hamburger}></GiHamburgerMenu>
        </div>
    )
}

export default Navbar