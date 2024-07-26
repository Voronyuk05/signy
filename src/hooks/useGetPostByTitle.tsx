import { useQuery } from "@tanstack/react-query"
import postsService from "@/services/posts.service"

export const useGetPostByTitle = (title: string) => {
    const {data} = useQuery({
        queryKey: ['posts', title], 
        queryFn: () => postsService.getPostByTitle(title),
        select: data => data
    })

    return {data}
}