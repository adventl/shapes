
import React, { useState, useCallback, Suspense } from 'react';
import './App.css';
import { Layout, Menu } from 'antd';
import CanvasContainer from './canvas/canvas-container';
import LandingPage from './landing-page/landing-page';
import HooksPractice from './hooks-practice/hooks-practice';
import type { NavBarItem } from './types/navbar.interface';

const { Header, Footer, Content } = Layout;

const componentMap: Record<string, NavBarItem> = {
  'home': { label: 'Home', component: LandingPage },
  'canvas': { label: 'Canvas', component: CanvasContainer },
  'hooks-practice': { label: 'Hooks Practice', component: HooksPractice },
};

export const App: React.FC = React.memo(() => {

  const [active, setActive] = useState<string>('home');
  const handleMenuClick = useCallback(({ key }: { key: string }) => {
    setActive(key);
  }, []);

  return (
    <Layout className="min-h-screen flex flex-col">
      <Header className="hover:bg-sky-700">
        <div/>
        <nav>
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[active]}
            onClick={handleMenuClick}
            items={Object.entries(componentMap).map(([key, item]) => ({ key, label: item.label }))}
          />
        </nav>
      </Header>
      <Content className="flex-1">
        <Suspense fallback={<div>Loading...</div>}>
          <main className="p-4">
            {React.createElement(componentMap[active].component)}
          </main>
        </Suspense>
      </Content>
      <Footer className="bg-gray-900 text-white text-center py-4">
        Ant Design {new Date().getFullYear()} — Created by Ant UED
      </Footer>
    </Layout>
  );
});

// For Vite/CRA compatibility
export default App;
