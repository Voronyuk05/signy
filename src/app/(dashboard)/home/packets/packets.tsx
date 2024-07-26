'use client'

import { useRouter } from 'next/navigation';
import styles from './packets.module.scss'
import { H2 } from '../../../../components/ui/Headings/H2';
import { H3 } from '../../../../components/ui/Headings/H3';
import { PrimaryButton } from '../../../../components/ui/Buttons/PrimaryButton';
import { H4 } from '../../../../components/ui/Headings/H4';
import { useState } from 'react';
import { CallForm } from '../../../../components/ui/callForm/callForm';

export const Packets = ({}) => {
    const {push} = useRouter()
    const [isShowed, setIsShowed] = useState<boolean>(false)

    return (
        <>
            <section className={styles.packets}>
                <div className={styles.container}>
                    <H2 color='black' weight='700'>Пакеты цифровых подписей </H2>
                    <div className={styles.content}>
                        <div className={styles.packet}>
                            <H3 color='black' weight='700'>Demo</H3>
                            <div>
                                <H4 weight='700' color='black'>30 документів</H4>
                                <span className={styles.price}>0<H4 size='small' color='black'>грн/місяць</H4></span>
                            </div>
                            <PrimaryButton onClick={() => push('/auth')}>
                                зарегистрироватся
                            </PrimaryButton>
                        </div>
                        <div className={styles.packet}>
                            <H3 color='black' weight='700'>Business</H3>
                            <div>
                                <H4 weight='700' color='black'>1 000 документів</H4>
                                <span className={styles.price}>1000<H4 size='small' color='black'>грн/рік</H4></span>
                            </div>
                            <PrimaryButton>
                                заказать
                            </PrimaryButton>
                        </div>
                        <div className={styles.packet}>
                            <H3 color='black' weight='700'>Pro</H3>
                            <div>
                                <H4 weight='700' color='black'>10 000 документів</H4>
                                <span className={styles.price}>9000<H4 size='small' color='black'>грн/рік</H4></span>
                            </div>
                            <PrimaryButton>
                                закакзать
                            </PrimaryButton>
                        </div>
                        <div className={styles.packet}>
                            <H3 color='black' weight='700'>Individual</H3>
                            <div>
                                <H4 weight='700' color='black'>Необмежена кількість документів</H4>
                            </div>
                            <PrimaryButton onClick={() => setIsShowed(true)}>
                                связаться с нами
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </section>
            {isShowed ?  <CallForm setIsShowed={setIsShowed}/> : null}
        </>
    )
}