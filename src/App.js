import './index.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="container">
      <header className="header">
        <img src={logo} className="logo" alt="RenderTune Logo" />
        <div className="header-text">
          <h1 className="main-title">RenderTune</h1>
          <p className="subtext">A powerful tool for rendering and synchronizing media files.</p>
        </div>
      </header>
      <nav className="sidebar">
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Tutorials</a></li>
          <li><a href="#">Download</a></li>
          <li><a href="#">Archive</a></li>
          <li><a href="#">Forum</a></li>
        </ul>
        <button className="donate">Donate</button>
      </nav>
      <main className="content">
        <section className="features">
          <h2>Features</h2>
          <ul>
            <li>Supports all major media formats</li>
            <li>Fast processing and optimized rendering</li>
            <li>Batch processing capabilities</li>
            <li>Cloud integration for large-scale projects</li>
          </ul>
        </section>
        <section className="screenshots">
          <h2>Screenshots</h2>
          <div className="screenshot-grid">
            <img src="screenshot1.png" alt="Screenshot 1" />
            <img src="screenshot2.png" alt="Screenshot 2" />
            <img src="screenshot3.png" alt="Screenshot 3" />
          </div>
        </section>
        <section className="download">
          <h2>Download</h2>
          <p>Choose your preferred version below:</p>
          <ul>
            <li><a href="#">RenderTune 1.0 for Windows</a></li>
            <li><a href="#">RenderTune 1.0 for macOS</a></li>
            <li><a href="#">RenderTune 1.0 for Linux</a></li>
          </ul>
        </section>
        <section className="news">
          <h2>News</h2>
          <ul className="in-the-news">
            <li><a href="#">2025-02-10: RenderTune 1.0 Released!</a></li>
            <li><a href="#">2024-12-15: Beta version available</a></li>
            <li><a href="#">2024-10-05: First public preview</a></li>
            <li><a href="#">2024-08-30: Performance improvements in alpha version</a></li>
            <li><a href="#">2024-06-12: RenderTune featured in tech blog</a></li>
            <li><a href="#">2024-05-20: RenderTune wins best software award</a></li>
            <li><a href="#">2024-04-15: New features added in latest update</a></li>
            <li><a href="#">2024-03-10: RenderTune partners with major tech company</a></li>
          </ul>
        </section>
        <section className="reviews">
          <h2>User Reviews</h2>
          <blockquote>"RenderTune has significantly improved my media processing workflow! Highly recommended!" - User A</blockquote>
          <blockquote>"Simple, fast, and reliable. Love the batch processing feature!" - User B</blockquote>
          <blockquote>"A must-have tool for video and audio synchronization." - User C</blockquote>
        </section>
      </main>
      <footer className="footer">
        <p>© 2025 RenderTune. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
