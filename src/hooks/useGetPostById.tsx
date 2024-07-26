import { useQuery } from "@tanstack/react-query"
import postsService from "@/services/posts.service"

export const useGetPostById = (id: number) => {
    const {data, isPending} = useQuery({
        queryKey: ['posts', id], 
        queryFn: () => postsService.getPostById(id),
        select: data => data
    })

    return {data, isPending}
}