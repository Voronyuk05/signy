'use client'

import { PostPage } from "@/components/ui/postPage/postPage";
import { useGetPostByTitle } from "@/hooks/useGetPostByTitle";
import { useParams } from "next/navigation"
import { PostsNavigation } from './postsNavigation/postsNavigation';


export default function Layout({children}: {children: React.ReactNode}) {
    const {slug} = useParams<{slug: string}>()
    const blogTitle =  slug.replace(/-/g, ' ');
    const {data} = useGetPostByTitle(blogTitle)
    
    return (
        <>
            {data?.map(({id, img, title, time, tags, paragraph}) => (
                <PostPage
                key={id}
                id={id}
                img={img}
                title={title}
                time={time}
                tags={tags}
                paragraph={paragraph}/>
            ))}
            <PostsNavigation slug={blogTitle}/>
            {children}
        </>
    )
}