'use client'

import { Hero } from './hero/hero';
import { Advantages } from '../../../components/ui/advantages/advantages';
import { Products } from '../../../components/ui/products/products';
import { Packets } from './packets/packets';
import { Recommendations } from './recommendations/recommendations';
import { FAQ } from '@/components/ui/faq/faq';
import { Subscription } from '../../../components/ui/subscription/subscription';
import dynamic from 'next/dynamic';

const Statistic = dynamic(async  () => (await import('../../../components/ui/statistic/statistic')).Statistic)


export default function Home({children}: {children: React.ReactNode}) {
    return (
        <>
            <Hero/>
            <Advantages/>
            <Products/>
            <Packets/>
            <Statistic/>
            <Recommendations/>
            <FAQ/>
            <Subscription/>
            {children}
        </>
    )
}