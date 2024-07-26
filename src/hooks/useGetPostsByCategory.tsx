import { useQuery } from "@tanstack/react-query"
import postsService from "@/services/posts.service"

export const useGetPostsByCategory = (chosenCategory: string) => {
    const {data, isPending} = useQuery({
        queryKey: ['posts by category', chosenCategory], 
        queryFn: () => postsService.getPostsByCategory(chosenCategory),
        select: data => data
    })

    return {data, isPending}
}