'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { heroSlidesData } from './heroSlidesData';
import styles from './hero.module.scss'
import { HeroSlide } from './heroSlide/heroSlide';



export const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <Swiper       
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={1000}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    {heroSlidesData.map(({id, title, subTitle, paragraph}) => (
                        <SwiperSlide key={id}>
                            <HeroSlide 
                            id={id}
                            title={title}
                            subTitle={subTitle}
                            paragraph={paragraph}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}