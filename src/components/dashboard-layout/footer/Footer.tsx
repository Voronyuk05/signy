'use client'

import { Logo } from '../../ui/Logo/Logo'
import Link from 'next/link';
import styles from './Footer.module.scss'
import { H6 } from '../../ui/Headings/H6';
import { H5 } from '@/components/ui/Headings/H5';

export function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <Logo white={true}/>
                    <H6 color='grey'>© 2020 Signy</H6>
                </div>
                <div className={styles.row}>
                    <div>
                        <H5 color='white'><Link href='/about'>Про нас</Link></H5>
                        <H5 color='white'><Link href='/prices'>Цены</Link></H5>
                        <H5 color='white'><Link href='/auth'>Вход</Link></H5>
                        <H5 color='white'><Link href='/auth'>Регистрация</Link></H5>
                    </div>
                    <H6 color='grey'>Договір оферти</H6>
                </div>
                <div className={styles.row}>
                    <div>
                        <H5 color='white'><Link href='/blog'>Блог</Link></H5>
                        <H5 color='white'><Link href='/contacts'>Контакты</Link></H5>

                    </div>
                    <H6 color='grey'>Безпека сервісу</H6>
                </div>
                <div className={styles.row}>
                    <div>
                        <H5 color='white'>infosmartsign@smarttender.biz</H5>
                        <H5 color='white'>Facebook</H5>
                    </div>
                </div>
                <div className={styles.row}>
                    <div>
                        <H5 color='grey'>пр-т Миколи Бажана, 14 А  
                        Київ, 02072</H5>
                        <H5 color='grey'>0 800 750643</H5>
                        <H5 color='grey'>+380 44 334 56 43</H5>
                        <H5 color='grey'>+380 44 338 86 43</H5>
                    </div>
                </div>
            </div>
        </footer>
    )
     
}