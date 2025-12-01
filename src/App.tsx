
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
    <Layout className="h-screen w-screen flex flex-col">
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[active]}
          onClick={handleMenuClick}
          items={Object.entries(componentMap).map(([key, item]) => ({ key, label: item.label }))}
        />
      </Header>
      <Content className="flex-1 overflow-auto bg-white flex">
        <Suspense fallback={<div>Loading...</div>}>
          {React.createElement(componentMap[active].component)}
        </Suspense>
      </Content>
      <Footer className="flex-shrink-0 bg-gray-100 text-center">
        Ant Design {new Date().getFullYear()} — Created by Ant UED
      </Footer>
    </Layout>
  );
});

// For Vite/CRA compatibility
export default App;
