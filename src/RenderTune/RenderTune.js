import React, { useEffect } from 'react';
import styles from './RenderTune.module.css';
import logo from './app.ico';
import screenshot from './RenderTune_Windows.PNG';
import linuxLogo from './linux.png';
import windowsLogo from './windows.png';
import macLogo from './mac.png';

const Spek = ({ title }) => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = logo;
    document.head.appendChild(link);
    document.title = title;
  }, [title]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={logo} className={styles.logo} alt="Spek Logo" />
        <div>
          <h1>RenderTune - Video Rendering App</h1>
          <p>Combine audio files + image files into video files. Free and open-source, packaged with FFMPEG, available on the Mac, Windows, and Linux stores.</p>
        </div>
      </div>
      <div className={styles.badgeContainer}>
        <img src="https://img.shields.io/github/forks/MartinBarker/RenderTune?style=social" alt="GitHub forks" className={styles.badge} />
        <img src="https://img.shields.io/github/stars/MartinBarker/RenderTune?style=social" alt="GitHub stars" className={styles.badge} />
        <img src="https://img.shields.io/github/v/release/MartinBarker/RenderTune" alt="Latest release" className={styles.badge} />
        <a href="https://github.com/MartinBarker/RenderTune/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">
          <img src="https://img.shields.io/github/license/MartinBarker/RenderTune" alt="GitHub license" className={styles.badge} />
        </a>
        <a href="https://github.com/MartinBarker/RenderTune/releases" target="_blank" rel="noopener noreferrer">
          <img src="https://img.shields.io/github/downloads/MartinBarker/RenderTune/total" alt="GitHub downloads" className={styles.badge} />
        </a>
      </div>

      <h2>Features</h2>
      <ul>
        <li>Render videos from a single audio file or combine multiple audio files into a specific order.</li>
        <li>Set the output video resolution and output location.</li>
        <li>Add black/white padding to the image frame.</li>
        <li>Drag-and-drop support for easy file selection.</li>
        <li>Batch render multiple videos at once with customizable options for each video.</li>
        <li>Track render progress in the "Renders" popup.</li>
        <li>Supports popular audio formats: mp3, flac, wav, m4a, oog, wma, aiff.</li>
        <li>Supports popular image formats: png, jpeg, jpg, webp.</li>
        <li>Output video format: mp4.</li>
      </ul>

      <h2>Screenshots</h2>
      <div className={styles.screenshotContainer}>
        <img src={screenshot} alt="RenderTune running under Windows" width="200" height="200" />
        <img src={screenshot} alt="RenderTune running under Windows" width="200" height="200" />
        <img src={screenshot} alt="RenderTune running under Windows" width="200" height="200" />
      </div>

      <h2>Download</h2>
      <div className={styles.downloadContainer}>
        <div>
          <img src={linuxLogo} alt="Linux" width="50" height="50" />
          <h3>Linux</h3>
          <ul>
            <li><a href="https://github.com/martinbarker/rendertune/releases/latest">Linux AppImage: RenderTune-#.#.#.AppImage</a></li>
            <li><a href="https://github.com/martinbarker/rendertune/releases/latest">Snapcraft</a></li>
            <li><a href="https://github.com/martinbarker/rendertune/releases/latest">More releases</a></li>
          </ul>
        </div>
        <div>
          <img src={windowsLogo} alt="Windows" width="50" height="50" />
          <h3>Windows</h3>
          <ul>
            <li><a href="https://github.com/martinbarker/rendertune/releases/latest">Windows Installer (auto-updates): RenderTune-Web-Setup-#.#.#.exe</a></li>
            <li><a href="https://github.com/martinbarker/rendertune/releases/latest">Windows Portable: RenderTune-#.#.#.exe</a></li>
            <li><a href="https://github.com/martinbarker/rendertune/releases/latest">More releases</a></li>
          </ul>
        </div>
        <div>
          <img src={macLogo} alt="Mac" width="50" height="50" />
          <h3>Mac</h3>
          <ul>
            <li><a href="https://github.com/martinbarker/rendertune/releases/latest">Mac OS X Installer (auto-updates): RenderTune-mac.dmg</a></li>
            <li><a href="https://github.com/martinbarker/rendertune/releases/latest">Mac App Store</a></li>
            <li><a href="https://github.com/martinbarker/rendertune/releases/latest">More releases</a></li>
          </ul>
        </div>
      </div>

      <h2>Contribute</h2>
      <p>Spek is free and open source software licensed under GPLv3.</p>
      {/* other details */}
    </div>
  );
};

export default Spek;
