/*
 * @Author: wumingyue
 * @Date: 2025-01-07 14:03:02
 * @Desc: 
 */
import React from 'react';
import { Card } from 'antd';
import { data } from '../../data/index'
export default function Page({ params }: { params: { id: string, title: string, content: string } }) {
    const item = data.find(item => item.id === +params.id)
    return (
        <Card title={item?.title} bordered={false} style={{ width: 300 }}>
            <p>{item?.content}</p>
        </Card>
    )
}
