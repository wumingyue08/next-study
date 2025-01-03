"use client"; //客户端组件使用
import { useState } from "react";


/*
 * @Author: wumingyue
 * @Date: 2024-12-19 15:26:42
 * @Desc: 
 */
export default function DashboardTemplate({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [count, setCount] = useState(0)
    return (
        <div className="border-2 border-dashed border-block p-4 mx-auto mt-10">
            <h2>Dashboard Template{count}</h2>
            <button className="bg-black text-white p-2 my-4 rounded-md" onClick={() => setCount(count + 1)}>Increment</button>
            {children}
        </div>
    );
}
