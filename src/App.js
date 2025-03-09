import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Frame from './Frame'; 
import Home from './Home';

const DownloadPage = () => (
  <Frame title="Download - RenderTune">
    <div style={{ padding: '20px', color: '#fff' }}>
      <h2>Download RenderTune</h2>
      <p>Download the latest version of RenderTune for your operating system:</p>
      <ul>
        <li><a href="https://github.com/MartinBarker/RenderTune/releases/latest" className="custom-link">Windows</a></li>
        <li><a href="https://github.com/MartinBarker/RenderTune/releases/latest" className="custom-link">macOS (Intel)</a></li>
        <li><a href="https://github.com/MartinBarker/RenderTune/releases/latest" className="custom-link">macOS (Apple Silicon)</a></li>
        <li><a href="https://github.com/MartinBarker/RenderTune/releases/latest" className="custom-link">Linux</a></li>
      </ul>
      <p>Or download from the app stores:</p>
      <ul>
        <li><a href="https://apps.apple.com/app/id123456789" className="custom-link">Mac App Store</a></li>
        <li><a href="https://www.microsoft.com/store/apps/9NBLGGH4NNS1" className="custom-link">Microsoft Store</a></li>
        <li><a href="https://snapcraft.io/render-tune" className="custom-link">Snap Store</a></li>
      </ul>
    </div>
  </Frame>
);

const FeaturesPage = () => (
  <Frame title="Features - RenderTune">
    <div style={{ padding: '20px', color: '#fff' }}>
      <h2>RenderTune Features</h2>
      <ul>
        <li>Render videos from a single audio file or combine multiple audio files in a specific order.</li>
        <li>Set the output video resolution and choose your desired output location.</li>
        <li>Add black or white padding to adjust the image frame.</li>
        <li>Easily select files with intuitive drag-and-drop functionality.</li>
        <li>Process multiple videos at once with customizable settings for each render.</li>
        <li>Supports popular audio formats (mp3, wav, flac, etc.) and image formats (png, jpg, webp), output as mp4.</li>
      </ul>
    </div>
  </Frame>
);

const ContributePage = () => (
  <Frame title="Contribute - RenderTune">
    <div style={{ padding: '20px', color: '#fff' }}>
      <h2>Contribute to RenderTune</h2>
      <p>We welcome contributions from the community! Here's how you can contribute:</p>
      <ol>
        <li>Fork the repository on GitHub.</li>
        <li>Clone your forked repository to your local machine.</li>
        <li>Make your changes and commit them with clear commit messages.</li>
        <li>Push your changes to your forked repository.</li>
        <li>Open a pull request on the main repository.</li>
      </ol>
      <p>For detailed instructions, please refer to the <a href="https://github.com/MartinBarker/RenderTune" className="custom-link">GitHub repository</a>.</p>
    </div>
  </Frame>
);

const SupportPage = () => (
  <Frame title="Support - RenderTune">
    <div style={{ padding: '20px', color: '#fff' }}>
      <h2>Support RenderTune</h2>
      <p>If you need support, you can reach out to us through the following channels:</p>
      <ul>
        <li>Email: <a href="mailto:martinbarker99@gmail.com" className="custom-link">martinbarker99@gmail.com</a></li>
        <li>GitHub Issues: <a href="https://github.com/MartinBarker/RenderTune/issues" className="custom-link">Report an issue</a></li>
        <li>Discord: <a href="https://discord.com/invite/pEAjDjPceY" className="custom-link">Join our Discord channel</a></li>
      </ul>
      <h3>Support Us</h3>
      <p>You can support the development of RenderTune through the following platforms:</p>
      <ul>
        <li><a href="https://ko-fi.com/martinradio" className="custom-link">Ko-fi</a></li>
        <li><a href="https://www.patreon.com/c/martinradio" className="custom-link">Patreon</a></li>
        <li><a href="https://github.com/sponsors/MartinBarker" className="custom-link">GitHub Sponsors</a></li>
      </ul>
      <p>Supporters will get their names featured in the app!</p>
    </div>
  </Frame>
);

const HelpPage = () => (
  <Frame title="Help - RenderTune">
    <div style={{ padding: '20px', color: '#fff' }}>
      <h2>Help and Contact</h2>
      <p>If you need help or have any questions, you can contact us through the following channels:</p>
      <ul>
        <li>Email: <a href="mailto:martinbarker99@gmail.com" className="custom-link">martinbarker99@gmail.com</a></li>
        <li>GitHub Issues: <a href="https://github.com/MartinBarker/RenderTune/issues" className="custom-link">Report an issue</a></li>
        <li>Discord: <a href="https://discord.com/invite/pEAjDjPceY" className="custom-link">Join our Discord channel</a></li>
      </ul>
      <p>Feel free to ping or message me directly on Discord for any urgent issues.</p>
    </div>
  </Frame>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Frame title="RenderTune"><Home /></Frame>} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/contribute" element={<ContributePage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="*" element={<Navigate to="/" />} /> {/* Redirect any other routes */}
      </Routes>
    </Router>
  );
}

export default App;
