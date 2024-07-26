import { IHeroSlide } from '@/types/slidesData'
import styles from './heroSlide.module.scss'
import { H2 } from '../../../../../components/ui/Headings/H2';
import { H3 } from '../../../../../components/ui/Headings/H3';
import { Paragraph } from '../../../../../components/ui/Paragraph/Paragraph';
import { PrimaryButton } from '../../../../../components/ui/Buttons/PrimaryButton';
import { H4 } from '@/components/ui/Headings/H4';

export const HeroSlide = ({id, title, subTitle, paragraph}: IHeroSlide) => {
    const bgStyle = `bg_${id}`

    return (
        <div className={`${styles.hero_slide} ${bgStyle}`}>
            <div className={styles.slide_container}>
                <div className={styles.text}>
                    <H2 color='black'>{title}</H2>
                    <div>
                        {[1, '-', 2, '-',3].map((number, index) => {
                            if (number === Number(id)) {
                                return <H3 color='black' key={index} >{number}</H3>
                            } else if (number != '-') {
                                return <H4 color='black' key={index}>{number}</H4>
                            }
                            return <span key={index}>{number}</span>

                        })}
                    </div>
                    <H3 weight='700'  color='black'>{subTitle}</H3>
                    <Paragraph color='black'>{paragraph}</Paragraph>
                    <PrimaryButton>
                        Попробовать бесплатно
                    </PrimaryButton>
                </div>
            </div>
        </div>
    )
}