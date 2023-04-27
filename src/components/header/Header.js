import React, {useState} from "react";
import { FaInstagram } from 'react-icons/fa';
import { images } from '../../images';

import "./header.scss";

const Header = () => {
    const [open, setOpen] = useState(false);
    const handleClick =e=> {
        e.preventDefault();
        setOpen(!open);
    };
    return (<div>
        <header>
            <nav className='navbar container'>
                <div className='logo'>
                    <a href='../pages/home/Home.js'><img src={images.logo} href="../pages/home" alt=''/> </a>
                </div>
                <ul className={open ? 'nav-items active' : 'nav-items'}>
                    <a href=''><li>Home</li></a>
                    <a href=''><li>Contato</li></a>
                    <a href=''><li>Projetos</li></a>
                    <a href=''><li>Publicações</li></a>
                    <a href=''><li>Notícias</li></a>
                    <a href=''><li>Ensino</li></a>
                    <a className='insta-icon' href='https://www.instagram.com/'><li><FaInstagram/></li></a>
                    <a className='btn btn--nav-btn' href='#'><li>Login</li></a>
                </ul>
                <div className='hamburger'>
                    <img src={images.hamburger} alt='' onClick={handleClick}/>
                </div>

            </nav>
        </header>

    </div>
    )
}

export default Header