import { SetStateAction, useState } from 'react';
import { Dispatch } from 'react';
import { nanoid } from 'nanoid';
import { usePostCall } from '@/hooks/usePostCall';
import { useGetCall } from '@/hooks/useGetCall';
import { IFormProps } from '@/types/form.types';
import { H3 } from '../Headings/H3';
import { H6 } from '../Headings/H6';
import { Input } from '../Input/Input';
import { Paragraph } from '../Paragraph/Paragraph';
import { PrimaryButton } from '../Buttons/PrimaryButton';
import styles from './callForm.module.scss'

export const CallForm = ({setIsShowed}: {setIsShowed: Dispatch<SetStateAction<boolean>>}) => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [tel, setTel] = useState<string>('')
    const [error, setError] = useState<boolean>(false)
    const {mutate, isSuccess} = usePostCall()
    const {data} = useGetCall(email, tel)
    
    const handleSubmit = (event: React.FormEvent<IFormProps>) => {
        event.preventDefault()
        const emailStyle = event.currentTarget.elements.email.classList.toString().includes('incorrect')
        const telStyle = event.currentTarget.elements.tel.classList.toString().includes('incorrect')
        
        if(!emailStyle && !telStyle && data && !data[0] ) {
            mutate({
                id: nanoid(),
                name: name,
                email: email,
                tel: tel
            })
            setError(false)
        } else {
            setError(true)
        }
    }

    const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => { 
        if (e.currentTarget == e.target) setIsShowed(false)
    }

    return (
        <div className={styles.backdrop} onClick={handleCloseModal}>
            <div className={styles.modal}>
            {!isSuccess ? (
                <>
                    <img onClick={handleCloseModal} className={styles.cross} src='/cross.png' alt="" />
                    <div className={styles.title}>
                        <H3 weight='700' color='black'>Демо версия</H3>
                        <Paragraph color='black'>Введи свой электронный адрес и будь в курсе всех обновлений</Paragraph>
                    </div>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <label>
                            <Paragraph color='black'>Имя*:</Paragraph>
                            <Input id='name' value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}  placeHolder='Олександр'/>
                        </label>
                        <label>
                            <Paragraph color='black'>Электронная почта*:</Paragraph>
                            <Input id='email' name='email' value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}  placeHolder='oleksandr@mail.com'/>
                        </label>
                        <label>
                            <Paragraph color='black'>Телефон*:</Paragraph>
                            <Input id='tel' name='tel' value={tel} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTel(e.target.value)} placeHolder='+38 000 000 00 00'/>
                        </label>
                        <PrimaryButton>отправить</PrimaryButton>
                        {error ? <H6 color='black'>Wrong data!</H6> : ''}
                    </form>
                </>
                ) :   (
                    <>
                        <img onClick={handleCloseModal} className={styles.cross} src='/cross.png' alt="" />
                        <div className={styles.title}>
                            <H3 weight='700' color='black'>Демо версия</H3>
                            <Paragraph color='black'>Заявка отправленна и наши менеджеры свяжутся с тобой в ближайшее время</Paragraph>
                            <img className={styles.sent} src="/sent.png" alt="" />
                        </div>
                    </>
                )
            }
            </div>
        </div>
    )
}