
import React, { useState, useCallback, Suspense } from 'react';
import './App.css';
import { Layout, Menu } from 'antd';
import CanvasContainer from './canvas/CanvasContainer';
import LandingPage from './landing-page/LandingPage';

const { Header, Footer, Content } = Layout;


const navBar = [
  { key: 'home', label: 'Home' },
  { key: 'canvas', label: 'Canvas' },
];


export const App: React.FC = React.memo(() => {

  const [active, setActive] = useState<string>('home');
  const handleMenuClick = useCallback(({ key }: { key: string }) => {
    setActive(key);
  }, []);

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" aria-label="Shapes Logo" />
        <nav aria-label="Main Navigation" style={{ flex: 1, minWidth: 0 }}>
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[active]}
            onClick={handleMenuClick}
            items={navBar}
            style={{ flex: 1, minWidth: 0 }}
          />
        </nav>
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <Suspense fallback={<div>Loading...</div>}>
          {active === 'canvas' ? (
            <main style={{ padding: 24 }}>
              <CanvasContainer />
            </main>
          ) : (
            <main style={{ padding: 24 }}>
              <LandingPage />
            </main>
          )}
        </Suspense>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
});

// For Vite/CRA compatibility
export default App;
