import { useRouter } from "next/navigation";
import { useGetPostByTitle } from "@/hooks/useGetPostByTitle"
import { useGetNearTitle } from "./useGetNearTitle"
import styles from './postsNavigation.module.scss'
import { H4 } from '../../../../../components/ui/Headings/H4';
import { H3 } from '../../../../../components/ui/Headings/H3';

export const PostsNavigation = ({slug}: {slug: string}) => {
    const {push} = useRouter()
    const {data} = useGetPostByTitle(slug)
    const postId = data ? Number(data[0].id) : 1
    const {prevPost, nextPost, prevTitle, nextTitle} = useGetNearTitle(postId)

    return (
        <section className={styles.posts_navigation}>
            <div className={styles.container}>
                {prevTitle ? (
                    <div className={styles.prev} onClick={() => push(`/blog/${prevTitle}`)}>
                        <H3 weight="700" color="black">{prevPost}</H3>
                        <H4 color="black" weight="700">Предыдущая статья</H4>
                    </div>
                ) : (<div></div>)}
                {nextTitle ? (
                    <div className={styles.next} onClick={() => push(`/blog/${nextTitle}`)}>
                        <H3 weight="700" color="black">{nextPost}</H3>
                        <H4 color="black" weight="700">Следующая статья</H4>
                    </div>
                ) : (<div></div>) }
            </div>
        </section>
    )
}