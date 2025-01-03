/*
 * @Author: wumingyue
 * @Date: 2025-01-03 09:54:36
 * @Desc: 
 */
"use client"
import React from 'react';
import Link from '@/node_modules/next/link';
import { usePathname } from "@/node_modules/next/navigation";

const linkData = [
    {
        name: 'Product',
        path: "/product"
    },
    {
        name: 'Culture',
        path: "/culture"
    },
    {
        name: 'Illustrate',
        path: "/illustrate"
    }
]
export default function Header() {
    const pathname = usePathname();
    console.log('pathname', pathname)
    return (
        <div className="absolute w-full z-10">
            <div className="flex justify-between container mx-auto text-white p-8">
                <Link className="text-3xl font-bold" href='/'>Home</Link>
                <div className='text-xl space-x-4'>
                    {
                        linkData.map((link) => (
                            <Link key={link.path} className={pathname === link.path ? "text-purple-500" : ""} href={link.path}>{link.name}</Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
