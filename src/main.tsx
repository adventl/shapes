
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App';
import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <StyleProvider>
        <ConfigProvider>
          <App />
        </ConfigProvider>
      </StyleProvider>
    </StrictMode>
  );
}
