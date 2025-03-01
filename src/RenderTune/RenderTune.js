import React, { useEffect, useState } from 'react';
import styles from './RenderTune.module.css';
import logo from './app.ico';
import screenshot from './RenderTune_Windows.PNG';
import linuxLogo from './linux.png';
import windowsLogo from './windows.png';
import macLogo from './mac.png';
import discordIcon from './discord-icon.svg'; // Add Discord icon image
import githubIcon from './icons8-github.svg'; // Add GitHub icon image
import macAppStoreBadge from './mac-app-store-badge.svg';
import msStoreBadge from './ms-store-badge.svg';
import snapStoreBadge from './snap-store-black.svg';

const Spek = ({ title = "RenderTune" }) => {
  const [menuActive, setMenuActive] = useState(false);
  const [latestVersion, setLatestVersion] = useState('');
  const [showMacOptions, setShowMacOptions] = useState(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = logo;
    document.head.appendChild(link);
    document.title = title;

    // Fetch the latest release version from GitHub
    fetch('https://api.github.com/repos/MartinBarker/RenderTune/releases/latest')
      .then(response => response.json())
      .then(data => setLatestVersion(data.tag_name))
      .catch(error => console.error('Error fetching latest release:', error));
  }, [title]);

  const toggleMenu = () => {
    setMenuActive(prev => !prev);
  };

  const handleMacClick = () => {
    setShowMacOptions(true);
  };

  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <a href="/" className={styles.logoLink}>
            <img src={logo} alt="RenderTune Logo" className={styles.logo} />
          </a>
          <div className={styles.headerTitle}>
            <h1 className={styles.mainTitle}>RenderTune</h1>
            <p className={styles.subTitle}>Video Rendering App</p>
          </div>
        </div>
        <div className={styles.menuToggle} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`${styles.nav} ${menuActive ? styles.active : ''}`}>
          <ul className={styles.menu}>
            <li>
              <a href="https://github.com/MartinBarker/RenderTune" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" className={styles.icon} />
              </a>
            </li>
            <li>
              <a href="https://discord.com/invite/your-invite-link" target="_blank" rel="noopener noreferrer">
                <img src={discordIcon} alt="Discord" className={styles.icon} />
              </a>
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

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h2>Combine Audio &amp; Images into Professional Videos</h2>
          <div className={styles.downloadSection}>
            <h3>Download Latest Release</h3>
            <div className={styles.downloadButtons}>
              <a href={`https://github.com/MartinBarker/RenderTune/releases/download/${latestVersion}/RenderTune-win-x64.exe`} className={styles.downloadBtn}>Windows</a>
              {showMacOptions ? (
                <>
                  <a href={`https://github.com/MartinBarker/RenderTune/releases/download/${latestVersion}/RenderTune-mac-arm64.dmg`} className={styles.downloadBtn}>macOS (Apple Silicon)</a>
                  <a href={`https://github.com/MartinBarker/RenderTune/releases/download/${latestVersion}/RenderTune-mac-x64.dmg`} className={styles.downloadBtn}>macOS (Intel)</a>
                </>
              ) : (
                <a href="#" className={styles.downloadBtn} onClick={handleMacClick}>macOS</a>
              )}
              <a href={`https://github.com/MartinBarker/RenderTune/releases/download/${latestVersion}/RenderTune-linux-x86_64.AppImage`} className={styles.downloadBtn}>Linux</a>
            </div>
            <h3>Download from App Stores</h3>
            <div className={styles.appStoreButtons}>
              <a href="https://apps.apple.com/app/id123456789" target="_blank" rel="noopener noreferrer">
                <img src={macAppStoreBadge} alt="Download on the Mac App Store" className={styles.storeBadge} />
              </a>
              <a href="https://www.microsoft.com/store/apps/9NBLGGH4NNS1" target="_blank" rel="noopener noreferrer">
                <img src={msStoreBadge} alt="Download from Microsoft Store" className={styles.storeBadge} />
              </a>
              <a href="https://snapcraft.io/render-tune" target="_blank" rel="noopener noreferrer">
                <img src={snapStoreBadge} alt="Download from Snap Store" className={styles.storeBadge} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img src={screenshot} alt="RenderTune Screenshot" />
        </div>
      </section>

      <section className={styles.features}>
        <h2>Features</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureItem}>
            <h3>Render Videos</h3>
            <p>Render videos from a single audio file or combine multiple audio files in a specific order.</p>
          </div>
          <div className={styles.featureItem}>
            <h3>Customizable Resolution</h3>
            <p>Set the output video resolution and choose your desired output location.</p>
          </div>
          <div className={styles.featureItem}>
            <h3>Padding Options</h3>
            <p>Add black or white padding to adjust the image frame.</p>
          </div>
          <div className={styles.featureItem}>
            <h3>Drag-and-Drop Support</h3>
            <p>Easily select files with intuitive drag-and-drop functionality.</p>
          </div>
          <div className={styles.featureItem}>
            <h3>Batch Rendering</h3>
            <p>Process multiple videos at once with customizable settings for each render.</p>
          </div>
          <div className={styles.featureItem}>
            <h3>Format Support</h3>
            <p>Supports popular audio formats (mp3, wav, flac, etc.) and image formats (png, jpg, webp), output as mp4.</p>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© 2025 RenderTune. All rights reserved.</p>
        <a href="https://github.com/MartinBarker/RenderTune/releases" target="_blank" rel="noopener noreferrer">
          <img src="https://img.shields.io/github/v/release/MartinBarker/RenderTune" alt="GitHub Release Version" />
        </a>
        <a href="https://github.com/MartinBarker/RenderTune" target="_blank" rel="noopener noreferrer">
          <img src="https://img.shields.io/github/followers/MartinBarker?style=social" alt="GitHub Followers" />
        </a>
      </footer>
    </div>
  );
};

export default Spek;
