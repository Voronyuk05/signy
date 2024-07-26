'use client'

import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './Header.module.scss'
import { Logo } from '../../ui/Logo/Logo';
import { Nav } from '../../ui/nav/Nav';
import Link from 'next/link';
import { PrimaryButton } from '../../ui/Buttons/PrimaryButton';
import { SecondaryButton } from '../../ui/Buttons/SecondaryButton'

export function Header() {
    const [isChecked, setIsChecked] = useState(false)
    const path = usePathname()

    useEffect(() => {
        setIsChecked(false)
    }, [path])

    const handleSetChecked = () => {
        setIsChecked(!isChecked)
    }

    return (
        <header className={styles.header}>
            <Logo/>
            <div className={`${styles.burger} ${isChecked ? 'checked' : ''}`} onClick={() => handleSetChecked()}>
                <span></span>
            </div>
            <div className={`${styles.panel} ${isChecked ? styles.showed : ''}`}>
                <img onClick={() => handleSetChecked()} className={styles.cross} src="/cross.png" alt="" />
                    <Nav/>
                    <div className={styles.auth}>
                        <SecondaryButton >вход</SecondaryButton>
                        <PrimaryButton>регистрация</PrimaryButton>
                    </div>
                    <div className={styles.language}>
                        <img className={styles.arrow} src="/arrow-select.png" alt="" />
                        <Link href='/home'>РУС</Link>
                        <Link href='/home'>УКР</Link>
                    </div>
            </div>
        </header>
    )
     
}