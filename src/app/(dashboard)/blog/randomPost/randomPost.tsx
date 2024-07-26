import { useRouter } from "next/navigation";
import { useGetPostById } from "@/hooks/useGetPostById";
import { useGetRandomPost } from "./useGetRandomPost";
import styles from './randomPost.module.scss'
import { Paragraph } from '../../../../components/ui/Paragraph/Paragraph';
import { H2 } from '../../../../components/ui/Headings/H2';
import { H4 } from "@/components/ui/Headings/H4";
import { H3 } from '../../../../components/ui/Headings/H3';
import { Pill } from '@/components/ui/Pill/Pill';
import { LoadingCircle } from '@/components/ui/loadingCircle/loadingCircle';
import Image from "next/image";

export const RandomPost = () => {
    const {push} = useRouter()
    const {randomNumber} = useGetRandomPost()
    const {data, isPending} = useGetPostById(randomNumber)
    
    if (isPending) {
        return <LoadingCircle/>
    } else if (data) 
    return (
        <section className={styles.randomPost}>
            <div className={styles.container}>
                <H2 weight="700" color="black">Интересно пишем про</H2>
                {data?.map(({id, img, title, time, tags, paragraph}) => {
                    const blogTitle =  title.replace(/ /g, '-');
                    const timeAt = time.split('T')[0];
                    return (
                        <div key={id} onClick={() => push(`/blog/${blogTitle}`)} className={styles.post}>
                            <Image className={styles.img} loader={() => img} src={img} width='500' height='500' alt=""  />
                            <div className={styles.post_body}>
                                <H4 weight="600" color="black">{timeAt}</H4>
                                <H2 weight="700" color="black">{title}</H2>
                                <div className={styles.tags}>
                                    <Pill >Все теги</Pill>
                                    {tags.map((tag) => (
                                        <Pill key={tag}>{tag}</Pill>
                                    ))}
                                </div>
                                <Paragraph color='black'>
                                    {paragraph}
                                </Paragraph>
                                <H3 color="black" weight="700">Читать</H3>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}