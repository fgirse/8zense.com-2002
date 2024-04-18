
"use client"
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, MenuProps, Space } from 'antd';

const items: MenuProps['items'] = [
  {
    key: '1',
    type: 'group',
    label: 'Rechtliches',
    children: [
      {
        key: '1-1',
        label: 'Impressum',
      },
      {
        key: '1-2',
        label: 'Datenschutz',
      },
    ],
  },
  {
    key: '2',
    label: 'sub menu',
    children: [
      {
        key: '2-1',
        label: 'frei',
      },
      {
        key: '2-2',
        label: 'frei',
      },
    ],
  },
  {
    key: '3',
    label: 'disabled sub menu',
    disabled: true,
    children: [
      {
        key: '3-1',
        label: 'frei',
      },
      {
        key: '3-2',
        label: 'frei',
      },
    ],
  },
];

const App: React.FC = () => (
  <Dropdown className="ml-5 hover:border rounded-xl px-2 py-1  hover:bg-slate-500 text-lg text-zenseWhite font-sans font-black uppercase xl:text-3xl" menu={{ items }}>
    <
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      a onClick={(e) => e.preventDefault()}>
      <Space>
    Info
        <DownOutlined className="bg-red-300 text-white text-lg uppercase"/>
      </Space>
    </a>
  </Dropdown >
);

export default App;