'use client'

import { useRouter } from 'next/navigation';
import styles from './NotFoundEl.module.scss'
import { H3 } from '../Headings/H3';
import { SecondaryButton } from '../Buttons/SecondaryButton';

export const NotFoundEl = () => {
    const {push} = useRouter()

    return (
        <div className={styles.not_found}>
            <img className={styles.plate} src="/404_ilustr.png" alt="" />
            <H3 color='white'>Мы честно старались найти, но этой страницы 
            по всей видимости не существует.</H3>
            <SecondaryButton color='white' onClick={() => push('/home')}>
                На Главную
            </SecondaryButton>
        </div>
    )
}