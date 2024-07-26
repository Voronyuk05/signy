
import { Post } from "../post/post"
import { IPost } from "@/types/posts.types"
import styles from './postsList.module.scss'

export const PostsList = ({currentItems}: {currentItems: IPost[]}) => {
    
    return (
        <div className={styles.cards} >
        {currentItems?.map(({id, img, title, time, tags, paragraph}) => (
            <Post
            key={title}
            id={id}
            img={img}
            title={title}
            time={time}
            tags={tags}
            paragraph={paragraph}/>
        ))}
    </div>
    )
}