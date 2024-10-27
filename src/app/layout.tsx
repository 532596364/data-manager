import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Button, ConfigProvider, Layout, Menu, Splitter } from 'antd';
import './globals.css';
import { Content, Header } from 'antd/es/layout/layout';
import Panel from 'antd/es/splitter/Panel';
import Sider from 'antd/es/layout/Sider';

import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});
const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <ConfigProvider>
      <body>
        <AntdRegistry>
          <Layout className='root-layout-style' >
            <Header className='header-style' > <div className="demo-logo" />
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={items1}
                style={{
                  flex: 1,
                  minWidth: 0,
                }}
              />

            </Header>
            <Splitter
              className='content-style'
            >
              <Panel defaultSize={180} min={180} max={1000}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{
                    height: '100%',
                    borderRight: 0,
                  }}
                  items={items2}
                />

              </Panel>
              <Panel >
                <Content>{children} </Content>
              </Panel>
            </Splitter>

          </Layout>
        </AntdRegistry>
      </body>
    </ConfigProvider>
  </html>
);

export default RootLayout;