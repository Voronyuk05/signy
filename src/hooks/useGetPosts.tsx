import { useQuery } from "@tanstack/react-query"
import postsService from "@/services/posts.service"

export const useGetPosts = () => {
    const {data, isPending} = useQuery({
        queryKey: ['posts'], 
        queryFn: () => postsService.getPosts(),
        select: data => data
    })

    return {data, isPending}
}