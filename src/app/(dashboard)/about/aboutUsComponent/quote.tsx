import styles from './aboutUsComponent.module.scss'
import card_img from '../../../../../public//about_photo_2.png'
import { Paragraph } from '../../../../components/ui/Paragraph/Paragraph';
import Image from 'next/image';

export const Quote = () => {
    return (
        <div className={styles.card}>
            <Image src={card_img} placeholder="blur" alt="" />
            <div className={styles.card_body}>
                <div className={styles.text}>
                    <Paragraph color='black'>Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.</Paragraph>
                </div>
                <div className={styles.author}>
                    <Paragraph weight='700' color='black'>Имя Фамилия</Paragraph>
                    <Paragraph color='black'>должность</Paragraph>
                    <Paragraph color='black'>ООО”Компания”</Paragraph>
                </div>
            </div>
        </div>
    )
}