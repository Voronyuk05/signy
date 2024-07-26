'use client' 

import Link from "next/link";
import styles from './Nav.module.scss'
import { useRouter } from "next/navigation";


export function Nav() {
    const {refresh} = useRouter()

    return (
        <nav className={styles.nav}>
            <div className={styles.select_tel}>
                <img className={styles.arrow} src="/arrow-select.png" alt="" />
                <Link  href='/404'>0 800 750 643</Link>
                <Link  href='/404'>+380 44 334 56 43</Link>
                <Link  href='/404'>+380 44 338 86 43</Link>
            </div>
            <div className={styles.select}>
                <img className={styles.arrow} src="/arrow-select.png" alt="" />
                <Link  href='/about'>ПРО НАС</Link>
                <Link  href='/blog'>БЛОГ</Link>
                <Link  href='/questions'>ВОПРОСЫ</Link>
            </div>
            <Link href='/prices'>ЦЕНЫ</Link>
            <Link href='/contacts'>КОНТАКТЫ</Link>
        </nav>
    )
}