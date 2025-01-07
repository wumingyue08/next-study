/*
 * @Author: wumingyue
 * @Date: 2025-01-07 13:49:16
 * @Desc: 
 */
'use client'
import React from 'react';
import { Avatar, List } from 'antd';
import { data } from '../data/index';
import Link from '@/node_modules/next/link';


const App: React.FC = () => (
    <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item: any, index: number) => (
            <List.Item>
                <List.Item.Meta
                    avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                    title={<Link href={`/blog/${item.id}`}>{item.title}</Link>}
                    description={item.content}
                />
            </List.Item>
        )}
    />
);

export default App;