
import type { PropsWithChildren } from "react"
import { Header } from './header/Header';
import styles from './DashboardLayout.module.scss'
import { Footer } from './footer/Footer';
import { Path } from '../ui/Path/Path';

export default function DashboardLayout({children}: PropsWithChildren) {
    return (
        <div className={styles.dashboard}>
            <Header/>
            <main>
                <Path/>
                {children}
            </main>
            <Footer/>
        </div>
    )
}