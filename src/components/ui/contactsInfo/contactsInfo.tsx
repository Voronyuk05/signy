import { Wrapper } from '@googlemaps/react-wrapper';
import { H2 } from '../Headings/H2';
import styles from './contactsInfo.module.scss'
import { Paragraph } from '../Paragraph/Paragraph';
import { MapComponent } from '../mapComponent/mapComponent';

export const ContactsInfo = () => {
    const center = { lat: 49, lng: 20.644 };
    const zoom = 4;

    return (
        <section className={styles.contacts_info}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <H2 color='black' weight='700'>Наши контакты</H2>
                </div>
                <div className={styles.content}>
                    <div className={styles.info}>
                        <Paragraph color='black'>Мы всегда рады ответить на ваши вопросы и развивать эффективное сотрудничество по всем вопросам, связанным с электронным документооборотом.</Paragraph>
                        <div className={styles.info_item}>
                            <img src="telephone.png" alt="" />
                            <div className={styles.row}>
                            <Paragraph color='black'>0 800 750 643</Paragraph>
                            <Paragraph color='black'>+3 044 334 56 43</Paragraph>
                            <Paragraph color='black'>+3 044 338 86 43</Paragraph>
                            </div>
                        </div>
                        <div className={styles.info_item}>
                            <img src="mail.png" alt="" />
                            <Paragraph color='black'>infosmartsign@smarttender.biz</Paragraph>
                        </div>
                        <div className={styles.info_item}>
                            <img src="map_point.png" alt="" />
                            <Paragraph color='black'>пр-т Бажана, 14 А Киев, 02072</Paragraph>
                        </div>
                    </div>
                    <div>
                    <Wrapper  apiKey="" >
                        <MapComponent center={center} zoom={zoom} />
                    </Wrapper>
                    </div>
                </div>
            </div>
        </section>
    )
}