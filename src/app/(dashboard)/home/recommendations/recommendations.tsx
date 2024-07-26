'use client'

import { Post } from "@/components/ui/post/post"
import { useGetPosts } from "@/hooks/useGetPosts"
import styles from './recommendations.module.scss'
import { H2 } from '../../../../components/ui/Headings/H2';
import { LoadingCircle } from '@/components/ui/loadingCircle/loadingCircle';

export const Recommendations = () => {
    const {data, isPending} = useGetPosts()
    const trendingPosts = data?.slice(0,3)
    
    if (isPending) {
        return <LoadingCircle/>
    } else if (data) 
    return (
        <section className={styles.recommendations}>
            <div className={styles.container}>
                <H2 weight="700" color="black">Интересно пишем про </H2>
                <div className={styles.content}>
                    {trendingPosts && trendingPosts.map(({id, img, title, time,tags, paragraph}) => (
                        <Post 
                        key={id}
                        id={id}
                        img={img}
                        title={title}
                        time={time}
                        tags={tags}
                        paragraph={paragraph}/>
                    ))}
                </div>
            </div>
        </section>
    )
}