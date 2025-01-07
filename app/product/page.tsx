/*
 * @Author: wumingyue
 * @Date: 2024-12-16 20:45:55
 * @Desc: 
 */
import React from 'react';
import Hero from '../components/hero'
import { Metadata } from '@/node_modules/next/types';
export const metadata: Metadata = {
  title: 'Product'
}
export default function Product() {
  return (
    <Hero color='#abc88b' altTxt='home' content='product' />
  )
}
