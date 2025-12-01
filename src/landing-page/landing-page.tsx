import React from 'react';

export const LandingPage: React.FC = React.memo(() => {
  return (
    <main className="text-3xl font-bold underline">
      <section>
        <h1>Welcome to Shapes</h1>
        <p>
          This is a simple landing page placeholder. Click "Canvas" in the navbar to open the interactive canvas.
        </p>
        <div>
          <span>Landing Page Preview</span>
        </div>
      </section>
    </main>
  );
});

export default LandingPage;
