'use client'
import { useState } from "react";
import { questionsData } from "./questionsData"
import { H3 } from '../../../../components/ui/Headings/H3';
import { Paragraph } from "@/components/ui/Paragraph/Paragraph";
import styles from './popularQuestions.module.scss'
import { H2 } from '../../../../components/ui/Headings/H2';


export const PopularQuestions = () => {
    const [activeCategory, setActiveCategory] = useState<string>('popular')
    const [activeQuestion, setActiveQuestion] = useState<string>('1')

    return (
        <section className={styles.popular_questions}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <H2 color="black" weight="700">Популярные вопросы и ответы на них</H2>
                </div>
                <div className={styles.content}>
                    {questionsData.map(({category, items}) => (
                        <div className={styles.category} key={category} onClick={() => setActiveCategory(category)}>
                            <div className={styles.sub_title}>
                                <H3 color="black" weight="700">{category}</H3>
                                <img src={`${category === activeCategory ? '/minus.svg' : '/plus.svg'}`} alt="" />
                            </div>
                            {
                                category === activeCategory ? (
                                    <ul className={styles.list}>
                                        {items.map(({id, question, answer}) => (
                                            <li className={styles.item} key={id} onClick={() => setActiveQuestion(id)}>
                                                <Paragraph color='black' weight={activeQuestion ? '700' : ''}>{question}</Paragraph>
                                                {id === activeQuestion ? (
                                                <Paragraph color='black'>{answer}</Paragraph> ) : null}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <Paragraph color="black">Ответов на вопросы {String(items.length)}</Paragraph>
                                )
                            }
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}