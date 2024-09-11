import React, { useState } from 'react';
import { headerStyles, menuStyles, linksStyles, toggleBtnStyles, logoStyles, menuItemStyles } from './.css.ts';

export const Header: React.FC = () => {
    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    return (
        <header className={headerStyles}>
            <div className={logoStyles}>
                <i className="fab fa-apple"></i>
                <a href="">민브로 코딩</a>
            </div>
            <ul className={`${menuStyles} ${isActive ? 'active' : ''}`}>
                <li className={menuItemStyles}><a href="">홈</a></li>
                <li className={menuItemStyles}><a href="">핫딜</a></li>
                <li className={menuItemStyles}><a href="">포럼</a></li>
                <li className={menuItemStyles}><a href="">FAQ</a></li>
                <li className={menuItemStyles}><a href="">채용</a></li>
            </ul>
            <ul className={`${linksStyles} ${isActive ? 'active' : ''}`}>
                <li><i className="fab fa-facebook-square"></i></li>
                <li><i className="fab fa-instagram"></i></li>
            </ul>
            <button className={toggleBtnStyles} onClick={handleToggle}>
                ☰
            </button>
        </header>
    );
};

export default Header