'use client'
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { usePostMailings } from '@/hooks/usePostMailings';
import { useGetMailingsByEmail } from '@/hooks/useGetMailingsByEmail';
import { IFormProps } from '@/types/form.types';
import { Paragraph } from '../Paragraph/Paragraph';
import { H2 } from '../Headings/H2';
import { Input } from '../Input/Input';
import { PrimaryButton } from '../Buttons/PrimaryButton';
import { H6 } from '../Headings/H6';
import styles from './subscription.module.scss'


export const Subscription = ({bgColor}: {bgColor?: string}) => {
    const [email, setEmail] = useState<string>('')
    const [error, setError] = useState<boolean>(false)
    const {mutate, isSuccess} = usePostMailings()
    const {data} = useGetMailingsByEmail(email)

    function  handleSubmit(event: React.FormEvent<IFormProps>) {
        event.preventDefault()
        const emailStyle = event.currentTarget.elements.email.classList.toString().includes('incorrect')

        if(!emailStyle && data && !data[0] ) {
            
            mutate({
                id: nanoid(),
                email: email,
            })
            setError(false)
        } else {
            setError(true)
        }
    }


    const bgStyle = bgColor ? styles.secondary : ''
    return (
        <section className={`${styles.subscription} ${bgStyle}`}>
            <div className={styles.container}>
                {!isSuccess ? (
                    <>
                        <H2 weight='700' color='black'>Подпишись на наши новости!</H2>
                        <Paragraph color='black'>Введи свой электронный адрес и будь в курсе всех обновлений</Paragraph>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <label>
                                <Input id='email' name='email' value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} placeHolder=''/>
                                {error ? <H6 color='black'>Wrong email!</H6> : ''}
                            </label>
                            <PrimaryButton>отправить</PrimaryButton>
                         </form>
                    </>
                ) :   (
                    <>
                        <H2 weight='700' color='black'>Подпишись на наши новости!</H2>
                        <Paragraph color='black'>На адресс {email} теперь будут приходить самые важные новости</Paragraph>
                    </>
                )}
            </div>
        </section>
    )
}