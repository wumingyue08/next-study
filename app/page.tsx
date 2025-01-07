/*
 * @Author: wumingyue
 * @Date: 2024-12-16 20:45:55
 * @Desc: 
 */
import React from 'react';
import Hero from './components/hero';
import { Metadata } from '@/node_modules/next/types';
export const metadata: Metadata = {
  title: 'Home'
}
export default function Page() {
  return (
    <Hero color='#9b95c9' altTxt='home' content='1212' />
  )
}
