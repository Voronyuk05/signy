import { useState } from 'react';
import { nanoid } from 'nanoid';
import { usePostCall } from '@/hooks/usePostCall';
import { useGetCall } from '@/hooks/useGetCall';
import { IFormProps } from '@/types/form.types';
import { H2 } from '../Headings/H2';
import { Paragraph } from '../Paragraph/Paragraph';
import { Input } from '../Input/Input';
import { PrimaryButton } from '../Buttons/PrimaryButton';
import { H6 } from '../Headings/H6';
import styles from './contactsForm.module.scss'
import { TextArea } from '../TextArea/TextArea';


export const ContactsForm = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [tel, setTel] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [error, setError] = useState<boolean>(false)
    const {mutate, isSuccess} = usePostCall()
    const {data} = useGetCall(email, tel)
    
    const handleSubmit = (event: React.FormEvent<IFormProps>) => {
        event.preventDefault()
        const emailStyle = event.currentTarget.elements.email.classList.toString().includes('incorrect')
        const telStyle = event.currentTarget.elements.tel.classList.toString().includes('incorrect')

        if(!emailStyle && !telStyle && data && !data[0]) {
            mutate({
                id: nanoid(),
                name: name,
                email: email,
                tel: tel,
                message: message
            })
            setError(false)
        } else {
            setError(true)
        }
    }

    return (
        <section className={styles.contacts_form}>
            <div className={styles.container}>
                    {!isSuccess ? (
                    <>
                       
                        <div className={styles.title}>
                            <H2 weight='700' color='black'>...или напишите нам:</H2>
                        </div>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <label>
                                <Paragraph color='black'>Имя*:</Paragraph>
                                <Input value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}  placeHolder='Олександр'/>
                            </label>
                            <label>
                                <Paragraph color='black'>Электронная почта*:</Paragraph>
                                <Input id='email' name='email' value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}  placeHolder='oleksandr@mail.com'/>
                            </label>
                            <label>
                                <Paragraph color='black'>Телефон*:</Paragraph>
                                <Input id='tel' name='tel' value={tel} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTel(e.target.value)} placeHolder='+38 000 000 00 00'/>
                            </label>
                            <label>
                                <Paragraph color='black'>Сообщение*:</Paragraph>
                                <TextArea value={message} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)} placeHolder='введите тут'/>
                            </label>
                            <PrimaryButton>отправить</PrimaryButton>
                            {error ? <H6 color='black'>Wrong data!</H6> : ''}
                        </form>
                    </>
                    ) :   (
                        <>
                            <div className={styles.title}>
                                <H2 weight='700' color='black'>Отправлено!</H2>
                                <Paragraph color='black'>Заявка отправленна и наши менеджеры свяжутся с тобой в ближайшее время</Paragraph>
                                <img className={styles.sent} src="/sent.png" alt="" />
                            </div>
                        </>
                    )
                    }
            </div>
        </section>
    )
}