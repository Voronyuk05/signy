import { useGetPosts } from "@/hooks/useGetPosts"

export const useGetNearTitle = (postId: number) => {
    const {data} = useGetPosts()
    const prevPost: string = data && postId > 1 ?   data[postId - 2].title : ''
    const nextPost: string = data && postId < data.length ? data[postId].title : ''
    const prevTitle =  prevPost.replace(/ /g, '-');
    const nextTitle = nextPost.replace(/ /g, '-');
    
    return {prevPost, nextPost, prevTitle, nextTitle}
}