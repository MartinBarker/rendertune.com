import React from 'react';
import { Link } from 'react-router-dom';

function TopBarTemplate({ children }) {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/download">Download</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/contribute">Contribute</Link></li>
          <li><Link to="/support">Support</Link></li>
          <li><Link to="/help">Help</Link></li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
    </div>
  );
}

export default TopBarTemplate;
