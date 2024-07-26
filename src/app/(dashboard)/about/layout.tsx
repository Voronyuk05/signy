'use client'
import { AboutUsComponent } from './aboutUsComponent/aboutUsComponent';
import { Subscription } from '../../../components/ui/subscription/subscription';



export default function About({children}: {children: React.ReactNode}) {
    return (
        <>
            <AboutUsComponent/>
            <Subscription bgColor='secondary'/>
            {children}
        </>
    )
}