'use client';

import { useState } from 'react';
import { Space, Rate } from 'antd';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { lusitana } from '../fonts';

const desc = [
  'very terrible',
  'terrible',
  'very bad',
  'bad',
  'normal',
  'ok',
  'good',
  'very good',
  'wonderful',
  'epic',
];
const customIcons: Record<number, React.ReactNode> = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

const MoodRate = () => {
  const [value, setValue] = useState(2.5);
  return (
    <div
      className={`${lusitana.className} mb-4 rounded-xl bg-gray-50 p-2 shadow-sm`}
    >
      <div className="flex justify-center p-4">
        <h3 className="ml-2 text-xl font-medium">How do you feel today</h3>
      </div>
      <p className="truncate rounded-xl bg-white px-4 py-8 text-center text-sm">
        <Space>
          <Rate
            defaultValue={2.5}
            character={({ index = 0 }) => customIcons[index + 1]}
            allowHalf
            allowClear={false}
            onChange={setValue}
            value={value}
          />
          {value ? <span>{desc[value * 2 - 1]}</span> : ''}
        </Space>
      </p>
    </div>
  );
};

export default MoodRate;
