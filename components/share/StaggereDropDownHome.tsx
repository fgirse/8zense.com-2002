"use client"
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import Link from 'next/link';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="#section-features">
        Feature
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="#section-itworks">
        How it works
      </Link>
    ),
  },
  {
    key: '3',
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="#section-projRef">
        Project References
      </Link>
    ),
  
  },
  {
    key: '4',
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="#section-testimonials">
        Testimonials
      </Link>
    ),
  },
];

const App: React.FC = () => (
  <Dropdown className="ml-5 hover:border rounded-xl px-2 py-1  hover:bg-slate-500 text-4xl text-zenseWhite font-sans font-black uppercase lg:text-2xl xl:text-3xl" menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Home
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default App;