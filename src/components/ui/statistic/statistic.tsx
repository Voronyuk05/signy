'use client'
import CountUp from 'react-countup';
import { H2 } from "../Headings/H2"
import styles from './statistic.module.scss'
import { Paragraph } from '../Paragraph/Paragraph';
import { useEffect } from "react";

export const Statistic = () => {
    return (
        <section className={styles.statistic}>
            <div className={styles.container}>
                <span className={styles.quantity}><CountUp end={5820125114}/></span>
                <H2 color='black' weight='700'>подписано документов</H2>
                <Paragraph color="black">Наша компания уже более 30 лет создает удобные решения для бизнеса любого размера. Мы гордимся Signy как безопасным и комфортным продуктом</Paragraph>
            </div>
        </section>
    )
}