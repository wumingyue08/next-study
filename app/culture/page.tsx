/*
 * @Author: wumingyue
 * @Date: 2024-12-16 20:45:55
 * @Desc: 
 */
import React from 'react';
import Hero from '../components/hero';
import { Metadata } from '@/node_modules/next/types';
export const metadata: Metadata = {
  title: 'Culture'
}
export default function Culture() {
  return (
    <Hero color='#987165' altTxt='home' content='culture' />
  )
}
