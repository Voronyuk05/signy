import styles from './products.module.scss'
import { H2 } from '../Headings/H2';
import { SecondaryButton } from '../Buttons/SecondaryButton';
import { PrimaryButton } from '../Buttons/PrimaryButton';

export const Products = () => {
    return (
        <section className={styles.products}>
            <div className={styles.container}>
                <div className={styles.cards}>
                    <div className={styles.content}>
                        <H2 color='black' weight='600'>Комфорт в работе</H2>
                        <ul className={styles.list}>
                            <li className={styles.item}>
                                Создавай документы по твоим личным привычным шаблонам. Это индивидуально!
                            </li>
                            <li className={styles.item}>
                                Настраивай порядок подписание документа, если вас несколько человек. Это ответственно!
                            </li>
                            <li className={styles.item}>
                                Загружай XML файл с собственным шаблоном готового документа. Это удобно!
                            </li>
                            <li className={styles.item}>
                                Работай в супер простом и понятном интерфейсе без сложностей. Это приятно!
                            </li>
                        </ul>
                        <SecondaryButton >
                            Узнать больше
                        </SecondaryButton>
                    </div>
                    <img src="/signy_work.png" alt="" />
                </div>
                <div className={`${styles.cards} ${styles.reversed}`}>
                    <div className={styles.content}>
                        <H2 color='black' weight='600'>Наш продукт это:</H2>
                        <ul className={styles.list}>
                            <li className={styles.item}>
                                Web версия без установки программного обеспечения
                            </li>
                            <li className={styles.item}>
                                Возможность бесплатно и безлимитно обрабатывать входящие документы
                            </li>
                            <li className={styles.item}>
                                Простота интеграции с 1С и другими сервисами
                            </li>
                            <li className={styles.item}>
                                Поддержка входа через Mobile ID
                            </li>
                        </ul>
                        <PrimaryButton>
                            Зарегистрироваться
                        </PrimaryButton>
                    </div>
                    <img src="/signy_work.png" alt="" />
                </div>
            </div>
        </section>
    )
}