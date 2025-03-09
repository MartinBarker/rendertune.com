import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Frame.module.css';
import logo from './svg/app.ico'; // Ensure the correct path to favicon
import githubIcon from './svg/icons8-github.svg'; // Ensure correct icon paths
import discordIcon from './svg/discord-icon.svg'; // Ensure correct icon paths
import appleIcon from './svg/apple-icon.svg'; // Import Apple icon
import linuxIcon from './svg/linux-icon.svg'; // Import Linux icon
import windowsIcon from './svg/windows-icon.svg'; // Import Windows icon

const Frame = ({ title = "RenderTune", children }) => {
  const [menuActive, setMenuActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Dynamically add favicon to head
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = logo;
    document.head.appendChild(link);

    // Set document title
    document.title = title;
  }, [title]);

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  const navigateHome = () => {
    navigate('/');
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.logoContainer} onClick={navigateHome}>
          <a href="/" className={styles.logoLink}>
            <img src={logo} alt="RenderTune Logo" className={styles.logo} />
          </a>
          <div className={styles.headerTitle}>
            <h1 className={styles.mainTitle}>RenderTune</h1>
            <p className={styles.subTitle}>Video Rendering App</p>
          </div>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button className={styles.menuToggle} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Menu */}
        <nav className={`${styles.nav} ${menuActive ? styles.show : ''}`}>
          <ul className={styles.menu}>
            <li>
              <div className={styles.iconContainer}>
                <a href="https://github.com/MartinBarker/RenderTune" target="_blank" rel="noopener noreferrer">
                  <img src={githubIcon} alt="GitHub" className={styles.icon} />
                </a>
                <span className={styles.iconText}>GitHub Repo</span>
              </div>
            </li>
            <li>
              <div className={styles.iconContainer}>
                <a href="https://discord.com/invite/pEAjDjPceY" target="_blank" rel="noopener noreferrer">
                  <img src={discordIcon} alt="Discord" className={styles.icon} />
                </a>
                <span className={styles.iconText}>Discord Channel</span>
              </div>
            </li>
            <li><a href="/">Home</a></li>
            <li><a href="/download">Download</a></li>
            <li><a href="/features">Features</a></li>
            <li><a href="/contribute">Contribute</a></li>
            <li><a href="/support">Support</a></li>
            <li><a href="/help">Help</a></li>
          </ul>
        </nav>
      </header>

      {children}

      <footer className={styles.footer}>
        <p>© 2025 RenderTune. All rights reserved.</p>
        <div className={styles.footerLinks}>
          <a href="https://github.com/MartinBarker/RenderTune/releases" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/github/v/release/MartinBarker/RenderTune" alt="GitHub Release Version" />
          </a>
          <a href="https://github.com/MartinBarker/RenderTune" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/github/followers/MartinBarker?style=social" alt="GitHub Followers" />
          </a>
          <a href="https://ko-fi.com/martinradio" target="_blank" rel="noopener noreferrer">
            Ko-fi
          </a>
          <a href="https://www.patreon.com/c/martinradio" target="_blank" rel="noopener noreferrer">
            Patreon
          </a>
          <a href="https://github.com/sponsors/MartinBarker" target="_blank" rel="noopener noreferrer">
            GitHub Sponsors
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Frame;
