
import { Layout, Menu } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React, { Suspense, useCallback, useState } from 'react';
import type { NavBarItem } from '../types/navbar.interface';
import Sider from 'antd/es/layout/Sider';
import { UseRef } from '../use-ref/use-ref';
import { UseState } from '../use-state/use-state';


const componentMap: Record<string, NavBarItem> = {
  'use-ref': { label: 'Use Ref Example', component: UseRef },
  'use-state': { label: 'Use State Example', component: UseState},
};

export const HooksPractice: React.FC = () => {

  const [active, setActive] = useState<string>('use-ref');
  const handleMenuClick = useCallback(({ key }: { key: string }) => {
    setActive(key);
  }, []);



  return (
    <Layout>
      <Sider width={200}>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[active]}
            onClick={handleMenuClick}
          style={{ height: '100%' }}
          items={Object.entries(componentMap).map(([key, item]) => ({ key, label: item.label }))}
        />
      </Sider>
      <Content style={{ padding: '0 24px', minHeight: 280 }}>
        <Suspense fallback={<div>Loading...</div>}>
          <main style={{ padding: 24 }}>
            {React.createElement(componentMap[active].component)}
          </main>
        </Suspense>
      </Content>
    </Layout>

  );
};

export default HooksPractice;