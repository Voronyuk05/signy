import { useGetPosts } from "@/hooks/useGetPosts"

export const useGetRandomPost = () => {
    const {data} = useGetPosts()
    const randomNumber = data ? Math.floor(Math.random() * data.length) + 1 : 1
    return {randomNumber}
}