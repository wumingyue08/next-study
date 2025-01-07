/*
 * @Author: wumingyue
 * @Date: 2025-01-07 11:31:57
 * @Desc: 
 */
import React from 'react';
import Image, { StaticImageData } from '@/node_modules/next/image';


interface IProps {
    color: string;
    altTxt: string;
    content: string;
}
export default function Hero(props: IProps) {
    return (
        <div className='h-screen relative'>
            <div className='absolute inset-0 -z-10' style={{ background: props.color }}>

                <div style={{ objectFit: 'cover' }} ></div>
                <div className='absolute inset-0 bg-gradient-to-r '></div>
            </div>
            <div className='flex justify-center pt-48'>
                <h1 className='text-white text-6xl'>
                    {
                        props.content
                    }
                </h1>
            </div>
        </div>
    )
}
