


import React from 'react';
import './LandingPage.css';

export const LandingPage: React.FC = React.memo(() => {
  return (
    <main className="landing-root" aria-label="Landing Page">
      <section className="landing-content">
        <h1 className="landing-title">Welcome to Shapes</h1>
        <p className="landing-desc">
          This is a simple landing page placeholder. Click "Canvas" in the navbar to open the interactive canvas.
        </p>
        <div className="landing-preview">
          <span className="landing-preview-label">Landing Page Preview</span>
        </div>
      </section>
    </main>
  );
});

export default LandingPage;
