"use client"; //客户端组件使用
import { useState } from "react";
import Link from "@/node_modules/next/link";
import { usePathname } from "@/node_modules/next/navigation";

const linkData = [
    {
        name: 'About',
        path: "/dashboard/about"
    },
    {
        name: 'Settings',
        path: "/dashboard/settings"
    }
]
/*
 * @Author: wumingyue
 * @Date: 2024-12-19 15:26:42
 * @Desc: 
 */
export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [count, setCount] = useState(0);
    const pathname = usePathname();
    console.log('pathname', pathname)
    return (
        <div className="border-2 border-dashed border-block p-4 w-1/2 mx-auto mt-10">

            <div className="flex gap-4 font-bold text-lg mb-4">
                {
                    linkData.map((link) => (
                        <Link key={link.path} className={pathname === link.path ? "text-purple-500" : ""} href={link.path}>{link.name}</Link>
                    ))
                }
            </div>
            <h2>Dashboard Layout{count}</h2>
            <button className="bg-black text-white p-2 my-4 rounded-md" onClick={() => setCount(count + 1)}>Increment</button>
            {children}
        </div>
    );
}
