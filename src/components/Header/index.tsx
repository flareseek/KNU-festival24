import React, { useState } from 'react';
import * as styles from '.css.ts';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.headerContainer}>
            <div className={styles.logoStyle}>My Website</div>

            {/* 모바일 메뉴 버튼 */}
            <button className={styles.menuButton} onClick={toggleMenu}>
                ☰
            </button>

            {/* 내비게이션 메뉴: 768px 이하에서는 토글로 표시 */}
            <nav className={`${styles.navStyle} ${isMenuOpen ? styles.navVisible : ''}`}>
                <a href="#home" className={styles.navItem}>Home</a>
                <a href="#about" className={styles.navItem}>About</a>
                <a href="#services" className={styles.navItem}>Services</a>
                <a href="#contact" className={styles.navItem}>Contact</a>
            </nav>
        </header>
    );
};

export default Header;
