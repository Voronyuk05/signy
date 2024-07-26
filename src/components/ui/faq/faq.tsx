'use client'

import { useState } from 'react';
import { H2 } from '../Headings/H2';
import { faqData } from './faqData';
import styles from './faq.module.scss'
import { Paragraph } from '../Paragraph/Paragraph';

export const FAQ = () => {
    const [activeQuestion, setActiveQuestion] = useState<string>('1')



    return (
        <section className={styles.FAQ}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <H2 weight='700' color='black'>Популярные вопросы и ответы на них</H2>
                </div>
                <div className={styles.content}>
                    <ul className={styles.list}>
                        {
                            faqData.map(({id, question, answer}) => {
                                const activated = id === activeQuestion ? true : false
                                const activeStyle = activated ? styles.active : ''
                                return (
                                    <li key={id} className={`${styles.item} ${activeStyle}`} onClick={() => setActiveQuestion(id)}>
                                        <Paragraph color='black' weight={activated ? '700' : ''}>{question}</Paragraph>
                                        {id === activeQuestion ? (
                                            <Paragraph color='black'>{answer}</Paragraph>
                                        ) : null}
                                    </li>)
                            })
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}