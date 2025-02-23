import React, { useEffect } from 'react';
import styles from './RenderTune.module.css';
import logo from './app.ico';

const Spek = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = logo;
    document.head.appendChild(link);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Spek – Acoustic Spectrum Analyzer</h1>
      <div className={styles.header}>
        <p>Spek (IPA: /spɛk/, ‘bacon’ in Dutch) helps to analyze your audio files by showing their spectrogram. Spek is free software available for Unix, Windows and Mac OS X.</p>
        <img src={logo} className={styles.logo} alt="Spek Logo" />
      </div>
      <div className={styles.badgeContainer}>
        <img src="https://img.shields.io/github/forks/MartinBarker/RenderTune?style=social" alt="GitHub forks" className={styles.badge} />
        <img src="https://img.shields.io/github/stars/MartinBarker/RenderTune?style=social" alt="GitHub stars" className={styles.badge} />
      </div>

      <h2>Features</h2>
      <ul>
        <li>Supports all popular lossy and lossless audio file formats thanks to the FFmpeg libraries.</li>
        <li>Ultra-fast signal processing, uses multiple threads to further speed up the analysis.</li>
        <li>Shows the codec name and the audio signal parameters.</li>
        <li>Allows to save the spectrogram as an image file.</li>
        <li>Drag-and-drop support; associates with common audio file formats.</li>
        <li>Auto-fitting time, frequency and spectral density rulers.</li>
        <li>Adjustable spectral density range.</li>
        <li>Translated into 19 languages.</li>
      </ul>

      {/* Example of how images might be handled */}
      <h2>Screenshots</h2>
      <div className={styles.screenshotContainer}>
        <img src="/path/to/image.png" alt="Spek running under Ubuntu Linux" />
        <img src="/path/to/image.png" alt="Spek running under Windows 7" />
        <img src="/path/to/image.png" alt="Spek running under Mac OS X" />
      </div>

      <h2>Download</h2>
      <div className={styles.downloadContainer}>
        {/* Details for download links */}
      </div>

      <h2>Contribute</h2>
      <p>Spek is free and open source software licensed under GPLv3.</p>
      {/* other details */}
    </div>
  );
};

export default Spek;
