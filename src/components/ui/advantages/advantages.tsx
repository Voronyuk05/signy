import styles from './advantages.module.scss'
import { H3 } from '../Headings/H3';
import { Paragraph } from '../Paragraph/Paragraph';

export const Advantages = () => {
    return (
        <section className={styles.advantages}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <img src="/speedometer.png" alt="" />
                    <div className={styles.text}>
                        <H3 color='black' weight='600'>Моментально</H3>
                        <Paragraph color='black'>Никаких задержек.
                        1 секунда на подписание</Paragraph>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src="/vote.png" alt="" />
                    <div className={styles.text}>
                        <H3 color='black' weight='600'>Глобально</H3>
                        <Paragraph color='black'>Сервис доступен 24\7 со всех устройств</Paragraph>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src="/bank.png" alt="" />
                    <div className={styles.text}>
                        <H3 color='black' weight='600'>Экономно</H3>
                        <Paragraph color='black'>В 30 раз дешевле чем почта и курьеры</Paragraph>
                    </div>
                </div>
            </div>
        </section>
    )
}